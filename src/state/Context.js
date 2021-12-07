import React, { useState } from 'react';

function WatchlistData() {
  const [responseData, setResponseData] = useState({});
  return { responseData, setResponseData };
}

export const WatchlistContext = React.createContext({});

function WatchlistProvider(props) {
  const addons = WatchlistData(props);
  return <WatchlistContext.Provider value={addons}>{props.children}</WatchlistContext.Provider>;
}

export default WatchlistProvider;

