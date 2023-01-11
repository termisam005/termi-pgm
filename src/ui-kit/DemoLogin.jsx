import { Link } from "react-router-dom";
import InputComponent from "../components/common/InputComponent";
import ButtonComponent from "../components/common/ButtonComponent";
import ButtonWith from "../components/common/ButtonWith";

export default function DemoLogin() {
    return (
        <div className="wrap wrap_login">
            <section className="wrap_login">

                <article className="zone_log">
                    <section className="log_text">
                        <div className="the_title">
                            <h1>
                                <span>Welcome to</span>
                                <img src="../resources/images/logo_big.png" alt="spawrk" />
                            </h1>
                            <p>Meet the artists of the world now!</p>
                        </div>
                    </section>

                    <section className="log_box">
                        <div className="logbox_in">

                            <article className="form_group form_logbox">
                                <div className="log_conts">
                                    <div className="put_cont m-b-25">
                                        <p className="put_title">E-mail</p>
                                        <div className="putt_box">
                                            <InputComponent type="text" class="wrput" placeholder="admin" />
                                        </div>
                                    </div>
                                    <div className="put_cont">
                                        <p className="put_title">Password</p>
                                        <div className="putt_box see">
                                            <span className="put_mark">
                                                <img src="../resources/images/eye_gray.png" alt="see" />
                                            </span>
                                            <InputComponent type="password" class="wrput" placeholder="passwod" />
                                        </div>
                                    </div>
                                </div>
                                <div className="log_button_conts">
                                    <div className="m-b-15">
                                        <button type="submit" className="btn_lg1 cor">
                                            <Link to="/DemoMain">Login</Link>
                                        </button>
                                    </div>
                                    <div className="m-b-15">
                                        <ButtonWith class="btn_society" spant="Login in with Google" src="../resources/images/so_facebook.png" />
                                    </div>
                                    <div className="m-b-15">
                                        <ButtonWith class="btn_society" spant="Login in with Facebook" src="../resources/images/so_google.png" />
                                    </div>
                                    <div className="m-b-15">
                                        <ButtonWith class="btn_society" spant="Sign in with Apple" src="../resources/images/so_apple.png" />
                                    </div>
                                </div>
                                <div className="line_cont">
                                    <span className="word">Don’t have an account?</span>
                                    <p className="line1"></p>
                                </div>
                                <div className="button_line">
                                    <ButtonComponent class="btn_lg1" txt="Create a new account" />
                                </div>
                            </article>

                        </div>
                    </section>
                </article>

            </section>
        </div >
    );
}