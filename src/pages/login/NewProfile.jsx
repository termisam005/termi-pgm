import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import InputComponent from "../../components/common/InputComponent";
import HeaderTrans from "../../components/header/HeaderTrans";

export default function NewProfile() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [toggleState, setToggleState] = useState(false);
    const toggleCheck = () => {
        setToggleState(!toggleState);
    }

    const [btnState, btnSetState] = useState();
    const btnTab = (index) => {
        btnSetState(index);
        let signZone = document.querySelector('.signup_zone');
        signZone.scrollTo({
            top: 300,
            behavior: "smooth"
        });
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
                                <h1>
                                    <span onClick={goBack} className="go_back">
                                        <img src="../resources/images/arr_back_wh.png" alt="link back" />
                                    </span>
                                    <span>Create a New Profile</span>
                                </h1>
                            </div>
                            <div className="signup_zone scroll sc_y">
                                <div className="putt_box">
                                    <div className="put_mess p-b-8">
                                        <div className={toggleState ? "check_line on" : "check_line"} onClick={toggleCheck}>
                                            <p className="checkbox">
                                                <img src="../resources/images/sv_check_cor.svg" alt="check" />
                                            </p>
                                            <span className="check_word">Use my band, company, or stage name</span>
                                        </div>
                                    </div>
                                    <InputComponent type="password" class="wrput" placeholder="Password" />
                                </div>
                                <div className="put_cont">
                                    <p className="put_title">Date of Birth</p>
                                    <div className="putt_box selt_box">
                                        <select className="selector w-32">
                                            <option value="">Month</option>
                                            <option value="">Janunary</option>
                                        </select>
                                        <select className="selector w-32">
                                            <option value="">Day</option>
                                            <option value="">Day</option>
                                        </select>
                                        <select className="selector w-32">
                                            <option value="">Year</option>
                                            <option value="">Year</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="put_cont">
                                    <p className="put_title">Gender</p>
                                    <div className="putt_box selt_box">
                                        <button className={btnState === 1 ? "btn_tab114 on" : "btn_tab114"} onClick={() => btnTab(1)}>
                                            Man
                                        </button>
                                        <button className={btnState === 2 ? "btn_tab114 on" : "btn_tab114"} onClick={() => btnTab(2)}>
                                            Woman
                                        </button>
                                        <button className={btnState === 3 ? "btn_tab114 on" : "btn_tab114"} onClick={() => btnTab(3)}>
                                            Private
                                        </button>
                                    </div>
                                </div>
                                <div className="log_button_conts">
                                    <Link to="/SelectRoles1">
                                        <ButtonComponent type="submit" class="btn_lg1 cor" txt="Select Roles and Affinity" />
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