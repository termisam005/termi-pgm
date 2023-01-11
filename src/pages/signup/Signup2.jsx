import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import ProfComponent from "../../components/common/ProfComponent";
import ImgComponent from "../../components/common/ImgComponent";
import InputComponent from "../../components/common/InputComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import Select from 'react-select';
import { gendOptions } from './data.ts';

export default function Signup2() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [toggleState, setToggleState] = useState(false);
    const toggleCheck = () => {
        setToggleState(!toggleState);
    }

    // const [btnState, btnSetState] = useState();
    // const btnTab = (index) => {
    //     btnSetState(index);
    //     let signZone = document.querySelector('.signup_zone');
    //     signZone.scrollTo({
    //         top: 300,
    //         behavior: "smooth"
    //     });
    // }

    const addSelector = () => {
        let signZone = document.querySelector('.signup_zone');
        signZone.scrollTo({
            top: 500,
            behavior: "smooth"
        });

        let seltor = document.querySelector(".add_selector");
        let hiddPutt = document.querySelector('.hidd_putt_box');

        if (seltor.value === "Custom") {
            hiddPutt.classList.add('on');
            signZone.scrollTo({
                top: 1200,
                behavior: "smooth"
            });
        } else {
            hiddPutt.classList.remove('on');
        }
    }

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
                                    Already have an account? <Link to="/Login1">Sign in</Link>
                                </p>
                            </div>
                            <div className="signup_zone scroll sc_y">
                                <div className="putt_box">
                                    <InputComponent type="text" class="wrput" placeholder="E-mail Address" />
                                </div>
                                <div className="putt_box see">
                                    <span className="put_mark">
                                        <img src="../resources/images/eye_gray.png" alt="see" />
                                    </span>
                                    <InputComponent type="password" class="wrput" placeholder="Password" />
                                </div>
                                <div className="putt_box">
                                    <div className="put_mess p-b-8">
                                        <div className={toggleState ? "check_line on" : "check_line"} onClick={toggleCheck}>
                                            <p className="checkbox">
                                                <img src="../resources/images/sv_check_cor.svg" alt="check" />
                                            </p>
                                            <span className="check_word">Use my band, company, or stage name</span>
                                        </div>
                                    </div>
                                    <InputComponent type="text" class="wrput" placeholder="Full name" />
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
                                    {/* <div className="putt_box selt_box">
                                        <button className={btnState === 1 ? "btn_tab114 on" : "btn_tab114"} onClick={() => btnTab(1)}>
                                            Man
                                        </button>
                                        <button className={btnState === 2 ? "btn_tab114 on" : "btn_tab114"} onClick={() => btnTab(2)}>
                                            Woman
                                        </button>
                                        <button className={btnState === 3 ? "btn_tab114 on" : "btn_tab114"} onClick={() => btnTab(3)}>
                                            Private
                                        </button>
                                    </div> */}
                                    <div className="putt_box">
                                        <select className="selector add_selector" onChange={addSelector}>
                                            <option value="SelectGn">Select Gender</option>
                                            <option value="Female">Female</option>
                                            <option value="Male">Male</option>
                                            <option value="Custom">Custom</option>
                                        </select>
                                    </div>
                                    <div className="hidd_putt_box">
                                        <Select
                                            isMulti
                                            name="genders"
                                            options={gendOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            placeholder="Gender"
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    neutral0: '#0f173d',
                                                    primary25: '#778eff',
                                                    primary: '#0f173d',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="log_button_conts">
                                    <Link to="/MainDashboard">
                                        <ButtonComponent type="submit" class="btn_lg1 cor" txt="Agree and sign up" />
                                    </Link>
                                </div>
                                <p className="agree_text">
                                    By clicking Sign Up a after agreeing, you agree to the
                                    <Link>Term Of Use, Privacy Policy, and Cookie Policy.</Link>
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
            </article>

        </div >
    )
}