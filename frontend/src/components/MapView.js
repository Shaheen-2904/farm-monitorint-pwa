import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// note: leaflet's default icon images require extra config in CRA build; this is a minimal demo.

export default function MapView({ farms }) {
  const center = farms.length ? [farms[0].lat, farms[0].lng] : [20.5937,78.9629];
  return (
    <div style={{height:'100%'}}>
      <MapContainer center={center} zoom={6} style={{height:'100%'}}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {farms.map(f => (
          <Marker key={f.id} position={[f.lat,f.lng]}>
            <Popup>{f.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
