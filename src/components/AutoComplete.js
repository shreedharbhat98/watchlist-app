import React, { useState } from 'react';
import WatchlistItmes from '../data/data.json';
import ListItem from './ListItem';

const AutoComplete = () => {
  const [input, setInput] = useState('')
  let suggestions = [];

  if (input.length) {
    WatchlistItmes.forEach(stock => {
      if (stock[0].substr(0, input.length).toUpperCase() === input.toUpperCase()) {
        suggestions.push(stock)
      }
    })
  }

  console.log('Some', suggestions);
  return (
    <React.Fragment>
      <input
        className="appearance-none border border-gray-500 leading-9 rounded w-full py-2 px-3 mt-5 mb-1 focus:outline-none"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Search stocks..."
      />

      <ul className="dropdown-menu absolute top-42 bg-white text-gray-700 w-1/3 z-50 border-l-2 border-indigo-600 pr-4 h-screen">
        {suggestions?.map((suggestedStock, index) => (
          <ListItem details={suggestedStock} key={index} fromSuggestion={true} />
        ))}
      </ul>
    </React.Fragment>

  )
}


export default AutoComplete;