"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet এর CSS অবশ্যই ইম্পোর্ট করতে হবে

// Fix leaflet icon issues
delete (L.Icon.Default as any).prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const position: L.LatLngExpression = [23.808372, 90.364905]; // Mirpur 2, Dhaka
const zoom = 15;

function Map() {
  return (
    <section className="w-full flex justify-center items-center bg-gray-100 p-4 md:p-8 lg:p-16">
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-2xl border">
        <MapContainer
          center={position}
          zoom={zoom}
          scrollWheelZoom={false}
          className="w-full h-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <div className="text-sm font-medium">
                <div>এনলাইটেন একাডেমি</div>
                <div>কচুক্ষেত, মিরপুর ১৪, ঢাকা</div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}

export default Map;
