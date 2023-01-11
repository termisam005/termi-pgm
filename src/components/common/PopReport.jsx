import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

const PopReport = (props) => {
    const { open, close } = props;

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className={"pop_bg"}></div>
            <div className="pop_body pop_ab_cent">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">Report</h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts">
                    <article className="repop_zone hauto">

                        <div className="p-l-20">
                            <div className={radioState === 1 ? "check_line on" : "check_line"} onClick={() => radioTab(1)}>
                                <p className="checkbox circ">
                                    <span className="circle"></span>
                                </p>
                                <span className="check_word">Pretending to be a specific person</span>
                            </div>
                            <p className="p-10"></p>
                            <div className={radioState === 2 ? "check_line on" : "check_line"} onClick={() => radioTab(2)}>
                                <p className="checkbox circ">
                                    <span className="circle"></span>
                                </p>
                                <span className="check_word">Pornography</span>
                            </div>
                            <p className="p-10"></p>
                            <div className={radioState === 3 ? "check_line on" : "check_line"} onClick={() => radioTab(3)}>
                                <p className="checkbox circ">
                                    <span className="circle"></span>
                                </p>
                                <span className="check_word">Hate speech and symbols</span>
                            </div>
                            <p className="p-10"></p>
                            <div className={radioState === 4 ? "check_line on" : "check_line"} onClick={() => radioTab(4)}>
                                <p className="checkbox circ">
                                    <span className="circle"></span>
                                </p>
                                <span className="check_word">Violent or dangerous content</span>
                            </div>
                            <p className="p-10"></p>
                            <div className={radioState === 5 ? "check_line on" : "check_line"} onClick={() => radioTab(5)}>
                                <p className="checkbox circ">
                                    <span className="circle"></span>
                                </p>
                                <span className="check_word">Others</span>
                            </div>
                            <p className="p-10"></p>
                            <div className={radioState === 6 ? "check_line on" : "check_line"} onClick={() => radioTab(6)}>
                                <p className="checkbox circ">
                                    <span className="circle"></span>
                                </p>
                                <span className="check_word">Domination, spam</span>
                            </div>
                            <p className="p-10"></p>
                            <div className={radioState === 7 ? "check_line on" : "check_line"} onClick={() => radioTab(7)}>
                                <p className="checkbox circ">
                                    <span className="circle"></span>
                                </p>
                                <span className="check_word">Others</span>
                            </div>
                        </div>

                    </article>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md3 w-100" txt="Report it" />
                </div>
            </div>
        </section>
    )
}

export default PopReport;

