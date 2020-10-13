import React from 'react';

import { Card, Badge } from 'react-bootstrap';
import Icon from '../../utils/Icon';

export default function TopCard({ roomCode, onExit, onSettings }) {
  return (
    <Card bg="light" text="dark">
      <Card.Body className="p-2 d-flex justify-content-between align-items-center">
        <Icon
          onClick={onExit}
          color="danger"
          size={24}
          name="box-arrow-in-left"
        />

        <p className="selectable d-flex justify-content-center align-items-center h4 m-0 p-0">
          <Badge variant="secondary" pill className="px-2 py-1">
            <b>{roomCode}</b>
          </Badge>
        </p>

        <Icon onClick={onSettings} color="dark" size={24} name="gear-fill" />
      </Card.Body>
    </Card>
  );
}
