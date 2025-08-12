import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Register from './Register';  
import Login from './Login';
import Dashboard from './Dashboard';   
import AddSkill from './AddSkill';
import Matches from './Matches';
import BookSession from './BookSession';
import Chat from './chat';  // Importing Chat component

function Landing() {
  return (
    <Container className="mt-5">
      <h1>Welcome to SkillSwap</h1>
      <p>Find mentors and learners to exchange skills.</p>
    </Container>
  );
}



function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">SkillSwap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/add-skill">Add Skill</Nav.Link>
              <Nav.Link as={Link} to="/matches">Matches</Nav.Link>
             

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-skill" element={<AddSkill />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/book-session" element={<BookSession />} />
      <Route path="/chat" element={<Chat />} />

      </Routes>
    </>
  );
}

export default App;
