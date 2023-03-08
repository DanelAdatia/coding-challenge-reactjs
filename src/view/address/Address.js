import React, { useCallback, useRef, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { Autocomplete, Marker } from "@react-google-maps/api";
import "./map.css";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const libraries = ["places"];
const mapContainerStyle = {
  height: "60vh",
  width: "100vw",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 35.64860429083234,
  lng: 138.57693376912908,
};

const Address = () => {
  const navigate = useNavigate();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = useRef();
  const autocompleteRef = useRef(null);
  const [marker, setMarker] = useState(null);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onPlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (!place.geometry) return;

    setMarker({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      address: place.formatted_address,
    });

    if (mapRef.current) {
      mapRef.current.panTo({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      mapRef.current.setZoom(14);
    }
  };

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          style={{ marginTop: 10 }}
          variant="contained"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </Button>
        <Button
          style={{ marginTop: 10 }}
          variant="contained"
          onClick={() => navigate("/third-page")}
        >
          Go to the Third Page
        </Button>
      </Box>
      <Autocomplete
        onLoad={(autocomplete) => {
          autocompleteRef.current = autocomplete;
        }}
        onPlaceChanged={onPlaceChanged}
      >
        <div className="container">
          <input
            type="text"
            placeholder="Enter address"
            className="input-field"
          />
        </div>
      </Autocomplete>
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
          onLoad={onMapLoad}
        >
          {marker && <Marker position={marker} />}
        </GoogleMap>
      </div>
    </div>
  );
};

export default Address;
