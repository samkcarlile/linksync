import React, { useState, useEffect } from 'react';

import { Modal, Form } from 'react-bootstrap';

export default function SettingsModal({ show, onClose }) {
  const [settings, setSettings] = useState({
    name: '',
    maxHistory: 50,
    notifications: 'group',
    globalShortcut: '',
  });

  const changeSetting = e => {
    if (!e.target.id) return;
    setSettings({
      ...settings,
      [e.target.id]: e.target.value,
    });
  };

  // TODO: Save settings in here
  useEffect(() => console.log(JSON.stringify(settings)), [settings]);

  return (
    <Modal size="lg" centered scrollable show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>
              <b>Name</b>
            </Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Fido 🐶"
              onChange={changeSetting}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <b>Max History</b>
            </Form.Label>
            <Form.Control
              id="maxHistory"
              type="number"
              placeholder="50"
              onChange={changeSetting}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <b>Notifications</b>
            </Form.Label>
            <Form.Control
              id="notifications"
              as="select"
              custom
              onChange={changeSetting}
            >
              <option value="grouped">🗂 Grouped</option>
              <option value="single">1️⃣ Single</option>
              <option value="none">❌ None</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <b>Global Shortcut</b>
            </Form.Label>
            <Form.Control
              id="globalShortcut"
              type="text"
              placeholder="⇧-⌘-L"
              onChange={changeSetting}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
