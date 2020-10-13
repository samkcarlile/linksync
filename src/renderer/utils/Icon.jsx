import React from 'react';

export default function Icon({ onClick, className, name, color, size = 32 }) {
  return (
    <div onClick={onClick} className={`icon d-flex text-${color} ${className}`}>
      <svg className="bi" width={size} height={size} fill="currentColor">
        <use xlinkHref={`bootstrap-icons.svg#${name}`} />
      </svg>
    </div>
  );
}
