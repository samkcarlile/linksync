import React, { useEffect, useState } from 'react';

import { Toast } from 'react-bootstrap';
import { getURLSummary } from '../../utils/utils';
import { shell } from 'electron';

export default function LinkCard({ url, onClick, onInvalid }) {
  const [summary, setSummary] = useState({
    favicon: '',
    title: url,
    description: '',
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await getURLSummary(url);
        setSummary(data);
      } catch (err) {
        console.log(err);
        onInvalid(err);
      }
    })();
  }, [url, onInvalid]);

  const openLink = () => {
    shell.openExternal(url);
  };

  return (
    <div className="link-card mb-3">
      <Toast onClick={onClick || openLink}>
        <Toast.Header closeButton={false}>
          {/* <span style={{ lineHeight: 0 }}>🌐 &nbsp;</span> */}
          <img
            src={summary.favicon}
            width={16}
            height={16}
            className="rounded mr-2"
            alt=""
          />
          <strong
            style={{ maxWidth: '60%' }}
            className="d-block mr-auto text-truncated"
          >
            {summary.title}
          </strong>
          <small className="ml-1" style={{ minWidth: 60 }}>
            {~~(Math.random() * 10) + 1} mins ago
          </small>
        </Toast.Header>
        <Toast.Body className="d-flex">
          {' '}
          <span className="text-truncated">{summary.description}</span>
        </Toast.Body>
      </Toast>
    </div>
  );
}
