import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({options, defaultValue, value, sortAppeal}) => {
    return (
      <select className={classes.select} value={value} onChange={event => sortAppeal(event.target.value)}>
          <option className={classes.option} disabled={true} value=''>{defaultValue}</option>
          {options.map(option =>
              <option className={classes.option} value={option.value}>{option.name}</option>)}
      </select>
    );
};

export default MySelect;