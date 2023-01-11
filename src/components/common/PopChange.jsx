import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import ProfComponent from "./ProfComponent";


const PopChange = (props) => {

    const { open, close } = props;

    //toggle
    const [ownSelt, setOwnSelt] = useState(false);
    const toggleSelt = () => {
        setOwnSelt(!ownSelt);
    }

    //owner_in
    const [smallSelt, setSmallSelt] = useState(false);
    const clickSelt = () => {
        setSmallSelt(true);
        let OwnSe = document.querySelector('.owner_sett');
        OwnSe.classList.remove('on');
    }
    const delSelt = () => {
        setSmallSelt(false);
    }

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent pop_dial">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1>{props.popname}</h1>
                    </div>
                </div>
                <p className="line1"></p>
                <div className="pop_conts">
                    <div className="own_padd">
                        <dl className="natdial_dl m-b-20">
                            <dt>
                                Select New Owner
                            </dt>
                            <dd>
                                <article className={ownSelt ? "owner_sett on" : "owner_sett"}>
                                    <div onClick={toggleSelt} className="owner_box">
                                        <div className={smallSelt ? "owner_in" : "owner_in hidd"}>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/prof_ex2.png" />
                                            <p className="in_name">
                                                Jay.Park
                                            </p>
                                            <span onClick={delSelt} className="del_x"></span>
                                        </div>
                                    </div>
                                    <div className="owner_cont owner_cont mx_h400 scroll sc_y">
                                        <div onClick={clickSelt} className="message_box">
                                            <dl className="message_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="owner">Jack</span>
                                                        <span className="shield"></span>
                                                    </div>
                                                    <div className="mess_tip bord">
                                                        <span className="bord_tip">Manager</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div onClick={clickSelt} className="message_box">
                                            <dl className="message_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="owner">Jay.Park</span>
                                                        <span className="shield"></span>
                                                    </div>
                                                    <div className="mess_tip bord">
                                                        <span className="bord_tip">Producer</span>
                                                        <span className="bord_tip">Top liner</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div onClick={clickSelt} className="message_box">
                                            <dl className="message_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="owner">Jenny Wilson</span>
                                                        <span className="spec_vl"></span>
                                                    </div>
                                                    <div className="mess_tip bord">
                                                        <span className="bord_tip">Producer</span>
                                                        <span className="bord_tip">Top liner</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div onClick={clickSelt} className="message_box">
                                            <dl className="message_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="owner">Jenny Wilson</span>
                                                        <span className="spec_vl"></span>
                                                    </div>
                                                    <div className="mess_tip bord">
                                                        <span className="bord_tip">Producer</span>
                                                        <span className="bord_tip">Top liner</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div onClick={clickSelt} className="message_box">
                                            <dl className="message_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="owner">Jenny Wilson</span>
                                                        <span className="spec_vl"></span>
                                                    </div>
                                                    <div className="mess_tip bord">
                                                        <span className="bord_tip">Producer</span>
                                                        <span className="bord_tip">Top liner</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div onClick={clickSelt} className="message_box">
                                            <dl className="message_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="owner">Jenny Wilson</span>
                                                        <span className="spec_vl"></span>
                                                    </div>
                                                    <div className="mess_tip bord">
                                                        <span className="bord_tip">Producer</span>
                                                        <span className="bord_tip">Top liner</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div onClick={clickSelt} className="message_box">
                                            <dl className="message_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="owner">Jenny Wilson</span>
                                                        <span className="spec_vl"></span>
                                                    </div>
                                                    <div className="mess_tip bord">
                                                        <span className="bord_tip">Producer</span>
                                                        <span className="bord_tip">Top liner</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </article>
                            </dd>
                        </dl>
                        <p className="pop_txt">
                            You are the last Owner of Project.name.<br />
                            Please select a new owner to maintain this project.
                        </p>
                    </div>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md3 w-48" txt="Cancel" />
                    <ButtonComponent class="btn_md3 cor w-48" txt="Confirm" />
                </div>
            </div>
        </section >
    )
}

export default PopChange;

