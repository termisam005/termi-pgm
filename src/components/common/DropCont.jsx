import { useState } from 'react';

const DropCont = (props) => {

    const [dropContain, setDropContain] = useState(false);
    const dropOn = () => {
        setDropContain(true);
    }
    const dropOff = () => {
        setDropContain(false);
    }

    return (
        <div className={props.pos_class}>
            <button onClick={dropOn} className={props.btn_class}>
                <span>{props.spant}</span>
                <span className="arr_down10"></span>
            </button>
            <div className={dropContain ? "etc_sets on" : "etc_sets"}>
                <div onClick={dropOff} className="etc_back"></div>
                <div onClick={dropOff} className="etc_cont etc_drop">
                    <ul>
                        {props.children}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DropCont;