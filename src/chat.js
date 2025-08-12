import React, { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'You' }]);
      setInput('');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Chat with Mentor/Learner</h2>
      <ListGroup className="mb-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {messages.map((msg, idx) => (
          <ListGroup.Item key={idx}>
            <strong>{msg.sender}: </strong>{msg.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form className="d-flex">
        <Form.Control
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="primary" onClick={sendMessage} className="ms-2">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default Chat;
