"use client";

export default function ControlPanel() {
  return (
    <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg space-y-6 overflow-y-auto h-[600px]">
      <section>
        <h3 className="text-indigo-600 font-semibold mb-2">📁 Data Upload</h3>
        <input type="file" accept=".pkl,.joblib,.h5,.model" className="mb-3 w-full border p-2" />
        <input type="file" accept=".tif,.tiff,.geotiff" multiple className="mb-3 w-full border p-2" />
        <input type="file" accept=".shp,.zip,.geojson" className="w-full border p-2" />
      </section>

      <section>
        <h3 className="text-indigo-600 font-semibold mb-2">⚙️ Model Configuration</h3>
        <select className="w-full mb-2 border p-2">
          <option value="rf">Random Forest</option>
          <option value="xgb">XGBoost</option>
          <option value="lgb">LightGBM</option>
          <option value="nn">Neural Network</option>
        </select>
        <input type="number" min="10" max="1000" placeholder="Resolution (m)" defaultValue={30} className="w-full mb-2 border p-2" />
        <select className="w-full mb-2 border p-2">
          <option value="wheat">Wheat</option>
          <option value="corn">Corn</option>
          <option value="barley">Barley</option>
          <option value="sunflower">Sunflower</option>
          <option value="cotton">Cotton</option>
        </select>
        <input type="range" min="0.5" max="0.95" step="0.05" defaultValue="0.8" className="w-full" />
      </section>

      <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold">
        🚀 Generate Suitability Map
      </button>
    </div>
  );
}
