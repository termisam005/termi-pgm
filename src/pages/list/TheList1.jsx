import { useState } from "react";
import ProfComponent from "../../components/common/ProfComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import EtcCont from "../../components/common/EtcCont";

export default function TheList1() {

    const [rosSett, setRosSett] = useState(false);
    const openRoset = () => {
        setRosSett(true);
    }
    const closeRoset = () => {
        setRosSett(false);
    }

    return (
        <section className="the_list">
            <div className="list_space w-22">
                <dl className="message_dl">
                    <dt>
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                    </dt>
                    <dd>
                        <div className="mess_who">
                            <span className="list_who">Jin Suk Choi</span>
                        </div>
                        <div className="mess_tip">
                            <span className="word op07">Headline</span>
                        </div>
                    </dd>
                </dl>
            </div>
            <div className="list_space w-15">
                <p className="txt">02 Feb 2022</p>
            </div>
            <div className="list_space w-15">
                <p className="txt">Artist Group</p>
            </div>
            <div className="list_space w-20">
                <p className="txt">+1 (234)567-89-10</p>
            </div>
            <div className="list_space w-25">
                <p className="txt">info@ekkomusicrights</p>
            </div>
            <div className="list_space">
                <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                    <li onClick={openRoset}>Settings</li>
                    <li>Profile Page</li>
                </EtcCont>
            </div>
            <PopRosSett open={rosSett} close={closeRoset} />
        </section>
    );
}


const PopRosSett = (props) => {
    const { open, close } = props;

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent middlePop">
                <div className="pop_conts p-20">
                    <div className="dflx_jbet m-b-20">
                        <div className="ptop_txt">
                            <h1 className="ptop_title">
                                <p className="f-s-20">Rosters Settings</p>
                                <p className="f-s-13 m-t-3">Description</p>
                            </h1>
                        </div>
                        <p onClick={close} className="ptop_x"></p>
                    </div>
                    <dl className="message_dl">
                        <dt>
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                        </dt>
                        <dd>
                            <div className="mess_who">
                                <span className="list_who">Jin Suk Choi</span>
                            </div>
                            <div className="mess_tip">
                                <span className="word op07">Headline</span>
                            </div>
                        </dd>
                    </dl>
                    <article className="roster_sett">
                        <dl className="rosset_dl">
                            <dt>
                                Date of joining
                            </dt>
                            <dd>
                                <div className="selt_box">
                                    <select className="selector w-32">
                                        <option value="">20</option>
                                    </select>
                                    <select className="selector w-32">
                                        <option value="">December</option>
                                    </select>
                                    <select className="selector w-32">
                                        <option value="">2021</option>
                                    </select>
                                </div>
                            </dd>
                        </dl>
                        <dl className="rosset_dl">
                            <dt>
                                Date of Quitting work
                            </dt>
                            <dd>
                                <div className="selt_box">
                                    <select className="selector w-32">
                                        <option value="">20</option>
                                    </select>
                                    <select className="selector w-32">
                                        <option value="">December</option>
                                    </select>
                                    <select className="selector w-32">
                                        <option value="">2021</option>
                                    </select>
                                </div>
                            </dd>
                        </dl>
                        <dl className="rosset_dl">
                            <dt>
                                Primary Position
                            </dt>
                            <dd>
                                <div className="pos_space">
                                    <p className={radioState === 1 ? "pos_sett on w-33" : "pos_sett w-33"} onClick={() => radioTab(1)}>
                                        <span className="light_ball"></span>
                                        <span className="word">Artist</span>
                                    </p>
                                    <p className={radioState === 2 ? "pos_sett on w-33" : "pos_sett w-33"} onClick={() => radioTab(2)}>
                                        <span className="light_ball"></span>
                                        <span className="word">A&R</span>
                                    </p>
                                    <p className={radioState === 3 ? "pos_sett on w-33" : "pos_sett w-33"} onClick={() => radioTab(3)}>
                                        <span className="light_ball"></span>
                                        <span className="word">Group</span>
                                    </p>
                                </div>
                            </dd>
                        </dl>
                    </article>
                </div>
                <div className="pop_foot dflx_ac_jend">
                    <ButtonComponent onClick={close} class="btn_md2 m-r-15" txt="Cancel" />
                    <ButtonComponent class="btn_md2 cor" txt="Save" />
                </div>
            </div>
        </section>
    )
}
