import { useState } from 'react';

const EtcCont = (props) => {

    const [etcContain, setEtcContain] = useState(false);
    const etcOn = () => {
        setEtcContain(true);
    }
    const etcOff = () => {
        setEtcContain(false);
    }

    return (
        <div className={props.wrap_class}>
            <div className="posrel">
                <p onClick={etcOn} className={props.btn_class}></p>
                <div className={etcContain ? "etc_sets on" : "etc_sets"}>
                    <div onClick={etcOff} className="etc_back"></div>
                    <div onClick={etcOff} className="etc_cont">
                        <ul>
                            {props.children}
                            {/* <li onClick={etcOff} className="del">
                                {props.delli}
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EtcCont;