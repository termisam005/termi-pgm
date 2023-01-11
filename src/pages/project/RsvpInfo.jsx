import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import HeaderTrans from "../../components/header/HeaderTrans";
import InputComponent from "../../components/common/InputComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import ImgComponent from "../../components/common/ImgComponent";
import EtcCont from "../../components/common/EtcCont";
import ProfComponent from "../../components/common/ProfComponent";
import ListProducer from "../list/ListProducer";
import BordComp from "../../components/common/BordComp";
import PopRoles from "../../components/common/PopRoles";
import MarkFavorite from "../../components/common/MarkFavorite";



export default function CreateProject3() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [recruit, setRecruit] = useState(false);
    const toggleRec = () => {
        setRecruit(!recruit);
        let switRoom = document.querySelector('.swith_room');
        switRoom.classList.toggle('on');
    }

    const [rolesPop, setRolesPop] = useState(false);
    const openRolpop = () => {
        setRolesPop(true);
    };
    const closeRolpop = () => {
        setRolesPop(false);
    }

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };


    return (
        <div className="wrap_login">

            <HeaderTrans logo_class="logo_none" src="../resources/images/logo.png" />

            <section className="rolse_box official_box filer">
                <EtcCont wrap_class="wrap_etc sm off_etc" btn_class="btn_hor_etc sm" delli="Delete">
                    <li>Edit</li>
                </EtcCont>
                <div className="off_mark">
                    <MarkFavorite />
                </div>
                <div className="rolse_in">

                    <article className="roles_title">
                        <h1>
                            <span onClick={goBack} className="go_back">
                                <img src="../resources/images/arr_back_wh.png" alt="link back" />
                            </span>
                            <span className="big">Need Music producer</span>
                        </h1>
                    </article>

                    <article className="official_contain">
                        <section className="off_contain50">
                            <div className="form_verify">

                                <article className="private_wrap">
                                    <div className="w-35">
                                        <div className="members">
                                            <p className="priv_name">
                                                <span className="lock12"></span>
                                                <span>Private project</span>
                                            </p>
                                            <div className="multi_prof">
                                                <div className="dflx_ac">
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                        line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                        line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                        line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                        line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                </div>
                                                <p className="mul_pr_txt">
                                                    <span className="cor913 m-r-5">4</span>
                                                    <span>Connections work here</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-35">
                                        <div className="members">
                                            <div className="multi_prof">
                                                <div className="dflx_ac">
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                </div>
                                                <p className="mul_pr_txt">
                                                    <span className="cor994 m-r-5">5</span>
                                                    <span>Applicants</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-30">
                                        <div className="dflx_right">
                                            <ButtonComponent class="btn_md1 cor" txt="Confirm" />
                                            <div className="avail_line w160">
                                                <div onClick={toggleRec} className={recruit ? "recru_line on" : "recru_line"}>
                                                    <span className="word">Recruiting</span>
                                                    <div className="switch_zone">
                                                        <div className="swith_room">
                                                            <input className="switch-checkbox" type="checkbox" />
                                                            <label className="switch-label">
                                                                <span className="swt_sun"></span>
                                                                <span className="swt_moon"></span>
                                                                <span className="switch-button" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                <article className="rsvp_cont">
                                    <dl className="dl_title">
                                        <dt>Description</dt>
                                    </dl>
                                    <section className="desc_cont">
                                        <ListProducer />
                                        <textarea className="text_area desc_area" placeholder="Please specify what your project is for.">
                                        </textarea>
                                    </section>
                                </article>

                                <article className="rsvp_cont">
                                    <article className="form_bord">
                                        <div className="top">
                                            <p>Creative Roles</p>
                                        </div>
                                        <div className="cont">
                                            <div className="bord_wrap">
                                                <BordComp word="Author" />
                                                <BordComp word="Arranger" />
                                                <BordComp word="Arranger" />
                                            </div>
                                            <button onClick={openRolpop} className="btsq bt20 norm">
                                                <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                                <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                            </button>
                                        </div>
                                    </article>
                                    <article className="form_bord">
                                        <div className="top">
                                            <p>Music Genres</p>
                                        </div>
                                        <div className="cont">
                                            <div className="bord_wrap">
                                                <BordComp word="Dance" />
                                                <BordComp word="K-POP" />
                                                <BordComp word="K-POP" />
                                                <BordComp word="Dance" />
                                                <BordComp word="K-POP" />
                                            </div>
                                            <button onClick={openRolpop} className="btsq bt20 norm">
                                                <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                                <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                            </button>
                                        </div>
                                    </article>
                                    <article className="form_bord">
                                        <div className="top">
                                            <p>Location</p>
                                        </div>
                                        <select className="selector">
                                            <option value="">Physical</option>
                                            <option value="">Digital</option>
                                        </select>
                                    </article>
                                </article>

                                <article className="file_container">
                                    <section className="bordnemo_188">
                                        <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                            <li>Open</li>
                                        </EtcCont>
                                        <div className="bordnemo_movie">
                                            <div className="box">
                                                <ImgComponent class="img_cover" src="../resources/images/cover_ex_butter.jpg" />
                                            </div>
                                        </div>
                                    </section>
                                    <section className="bordnemo_188">
                                        <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                            <li>Open</li>
                                        </EtcCont>
                                        <div className="bordnemo_movie">
                                            <div className="box">
                                                <ImgComponent class="img_cover" src="../resources/images/project_ex1.jpg" />
                                            </div>
                                        </div>
                                    </section>
                                    <section className="bordnemo_188">
                                        <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                            <li>Open</li>
                                        </EtcCont>
                                        <div className="bordnemo_in">
                                            <article className="nemo_vertical">
                                                <div className="nemo_over">
                                                    <p className="icon">
                                                        <ImgComponent src="../resources/images/file_share.png" />
                                                    </p>
                                                    <h3>Share URL</h3>
                                                </div>
                                                <div className="nemo_under">
                                                    <p className="nemod_p">
                                                        https://www.notion.so/7454
                                                        60ec51374adaadaa4f08696
                                                        81baf?v=815ea9e56981430
                                                        5986bbebb6db0
                                                    </p>
                                                </div>
                                            </article>
                                        </div>
                                    </section>
                                    <section className="bordnemo_188">
                                        <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                            <li>Open</li>
                                        </EtcCont>
                                        <div className="bordnemo_in">
                                            <article className="nemo_vertical">
                                                <div className="nemo_over">
                                                    <p className="icon">
                                                        <ImgComponent src="../resources/images/file_polder.png" />
                                                    </p>
                                                    <h3>File name.jpg</h3>
                                                </div>
                                                <div className="nemo_under">
                                                    <p className="nemod_p">Astor Piazzola</p>
                                                    <p className="nemod_p">
                                                        <span>Validity period</span>
                                                        <span className="m-l-2 m-r-2">:</span>
                                                        <span>07.07.2021</span>
                                                    </p>
                                                    <p className="nemod_p">
                                                        <span>3.8</span>
                                                        <span className="m-l-3">MB</span>
                                                    </p>
                                                </div>
                                            </article>
                                        </div>
                                    </section>
                                    <section className="bordnemo_188">
                                        <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                            <li>Open</li>
                                        </EtcCont>
                                        <div className="bordnemo_in">
                                            <article className="nemo_vertical">
                                                <div className="nemo_over">
                                                    <p className="icon">
                                                        <ImgComponent src="../resources/images/file_polder.png" />
                                                    </p>
                                                    <h3>File name.mp4</h3>
                                                </div>
                                                <div className="nemo_under">
                                                    <p className="nemod_p">Astor Piazzola</p>
                                                    <p className="nemod_p">
                                                        <span>Validity period</span>
                                                        <span className="m-l-2 m-r-2">:</span>
                                                        <span>07.07.2021</span>
                                                    </p>
                                                    <p className="nemod_p">
                                                        <span>3.8</span>
                                                        <span className="m-l-3">MB</span>
                                                    </p>
                                                </div>
                                            </article>
                                        </div>
                                    </section>

                                    <section className="selform_cont m-b-0">
                                        <dl className="dl_title">
                                            <dd>Budgeted or Terms Only?</dd>
                                        </dl>
                                        <article className="form_sel dflx_ac">
                                            <div className={radioState === 1 ? "check_line on" : "check_line"} onClick={() => radioTab(1)}>
                                                <p className="checkbox circ">
                                                    <span className="circle"></span>
                                                </p>
                                                <span className="check_word">Terms</span>
                                            </div>
                                            <p className="p-10"></p>
                                            <div className={radioState === 2 ? "check_line on" : "check_line"} onClick={() => radioTab(2)}>
                                                <p className="checkbox circ">
                                                    <span className="circle"></span>
                                                </p>
                                                <span className="check_word">Distribution (%)</span>
                                            </div>
                                            <p className="p-10"></p>
                                            <div className={radioState === 3 ? "check_line on" : "check_line"} onClick={() => radioTab(3)}>
                                                <p className="checkbox circ">
                                                    <span className="circle"></span>
                                                </p>
                                                <span className="check_word">Budget</span>
                                            </div>
                                        </article>
                                        <article className={radioState === 1 ? "fmsel_cont on" : "fmsel_cont"}>
                                        </article>
                                        <article className={radioState === 2 ? "fmsel_cont on" : "fmsel_cont"}>
                                            <div className="dpflx">
                                                <div className="w120">
                                                    <p className="m-b-5">Min</p>
                                                    <InputComponent type="number" class="wrput mid" />
                                                </div>
                                                <p className="p-10"></p>
                                                <div className="w120">
                                                    <p className="m-b-5">Max</p>
                                                    <InputComponent type="number" class="wrput mid" />
                                                </div>
                                            </div>
                                        </article>
                                        <article className={radioState === 3 ? "fmsel_cont on" : "fmsel_cont"}>
                                            <div className="dpflx">
                                                <div className="w120">
                                                    <p className="m-b-5">Min</p>
                                                    <InputComponent type="number" class="wrput mid" />
                                                </div>
                                                <p className="p-10"></p>
                                                <div className="w120">
                                                    <p className="m-b-5">Max</p>
                                                    <InputComponent type="number" class="wrput mid" />
                                                </div>
                                            </div>
                                        </article>
                                    </section>
                                </article>
                            </div>
                        </section>
                    </article>

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <ButtonComponent onClick={goBack} class="btn_md1 cor" txt="Save & close" />
                        </div>
                    </article>
                </div>
            </section>

            <PopRoles open={rolesPop} close={closeRolpop} />
        </div>
    )
}

