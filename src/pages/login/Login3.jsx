import { Link, useHistory } from "react-router-dom";
import ProfComponent from "../../components/common/ProfComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";

export default function Login2() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const loginClick = () => {
        window.location.href = "/MainDashboard"
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
                                    <span>Select your Profile</span>
                                </h1>
                            </div>
                            <div className="login_profile">
                                <p className="title">Profile List</p>
                                <div className="profile_zone scroll sc_y">
                                    <section className="message_team">
                                        <div className="message_box" onClick={loginClick}>
                                            <dl className="message_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" comming_class="comming ing" prof_class="prof in norm c40"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="who">Jay.Park</span>
                                                        <span className="time">3h</span>
                                                    </div>
                                                    <div className="mess_tip bord">
                                                        <span className="bord_tip">Producer</span>
                                                        <span className="bord_tip">Top liner</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </section>
                                    <section className="message_team">
                                        <div className="message_box" onClick={loginClick}>
                                            <dl className="message_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="who">Jay.Park</span>
                                                        <span className="time">1d</span>
                                                    </div>
                                                    <div className="mess_tip bord">
                                                        <span className="bord_tip">Record Label</span>
                                                        <span className="bord_tip">Top liner</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </section>
                                    <section className="message_team">
                                        <div className="message_box">
                                            <dl className="message_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="who">SGBOYZ</span>
                                                        <span className="time">1d</span>
                                                    </div>
                                                    <div className="mess_tip bord">
                                                        <span className="bord_tip">Producer</span>
                                                        <span className="bord_tip">Top liner</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </section>
                                    <section className="message_team">
                                        <div className="message_box">
                                            <dl className="message_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="who">Jay.Park</span>
                                                        <span className="time">3h</span>
                                                    </div>
                                                    <div className="mess_tip bord">
                                                        <span className="bord_tip">Co-Founder</span>
                                                        <span className="bord_tip">Top liner</span>
                                                        <span className="bord_tip">Producer</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </section>
                                    <section className="message_team">
                                        <div className="message_box">
                                            <dl className="message_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="who">Jay.Park</span>
                                                        <span className="time">3h</span>
                                                    </div>
                                                    <div className="mess_tip bord">
                                                        <span className="bord_tip">Co-Founder</span>
                                                        <span className="bord_tip">Top liner</span>
                                                        <span className="bord_tip">Producer</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </section>
                                </div>
                                <div className="m-t-20">
                                    <Link to="/NewProfile">
                                        <ButtonComponent class="btn_lg1" txt="+ Create a new account" />
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


