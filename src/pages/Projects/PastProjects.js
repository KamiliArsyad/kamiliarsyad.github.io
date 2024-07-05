import { Container, Wrap } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { ProjectCard } from "./ProjectsMain";

const projects = [
  {
    title: "DIY Lab Power Supply",
    description:
      "(old video) 180W 0-38V adjustable power supply with current limiting and digital display",
    url: "https://youtu.be/Dg9D5Taav8E",
    tags: ["Electronics", "Power Supply", "DIY"],
    date: "21-09-2016",
  },
  {
    title: "ATtiny85 Dev Board Programming",
    description:
      "(old video) Programming an ATtiny85 microcontroller using an Arduino Nano as a programmer",
    url: "https://youtu.be/_GVTSVTvf5c",
    tags: ["Electronics", "Embedded Systems", "Microcontrollers", "Arduino"],
    date: "17-10-2016",
  },
  {
    title: "ESP8266 - ThingSpeak Data Logger",
    description:
      "(old video) Logging data to ThingSpeak using an ESP8266 and a DHT22 sensor",
    url: "https://youtube.com/playlist?list=PLmB_-sM1v7hptPG3--FURnCb5WFH82iS_",
    tags: ["Electronics", "Embedded Systems", "IoT", "ESP8266"],
    date: "31-12-2016",
  },
  {
    title: "Portable OLED Weather Station",
    description:
      "(old video) A portable weather station with an OLED display and a real-time clock",
    url: "https://youtu.be/lZxaZXUw3Z8",
    tags: ["Electronics", "Embedded Systems", "Arduino"],
    date: "31-01-2017",
  },
  {
    title: "Esaki Oscillator",
    description: "(old video) Building the simplest oscillator",
    url: "https://youtu.be/8oxFgyhJH0s",
    tags: ["Electronics", "Oscillator", "Analog Circuits"],
    date: "31-03-2017",
  },
  {
    title: "Face Recognition-Guided 2 DOF Camera",
    description:
      "One of my early CV works, a face recognition system that smoothly guides a camera to track a face. The camera is mounted on a 2 DOF custom arm controlled by two servos. The face recognition is done using OpenCV and the camera is controlled using a PID controller. The system is built using an Arduino and a Raspberry Pi.",
    url: "https://youtube.com/shorts/CpnZm0a7IhE",
    tags: [
      "Arduino",
      "Raspberry Pi",
      "Computer Vision",
      "OpenCV",
      "PID",
      "Embedded Systems",
    ],
    date: "09-04-2019",
  },
  {
    title: "DIY Bluetooth Speaker",
    description: "Cheap high quality bluetooth speaker",
    url: "https://youtu.be/bHaFslN5Q-Q",
    tags: ["Electronics", "Audio", "Passive Filters"],
    date: "08-05-2018",
  },
  {
    title: "Wearable Alert System for the Deaf",
    description:
      "A wearable alert system that vibrates when some certain sound patterns are detected",
    url: "https://youtu.be/MNx717n6fiU",
    tags: ["Electronics", "Arduino", "Embedded Systems", "Audio Processing"],
    date: "20-03-2019",
  },
  {
    title: "CV ORB-ZMQ Stream",
    description:
      "Simple CUDA-enabled high performance one-to-one network stream for extracting and streaming ORB features from an edge device to a server",
    url: "https://github.com/KamiliArsyad/cvORB-zmq-stream",
    tags: [
      "C++",
      "CUDA",
      "ZeroMQ",
      "Computer Vision",
      "Parallel Computing",
      "High-troughput Software Development",
    ],
    date: "30-06-2023",
  },
  {
    title: "DigitalIT",
    description:
      "Empowering small business owners to digitalize their businesses",
    url: "https://github.com/florentianayuwono/DigitalIT",
    tags: ["React", "Node.js", "Express", "PosgtreSQL", "Web Development"],
    date: "15-08-2022",
  },
  {
    title: "FDSampleRush",
    description:
      "Team project. A tool that uses Monte Carlo simulations to explore the practical viability of different database normalization forms based on functional dependencies. It reveals that while Third Normal Form (3NF) remains practical, achieving Boyce-Codd Normal Form (BCNF) becomes less feasible as the number of attributes in a database increases.",
    url: "/blog/testing-db-normalization-theory-vs-practice---fdsamplerush",
    tags: ["Paper", "Database", "Normalization", "Monte Carlo Simulation", "Database Theory"],
    date: "01-04-2024",
  },
];

export default function PastProjects() {
  const parseDate = (dateString) =>
    new Date(dateString.split("-").reverse().join("-"));
  return (
    <>
      <Helmet>
        <title>Past Works</title>
        <meta name="description" content="A list of projects I've worked on" />
      </Helmet>
      <Container maxW="container.xl" py={12}>
        <Wrap justify="center" spacing={4}>
          {projects
            .sort((a, b) => parseDate(b.date) - parseDate(a.date))
            .map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                url={project.url}
                tags={project.tags}
                date={project.date}
              />
            ))}
        </Wrap>
      </Container>
    </>
  );
}
