import React from 'react';
import Badge from './Badge';
import { CaretUpFilled, CaretDownFilled, DeleteOutlined, PlusSquareOutlined } from '@ant-design/icons';

const ListItem = ({ details, fromSuggestion, selectedStocks, add, remove, setInput }) => {

  let [stock, exchange, currentPrice, percentageChange, netChange] = ['', '', 0, 0, 0];
  let includedInWatchlist = false;

  if (details) {
    [stock, exchange] = details[0].split('::');
    currentPrice = details[1];
    percentageChange = Math.floor((details[1] - details[2]) / details[2]).toFixed(2);
    netChange = Math.ceil(details[1] - details[2])
  }

  if (selectedStocks.includes(details[0])) {
    includedInWatchlist = true
  }

  return (
    <React.Fragment>
      <div className={`border border-grey-700 hover:border-grey-800 leading-6 p-2 ${fromSuggestion && 'z-0'}`}>
        <div className={`flex justify-between px-3 font-bold mb-2 ${netChange > 0 ? 'text-cyan' : 'text-red-600'}`}>
          <div>{stock}</div>
          <div>{currentPrice}</div>
        </div>
        <div className="flex justify-between px-3 text-gray-500">
          <div>
            <Badge label={exchange} />
          </div>
          <div className="text-sm grid grid-cols-2 place-items-center">
            {netChange < 0 && (
              <CaretDownFilled className="text-red-600 -mr-2" />
            )}
            {netChange > 0 && (
              <CaretUpFilled className="text-cyan" />
            )}{
              netChange === 0 && (
                <div>&nbsp;</div>
              )}
            <div>
              {percentageChange}%
            </div>
          </div>
        </div>
      </div>
      {fromSuggestion ? (
        <div className="opacity-0 hover:opacity-100 h-18 w-11/12 -mt-18 ml-5 bg-blue-50 bg-opacity-5 absolute z-100 grid place-items-center ">
          {includedInWatchlist ? (
            <div className="ml-40 cursor-pointer flex justify-around" >
              <DeleteOutlined
                onClick={() => {
                  remove(details)
                  setInput?.('');
                }}
                className="transform-gpu scale-125 border rounded-md border-gray-500 p-1"
              />
            </div>
          ) : (
            <div className="ml-40 cursor-pointer flex justify-around">
              <PlusSquareOutlined
                onClick={() => {
                  add(details)
                  setInput?.('');
                }}
                className="transform-gpu scale-125 p-1"
              />
            </div>
          )}
        </div>
      ) : (
        <div className={`opacity-0 hover:opacity-100 h-18  -mt-18 ml-5 bg-blue-50 bg-opacity-5 absolute grid place-items-center ${!fromSuggestion && 'z-0'}`}>
          <div className="ml-72 cursor-pointer flex justify-around" >
            <DeleteOutlined
              onClick={() => {
                remove(details)
                setInput?.('');
              }}
              className={`transform-gpu scale-125 border rounded-md border-gray-500 p-1 ${!fromSuggestion && 'z-0'}`}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
export default ListItem;