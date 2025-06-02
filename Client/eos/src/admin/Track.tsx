import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import Pin from '../assets/logo/pin.png'; // Your custom icon

const Track = () => {
  const markerRefs = useRef([]);

  // 🧪 Dummy marker data (within Daet)
  const addressList = [
    { latitude: 14.1184, longitude: 122.9483, name: 'Public Market' },
    { latitude: 14.1135, longitude: 122.9510, name: 'Fish Market' },
    { latitude: 14.1108, longitude: 122.9455, name: 'Fruit Market' },
  ];

  const customIcon = new L.Icon({
    iconUrl: Pin,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
  });

  // Optional: Restrict map to Daet area
  const daetBounds = [
    [14.1000, 122.9400], // Southwest
    [14.1300, 122.9600], // Northeast
  ];

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <MapContainer
        center={[14.115, 122.949]}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        maxBounds={daetBounds}
        maxZoom={17}
        minZoom={13}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {addressList.map((address, index) => (
          <Marker
            key={index}
            position={[address.latitude, address.longitude]}
            icon={customIcon}
            ref={(ref) => (markerRefs.current[index] = ref)}
          >
            <Popup>{address.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Track;
