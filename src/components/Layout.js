import React from 'react';

const Layout = (props) => (
  <React.Fragment>
    <div className="sm:w-full md:w-2/3 lg:w-1/3 m-auto mt-5 p-2">
      {props.children}
    </div>
  </React.Fragment>
)

export default Layout;