import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaDatabase,
  FaCloud,
  FaCss3Alt,
  FaHtml5,
  FaTerminal,
} from "react-icons/fa";

import {
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiTypescript,
  SiCplusplus,
  SiGooglecloud,
  SiOpenai,
  SiReact,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiDotnet,
  SiBash,
} from "react-icons/si";

function Techstack() {
  const iconSize = 40;

  const tech = [
    { icon: <FaPython size={iconSize} />, label: "Python" },
    { icon: <SiNumpy size={iconSize} />, label: "NumPy" },
    { icon: <SiPandas size={iconSize} />, label: "Pandas" },
    { icon: <SiTensorflow size={iconSize} />, label: "TensorFlow" },
    { icon: <SiPytorch size={iconSize} />, label: "PyTorch" },
    
    { icon: <FaJava size={iconSize} />, label: "Java" },
    { icon: <FaJs size={iconSize} />, label: "JavaScript" },
    { icon: <SiTypescript size={iconSize} />, label: "TypeScript" },
    { icon: <SiCplusplus size={iconSize} />, label: "C++" },
    { icon: <FaHtml5 size={iconSize} />, label: "HTML/CSS" },

    { icon: <SiGooglecloud size={iconSize} />, label: "GCP" },
    { icon: <FaAws size={iconSize} />, label: "AWS" },
    { icon: <SiOpenai size={iconSize} />, label: "OpenAI" },

    { icon: <FaDatabase size={iconSize} />, label: "SQL" },
    { icon: <SiPostgresql size={iconSize} />, label: "PostgreSQL" },
    { icon: <SiMongodb size={iconSize} />, label: "MongoDB" },

    { icon: <FaReact size={iconSize} />, label: "React.js" },
    { icon: <FaNodeJs size={iconSize} />, label: "Node.js" },


    { icon: <FaTerminal size={iconSize} />, label: "Bash" },
    { icon: <SiDotnet size={iconSize} />, label: ".NET" },
    { icon: <FaGithub size={iconSize} />, label: "GitHub" },
    { icon: <SiFirebase size={iconSize} />, label: "Firebase" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tech.map((item, idx) => (
        <Col key={idx} xs={4} md={2} className="tech-icons">
          {item.icon}
          <div className="tech-icons-text">{item.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;