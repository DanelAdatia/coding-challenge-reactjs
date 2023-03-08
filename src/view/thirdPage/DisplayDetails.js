import React, { useEffect } from "react";
import { SendData } from "../../api/ThirdPage";
import { Box, Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DisplayDetails = ({ allData }) => {
  console.log(allData, "allData");
  const navigate = useNavigate();

  const postData = async () => {
    try {
      await SendData(allData);
      alert("All Data is sent");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (allData !== undefined && allData !== "") postData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Card
        style={{
          height: "auto",
          width: "auto",
          border: "2px solid black",
          borderRadius: 5,
          padding: 10,
        }}
      >
        {allData !== "" && (
          <>
            <Box>{allData.name}</Box>
            <Box>{allData.phone}</Box>
            <Box>{allData.email}</Box>
          </>
        )}
        Please Enter the details in the dashboard
      </Card>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </Button>
    </div>
  );
};

export default DisplayDetails;
