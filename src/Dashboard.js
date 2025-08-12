import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Dashboard() {
  // Dummy user data for now
  const user = {
    name: "John Doe",
    role: "Both",
    skillsToTeach: ["JavaScript", "React"],
    skillsToLearn: ["Node.js", "MongoDB"]
  };

  return (
    <Container className="mt-5">
      <h2>Welcome, {user.name}!</h2>
      <p>Role: {user.role}</p>

      <Row className="mt-4">
        <Col md={6}>
          <h4>Skills You Can Teach</h4>
          {user.skillsToTeach.length > 0 ? (
            user.skillsToTeach.map((skill, idx) => (
              <Card key={idx} className="mb-2">
                <Card.Body>{skill}</Card.Body>
              </Card>
            ))
          ) : (
            <p>You have not added any skills to teach.</p>
          )}
          <Button variant="primary" className="mt-2">Add Skill to Teach</Button>
        </Col>

        <Col md={6}>
          <h4>Skills You Want to Learn</h4>
          {user.skillsToLearn.length > 0 ? (
            user.skillsToLearn.map((skill, idx) => (
              <Card key={idx} className="mb-2">
                <Card.Body>{skill}</Card.Body>
              </Card>
            ))
          ) : (
            <p>You have not added any skills to learn.</p>
          )}
          <Button variant="primary" className="mt-2">Add Skill to Learn</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
