import React from 'react';

import { Button, Spinner } from 'react-bootstrap';

export default function JoinButton({ onClick, isLoading = false }) {
  return (
    <Button onClick={onClick} disabled={isLoading} variant="primary">
      {!isLoading ? (
        '🔌  Join'
      ) : (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />{' '}
          Joining...
        </>
      )}
    </Button>
  );
}
