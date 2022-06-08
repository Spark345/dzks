import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({options, defaultValue, value, Change}) => {
    return (
        <div className={classes.select}>
            <select className={classes.select} value={value} onChange={event => Change(event.target.value)}>
                <option className={classes.option} disabled={true} value=''>{defaultValue}</option>
                {options.map(option =>
                    <option className={classes.option} value={option.value}>{option.name}</option>)}
            </select>
        </div>

    );
};

export default MySelect;