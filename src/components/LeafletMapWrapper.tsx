"use client";

import { MapContainer, TileLayer, FeatureGroup, useMapEvents } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

export default function LeafletMapWrapper() {
  const drawnItems = useRef(null);

  return (
    <MapContainer center={[39, 35]} zoom={6} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <FeatureGroup ref={drawnItems}>
        <EditControl
          position="topright"
          draw={{
            polygon: true,
            rectangle: true,
            polyline: false,
            circle: false,
            marker: false,
            circlemarker: false,
          }}
        />
      </FeatureGroup>
    </MapContainer>
  );
}
