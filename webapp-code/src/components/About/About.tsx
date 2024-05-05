import { Box, Grid, Typography } from "@mui/material";
import {
  FaJava,
  FaReact,
  FaAngular,
  FaGit,
  FaPython,
  FaNode,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiSpring,
  SiMysql,
  SiPostgresql,
  SiElasticsearch,
  SiMongodb,
  SiRedis,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import "./About.css";

interface TechStackProps {
  technologies: { title: string; icon: React.ReactNode }[];
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <Box
      className="tech-icons"
      sx={{alignItems: "center", justifyContent: "center" }}
    >
      {technologies.map(({ title, icon }, index) => (
        <Box className="tech-icon" key={index} title={title}>
          {icon}
        </Box>
      ))}
    </Box>
  );
};

export default function About() {
  const techStackSymbols = [
    { title: "Java", icon: <FaJava /> },
    { title: "JavaScript", icon: <SiJavascript /> },
    { title: "C++", icon: <TbBrandCpp /> },
    { title: "Python", icon: <FaPython /> },
    { title: "Spring", icon: <SiSpring /> },
    { title: "Node.js", icon: <FaNode /> },
    { title: "React", icon: <FaReact /> },
    { title: "Angular", icon: <FaAngular /> },
    { title: "Elasticsearch", icon: <SiElasticsearch /> },
    { title: "MySQL", icon: <SiMysql /> },
    { title: "PostgreSQL", icon: <SiPostgresql /> },
    { title: "MongoDB", icon: <SiMongodb /> },
    { title: "Redis", icon: <SiRedis /> },
    { title: "Git", icon: <FaGit /> },
    { title: "Docker", icon: <FaDocker /> },
  ];
  return (
    <>
      <Grid className="about-section">
        {/* About - Description Section */}
        <Grid className="about-section-desc">
          <Typography className="about-description">
            <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
              Welcome
            </span>
            {` to my corner of the web! I'm `}
            <span style={{ fontWeight: "bold" }}>Ajinkya Ashokrao Pawar</span>
            {`, a versatile software engineer passionate about crafting innovative solutions and diving deep into the world of technology. With expertise spanning across multiple programming languages and frameworks, including Java, JavaScript, TypeScript, Python, C, and C++, I thrive on turning ideas into reality through code.`}
          </Typography>
          <Typography className="about-description">
            In my journey as a developer, I've embarked on various projects,
            ranging from robust Spring MVC and Django applications to dynamic
            React, Angular, and JSP & Servlet projects. Whether it's building
            scalable backend systems or creating intuitive user interfaces, I
            enjoy every aspect of the development process.
          </Typography>
          <Typography className="about-description">
            Beyond coding, I'm well-versed in database management, having worked
            with MySQL, PostgreSQL, and MongoDB. My curiosity extends to the
            realm of data retrieval and analysis, with knowledge of
            Elasticsearch and Redis.
          </Typography>
          <Typography className="about-description">
            But it doesn't stop there. I delve into the intricacies of operating
            systems, particularly Linux, and delve into the realms of
            cryptography and network security. Understanding the inner workings
            of computer networks fuels my passion for building secure and
            reliable systems.
          </Typography>
          <Typography className="about-description">
            In my free time, I delve into the realm of system design, relishing
            the challenges of architecting solutions that scale and perform
            efficiently. I thrive on challenges, constantly seeking new problems
            to solve and opportunities to learn and grow.
          </Typography>
          <Typography className="about-description">
            Join me on this exciting journey as we explore the endless
            possibilities of technology and innovation.
          </Typography>
        </Grid>
        {/* About - Technology Section*/}
        <Box className="about-section-tech">
          <Grid className="about-tech-icons">
            <Typography variant="h4" fontWeight={"bold"} pb={"1.2rem"}>
              Professional Skillset
            </Typography>
            <TechStack technologies={techStackSymbols} />
          </Grid>
        </Box>
      </Grid>
    </>
  );
}
