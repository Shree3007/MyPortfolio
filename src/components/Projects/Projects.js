import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import philomind from "../../Assets/Projects/philomind.png";
import launchPad from "../../Assets/Projects/launchPad.png";
import ecom from "../../Assets/Projects/ecom.png";
import computerSales from "../../Assets/Projects/computerSales.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={philomind}
              isBlog={false}
              title="Philomind"
              description="Built a mobile-first MERN-based PWA that blends AI and philosophy to support emotional well-being. Features include mood-based chatbot (Gemini API), gamification, lesson tracking, and secure login via Clerk."
              ghLink="https://github.com/Shree3007/philo_mind"
              demoLink="https://philo-mind.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={launchPad}
              isBlog={false}
              title="LaunchPad"
              description=" Built a MERN-based platform for startups to pitch ideas and receive mentor feedback, with Firebase Auth and JWT-secured mentor login. Enabled role-based dashboards and feedback management. "
              ghLink="https://github.com/Shree3007/startup-growth-portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-Commerce Application"
              description=" Built a responsive MERN-based e-commerce app with secure authentication, role-based access, product filtering, and an admin panel. Features include shopping cart, RESTful APIs, inventory updates, and optimized performance. "
              ghLink="https://github.com/Shree3007/EcommerceWebsiteMERN"
              demoLink="https://ecommerce-website-mern-liard.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={computerSales}
              isBlog={false}
              title=" Computer Sales Management System "
              description="Developed a system to automate customer, employee, inventory, supplier, and sales tracking operations. Features a dashboard for real-time insights, enhancing business efficiency and control. "
              ghLink="https://github.com/Shree3007/ComputerSalesManagement"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
