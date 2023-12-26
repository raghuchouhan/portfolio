import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, I'm <span className="purple">Raghuveer Singh Chouhan </span>{" "}
            from <span className="purple">Madhya Pradesh, India</span>, currently
            pursuing a <span className="purple">B.Tech degree in Computer Science</span>. Beyond the world of
            coding, I find joy in playing games and exploring new destinations
            through travel. Embracing a diverse set of interests, I believe in
            the balance between academic pursuits and the enjoyment of life's
            varied experiences. Whether immersed in the intricacies of
            programming or engaging in leisure activities, I'm on a journey of
            self-discovery and growth. Looking forward to connecting with fellow
            enthusiasts and sharing the excitement of both the digital and
            real-world adventures!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
