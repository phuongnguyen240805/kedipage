import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
  const token =
    req.headers.get('x-revalidate-token') ||
    req.nextUrl.searchParams.get('token');
  if (!token || token !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  let path = req.nextUrl.searchParams.get('path') || '/';
  if (!path) path = '/';

  try {
    const body = await req.json().catch(() => null);
    if (body?.path && typeof body.path === 'string') {
      path = body.path;
    }
  } catch {
    // ignore body parse errors
  }

  try {
    revalidatePath(path);
    return NextResponse.json({ ok: true, revalidated: path });
  } catch (error) {
    console.error('revalidate error', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to revalidate' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: 'Method not allowed' },
    { status: 405 }
  );
}
