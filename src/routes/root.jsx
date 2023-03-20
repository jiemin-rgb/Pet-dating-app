import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

export default function Root() {
  // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
  // We're setting the default value of dogImage to null, so that while we wait for the
  // fetch to complete, we dont attempt to render the image
  const [dogImage, setDogImage] = useState(null);

  const fetchDogImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        setDogImage(data.message);
        console.log(data);
      });
  };

  // 3. Create out useEffect function
  useEffect(() => {
    fetchDogImage();
  }, []);

  const onButtonClick = () => {
    fetchDogImage();
  };

  return (
    <div className="App">
      {/* 5. Using *dogImage as* the *src* for our image*/}
      <div style={{ display: "flex", gap: "10px" }}>
        <img
          src={
            dogImage
              ? dogImage
              : "https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg"
          }
          style={{ width: "300px", height: "200px" }}></img>

        <Card sx={{ minWidth: 275, height: "200px" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Your Dog Name
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              describe your pet 5 words
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "50px",
        }}>
        <Button variant="contained" onClick={onButtonClick}>
          Love it!
        </Button>
        <Button variant="contained" color="error" onClick={onButtonClick}>
          Nah
        </Button>
      </div>
    </div>
  );
}
