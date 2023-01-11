import React from "react";
import ButtonComponent from "./ButtonComponent";

const PopComponent = (props) => {

    const { open, close } = props;

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className={"pop_bg"}></div>
            <div className={"pop_body pop_ab_cent"}>
                <div className={"pop_conts"}>
                    <div className={"pop_cent"}>
                        {props.pop_cent}
                    </div>
                </div>
                <p className={"line1"}></p>
                <div className={"pop_foot"}>
                    <ButtonComponent onClick={close} class="btn_md3 w-100" txt="Confirm" />
                </div>
            </div>
        </section>
    )
}

export default PopComponent;

