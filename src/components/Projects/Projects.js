import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aiPrompt from "../../Assets/Projects/best-ai-prompt-generators.jpg";
import blockchainVoting from "../../Assets/Projects/blockchain-voting-main-1600.jpg";
import sentimentAnalysis from "../../Assets/Projects/Sentiment-Analysis-Social-Media-Social.png";

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
              imgPath={aiPrompt}
              title="Ai Prompt Generator"
              description="The AI Prompt Generator is an innovative application designed to inspire creativity and assist users in generating tailored prompts for writing, brainstorming, and creative exploration. Utilizing advanced natural language processing, the system offers customizable prompts based on parameters like length, complexity, and tone. With features such as multi-modal prompt generation, a feedback mechanism, and integration with external platforms, the AI Prompt Generator aims to enhance user experience and provide a seamless interface for creative inspiration. The project prioritizes privacy, scalability, and continuous improvement, offering a valuable tool for writers, marketers, educators, and anyone seeking assistance in overcoming creative blocks or generating fresh ideas."
              ghLink="https://github.com/raghuchouhan/TheAIPromptShareapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchainVoting}
              title="Blockchain Voting"
              description="The Blockchain Voting System is a revolutionary platform designed to bring transparency, security, and efficiency to the electoral process. Leveraging blockchain technology, the system ensures tamper-proof and verifiable voting records, addressing issues of fraud and distrust in traditional voting systems. With a user-friendly interface, robust identity verification, and the use of smart contracts for rule automation, the project prioritizes accessibility, security, and accuracy. Through encrypted transactions, privacy protection, and scalability, the Blockchain Voting System aims to provide a trustworthy and inclusive democratic experience, redefining the future of electoral processes."
              ghLink="https://github.com/raghuchouhan/TrustVote-Decentralized-Voting-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentimentAnalysis}
              title="Sentiment Analysis social media"
              description="
              Sentiment Analysis for social media is a powerful tool that employs natural language processing algorithms to analyze and interpret the emotions expressed in user-generated content across various social platforms. By examining text-based data such as tweets, comments, and posts, the system identifies and categorizes sentiments as positive, negative, or neutral. This technology enables businesses, brands, and individuals to gain valuable insights into public opinion, customer satisfaction, and trends. Whether tracking reactions to a product launch, gauging sentiment during a marketing campaign, or understanding user feedback, Sentiment Analysis on social media provides a real-time pulse on public sentiment, empowering users to make informed decisions and adapt strategies based on the prevailing mood in the digital space."
              ghLink="https://github.com/raghuchouhan/sentiment-analysis-master"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
