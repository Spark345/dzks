import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, onClick}) => {
    return (
        <div>
            <button onClick={onClick} className={classes.button}>{children}</button>
        </div>
    );
};

export default MyButton;