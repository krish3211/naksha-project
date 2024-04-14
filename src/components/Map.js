import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import pin from "./placeholder.png";

const Mapmarker = (props) => {
  const customIcon = new L.Icon({
    iconUrl: pin,
    iconSize: [38, 40], // size of the icon
    iconAnchor: [19, 40], // middle bottom point of the icon
    popupAnchor: [0, -40], // point from which the popup should open relative to the iconAnchor
  });
  return (
    <Marker position={props.point} icon={customIcon}>
      <Popup>school</Popup>
    </Marker>
  );
};

function Map() {
  const position = [17.4084, 78.4825]; // Example position: latitude and longitude

  const mappoint = [
    [17.445377, 78.346491],
    [17.418365, 78.463243],
    [17.542645, 78.502334],
    [17.456937, 78.550963],
    [17.236798, 78.446033],
  ]; // static data points

  return (
    <div>
      <MapContainer
        center={position}
        zoom={11}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {mappoint.map((item, index) => (
          <Mapmarker key={index} point={item} />
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
