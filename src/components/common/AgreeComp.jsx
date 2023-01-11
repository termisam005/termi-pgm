import { useState } from "react";

function AgreeComp(props) {

    const [toggleState, setToggleState] = useState(false);
    const toggleCheck = () => {
        setToggleState(!toggleState);
    }

    return (
        <div className={props.class}>
            <div className={toggleState ? "check_line agree on" : "check_line agree"} onClick={toggleCheck}>
                <p className="checkbox">
                    <img src="../resources/images/sv_check_cor.svg" alt="check" />
                </p>
                {props.children}
            </div>
        </div>
    )
}

export default AgreeComp;