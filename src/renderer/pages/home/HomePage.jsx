import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import TopCard from './TopCard';
import LinkList from './LinkList';
import SettingsModal from '../settings/SettingsModal';

export default function HomePage() {
  const location = useLocation();
  const history = useHistory();

  const shouldShowSettings = location.pathname === '/settings';

  return (
    <>
      <SettingsModal
        show={shouldShowSettings}
        onClose={() => (history.length ? history.push('/') : history.goBack())}
      />
      <Container>
        <Row>
          <Col>
            <TopCard
              roomCode={1234}
              onExit={() => history.push('/start')}
              onSettings={() => history.push('/settings')}
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <LinkList />
          </Col>
        </Row>
      </Container>
    </>
  );
}
