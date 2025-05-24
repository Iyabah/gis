
import { create } from 'zustand';
import { UploadedFiles, ModelConfig, MapDrawnArea, GenerationStatus } from './types';

type AppState = {
  files: UploadedFiles;
  config: ModelConfig;
  drawnArea: MapDrawnArea;
  status: GenerationStatus;
  setFiles: (files: UploadedFiles) => void;
  setConfig: (config: ModelConfig) => void;
  setDrawnArea: (area: MapDrawnArea) => void;
  setStatus: (status: GenerationStatus) => void;
};

export const useAppStore = create<AppState>((set) => ({
  files: {
    modelFile: null,
    rasterFiles: [],
    areaOfInterest: null,
  },
  config: {
    modelType: 'rf',
    cropType: 'wheat',
    resolution: 30,
    confidence: 0.8,
  },
  drawnArea: null,
  status: 'idle',
  setFiles: (files) => set({ files }),
  setConfig: (config) => set({ config }),
  setDrawnArea: (area) => set({ drawnArea: area }),
  setStatus: (status) => set({ status }),
}));
