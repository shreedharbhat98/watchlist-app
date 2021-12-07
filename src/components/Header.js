import React from 'react';

const Header = ({ title = "" }) => (
  <React.Fragment>
    <div className="text-center">
      {title}
    </div>
  </React.Fragment>
)

export default Header;