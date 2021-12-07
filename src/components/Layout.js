import React from 'react';

const Layout = (props) => (
  <React.Fragment>
    <div className="w-1/3 m-auto mt-5 p-2 h-screen">
      {props.children}
    </div>
  </React.Fragment>
)

export default Layout;