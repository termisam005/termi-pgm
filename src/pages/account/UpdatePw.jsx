import { Link } from "react-router-dom";
import InputComponent from "../../components/common/InputComponent";
import ButtonComponent from "../../components/common/ButtonComponent";

export default function UpdatePw() {
    return (
        <div className="wrap_reset">
            <div className="dflx_ac_jcent w-100 h-100">

                <section className="reset_box">
                    <div className="resetobx_in">
                        <article className="form_group">
                            <div className="login_title">
                                <h1>Update Password</h1>
                                <p className="logtlt_p">
                                    Already you hava an account? <Link to="/Login1">Login</Link>
                                </p>
                            </div>
                            <div className="log_conts">
                                <div className="put_cont m-b-25">
                                    <div className="putt_box">
                                        <InputComponent type="password" class="wrput" placeholder="Please enter your Password" />
                                    </div>
                                </div>
                                <div className="m-b-30">
                                    <Link>
                                        <ButtonComponent type="submit" class="btn_lg1 cor" txt="Submit" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

            </div>
        </div>
    );
}