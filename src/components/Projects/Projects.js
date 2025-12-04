import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        {/* -------------------------------------------------- */}
        {/* ------------------ MAIN HEADER ------------------- */}
        {/* -------------------------------------------------- */}
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong> & Projects
        </h1>

        {/* -------------------------------------------------- */}
        {/* ---------------- FEATURED PROJECTS --------------- */}
        {/* -------------------------------------------------- */}
        <h2 className="project-subheading" style={{ marginTop: "30px" }}>
          <strong className="purple">Projects/Leadership</strong>
        </h2>

        <Row style={{ justifyContent: "center" }}>
          {/* THERAPUTE — FIRST */}
          <Col md={8} className="project-card" style={{ marginBottom: "0px" }}>
            <ProjectCard
              title={
                <>
                  Therapute — International Top 10,
                  Google Student <br /> Developer Challenge
                </>
              }
              date="Jan 2024 – Present"
              description={`• Built MERN app for real-time physical-therapy pose correction.
• Used DTW + vector analysis to compare patient form; added NeRF-based personalization.
• Created therapist dashboard for LLM-generated summaries + personalized exercises.`}
              imgPath={null}
              ghLink={"https://www.youtube.com/watch?v=vTc8DXPVvUc"}
            />
          </Col>

          {/* VIGILAI — SECOND */}
          <Col md={8} className="project-card" style={{ marginBottom: "20px" }}>
            <ProjectCard
              title="VigilAI — AI-Assisted Police Report Generation"
              date="Jan 2024 – May 2025"
              description={`• Built AI pipeline to analyze police bodycam footage and auto-generate incident reports.
• Demoed product to police departments across the U.S. to validate workflows.
• Raised $150K pre-seed funding led by Fusen World Ventures.`}
              imgPath={null}
              ghLink={"https://vigilai.co/"}
            />
          </Col>
        </Row>

        {/* -------------------------------------------------- */}
        {/* ------------------- EXPERIENCE ------------------- */}
        {/* -------------------------------------------------- */}
        <h2 className="project-subheading" style={{ marginTop: "50px" }}>
          <strong className="purple">Experience</strong>
        </h2>

        {/* Vertical stack — full width */}
        <Row style={{ justifyContent: "center" }}>
          <Col md={8} className="project-card" style={{ marginBottom: "0px" }}>
            <ProjectCard
              title="Software Engineer Intern — MathWorks"
              date="May – Aug 2025"
              description={`• Optimized Computational Finance testbed using weighted decision trees (30% cost reduction).
• Analyzed distribution patterns using violin/KDE plots to guide normalization.
• Iteratively refined model with Quality Engineering team feedback.`}
              imgPath={null}
            />
          </Col>

          <Col md={8} className="project-card" style={{ marginBottom: "0px" }}>
            <ProjectCard
              title="Software Engineer Intern — The Home Depot"
              date="Jan – May 2025"
              description={`• Built graph-based collaborative filtering model for HomeDepot.com recommendations.
• Prototyped Chrome extension to compare performance vs legacy models.
• Halved storage by flattening graph into Redis-based NoSQL tables.`}
              imgPath={null}
            />
          </Col>

          <Col md={8} className="project-card" style={{ marginBottom: "0px" }}>
            <ProjectCard
              title="Software Engineer Intern — The Home Depot"
              date="Aug – Dec 2024"
              description={`• Optimized Next Bay Cloud SQL selection logic; doubled forecasting accuracy.
• Trained ARIMA, SARIMAX & DeepAR models with BigQuery feature pipelines.
• Deployed DeepAR LSTM model to Vertex AI (400% boost in accuracy).`}
              imgPath={null}
            />
          </Col>

          <Col md={8} className="project-card" style={{ marginBottom: "0px" }}>
            <ProjectCard
              title="Software Engineer Intern — MFactor Consultancy"
              date="May – Aug 2024"
              description={`• Authored 20-page comparative report on 8 dashboard frameworks, 4 libraries.
• Built React + D3.js signal visualization dashboard with S3/PostgreSQL/Cognito.
• Shipped BI dashboard that saved 20 hours/week in sales workflow.`}
              imgPath={null}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;