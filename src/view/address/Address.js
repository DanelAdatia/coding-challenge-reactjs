import React from "react";
// import GoogleMapReact from "google-map-react";
import "./map.css";
// https://www.npmjs.com/package/country-state-city
import { Country, State, City } from "country-state-city";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Address = () => {
  // https://blog.logrocket.com/integrating-google-maps-react/
  // https://github.com/ovieokeh/contact-page-with-google-maps/blob/add-map/src/components/map/map.css

  const navigate = useNavigate();
  const Countries = Country.getAllCountries();
  console.log(Countries, "Countries");

  console.log(State.getAllStates(), "State");
  console.log(City.getAllCities(), "City");

  return (
    <div>
      {/* https://mui.com/material-ui/react-autocomplete/ */}

      <Autocomplete
        disablePortal
        id="Countries"
        options={Countries}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Countries" />}
      />
      <Button
        style={{ marginTop: 10 }}
        variant="contained"
        onClick={() => navigate("/third-page")}
      >
        Go to the Third Page
      </Button>
    </div>
  );
};

export default Address;
