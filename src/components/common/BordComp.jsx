import { useState } from 'react';


const BordComp = (props) => {

    const [compState, setCompState] = useState(false);

    const bordOff = () => {
        setCompState(true);
    }


    return (
        <p className={compState ? "bord_comp trans del" : "bord_comp trans"}>
            <span onClick={bordOff} class="del_x"></span>
            <span className="word">{props.word}</span>
        </p>
    )
}

export default BordComp;