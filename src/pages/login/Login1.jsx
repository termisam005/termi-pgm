import { Link } from "react-router-dom";
import { useState } from "react";
import InputComponent from "../../components/common/InputComponent";
import ButtonWith from "../../components/common/ButtonWith";
import HeaderTrans from "../../components/header/HeaderTrans";

export default function Login1() {
    const [toggleState, setToggleState] = useState(false);

    const toggleCheck = () => {
        setToggleState(!toggleState);
    }

    return (
        <div className="wrap_login">

            <HeaderTrans logo_class="logo_none" src="../resources/images/logo.png" />

            <article className="zone_log">
                <section className="log_text">
                    <div className="the_title">
                        <h1>
                            <img src="../resources/images/logo_mid.png" alt="spawrk" />
                        </h1>
                        <p>YOU DESERVE BETTER</p>
                    </div>
                </section>

                <section className="log_box">
                    <div className="logbox_in">
                        <article className="form_group">
                            <div className="login_title">
                                <h1>Sign in</h1>
                                <p className="logtlt_p">
                                    New user? <Link to="/Signup1">Sign up</Link>
                                </p>
                            </div>
                            <div className="log_conts">
                                <div className="put_cont m-b-25">
                                    <div className="putt_box">
                                        <InputComponent type="text" class="wrput" placeholder="E-mail Address" />
                                        <div className="put_mess p-t-15">
                                            <div className={toggleState ? "check_line on" : "check_line"} onClick={toggleCheck}>
                                                <p className="checkbox">
                                                    <img src="../resources/images/sv_check_cor.svg" alt="check" />
                                                </p>
                                                <span className="check_word">Remember ID</span>
                                            </div>
                                            <Link to="/ResetPw">
                                                <span className="sp_viol">
                                                    Forgot your Email Address?
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="log_button_conts">
                                <div className="m-b-12">
                                    <Link to="/Login2">
                                        <button type="submit" className="btn_lg1 cor">
                                            Continue
                                        </button>
                                    </Link>
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