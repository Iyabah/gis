// src/app/api/generate-map/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Placeholder: simulate processing
  console.log('Received model config:', body);

  return NextResponse.json({
    status: 'success',
    message: 'Suitability map generated (simulated)',
    mapUrl: '/placeholder-map.svg' // You can serve a fake map for now
  });
}
