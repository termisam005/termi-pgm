import { useState } from 'react';
import Flags from './Flags';

const CircleNation = () => {

    const [circleCont, setCircleCont] = useState(false);
    const circleOn = () => {
        setCircleCont(true);
    }
    const circleOff = () => {
        setCircleCont(false);
    }

    return (
        <div className={circleCont ? "hcircle on" : "hcircle"}>
            <p className="circle_p" onClick={circleOn}>
                <img src="../resources/images/nation_usa.png" alt="usa" />
            </p>
            <section className="hidd_zone">
                <div className="hidd_dark" onClick={circleOff}></div>
                <article className="hidd_box nation">
                    <div className="flag_top">
                        <Flags p_class="flags" src="../resources/images/flag_usa.png" sp_class="flag_word" lang="English" />
                    </div>
                    <p className="line1"></p>
                    <div className="flag_body">
                        <Flags p_class="flags" src="../resources/images/flag_usa.png" sp_class="flag_word" lang="English" />
                        <Flags p_class="flags" src="../resources/images/flag_nor.png" sp_class="flag_word" lang="Norsk (nynorsk)" />
                        <Flags p_class="flags" src="../resources/images/flag_nor.png" sp_class="flag_word" lang="Norsk (Bokmål)" />
                        <Flags p_class="flags" src="../resources/images/flag_kor.png" sp_class="flag_word" lang="한국어" />
                    </div>
                </article>
            </section>
        </div>
    )
}

export default CircleNation;