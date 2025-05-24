"use client";

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

const LeafletMap = dynamic(() => import('../components/LeafletMapWrapper'), { ssr: false });

export default function MapComponent() {
  return <div className="rounded-xl overflow-hidden shadow-lg h-[600px]"><LeafletMap /></div>;
}
// import { useEffect, useRef } from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet'; 