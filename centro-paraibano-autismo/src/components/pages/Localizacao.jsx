import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Corrige ícones do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapView = React.memo(() => {
  // Coordenadas extraídas do Google Maps
  const position = [-7.165438451978068, -34.87193593788312];

  return (
    <MapContainer
      center={position}
      zoom={17}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <strong>Localização:</strong> <br />
          Clique para ver mais no Google Maps:{" "}
          <a
            href="https://maps.app.goo.gl/Puwdi1iN3Jwmqn957"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rua Pedro Ivo Paiva, 102 - João Pessoa, PB
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
});

function Localizacao() {
  return (
    <div className="map-container">
      <h1>Mapa: Localização Exata</h1>
      <MapView />
    </div>
  );
}

export default Localizacao;
