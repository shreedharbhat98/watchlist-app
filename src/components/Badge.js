import React from 'react';

const Badge = ({ label = "" }) => (
  <React.Fragment>
    <span
      className="inline-flex items-center justify-center px-2 py-1 text-xs leading-none text-grey-400 bg-gray-100 rounded-sm">
      {label}
    </span>
  </React.Fragment>
);

export default Badge;