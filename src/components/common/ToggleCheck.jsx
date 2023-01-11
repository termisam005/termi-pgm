import React, { useState } from "react";

const ToggleCheck = (props) => {
    const [toggleCheck, setToggleCheck] = useState(false);
    const toggleClick = () => {
        setToggleCheck(!toggleCheck);
    }

    return (
        <div onClick={toggleClick} className={toggleCheck ? "check_line on" : "check_line"}>
            <p className={props.box_class}>
                <img className={props.imgclass} src={process.env.PUBLIC_URL + props.src} alt={'image'} />
            </p>
            <span className="check_word">
                {props.word}
            </span>
        </div>
    );
};

export default ToggleCheck;
