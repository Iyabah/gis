import MapComponent from '@/components/MapComponent';
import FileUpload from '@/components/FileUpload';
import ControlPanel from '@/components/ControlPanel';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="text-center text-white mb-8">
        <h1 className="text-4xl font-bold drop-shadow">🌾 Advanced Crop Suitability System</h1>
        <p className="text-lg opacity-90">AI-Powered Agricultural Decision Support for Turkey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <ControlPanel />
        </div>
        <div className="col-span-2">
          <MapComponent />
        </div>
      </div>
    </main>
  );
}
