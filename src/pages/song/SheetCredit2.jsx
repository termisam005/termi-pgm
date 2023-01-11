import { useState } from 'react';
import ProfComponent from "../../components/common/ProfComponent";
import EtcCont from "../../components/common/EtcCont";
import ButtonComponent from '../../components/common/ButtonComponent';
import ButtonWith from "../../components/common/ButtonWith";
import InputComponent from '../../components/common/InputComponent';
import BordComp from '../../components/common/BordComp';
import PopPublisher from "../../components/common/PopPublisher";
import PopRoles from "../../components/common/PopRoles";

const SheetCredit2 = (props) => {

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
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof none c50"
                                imgclass="m-t-12" src="../resources/images/prof_none_50.png" />
                        </dt>
                        <dd>
                            <div className="mess_who sheet_who">
                                <span className="who">
                                    jinbyjin
                                </span>
                                <EtcCont wrap_class="wrap_etc posab" btn_class="btn_hor_etc md">
                                    <li onClick={openSet3}>Set Profile</li>
                                    <li>Delete</li>
                                </EtcCont>
                            </div>
                            <p className="prof_txt">Society Name</p>
                        </dd>
                    </dl>
                    <div className="sheet_text">
                        <p className="ip">NRO# 100******</p>
                        <p className="roles">Roles (DDEX on based)</p>
                    </div>
                    <div className="sheet_job">
                        <h3>
                            Guide Vocals
                        </h3>
                    </div>
                </article>
                <article className="sheet_down">
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

    const [rolesPop, setRolesPop] = useState(false);
    const openRolpop = () => {
        setRolesPop(true);
    };
    const closeRolpop = () => {
        setRolesPop(false);
    }

    return (
        <section className={open ? 'pop_contents posrel active' : 'pop_contents posrel'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent pop_dial h800 scroll scroll-y">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">Set profile</h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts">
                    <div className="split_box">
                        <dl className="sheet_dl">
                            <dt className="w50">
                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                    line_class="line_over" src="../resources/images/simb_tono40.png" />
                            </dt>
                            <dd>
                                <div className="mess_who sheet_who w-100">
                                    <span className="who">
                                        Group Name
                                    </span>
                                </div>
                                <div className="mess_tip bord">
                                    <p className="comp_name">Ekko Music Right Eupope</p>
                                </div>
                                <div className="split_cont">
                                    <div className="split_txt">
                                        <span className="word">Seoul, Republic of Korea</span>
                                        <span className="word cor913 tell">+82 1012345678</span>
                                        <span className="word cor913">email@email.com</span>
                                        <div className="multi_prof">
                                            <div className="dflx_ac">
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                    line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                    line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
                <article className="sett_form">
                    <div className="sett_line">
                        <div className="left">
                            <span>Role</span>
                            <span className="ess">*</span>
                        </div>
                        <div className="setco_line bord">
                            <div className="cont">
                                <BordComp word="Guitar" />
                                <BordComp word="Lyricist" />
                                <BordComp word="Synthesizer" />
                                <BordComp word="Commputer" />
                                <BordComp word="Programming" />
                            </div>
                            <ButtonWith onClick={openRolpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                        </div>
                    </div>
                    <div className="sett_line">
                        <div className="left">
                            <span>Person 1</span>
                            <span className="ess">*</span>
                        </div>
                        <div className="setco_line">
                            <div className="cont">
                                <div className="putt_box">
                                    <InputComponent class="wrput trans mid" placeholder="IPN#" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sett_line">
                        <div className="left">NRO</div>
                        <div className="setco_line">
                            <div onClick={openNro} className="cont">
                                <div className="dflx_ac_jbet">
                                    <select className="selector wh mid">
                                        <option value="">Select NRO Society</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sett_line mgmore">
                        <div className="left">
                            <span>NRO#</span>
                        </div>
                        <div className="setco_line">
                            <div className="cont">
                                <div className="putt_box">
                                    <InputComponent class="wrput trans mid" placeholder="NRO#" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sett_line">
                        <div className="left">
                            <span>Person 2</span>
                            <span className="ess">*</span>
                        </div>
                        <div className="setco_line">
                            <div className="cont">
                                <div className="putt_box">
                                    <InputComponent class="wrput trans mid" placeholder="IPN#" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sett_line">
                        <div className="left">NRO</div>
                        <div className="setco_line">
                            <div onClick={openNro} className="cont">
                                <div className="dflx_ac_jbet">
                                    <select className="selector wh mid">
                                        <option value="">Select NRO Society</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sett_line mgmore">
                        <div className="left">
                            <span>NRO#</span>
                        </div>
                        <div className="setco_line">
                            <div className="cont">
                                <div className="putt_box">
                                    <InputComponent class="wrput trans mid" placeholder="NRO#" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sett_line">
                        <div className="left">
                            <span>Person 3</span>
                            <span className="ess">*</span>
                        </div>
                        <div className="setco_line">
                            <div className="cont">
                                <div className="putt_box">
                                    <InputComponent class="wrput trans mid" placeholder="IPN#" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sett_line">
                        <div className="left">NRO</div>
                        <div className="setco_line">
                            <div onClick={openNro} className="cont">
                                <div className="dflx_ac_jbet">
                                    <select className="selector wh mid">
                                        <option value="">Select NRO Society</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sett_line mgmore">
                        <div className="left">
                            <span>NRO#</span>
                        </div>
                        <div className="setco_line">
                            <div className="cont">
                                <div className="putt_box">
                                    <InputComponent class="wrput trans mid" placeholder="NRO#" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sett_line">
                        <div className="left">
                            <span>Person 4</span>
                            <span className="ess">*</span>
                        </div>
                        <div className="setco_line">
                            <div className="cont">
                                <div className="putt_box">
                                    <InputComponent class="wrput trans mid" placeholder="IPN#" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sett_line">
                        <div className="left">NRO</div>
                        <div className="setco_line">
                            <div onClick={openNro} className="cont">
                                <div className="dflx_ac_jbet">
                                    <select className="selector wh mid">
                                        <option value="">Select NRO Society</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sett_line mgmore">
                        <div className="left">
                            <span>NRO#</span>
                        </div>
                        <div className="setco_line">
                            <div className="cont">
                                <div className="putt_box">
                                    <InputComponent class="wrput trans mid" placeholder="NRO#" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sett_line">
                        <div className="left">
                            <span>Person 5</span>
                            <span className="ess">*</span>
                        </div>
                        <div className="setco_line">
                            <div className="cont">
                                <div className="putt_box">
                                    <InputComponent class="wrput trans mid" placeholder="IPN#" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sett_line">
                        <div className="left">NRO</div>
                        <div className="setco_line">
                            <div onClick={openNro} className="cont">
                                <div className="dflx_ac_jbet">
                                    <select className="selector wh mid">
                                        <option value="">Select NRO Society</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sett_line mgmore">
                        <div className="left">
                            <span>NRO#</span>
                        </div>
                        <div className="setco_line">
                            <div className="cont">
                                <div className="putt_box">
                                    <InputComponent class="wrput trans mid" placeholder="NRO#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <p className="line1"></p>
                <div className="pop_foot result">
                    <div className="result_bet">
                        <p className="agreed">
                            <span>Creation Date</span>
                            <span className="m-l-5">:</span>
                            <span className="result">13 Aug 2021</span>
                        </p>
                        <p className="agreed">
                            <span>Last updated</span>
                            <span className="m-l-5">:</span>
                            <span className="result">13 Aug 2021</span>
                        </p>
                    </div>
                    <ButtonComponent onClick={close} class="btn_md3 w-100" txt="Save" />
                </div>
            </div>
            <PopPublisher open={popNro} close={closeNro} popname={'Select NRO'} />
            <PopRoles open={rolesPop} close={closeRolpop} />
        </section>
    )
}

export default SheetCredit2;