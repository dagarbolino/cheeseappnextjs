import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = await Promise.resolve(params.id);
  
  try {
    const response = await fetch(`https://cheeseapi.alex-webdev.fr/api/v2/images/${id}/`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch image data' }, { status: 500 });
  }
} 