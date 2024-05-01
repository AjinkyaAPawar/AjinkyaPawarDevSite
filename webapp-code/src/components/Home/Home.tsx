import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./Home.css";

interface SlideProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

const Slide: React.FC<SlideProps> = ({
  title,
  description,
  backgroundImage,
}) => {
  return (
    <Card className="carousel-card">
      <Box
        className="carousel-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                component="div"
                className="carousel-title"
              >
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                component="div"
                className="carousel-description"
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Card>
  );
};

export default function Home() {
  const slides = [
    {
      title: "Full Stack Developer",
      description: "Knowledge in Java, React, Angular",
      backgroundImage: "",
    },
    {
      title: "Data Science and Machine Learning",
      description:
        "Including operating system, computer networks, and cryptography",
      backgroundImage: "",
    },
    {
      title: "Cryptography and Network Security",
      description:
        "In-depth understanding of encryption, decryption, and secure communication protocols",
      backgroundImage: "",
    },
  ];

  return (
    <>
      <Box>
        <div className="carousel-container">
          <Carousel animation="fade">
            {slides.map((slide, index) => (
              <Slide
                key={index}
                title={slide.title}
                description={slide.description}
                backgroundImage={slide.backgroundImage}
              />
            ))}
          </Carousel>
        </div>
      </Box>
    </>
  );
}
