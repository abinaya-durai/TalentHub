import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function AddSkill() {
  const [formData, setFormData] = useState({
    skillName: '',
    type: 'teach', // teach or learn
    level: 'beginner' // only for teach skills
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!formData.skillName) {
      setError('Please enter skill name');
      return;
    }

    setSuccess(`Skill "${formData.skillName}" added as ${formData.type}`);
    // TODO: Connect to backend API to save skill
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <h2>Add Skill Listing</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formSkillName">
          <Form.Label>Skill Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter skill name"
            name="skillName"
            value={formData.skillName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formType">
          <Form.Label>Type</Form.Label>
          <Form.Select name="type" value={formData.type} onChange={handleChange}>
            <option value="teach">Teach</option>
            <option value="learn">Learn</option>
          </Form.Select>
        </Form.Group>

        {formData.type === 'teach' && (
          <Form.Group className="mb-3" controlId="formLevel">
            <Form.Label>Skill Level</Form.Label>
            <Form.Select name="level" value={formData.level} onChange={handleChange}>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </Form.Select>
          </Form.Group>
        )}

        <Button variant="primary" type="submit" className="w-100">
          Add Skill
        </Button>
      </Form>
    </Container>
  );
}

export default AddSkill;
