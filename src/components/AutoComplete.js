import React, { useState } from 'react';
import WatchlistItmes from '../data/data.json';
import ListItem from './ListItem';
import { CloseCircleOutlined } from '@ant-design/icons';

const AutoComplete = ({ add, remove, stockWatchlist, selectedStocks }) => {
  const [input, setInput] = useState('')
  let suggestions = [];

  if (input.length) {
    WatchlistItmes.forEach(stock => {
      if (stock[0].substr(0, input.length).toUpperCase() === input.toUpperCase()) {
        suggestions.push(stock)
      }
    })
  }

  return (
    <React.Fragment>
      <div className="relative flex w-full flex-wrap items-stretch mt-2 ">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          placeholder="Search stocks..."
          className="px-3 py-3  relative bg-white rounded text-sm border border-gray-500 outline-none focus:outline-none w-full pr-10"
        />
        {input.length > 0 ? (
          <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-2">
            <CloseCircleOutlined
              className="text-gray-400 cursor-pointer"
              onClick={() => setInput('')}
            />
          </span>
        ) : null}
      </div>
      <ul className={`absolute bg-white text-gray-700 w-full md:w-4/6 lg:w-1/3 z-50 border-l-2 border-indigo-600 pr-4 ${suggestions.length && 'max-h-5/6'}`}>
        {suggestions.length > 0 ? suggestions?.map((suggestedStock, index) => (
          <ListItem
            details={suggestedStock}
            add={add}
            remove={remove}
            setInput={setInput}
            key={index}
            fromSuggestion={true}
            selectedStocks={selectedStocks}
          />
        )) : (
          <React.Fragment>
            {input.length > 0 ? (
              <React.Fragment>
                <div className="opacity-100 h-18 text-center border-l-2 border-red-400 w-full bg-white absolute grid place-items-center z-100 -ml-0.5">
                  No results found
                </div>
              </React.Fragment>
            ) : null}
          </React.Fragment>
        )}
      </ul>
      {stockWatchlist?.map((stock, index) => (
        <ListItem
          details={stock}
          key={index}
          add={add}
          remove={remove}
          selectedStocks={selectedStocks}
        />
      ))}
      {!stockWatchlist?.length && (
        <div className="text-center text-gray-500 pt-5">Looks like empty watchlist</div>
      )}
    </React.Fragment>

  )
}


export default AutoComplete;