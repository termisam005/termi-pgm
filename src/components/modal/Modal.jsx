import React from 'react';
import "./modal.css";

const Modal = (props) => {

    const { open, close } = props;

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            <div onClick={close} className={"modal_bg"}></div>
            {/* <button className="close" onClick={close}> &times; </button> */}
            {props.children}
        </div>
    )
}

export default Modal;