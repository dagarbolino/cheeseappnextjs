import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://cheeseapi.alex-webdev.fr/api/v2/pages/20/');
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch cheese data' }, { status: 500 });
  }
} 