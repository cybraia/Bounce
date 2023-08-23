import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './maps.css';

function Maps() {
  return (
    <div>
      <MapContainer center={[51.507351, -0.127758]} zoom={5.5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.507351, -0.127758]}>
          <Popup>
            London
          </Popup>
        </Marker>
        <Marker position={[53.480759,-2.242631]}>
          <Popup>
          Manchester
          </Popup>
        </Marker>
        <Marker position={[56.490669, -4.202646]}>
          <Popup>
          Scotland
          </Popup>
        </Marker>
        <Marker position={[53.801023029773106, -1.548104478327947]}>
          <Popup>
          Leeds
          </Popup>
        </Marker>
        <Marker position={[52.04594645608184, -4.393217141373189]}>
          <Popup>
          Wales
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Maps;
