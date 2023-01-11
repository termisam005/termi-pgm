import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import InputComponent from "../../components/common/InputComponent";
import HeaderTrans from "../../components/header/HeaderTrans";

export default function Login2() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

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
                                <h1>
                                    <span onClick={goBack} className="go_back">
                                        <img src="../resources/images/arr_back_wh.png" alt="link back" />
                                    </span>
                                    <span>Enter your password</span>
                                </h1>
                            </div>
                            <div className="log_conts">
                                <div className="put_cont m-b-25">
                                    <div className="putt_box see">
                                        <span className="put_mark">
                                            <img src="../resources/images/eye_gray.png" alt="see" />
                                        </span>
                                        <InputComponent type="password" class="wrput" placeholder="Password" />
                                        <div className="put_mess p-t-15">
                                            <div className="switch_zone">
                                                <Switch />
                                                <span>Stay signed in</span>
                                            </div>
                                            <Link to="/ResetPw">
                                                <span className="sp_viol">
                                                    Reset Your Password
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="log_button_conts">
                                <div className="m-b-12">
                                    <Link to="/Login3">
                                        <button type="submit" className="btn_lg1 cor">
                                            Continue
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </article>
                        <div className="go_different">
                            <Link to="/Login1">
                                <span>
                                    Sign in to a different account
                                </span>
                                <img className="diff_img" src="../resources/images/sv_arr20_right_wh.svg" alt="go link" />
                            </Link>
                        </div>
                    </div>
                </section>
            </article>

        </div >
    )
}

const Switch = () => {
    const [checked, setChecked] = useState(false);
    const toggleSwitch = () => {
        setChecked(!checked);
    }

    return (
        <div onClick={toggleSwitch} className={checked ? "swith_room on" : "swith_room"}>
            <input className="switch-checkbox" type="checkbox" />
            <label className="switch-label">
                <span className="switch-button" />
            </label>
        </div>
    );
};

