import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWith from "../../components/common/ButtonWith";
import InputComponent from "../../components/common/InputComponent";
import ImgComponent from "../../components/common/ImgComponent";
import BordComp from "../../components/common/BordComp";
import ToggleCheck from "../../components/common/ToggleCheck";
import PopLocation from "../../components/common/PopLocation";
import PopPublisher from "../../components/common/PopPublisher";

export default function SettingsAccount() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [popLoct, setPopLoct] = useState(false);
    const openLoct = () => {
        setPopLoct(true);
    }
    const closeLoct = () => {
        setPopLoct(false);
    }

    const [popUpsPh, setpopUpsPh] = useState(false);
    const openPopPh = () => {
        setpopUpsPh(true);
    }
    const closePopPh = () => {
        setpopUpsPh(false);
    }

    const [toggleCheck, setToggleCheck] = useState(false);
    const toggleClick = () => {
        setToggleCheck(!toggleCheck);
    }

    const [popPub, setPopPub] = useState(false);
    const openPub = () => {
        setPopPub(true);
    }
    const closePub = () => {
        setPopPub(false);
    }

    //passport
    const [passPort, setPassPort] = useState(false);
    const openPort = () => {
        setPassPort(true);
    }
    const closePort = () => {
        setPassPort(false);
    }
    const [resultPort, setResultPort] = useState(false);
    const openResPort = () => {
        setResultPort(true);
        let pfPort = document.querySelector('.pf_port');
        pfPort.classList.add('hidd');
    }

    //phone number
    const [phoNum, setPhoNum] = useState(false);
    const openNum = () => {
        setPhoNum(true);
    }
    const closeNum = () => {
        setPhoNum(false);
    }
    const [resultNum, setResultNum] = useState(false);
    const openResNum = () => {
        setResultNum(true);
        let selNum = document.querySelector('.pf_select');
        selNum.classList.add('hidd');
    }

    //password
    const [passWord, setPassWord] = useState(false);
    const openPass = () => {
        setPassWord(true);
    }
    const closePass = () => {
        setPassWord(false);
    }

    //current position
    const [crPosition, setCrPosition] = useState(false);
    const openPost = () => {
        setCrPosition(true);
    }
    const closePost = () => {
        setCrPosition(false);
    }


    //pop phone
    const PopPhone = (props) => {
        const { open, close } = props;
        return (
            <section className={open ? 'pop_contents active' : 'pop_contents'}>
                <div onClick={close} className={"pop_bg"}></div>
                <div className={"pop_body pop_dial pop_ab_cent"}>
                    <div className={"pop_top"}>
                        <div className={"ptop_txt"}>
                            <h1>Certification Number</h1>
                        </div>
                    </div>
                    <p className={"line1"}></p>
                    <form>
                        <div className={"pop_conts"}>
                            <div className={"pop_conts_dial"}>
                                <dl className={"natdial_dl"}>
                                    <dt>
                                        <select className="selector wh">
                                            <option value="">US (+1)</option>
                                        </select>
                                    </dt>
                                    <dd>
                                        <InputComponent type="text" class="wrput" value="+1-002328293" />
                                    </dd>
                                </dl>
                                <dl className={"natdial_dl m-0"}>
                                    <dt>
                                        <p className={"pop_txt"}>Certification Number</p>
                                    </dt>
                                    <dd>
                                        <div className="putt_box time">
                                            <span className="put_timer">3:00</span>
                                            <InputComponent type="text" class="wrput m-0" />
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <p className={"line1"}></p>
                        <div onClick={close} className={"pop_foot"}>
                            <ButtonComponent onClick={closeNum} class="btn_md3 w-48" txt="Cancel" />
                            <ButtonComponent onClick={openResNum} class="btn_md3 cor w-48" txt="Confirm" />
                        </div>
                    </form>
                </div>
            </section>
        )
    }


    return (
        <div className="wrap dark">

            <div className="container posrel">

                <section className="dark_back">
                    <div className="dflx_ac_jbet h-100">
                        <h3 onClick={goBack}>
                            <span className="go_back">
                                <img src="../resources/images/arr_back_wh.png" alt="link back" />
                            </span>
                            <span className="word">Back</span>
                        </h3>
                    </div>
                </section>

                <div className="contents">

                    <section className="aside_line">
                        <aside className="the_aside">
                            <div>
                                <div className="mini_top">
                                    <h1 className="p-l-10">Settings</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <article className="sub_link">
                                        <div className="add_line">
                                            <Link className="link on" to="/SettingsAccount">Account</Link>
                                        </div>
                                        <div className="add_line">
                                            <Link className="link" to="/SettingsAvail">Available & Privacy</Link>
                                        </div>
                                        <div className="add_line">
                                            <Link className="link" to="/SettingsProfile">Profile</Link>
                                        </div>
                                        <div className="add_line">
                                            <Link className="link" to="/SettingsID">Person ID</Link>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

                        <section className="rolse_box official_box set">
                            <div className="rolse_in">

                                <article className="roles_title">
                                    <h1>
                                        <span className="big">Account</span>
                                    </h1>
                                </article>
                                <article className="profile_contain">

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt>
                                                        <span className="title">Verify Your Passport</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>Real names are used to personally identify users and others when creating split sheets.
                                                                This real name cannot be changed.</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={passPort ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name">
                                                        <p className="m-r-7">
                                                            <ImgComponent src="../resources/images/reject_pink30.png" />
                                                        </p>
                                                        <h3>Reject</h3>
                                                    </div>
                                                    <div onClick={openPort} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <ImgComponent class="m-r-3" src="../resources/images/feel_994.png" />
                                                                <span>Verification needed</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={passPort ? "pf_under pf_port" : "pf_under pf_port hidd"}>
                                                <article className="putt_zone">
                                                    <div className="putt_box see">
                                                        <ButtonWith onClick={openLoct} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                                        <InputComponent class="wrput" placeholder="Select your Nationality" />
                                                    </div>
                                                    <div className="pfput_right">
                                                    </div>
                                                </article>
                                                <article className="putt_zone m-t-15">
                                                    <div className="dflx_ac_jbet">
                                                        <div className="putt_box w-32">
                                                            <InputComponent class="wrput" placeholder="First name" />
                                                        </div>
                                                        <div className="putt_box w-32">
                                                            <InputComponent class="wrput" placeholder="Middle name" />
                                                        </div>
                                                        <div className="putt_box w-32">
                                                            <InputComponent class="wrput" placeholder="Last name" />
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="pass_drop">
                                                    <ToggleCheck box_class="checkbox" word="Collection and use of required personal information"
                                                        src="../resources/images/sv_check_cor.svg" />
                                                    <div className="drop_box m-t-15">
                                                        <div className="drop_left">
                                                            <div className="drop_photo">
                                                                {/* <img className="img_photo" src="../resources/images/nemo_prof_ex1.jpg" alt="photo" /> */}
                                                                <img className="ic_thumb" src="../resources/images/pf_thumb.png" alt="image" />
                                                            </div>
                                                            <dl className="drop_ex_dl">
                                                                <dt>
                                                                    <ImgComponent src="../resources/images/pf_photo_ex.png" />
                                                                </dt>
                                                                <dd>
                                                                    <ImgComponent src="../resources/images/feel_wh.png" />
                                                                    <p className="word">
                                                                        Drop Photocopy of a Passport image here<br />
                                                                        Drag and drop files below or browse files<br />
                                                                        (You can replace it with your ID or driver's license.)
                                                                    </p>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                </article>
                                                <div className="dflx_ac_jcent">
                                                    <ButtonComponent onClick={closePort} class="btn_md2" txt="Cancel" />
                                                    <p className="p-10"></p>
                                                    <ButtonComponent onClick={openResPort} class="btn_md2 cor" txt="Save" />
                                                </div>
                                            </div>
                                            <div className={resultPort ? "pf_under" : "pf_under hidd"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name">
                                                        <p className="m-r-10">
                                                            <ImgComponent src="../resources/images/check_ligreen24.png" />
                                                        </p>
                                                        <h3>Jin Suk Choi</h3>
                                                    </div>
                                                    <div className="presult_right">
                                                        <p className="word dflx_ac">
                                                            <span>Republic of Korea</span>
                                                        </p>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt>
                                                        <span className="title">Sparwk Account Email</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>The address used to identify your Sparwk Account to you and others. You can’t change this address.</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="pf_under">
                                                <article className="pf_bet_line">
                                                    <div className="check_name">
                                                        <p className="m-r-10">
                                                            <ImgComponent src="../resources/images/check_ligreen24.png" />
                                                        </p>
                                                        <h3>jin@sparwk.com</h3>
                                                    </div>
                                                    <div className="presult_right">
                                                        <p className="word dflx_ac">
                                                            <span></span>
                                                        </p>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt>
                                                        <span className="title">Phone Number</span>
                                                        <span className="ess">*</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>This phone number has been added to your Sparwk Account</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={phoNum ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div></div>
                                                    <div onClick={openNum} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <ImgComponent class="m-r-3" src="../resources/images/feel_994.png" />
                                                                <span>Verification needed</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={phoNum ? "pf_under pf_select" : "pf_under pf_select hidd"}>
                                                <dl className="phone_dl">
                                                    <dt>
                                                        <div className="putt_box see">
                                                            <ButtonWith onClick={openLoct} class="btsq bt20" src="../resources/images/sv_arr20_plus_wh.png" />
                                                            <InputComponent type="text" class="wrput wh m-0" value="Select Country" />
                                                        </div>
                                                    </dt>
                                                    <dd>
                                                        <div className="putt_box verify">
                                                            <ButtonComponent onClick={openPopPh} class="btn_add" txt="Verification" />
                                                            <InputComponent type="text" class="wrput m-0" placeholder="Phone number" />
                                                            <div className="put_verify">
                                                                <span className="shield m-r-5"></span>
                                                                <span>Verified</span>
                                                            </div>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={resultNum ? "pf_under" : "pf_under hidd"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name">
                                                        <p className="m-r-10">
                                                            <ImgComponent src="../resources/images/check_ligreen24.png" />
                                                        </p>
                                                        <h3>+82-01012345678</h3>
                                                    </div>
                                                    <div className="presult_right">
                                                        <p className="word dflx_ac">
                                                            <span></span>
                                                        </p>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt>
                                                        <span className="title">Password</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>A secure password helps protect your sparwk Account</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={passWord ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <p className="pass_stars">
                                                        ************
                                                    </p>
                                                    <div onClick={openPass} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <ImgComponent class="m-r-3" src="../resources/images/feel_994.png" />
                                                                <span>Last changed Jan 11, 2020</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={passWord ? "pf_under" : "pf_under hidd"}>
                                                <article className="the_feed">
                                                    <div className="put_cont set">
                                                        <p className="put_title">Current password</p>
                                                        <div className="putt_box">
                                                            <InputComponent type="password" class="wrput did" value="53535353535" />
                                                        </div>
                                                    </div>
                                                    <div className="put_cont set">
                                                        <p className="put_title">Password</p>
                                                        <div className="putt_box see">
                                                            <span className="put_mark">
                                                                <img src="../resources/images/eye_gray.png" alt="see" />
                                                            </span>
                                                            <InputComponent type="password" class="wrput" />
                                                        </div>
                                                    </div>
                                                    <div className="put_cont set">
                                                        <p className="put_title">Confirm Password</p>
                                                        <div className="putt_box see">
                                                            <span className="put_mark">
                                                                <img src="../resources/images/eye_gray.png" alt="see" />
                                                            </span>
                                                            <InputComponent type="password" class="wrput" />
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="dflx_jend">
                                                    <div>
                                                        <ButtonComponent onClick={closePass} class="btn_sm1 m-r-12" txt="Cancel" />
                                                        <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt>
                                                        <span className="title">Current Position</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p className="f-s-13">
                                                                This information is used to identify the Sparwk profile.
                                                                In order to utilize this information, approval from the organization is required.
                                                                Register all organizations you currently belong to.
                                                            </p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={crPosition ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <h3 className="elip">
                                                            Co-Founder, VP & General Manager @ EKKO Music Right
                                                        </h3>
                                                    </div>
                                                    <div onClick={openPost} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={crPosition ? "pf_under" : "pf_under hidd"}>
                                                <article className="the_feed">
                                                    <div className="putt_box see">
                                                        <InputComponent class="wrput" value="EKKO Music Rights" />
                                                        <button onClick={openPub} className="btsq bt20 norm">
                                                            <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                                            <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                                        </button>
                                                    </div>
                                                    <div onClick={toggleClick} className={toggleCheck ? "check_line on" : "check_line"}>
                                                        <p className="checkbox circ_norm">
                                                            <span className="circle"></span>
                                                        </p>
                                                        <span className="check_word">
                                                            Primary Company
                                                        </span>
                                                    </div>
                                                    <InputComponent class="wrput" value="Co-Founder,  VP & General Manager" />
                                                    <div className="form_bord">
                                                        <div className="cont">
                                                            <div className="dflx_ac">
                                                                <ToggleCheck box_class="checkbox" word="A&R" src="../resources/images/sv_check_cor.svg" />
                                                                <ToggleCheck box_class="checkbox" word="Artist" src="../resources/images/sv_check_cor.svg" />
                                                            </div>
                                                            <div className="pf_txt">
                                                                <div className="put_tip">
                                                                    <img src="../resources/images/feel_wh.png" alt="feel" />
                                                                </div>
                                                                <p>If you're in the Roles of A&R or Artist, please check</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dflx_ac_jbet m-t-8">
                                                        <p></p>
                                                        <div className="dflx_ac curpt">
                                                            <p className="trash"></p>
                                                            <span className="m-l-8 m-t-3">Delete</span>
                                                        </div>
                                                    </div>
                                                </article>
                                                <div className="dflx_ae_jbet">
                                                    <article className="feed_add dpinblock">
                                                        <div className="dflx_ac_jcent">
                                                            <h1>Add Company & Position</h1>
                                                            <button className="btsq bt20 norm">
                                                                <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                                                <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                                            </button>
                                                        </div>
                                                    </article>
                                                    <article className="dflx_ac_jend">
                                                        <ButtonComponent onClick={closePost} class="btn_sm1 m-r-12" txt="Cancel" />
                                                        <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </section>

                    </main>

                </div>

            </div>

            <PopLocation open={popLoct} close={closeLoct} />
            <PopPhone open={popUpsPh} close={closePopPh} />
            <PopPublisher open={popPub} close={closePub} popname={'Select Company'} />
        </div>
    )
}

