import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import AutoComplete from './components/AutoComplete';

const App = () => {
  const [stockWatchlist, updateStockWatchlist] = useState([]);
  const [selectedStocks, updateSelectedStocks] = useState([]);

  const AddToWatchlist = (stock) => {
    updateStockWatchlist([...stockWatchlist, stock]);
    updateSelectedStocks([...selectedStocks, stock[0]])
  }

  const RemoveFromWatchlist = (stock) => {
    const filteredList = stockWatchlist.filter(item => item[0] !== stock[0]) || [];
    updateStockWatchlist(filteredList)
    const filteredSelectedStocks = selectedStocks.filter(item => item !== stock[0]) || []
    updateSelectedStocks(filteredSelectedStocks);
  }

  return (
    <React.Fragment>
      <Layout>
        <Header title="Watch List" />
        <AutoComplete
          add={AddToWatchlist}
          stockWatchlist={stockWatchlist}
          selectedStocks={selectedStocks}
          remove={RemoveFromWatchlist}
        />
      </Layout>
    </React.Fragment>
  )
}


export default App;
