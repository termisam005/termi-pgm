import { useState } from 'react';


const BordTact = (props) => {

    const [bordState, setBordState] = useState(false);

    const bordOn = () => {
        setBordState(!bordState);
    }

    return (
        <p onClick={bordOn} className={bordState ? "bord_pp tact on" : "bord_pp tact"}>
            {props.txt}
        </p>
    )
}

export default BordTact;