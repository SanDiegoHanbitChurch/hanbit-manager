import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({ title, name, latitude = 41.3851, longitude = 2.1734 }) => {

    const mapStyles = {
        height: "35vh",
        width: "50%"
    };

    const defaultCenter = {
        lat: latitude, lng: longitude
    }

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_FIREBASE_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            >
                <Marker
                    title={title}
                    name={name}
                    position={{lat: latitude, lng: longitude}}
                />
            </GoogleMap>

     </LoadScript>
  )
};

export default MapContainer;
