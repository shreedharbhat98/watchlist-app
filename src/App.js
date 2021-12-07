import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import AutoComplete from './components/AutoComplete';
import ListItem from './components/ListItem';

const App = () => (
  <React.Fragment>
    <Layout>
      <Header title="Watch List" />
      <AutoComplete />
      {/* <ListItem /> */}
    </Layout>
  </React.Fragment>

)

export default App;
