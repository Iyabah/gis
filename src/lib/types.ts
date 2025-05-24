// src/lib/types.ts

export type UploadedFiles = {
  modelFile: File | null;
  rasterFiles: File[];
  areaOfInterest: File | null;
};

export type ModelConfig = {
  modelType: 'rf' | 'xgb' | 'lgb' | 'nn';
  cropType: 'wheat' | 'corn' | 'barley' | 'sunflower' | 'cotton';
  resolution: number;
  confidence: number;
};

export type MapDrawnArea = GeoJSON.FeatureCollection | null;

export type GenerationStatus = 'idle' | 'processing' | 'success' | 'error';

