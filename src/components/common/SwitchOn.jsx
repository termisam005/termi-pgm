import React, { useState } from "react";

const SwitchOn = (props) => {
    const [checked, setChecked] = useState(true);
    const toggleSwitch = () => {
        setChecked(!checked);
    }

    return (
        <div onClick={toggleSwitch} className={checked ? "swith_room on" : "swith_room"}>
            <input className="switch-checkbox" type="checkbox" />
            <label className={props.label_class}>
                <span className="swt_sun"></span>
                <span className="swt_moon"></span>
                <span className="switch-button" />
            </label>
        </div>
    );
};

export default SwitchOn;
