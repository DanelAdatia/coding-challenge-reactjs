import React, { useCallback, useEffect } from "react";
import { SendData } from "../../api/ThirdPage";
import { Box, Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DisplayDetails = ({ allData }) => {
  const navigate = useNavigate();

  const postData = useCallback(async () => {
    try {
      await SendData(allData);
      alert("All Data has been successfully sent!");
    } catch (err) {
      console.log(err);
      alert("There was an error sending the data. Please try again.");
    }
  }, [allData]);

  useEffect(() => {
    if (allData) {
      postData();
    }
  }, [allData, postData]);

  const renderUserData = () => {
    const { name, phone, email } = allData;
    return (
      <>
        <Box
          sx={{
            mb: 1,
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          {name}
        </Box>
        <Box
          sx={{
            mb: 1,
            fontSize: "1rem",
          }}
        >
          Phone: {phone}
        </Box>
        <Box
          sx={{
            fontSize: "1rem",
            mb: 2,
          }}
        >
          Email: {email}
        </Box>
      </>
    );
  };

  const renderNoUserData = () => {
    return (
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        Please enter your details in the dashboard
      </Typography>
    );
  };

  return (
    <Card
      sx={{
        border: "2px solid black",
        borderRadius: 5,
        p: 2,
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      {allData ? renderUserData() : renderNoUserData()}
      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        sx={{
          display: "block",
          m: "0 auto",
        }}
      >
        Go Back
      </Button>
    </Card>
  );
};

export default DisplayDetails;
