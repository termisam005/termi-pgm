import { useState } from 'react';

const CircleToggle = (props) => {

    const [circleCont, setCircleCont] = useState(false);
    const circleOn = () => {
        setCircleCont(!circleCont);
    }
    // const circleOff = () => {
    //     setCircleCont(false);
    // }

    return (
        <div className={circleCont ? "hcircle on" : "hcircle"}>
            <span className={props.sign_class}></span>
            <div className="circle_p" onClick={circleOn}>
                <img className={props.img_class} src={process.env.PUBLIC_URL + props.src} alt={'image'} />
            </div>
            <section className="hidd_zone">
                {/* <div className="hidd_dark" onClick={circleOff}></div> */}
                {props.children}
            </section>
        </div>
    )
}

export default CircleToggle;