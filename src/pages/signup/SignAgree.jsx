import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import ProfComponent from "../../components/common/ProfComponent";
import ImgComponent from "../../components/common/ImgComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import AgreeComp from "../../components/common/AgreeComp";


export default function SignAgree() {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };


    return (
        <div className="wrap_login">

            <HeaderTrans logo_class="logo_none" src="../resources/images/logo.png" />

            <article className="zone_log">
                <section className="log_text">

                    <article className="signup_conts">
                        <h1 className="signup_title">
                            Success Stories
                        </h1>
                        <div className="contact">
                            <button className="btsq bt20">
                                <img className="bticon" src="../resources/images/sv_arr20_left_wh.svg" alt="images" />
                                <img className="bticon_on" src="../resources/images/sv_arr20_left_cor.svg" alt="images" />
                            </button>
                            <button className="btsq bt20">
                                <img className="bticon" src="../resources/images/sv_arr20_right_wh.svg" alt="images" />
                                <img className="bticon_on" src="../resources/images/sv_arr20_right_cor.svg" alt="images" />
                            </button>
                        </div>
                        <section className="signup_record">
                            <div className="message_box">
                                <dl className="message_dl">
                                    <dt>
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                            line_class="line_over" src="../resources/images/prof_ex2.png" />
                                    </dt>
                                    <dd>
                                        <div className="mess_who">
                                            <span className="who">Jay.Park</span>
                                            <span className="time"></span>
                                        </div>
                                        <div className="mess_tip bord">
                                            <span className="bord_tip">Producer</span>
                                            <span className="bord_tip">Top liner</span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="signup_texts">
                                <p className="texts">
                                    "i've been a member for years now...<br />
                                    i love the team, everyone is super genuine & trying to help artists navigate a really tricky area of the industry.
                                    really appreciate what you guys do!"<br /><br />
                                    "i've been a member for years now...<br />
                                    i love the team, everyone is super genuine & trying to help artists navigate a really tricky area of the industry.
                                    really appreciate what you guys do!"<br /><br />
                                    "i've been a member for years now...<br />
                                    i love the team, everyone is super genuine & trying to help artists navigate a really tricky area of the industry.
                                    really appreciate what you guys do!"
                                </p>
                            </div>
                        </section>
                        <div className="signup_with m-t-40">
                            <p className="with_img">
                                <ImgComponent src="../resources/images/with_ek.png" />
                            </p>
                            <p className="with_img">
                                <ImgComponent src="../resources/images/with_kobalt.png" />
                            </p>
                            <p className="with_img">
                                <ImgComponent src="../resources/images/with_gr.png" />
                            </p>
                            <p className="with_img">
                                <ImgComponent src="../resources/images/with_univer.png" />
                            </p>
                            <p className="with_img">
                                <ImgComponent src="../resources/images/with_ses.png" />
                            </p>
                            <p className="with_img">
                                <ImgComponent src="../resources/images/with_tono.png" />
                            </p>
                        </div>
                    </article>
                </section>

                <section className="log_box">
                    <div className="logbox_in">
                        <article className="form_group">
                            <div className="login_title">
                                <h1>
                                    <span onClick={goBack} className="go_back">
                                        <img src="../resources/images/arr_back_wh.png" alt="link back" />
                                    </span>
                                    <span>Sign up</span>
                                </h1>
                                <p className="logtlt_p">
                                    Already have an account? <Link to="/Login1">Login</Link>
                                </p>
                            </div>
                            <div className="signup_zone">
                                <div className="putt_box">
                                    <AgreeComp class="put_mess">
                                        <span className="check_word">
                                            I would like to receive marketing communications regarding Sparwk products, services, and events.
                                            I can unsubscribe at any time.
                                        </span>
                                    </AgreeComp>
                                    <AgreeComp class="put_mess">
                                        <span className="check_word">
                                            I agree that Sparwk may <span className="cor913">provide my personal information to third parties</span>
                                        </span>
                                    </AgreeComp>
                                    <p className="put_title m-t-15">Required</p>
                                    <AgreeComp class="put_mess">
                                        <span className="check_word">
                                            <span className="ess">*</span>I agree to the <span className="cor913">collection and use of my personal information</span>
                                        </span>
                                    </AgreeComp>
                                    <AgreeComp class="put_mess">
                                        <span className="check_word">
                                            <span className="ess">*</span>I agree that Sparwk may <span className="cor913">provide my personal information to Sparwk's service providers</span>
                                        </span>
                                    </AgreeComp>
                                    <AgreeComp class="put_mess">
                                        <span className="check_word">
                                            <span className="ess">*</span>I agree that Sparwk may <span className="cor913">transfer my personal information abroad.</span>
                                        </span>
                                    </AgreeComp>
                                </div>
                                <div className="log_button_conts">
                                    <Link to="/MainDashboard">
                                        <ButtonComponent type="submit" class="btn_lg1" txt="Agree" />
                                    </Link>
                                </div>
                                <p className="agree_text">
                                    By clicking agree, you agree to the
                                    <a className="cor913">Term Of Use, Privacy Policy, and Cookie Policy.</a>
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
            </article>

        </div >
    )
}