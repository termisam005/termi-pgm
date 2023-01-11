import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWith from "../../components/common/ButtonWith";
import HeaderTrans from "../../components/header/HeaderTrans";
import InputComponent from "../../components/common/InputComponent";
import ToggleCheck from "../../components/common/ToggleCheck";
import ImgComponent from "../../components/common/ImgComponent";
import PopLocation from "../../components/common/PopLocation";
import PopPublisher from "../../components/common/PopPublisher";

export default function CreateProfile2() {
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


    return (
        <div className="wrap_prof">

            <HeaderTrans src="../resources/images/logo.png" />

            <section className="rolse_box official_box pf">
                <div className="rolse_in">

                    <article className="roles_step">
                        <p className="step_circle on">1</p>
                        <p className="step_circle on">2</p>
                        <p className="step_circle">3</p>
                    </article>
                    <article className="roles_title">
                        <h1>
                            <span className="big">Jin Suk Choi,</span>
                        </h1>
                        <p className="text f-s-16">
                            we can personality your experience, go through the following steps to make the most of the platform
                        </p>
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
                                <div className="pf_under pf_port">
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
                                                    <img className="img_photo" src="../resources/images/nemo_prof_ex1.jpg" alt="photo" />
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
                                        <ButtonComponent class="btn_md2" txt="Cancel" />
                                        <p className="p-10"></p>
                                        <ButtonComponent class="btn_md2 cor" txt="Save" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="pf_sheet">
                            <div className="pf_wrap">
                                <div className="pf_over">
                                    <dl className="pf_dl">
                                        <dt>
                                            <span className="title">Phone number</span>
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
                                <div className="pf_under">
                                    <dl className="phone_dl">
                                        <dt>
                                            <div className="putt_box see">
                                                <ButtonWith onClick={openLoct} class="btsq bt20" src="../resources/images/sv_arr20_plus_wh.png" />
                                                <InputComponent type="text" class="wrput wh m-0" value="US (+1)" />
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
                            </div>
                        </section>
                        <section className="pf_sheet hauto">
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
                                                <p>This information is used to identify the Sparwk profile.
                                                    In order to utilize this information, approval from the organization is required.
                                                    Register all organizations you currently belong to
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pf_under">
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
                                    </article>
                                    <article className="the_feed">
                                        <div className="putt_box see">
                                            <InputComponent class="wrput" placeholder="Select Company" />
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
                                        <InputComponent class="wrput" placeholder="Position" />
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
                                    <article className="feed_add dpinblock">
                                        <div className="dflx_ac_jcent">
                                            <h1>Add Company & Position</h1>
                                            <button className="btsq bt20 norm">
                                                <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                                <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                            </button>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </section>
                    </article>

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <ButtonComponent onClick={goBack} class="btn_sm1 m-r-12" txt="Previous Step" />
                            <ButtonComponent class="btn_sm1 m-r-12" txt="Skip" />
                            <Link to="/CreateProfile3">
                                <ButtonComponent class="btn_sm1 cor" txt="Save & Next" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <PopLocation open={popLoct} close={closeLoct} />
            <PopPhone open={popUpsPh} close={closePopPh} />
            <PopPublisher open={popPub} close={closePub} popname={'Select Company'} />
        </div>
    )
}


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
                    <div className={"pop_foot"}>
                        <ButtonComponent onClick={close} class="btn_md3 w-48" txt="Cancel" />
                        <ButtonComponent onClick={close} class="btn_md3 cor w-48" txt="Confirm" />
                    </div>
                </form>
            </div>
        </section>
    )
}
