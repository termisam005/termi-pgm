import { Link } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../common/ButtonComponent";
import ButtonWith from "../common/ButtonWith";
import DemoNav from "./DemoNav";
import Fixmenu from "./Fixmenu";
import Grmessage from "./Grmessage";
import ProfComponent from "../common/ProfComponent";
import CircleCont from "../common/CircleCont";


export default function Header() {
    // const [isMessage, setMessage] = useState(false);
    // const onMess = () => {
    //     setMessage(!isMessage);
    // }

    const [circleCont, setCircleCont] = useState(false);
    const circleOn = () => {
        setCircleCont(true);
    }
    const circleOff = () => {
        setCircleCont(false);
    }

    const [popTime, setPopTime] = useState(false);
    const openTime = () => {
        setPopTime(true);
    }
    const closeTime = () => {
        setPopTime(false);
    }


    return (
        <header>

            <div className="header_line">

                <section className="header_left">
                    <h1 className="hd_logo">
                        <Link to="/MainDashboard" title="Sparwk">
                            <img src="../resources/images/logo.png" alt="Sparwk" />
                        </Link>
                    </h1>
                    {/* <DemoNav /> */}
                </section>

                <section className="header_right">

                    <article className="hd_icline">
                        <div onClick={openTime} className="hroom">
                            <div className="circle_p">
                                <img src="../resources/images/clock.png" alt="message" />
                            </div>
                        </div>
                        <div className="hroom">
                            <div className="circle_p btn_message">
                                <span className="hc_cout">2</span>
                                <img src="../resources/images/talk.png" alt="message" />
                            </div>
                        </div>
                        <CircleCont sign_class="sign" src="../resources/images/bell.png"></CircleCont>

                        <div className={circleCont ? "hcircle on" : "hcircle"}>
                            <div className="circle_p" onClick={circleOn}>
                                <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof none c32"
                                    line_class="line_over" src="../resources/images/prof_head_32.png" />
                            </div>
                            <section className="hidd_zone">
                                <div className="hidd_dark" onClick={circleOff}></div>
                                <article className="pers_contain posab">
                                    <div className="pers_box pers_top">
                                        <div className="mini_prof">
                                            <div className="posrel">
                                                <span className="hc_cout">32</span>
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                            </div>
                                        </div>
                                        <div className="dflx_jbet w-100">
                                            <section className="recomt_wrap">
                                                <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof in c50"
                                                    line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                <span className="crown"></span>
                                            </section>
                                        </div>
                                        <div className="ctr_name">
                                            <h3 className="title">Jin Suk Choi</h3>
                                            <span className="shield"></span>
                                        </div>
                                        <div className="ctr_text hauto">
                                            <p className="record op06">
                                                Creator, Musician
                                            </p>
                                            <p className="record">
                                                jinbyjin@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <p className="line1"></p>
                                    <div className="pers_box">
                                        <div className="pers_line mini">
                                            <Link to="/CreateProfile1">
                                                <span className="m-r-5">
                                                    <img src="../resources/images/pers_vol_mini.png" alt="image" />
                                                </span>
                                                <span className="f-s-13">Add another Profile</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="line1"></p>
                                    <div className="pers_box">
                                        <div className="pers_line">
                                            <Link to="/SettingsAccount">
                                                <span>Account</span>
                                            </Link>
                                        </div>
                                        <div className="pers_line">
                                            <Link to="/SettingsAvail">
                                                <span>Available & Privacy</span>
                                            </Link>
                                        </div>
                                        <div className="pers_line">
                                            <Link to="/SettingsProfile">
                                                <span>Profile</span>
                                            </Link>
                                        </div>
                                        <div className="pers_line">
                                            <Link to="/SettingsID">
                                                <span>Person ID</span>
                                            </Link>
                                        </div>
                                        <div className="pers_line">
                                            <Link to="/">
                                                <span>Help</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="line1"></p>
                                    <div className="pers_box">
                                        <div className="pers_line">
                                            <Link to="/">
                                                <span className="bold">Log out</span>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </section>

                        </div>

                        {/* <div className="hroom">
                            <div className="circle_light">
                                <img src="../resources/images/img_btn_dark.png" alt="light button" />
                            </div>
                        </div> */}
                    </article>

                </section>

            </div>

            <Fixmenu />

            {/* <section className={isMessage ? "gr_message see" : "gr_message"}>
                <Grmessage />
            </section> */}

            <PopTimeZone open={popTime} close={closeTime} />
        </header>
    );
}


const PopTimeZone = (props) => {
    const { open, close } = props;

    const [auto, setAuto] = useState(false);
    const toggleAuto = () => {
        setAuto(!auto);
        let atRoom = document.querySelector('.auto_room');
        atRoom.classList.toggle('on');
    };

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className={"pop_bg"}></div>
            <div className={"pop_body middlePop pop_ab_cent"}>
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">
                            Time Zone
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <div className="pf_txt p-15 p-t-0">
                    <div className="put_tip">
                        <img src="../resources/images/feel_wh.png" alt="feel" />
                    </div>
                    <p>Description</p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts">
                    <div className="pf_under">
                        <section className="the_feed m-t-10">
                            <article className="time_bord">
                                <div className="cont">
                                    <p className="title">
                                        Current date and time
                                    </p>
                                    <div className="result">
                                        <span>1:19 PM, Tuesday, 23 Nov 2021</span>
                                    </div>
                                </div>
                            </article>
                            <article className="time_bord">
                                <div className="cont">
                                    <p className="title">
                                        Set the time automatically
                                    </p>
                                    <div className="result">
                                        <div className="avail_line onoff">
                                            <div onClick={toggleAuto} className={auto ? "recru_line on" : "recru_line"}>
                                                <div className="avail_cont">
                                                    <span className="signal">Off</span>
                                                    <span className="signal on">On</span>
                                                </div>
                                                <div className="switch_zone">
                                                    <div className="auto_room">
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
                            <article className="time_bord">
                                <div className="cont">
                                    <p className="title">
                                        Standard time
                                    </p>
                                    <div className="result">
                                        <span>(UTC+9) Seoul</span>
                                        <ButtonWith class="btsq bt20 norm m-l-15" src="../resources/images/sv_arr20_plus_wh.png" />
                                    </div>
                                </div>
                            </article>
                        </section>
                        <section className="the_feed">
                            <article className="time_bord">
                                <div className="cont">
                                    <p className="title">
                                        Time Zone 1
                                    </p>
                                    <div className="result">
                                        <span>(UTC+9) Chicaco</span>
                                        <ButtonWith class="btsq bt20 norm m-l-15" src="../resources/images/sv_arr20_plus_wh.png" />
                                    </div>
                                </div>
                            </article>
                        </section>
                        <section className="the_feed">
                            <article className="time_bord">
                                <div className="cont">
                                    <p className="title">
                                        Time Zone 2
                                    </p>
                                    <div className="result">
                                        <span>(UTC+9) Tokyo</span>
                                        <ButtonWith class="btsq bt20 norm m-l-15" src="../resources/images/sv_arr20_plus_wh.png" />
                                    </div>
                                </div>
                            </article>
                        </section>
                        <section className="the_feed">
                            <article className="time_bord">
                                <div className="cont">
                                    <p className="title">
                                        Time Zone 3
                                    </p>
                                    <div className="result">
                                        <span>(UTC+9) London</span>
                                        <ButtonWith class="btsq bt20 norm m-l-15" src="../resources/images/sv_arr20_plus_wh.png" />
                                    </div>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md2" txt="Cancel" />
                    <ButtonComponent onClick={close} class="btn_md2 cor" txt="Save" />
                </div>
            </div>
        </section>
    )
}

