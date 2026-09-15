import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  const ADMIN_USER = "admin_kedi";
  const ADMIN_PASS = "kedimedia@2026"; 

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    // Thiết lập Cookie bảo mật tồn tại trong 24h
    cookies().set('admin_token', 'kedi_secret_token_2026', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 ngày
      path: '/',
    });

    return NextResponse.json({ message: "Login Success" }, { status: 200 });
  }

  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}