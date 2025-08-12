import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Matches() {
  const matches = [
    { name: 'John Doe', skill: 'Guitar', wants: 'Piano' },
    { name: 'Jane Smith', skill: 'Cooking', wants: 'Photography' },
  ];

  return (
    <Container className="mt-5">
      <h2>Your Matches</h2>
      {matches.map((match, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{match.name}</Card.Title>
            <Card.Text>
              Skilled in: {match.skill} <br />
              Wants to learn: {match.wants}
            </Card.Text>
            {/* Connect button added here */}
            <Button as={Link} to="/book-session" variant="primary">
              Connect
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Matches;
