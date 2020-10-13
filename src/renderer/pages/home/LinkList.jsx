import React, { useEffect, useState } from 'react';
import { addHotKeyListener, removeHotKeyListener } from '../../utils/utils';
import LinkCard from './LinkCard';

const mockData = [
  'https://icons.getbootstrap.com/#usage',
  'https://www.npmjs.com/package/regenerator-runtime',
  'https://developer.mozilla.org/en-US/docs/Web/CSS/user-select',
  'https://reactcommunity.org/react-transition-group/transition-group',
  'https://stackoverflow.com/questions/46609152/npm-run-parallel-task-but-wait-until-resource-is-available-to-run-second-task',
];

export default function LinkList() {
  const [data, setData] = useState(mockData);

  useEffect(() => {
    const listenerID = addHotKeyListener(url => {
      setData([url, ...data]);

      // Clean up the listener
      return () => removeHotKeyListener(listenerID);
    });
  }, [data]);

  return (
    <div
      style={{
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}
    >
      {data.map((url, i) => (
        <LinkCard
          key={i}
          url={url}
          onInvalid={() => setData(data.slice(0, i).concat(data.slice(i + 1)))}
        />
      ))}
    </div>
  );
}
