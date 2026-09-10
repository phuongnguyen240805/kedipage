// app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token, type, data } = body;

    // Kiểm tra dữ liệu đầu vào
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Missing reCAPTCHA token' },
        { status: 400 }
      );
    }
    if (!['customer', 'partner', 'candidate'].includes(type)) {
      return NextResponse.json(
        { success: false, message: 'Invalid registration type' },
        { status: 400 }
      );
    }

    // Lấy secret key từ environment
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error('RECAPTCHA_SECRET_KEY is not set in environment variables');
      return NextResponse.json(
        { success: false, message: 'Server misconfiguration' },
        { status: 500 }
      );
    }

    // Gọi Google reCAPTCHA v2 API để xác minh
    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
      }
    );

    const verifyData = await verifyRes.json();

    // Kiểm tra kết quả
    if (verifyData.success) {
      // ✅ reCAPTCHA hợp lệ — xử lý đăng ký
      console.log(`✅ Valid ${type} registration:`, data);

      // TODO: Lưu vào database (Prisma, MongoDB, v.v.)

      return NextResponse.json({
        success: true,
        message: `Đăng ký ${type} thành công!`,
      });
    } else {
      // ❌ reCAPTCHA không hợp lệ
      console.warn('reCAPTCHA verification failed:', verifyData);
      return NextResponse.json(
        {
          success: false,
          message: 'Xác minh bảo mật không thành công. Vui lòng thử lại.',
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Registration API error:', error);
    return NextResponse.json(
      { success: false, message: 'Lỗi máy chủ. Vui lòng thử lại sau.' },
      { status: 500 }
    );
  }
}
