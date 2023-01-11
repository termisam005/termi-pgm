import { useState } from 'react';

const VersTab = (props) => {

    const [vsEtc, setVsEtc] = useState(false);
    const toggleEtc = () => {
        setVsEtc(!vsEtc);
    };

    return (
        <div onClick={props.onClick} className={props.class}>
            <span className="name">{props.title}</span>
            <p onClick={toggleEtc} className="up_arrow"></p>
            <div className={vsEtc ? "etc_cont on" : "etc_cont"}>
                <ul>
                    <li>Duplicate</li>
                    <li>Delete</li>
                </ul>
            </div>
        </div>
    )
}

export default VersTab;