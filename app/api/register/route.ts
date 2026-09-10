import { NextRequest, NextResponse } from 'next/server';

type RegisterPayload = {
  fullName: string;
  companyName?: string;
  phone: string;
  email: string;
  domain?: string;
  pageUrl?: string;
};

function splitName(fullName: string) {
  const normalized = fullName.trim().replace(/\s+/g, ' ');
  if (!normalized) {
    return { firstName: '', lastName: '' };
  }

  const parts = normalized.split(' ');
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: '' };
  }

  const lastName = parts.pop() || '';
  return { firstName: parts.join(' '), lastName };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const token = body?.token as string | undefined;
    const data = body?.data as RegisterPayload | undefined;

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Missing reCAPTCHA token' },
        { status: 400 }
      );
    }

    if (!data?.fullName || !data?.phone || !data?.email) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { success: false, message: 'Server misconfiguration' },
        { status: 500 }
      );
    }

    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    });

    const verifyData = await verifyRes.json();

    if (!verifyData?.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Xac minh bao mat khong thanh cong. Vui long thu lai.',
          details: verifyData,
        },
        { status: 400 }
      );
    }

    // Mautic form id=2 expects urlencoded payload with `mauticform[...]` keys.
    const { firstName, lastName } = splitName(data.fullName);
    const formId = process.env.MAUTIC_FORM_ID || '2';
    const formName =
      process.env.MAUTIC_FORM_NAME ||
      'landingpagelevelupcungmona';
    const websiteValue = data.domain?.trim() || data.pageUrl?.trim() || '';

    const mauticData = new URLSearchParams();
    mauticData.append('mauticform[firstname]', firstName || data.fullName);
    mauticData.append('mauticform[last_name]', lastName);
    mauticData.append('mauticform[company]', data.companyName || '');
    mauticData.append('mauticform[phone]', data.phone);
    mauticData.append('mauticform[email]', data.email);
    mauticData.append('mauticform[website]', websiteValue);
    mauticData.append('mauticform[formId]', formId);
    mauticData.append('mauticform[formName]', formName);

    const mauticRes = await fetch(`https://mautic.ryon.website/form/submit?formId=${formId}`, {
      method: 'POST',
      body: mauticData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'manual',
    });

    const isAcceptedMauticStatus =
      mauticRes.ok || [301, 302, 303, 307, 308].includes(mauticRes.status);

    if (!isAcceptedMauticStatus) {
      return NextResponse.json(
        { success: false, message: 'Mautic request failed' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Dang ky thanh cong!',
    });
  } catch (error) {
    console.error('Register API error:', error);
    return NextResponse.json(
      { success: false, message: 'Loi may chu. Vui long thu lai sau.' },
      { status: 500 }
    );
  }
}
