import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import InfoContainer from "../ContactUs/Map/InfoContainer/InfoContainer";

const MapLeaflet = (data) => {
  return (
    <MapContainer
      center={[35.689198, 51.388973]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}'
        ext='png'
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[35.689198, 51.388973]} draggable={true} animate={true}>
        <Popup>
          <InfoContainer address={data.data.location} telephone={data.data.phone}
            emailAddress={data.data.email}
          />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapLeaflet;
