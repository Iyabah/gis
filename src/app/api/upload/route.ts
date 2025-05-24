// src/app/api/upload/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const modelFile = formData.get('modelFile') as File | null;
  const rasterFiles = formData.getAll('rasterData[]') as File[];
  const areaOfInterest = formData.get('areaOfInterest') as File | null;

  if (!modelFile || rasterFiles.length === 0) {
    return NextResponse.json({ error: 'Missing required files.' }, { status: 400 });
  }

  // TEMP placeholder – store file metadata only
  return NextResponse.json({
    message: 'Files received',
    modelFile: modelFile.name,
    rasterCount: rasterFiles.length,
    aoiFile: areaOfInterest?.name || null,
  });
}
