import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./Home.css";
import fullStackImage from "../../assets/fullStackImage.png";
import AI_ML_Image from "../../assets/AI_ML.png";
import CNS_Image from "../../assets/cns.png";
import softwareDevelopmentImage from "../../assets/software-development.jpg";

interface SlideProps {
  title: string;
  description: string;
  backgroundImage?: string;
  alt: string;
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
        <Box className="overlay"></Box> {/* Adding overlay */}
        <CardContent className="carousel-content">
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
  // Carousel
  const slides = [
    {
      title: "Full Stack Development and Software Designing",
      description:
        "Proficient in crafting comprehensive software solutions as a Full Stack Developer, adept in Java, React, and Angular. Skilled in designing seamless user experiences and robust systems from front-end to back-end.",
      backgroundImage: fullStackImage,
    },
    {
      title: "Data Science and Machine Learning",
      description:
        "Experienced in leveraging data science and machine learning techniques, with a strong foundation in operating systems, computer networks, and cryptography. Capable of extracting insights and building predictive models to drive informed decision-making.",
      backgroundImage: AI_ML_Image,
    },
    {
      title: "Cryptography and Network Security",
      description:
        "Expertise in ensuring digital security through mastery of cryptography and network security principles. Proficient in encryption, decryption, and implementing secure communication protocols to safeguard digital assets and maintain confidentiality, integrity, and authenticity.",
      backgroundImage: CNS_Image,
    },
  ];

  // Introduction

  return (
    <>
      <Box>
        {/* Carousels */}
        <Box className="carousel-container">
          <Carousel animation="fade">
            {slides.map((slide, index) => (
              <Slide
                key={index}
                title={slide.title}
                description={slide.description}
                backgroundImage={slide.backgroundImage}
                alt={`Carousel ${index + 1}`}
              />
            ))}
          </Carousel>
        </Box>
        {/* Introduction */}
        <Grid className="introduction-container">
          {/* Intro Section */}
          <Grid className="intro-section" item>
            <Typography variant="h1" className="intro-heading">
              Hi, I'm Ajinkya
            </Typography>
            <Typography variant="body1" className="intro-description">
              I'm a Full Stack Developer with expertise in Java, JavaScript,
              React, Angular, and more. I excel in Data Structures and
              Algorithms, and I'm proficient in C, C++, and Python. My knowledge
              extends to Machine Learning, Data Science, Big Data, and areas
              like Operating Systems, Cryptography, and Network Security.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
