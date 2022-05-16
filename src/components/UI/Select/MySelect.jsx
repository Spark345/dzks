import React from 'react';

const MySelect = ({options, defaultValue, value, sortAppeal}) => {
    return (
      <select value={value} onChange={event => sortAppeal(event.target.value)}>
          <option disabled={true} value=''>{defaultValue}</option>
          {options.map(option =>
              <option value={option.value}>{option.name}</option>)}
      </select>
    );
};

export default MySelect;