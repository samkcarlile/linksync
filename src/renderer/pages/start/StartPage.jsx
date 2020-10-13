import React, { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Row,
  Jumbotron,
  Button,
  InputGroup,
  Form,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import About from './About';
import JoinButton from './JoinButton';

export default function StartPage() {
  const [roomCode, setRoomCode] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron className="text-center">
            <h1>
              👋 Welcome to <span className="text-primary">Link Space!</span>
            </h1>
            <div className="pt-5">
              <InputGroup className="mb-3">
                <Form.Control
                  onChange={e => setRoomCode(e.target.value)}
                  type="number"
                  placeholder="Enter Code"
                ></Form.Control>
                <InputGroup.Append>
                  <JoinButton
                    // onClick={() => setLoading(true)}
                    onClick={() => history.push('/')}
                    isLoading={loading}
                  />
                </InputGroup.Append>
              </InputGroup>
              <p className="text-secondary">
                <b>or</b>
              </p>
              <Button variant="dark">🚀 &nbsp;Create Space</Button>
            </div>
          </Jumbotron>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col>
          <About />
        </Col>
      </Row>
    </Container>
  );
}
