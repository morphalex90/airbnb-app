import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import marker from '@/img/marker.svg';

function Map({ lat, long }: { lat: any, long: any }) {
    const customIcon = new Icon({
        iconUrl: marker.src,
        iconSize: [25, 35],
        iconAnchor: [5, 30]
    });

    return (
        <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false} style={{ height: 300, width: '100%' }}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker icon={customIcon} position={[lat, long]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
