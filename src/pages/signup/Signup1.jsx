import { Link } from "react-router-dom";
import ButtonWith from "../../components/common/ButtonWith";
import ButtonComponent from "../../components/common/ButtonComponent";
import ProfComponent from "../../components/common/ProfComponent";
import ImgComponent from "../../components/common/ImgComponent";
import HeaderTrans from "../../components/header/HeaderTrans";

export default function Signup1() {

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
                                <h1>Sign up</h1>
                                <p className="logtlt_p">
                                    Already have an account? <Link to="/Login1">Sign in</Link>
                                </p>
                            </div>
                            <div className="log_button_conts">
                                <div className="cent_btzone">
                                    <div className="m-t-20">
                                        <Link to="/Signup2">
                                            <ButtonComponent type="submit" class="btn_lg1 cor" txt="Sign up with your Email address" />
                                        </Link>
                                    </div>
                                    <div className="m-t-20 div_official">
                                        <Link to="/CreateOff1">
                                            <ButtonComponent class="btn_lg1" txt="Create a Official Page for a Group or business" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="line_cont">
                                    <span className="word">or</span>
                                    <p className="line1"></p>
                                </div>
                                <div className="m-b-16">
                                    <ButtonWith class="btn_society" spant="Login in with Google" src="../resources/images/so_facebook.png" />
                                </div>
                                <div className="m-b-16">
                                    <ButtonWith class="btn_society" spant="Login in with Facebook" src="../resources/images/so_google.png" />
                                </div>
                                <div className="m-b-16">
                                    <ButtonWith class="btn_society" spant="Sign in with Apple" src="../resources/images/so_apple.png" />
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </article>

        </div >
    )
}