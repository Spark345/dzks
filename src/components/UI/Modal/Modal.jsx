import React from 'react';
import classes from './Modal.module.css'

const Modal = ({active, setActive,title, children}) => {
    return (
        <div className={active ? `${classes.modal} ${classes.active}` : classes.modal } onClick={() => setActive(false)}>
            <div className={active ? `${classes.modalContent} ${classes.active}` : classes.modalContent} onClick={e=> e.stopPropagation()}>
                <h2 className={classes.title}>{title}</h2>
                {children}
            </div>
        </div>
    );
};

export default Modal;