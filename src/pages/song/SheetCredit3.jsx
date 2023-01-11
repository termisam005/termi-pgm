import { useState } from 'react';
import ProfComponent from "../../components/common/ProfComponent";
import EtcCont from "../../components/common/EtcCont";
import ButtonComponent from '../../components/common/ButtonComponent';
import ButtonWith from "../../components/common/ButtonWith";
import InputComponent from '../../components/common/InputComponent';
import BordComp from '../../components/common/BordComp';
import PopPublisher from "../../components/common/PopPublisher";
import PopRoles from "../../components/common/PopRoles";

const SheetCredit3 = (props) => {

    const [popUpsSet3, setpopSet3] = useState(false);
    const openSet3 = () => {
        setpopSet3(true);
    }
    const closeSet3 = () => {
        setpopSet3(false);
    }

    return (
        <section className={props.sheet_class}>
            <div className="sheet_wrap">
                <article className="sheet_over">
                    <dl className="sheet_dl">
                        <dt className="w50">
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                        </dt>
                        <dd>
                            <div className="mess_who sheet_who">
                                <span className="who">
                                    Stray Kids
                                </span>
                                <EtcCont wrap_class="wrap_etc posab" btn_class="btn_hor_etc md">
                                    <li onClick={openSet3}>Set Profile</li>
                                    <li>Delete</li>
                                </EtcCont>
                            </div>
                            <p className="prof_txt">KOMCA</p>
                        </dd>
                    </dl>
                    <div className="sheet_text">
                        <p className="ip">NRO# 100******</p>
                        <p className="roles">Roles (DDEX on based)</p>
                    </div>
                    <div className="sheet_job">
                        <h3>
                            Guitar, Piano, Synthesizer, Computerprogrammer
                        </h3>
                    </div>
                </article>
                <article className="sheet_down">
                    <div className="multi_prof p-t-0">
                        <div className="dflx_ac">
                            <div className="dflx_ac">
                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                    line_class="line_over" src="../resources/images/prof_ex2.png" />
                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                    line_class="line_over" src="../resources/images/prof_ex2.png" />
                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                    line_class="line_over" src="../resources/images/prof_ex2.png" />
                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                    line_class="line_over" src="../resources/images/prof_ex2.png" />
                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                    line_class="line_over" src="../resources/images/prof_ex2.png" />
                            </div>
                            <p className="co_writers f-s-12">
                                <span className="cor994">5</span>
                                <span className="m-l-5">connections work here</span>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
            <PopSet3 open={popUpsSet3} close={closeSet3} />
        </section>
    )
}

const PopSet3 = (props) => {
    const { open, close } = props;

    const [popNro, setPopNro] = useState(false);
    const openNro = () => {
        setPopNro(true);
    }
    const closeNro = () => {
        setPopNro(false);
    }

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body middlePop pop_ab_cent">
                <article className="set_top">
                    <dl className="message_dl connect_dl">
                        <dt>
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                        </dt>
                        <dd className="conn_dd set">
                            <div className="mess_who">
                                <span className="who f-s-16">Marcus</span>
                            </div>
                            <select className="selector wh mini vl w180">
                                <option value="Role">Multi Select Role</option>
                                <option value="Ensemble">Ensemble</option>
                                <option value="Musician">Musician</option>
                                <option value="Vocal">Vocal</option>
                            </select>
                        </dd>
                    </dl>
                </article>
                <p className="line1"></p>
                <div className="pop_conts">
                    <article className="set_wrap">
                        <div className="set_info">
                            <div className="info_line">
                                <p className="call">IPN#</p>
                                <p className="txt cor913">W05*****</p>
                            </div>
                            <div className="info_line">
                                <p className="call">Location</p>
                                <p className="txt">Trondheim, Norway</p>
                            </div>
                            <div className="info_line">
                                <p className="call">Phone</p>
                                <p className="txt">+46-8336910</p>
                            </div>
                            <div className="info_line">
                                <p className="call">Email</p>
                                <p className="txt">nermin@dsignmusic.com</p>
                            </div>
                            <div className="info_line w-100">
                                <p className="call">Language</p>
                                <p className="txt">Norwegian, Swedish, Danish, English</p>
                            </div>
                        </div>
                        <div className="set_society">
                            <article className="society_line">
                                <dl className="message_dl connect_dl">
                                    <dt>
                                        <div className="hover_prof">
                                            <div onClick={openNro} className="co_plus">
                                                <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                            </div>
                                        </div>
                                    </dt>
                                    <dd className="conn_dd set">
                                        <div className="mess_who">
                                            <span className="who">Empty</span>
                                        </div>
                                        <p className="tip_word">
                                            <span className="word">Neighboring rights Society</span>
                                        </p>
                                    </dd>
                                </dl>
                                <div className="nro_set w-50">
                                    <p className="nro_tlt">NRO Number</p>
                                    <input className="nro_put" type="text" />
                                </div>
                            </article>
                        </div>
                    </article>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <div className="p-l-70">
                        <div className="co_period p-0 m-t-5">
                            <span className="m-r-5">Creation Date :</span>
                            <span className="cor994">13 Aug 2021</span>
                        </div>
                        <div className="co_period p-0 m-t-5">
                            <span className="m-r-5">Last updated :</span>
                            <span className="cor994">13 Aug 2021</span>
                        </div>
                    </div>
                    <ButtonComponent onClick={close} class="btn_md2" txt="Save" />
                </div>
            </div>
            <PopPublisher open={popNro} close={closeNro} popname={'Select Society'} />
        </section>
    )
}

export default SheetCredit3;