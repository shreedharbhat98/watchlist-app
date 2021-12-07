import React from 'react';
import Badge from './Badge';
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons';

const ListItem = ({ details, fromSuggestion = false }) => {
  let [stock, exchange, currentPrice, percentageChange, netChange] = ['', '', 0, 0, 0];
  if (details) {
    [stock, exchange] = details[0].split('::');
    currentPrice = details[1];
    percentageChange = Math.floor((details[1] - details[2]) / details[2]).toFixed(2);
    netChange = (details[1] - details[2])
  }
  return (
    <React.Fragment>
      <div className="border border-grey-700 hover:border-grey-800 leading-6 p-2">
        <div className="flex justify-between px-3 text-cyan font-bold mb-2">
          <div>{stock}</div>
          <div>{currentPrice}</div>
        </div>
        <div className="flex justify-between px-3 text-gray-500">
          <div>
            <Badge label={exchange} />
          </div>
          <div className="text-sm grid grid-cols-2 place-items-center">
            {netChange < 0 && (
              <CaretDownFilled className="text-red-600" />
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
      {fromSuggestion && (
        <div className="opacity-0 hover:opacity-1007 bg-gray-200 absolute z-100">
          Shreedhar here
        </div>
      )}
    </React.Fragment>
  )
}
export default ListItem;