import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWith from "../../components/common/ButtonWith";
import InputComponent from "../../components/common/InputComponent";
import ImgComponent from "../../components/common/ImgComponent";
import BordComp from "../../components/common/BordComp";
import PopLocation from "../../components/common/PopLocation";
import Select from 'react-select';
import { gendOptions } from '../../pages/signup/data.ts';
import PopRoles from "../../components/common/PopRoles";

export default function SettingsProfile() {
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

    const [rolesPop, setRolesPop] = useState(false);
    const openRolpop = () => {
        setRolesPop(true);
    };
    const closeRolpop = () => {
        setRolesPop(false);
    }

    //Headline
    const [prHead, setPrHead] = useState(false);
    const openHead = () => {
        setPrHead(true);
    }
    const closeHead = () => {
        setPrHead(false);
    }

    //Full name
    const [prName, setPrName] = useState(false);
    const openName = () => {
        setPrName(true);
    }
    const closeName = () => {
        setPrName(false);
    }

    const [toggleWh, setToggleWh] = useState(false);
    const toggleClickWh = () => {
        setToggleWh(!toggleWh);
    }

    //Birth
    const [prBirth, setPrBirth] = useState(false);
    const openBirth = () => {
        setPrBirth(true);
    }
    const closeBirth = () => {
        setPrBirth(false);
    }

    //Gender
    const [prGender, setPrGender] = useState(false);
    const openGender = () => {
        setPrGender(true);
    }
    const closeGender = () => {
        setPrGender(false);
    }

    const addSelector = () => {
        let seltor = document.querySelector(".add_selector");
        let hiddPutt = document.querySelector('.hidd_putt_box');
        if (seltor.value === "Custom") {
            hiddPutt.classList.add('on');
        } else {
            hiddPutt.classList.remove('on');
        }
    }

    //Language
    const [prLang, setPrLang] = useState(false);
    const openLang = () => {
        setPrLang(true);
    }
    const closeLang = () => {
        setPrLang(false);
    }

    //Current City
    const [prCity, setPrCity] = useState(false);
    const openCity = () => {
        setPrCity(true);
    }
    const closeCity = () => {
        setPrCity(false);
    }

    //Home town
    const [prTown, setPrTown] = useState(false);
    const openTown = () => {
        setPrTown(true);
    }
    const closeTown = () => {
        setPrTown(false);
    }

    //On the Web
    const [prWeb, setPrWeb] = useState(false);
    const openWeb = () => {
        setPrWeb(true);
    }
    const closeWeb = () => {
        setPrWeb(false);
    }

    //Mailing Address
    const [prAddress, setPrAddress] = useState(false);
    const openAddress = () => {
        setPrAddress(true);
    }
    const closeAddress = () => {
        setPrAddress(false);
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
                                    <h1 className="p-l-10">Profile</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <article className="sub_link">
                                        <div className="add_line">
                                            <Link className="link" to="/SettingsAccount">Account</Link>
                                        </div>
                                        <div className="add_line">
                                            <Link className="link" to="/SettingsAvail">Available & Privacy</Link>
                                        </div>
                                        <div className="add_line">
                                            <Link className="link on" to="/SettingsProfile">Profile</Link>
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
                                        <span className="big">Profile</span>
                                    </h1>
                                </article>
                                <article className="profile_contain">

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt>
                                                        <span className="title">Headline</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>When recommending a project, it is used as a headline</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={prHead ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <h3 className="elip">
                                                            Multi-Platinum Certified Music Producer & Tech Entreprentaion
                                                        </h3>
                                                    </div>
                                                    <div onClick={openHead} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={prHead ? "pf_under" : "pf_under hidd"}>
                                                <article className="putt_zone dflx_ae">
                                                    <div className="putt_box">
                                                        <InputComponent class="wrput" placeholder="Headline is a required field" />
                                                    </div>
                                                    <div className="pfput_right">
                                                        <div className="dflx_ac_jend">
                                                            <ButtonComponent onClick={closeHead} class="btn_sm1 m-r-12" txt="Cancel" />
                                                            <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt className="dflx_ac_jbet">
                                                        <div>
                                                            <span className="title">Full Name or Stage Name</span>
                                                        </div>
                                                        <div className={prName ? "dpblock" : "dpblock none"}>
                                                            <div onClick={toggleClickWh} className={toggleWh ? "check_line on" : "check_line"}>
                                                                <p className="checkbox wh">
                                                                    <img src="../resources/images/sv_check_wh.svg" alt="check" />
                                                                </p>
                                                                <span className="check_word f-s-13">
                                                                    Stage Name
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>
                                                                Add a nickname, a birth name, Name Pronunciation.<br />
                                                                If your name is to be used as a stage name, please check the check box.
                                                            </p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={prName ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <h3 className="elip">
                                                            Jin Suk Choi (Full Name)
                                                        </h3>
                                                    </div>
                                                    <div onClick={openName} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={prName ? "pf_under" : "pf_under hidd"}>
                                                <article className="putt_zone dflx_ae">
                                                    <div className="putt_box">
                                                        <InputComponent class="wrput" placeholder="Enter your Full name" />
                                                    </div>
                                                    <div className="pfput_right">
                                                        <div className="dflx_ac_jend">
                                                            <ButtonComponent onClick={closeName} class="btn_sm1 m-r-12" txt="Cancel" />
                                                            <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt className="dflx_ac_jbet">
                                                        <span className="title">Birth Date</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>
                                                                Select the Birth Date you use on sparwk
                                                            </p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={prBirth ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <h3 className="elip">
                                                            13 May 1980
                                                        </h3>
                                                    </div>
                                                    <div onClick={openBirth} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={prBirth ? "pf_under" : "pf_under hidd"}>
                                                <article className="putt_zone dflx_ae">
                                                    <div className="putt_box selt_box">
                                                        <select className="selector w-32">
                                                            <option value="">Day</option>
                                                        </select>
                                                        <select className="selector w-32">
                                                            <option value="">Month</option>
                                                        </select>
                                                        <select className="selector w-32">
                                                            <option value="">Year</option>
                                                        </select>
                                                    </div>
                                                    <div className="pfput_right">
                                                        <div className="dflx_ac_jend">
                                                            <ButtonComponent onClick={closeBirth} class="btn_sm1 m-r-12" txt="Cancel" />
                                                            <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt className="dflx_ac_jbet">
                                                        <span className="title">Gender</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>
                                                                Select the Gender you use on sparwk
                                                            </p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={prGender ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <h3 className="elip">
                                                            13 May 1980
                                                        </h3>
                                                    </div>
                                                    <div onClick={openGender} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={prGender ? "pf_under" : "pf_under hidd"}>
                                                <article className="putt_zone dflx_ae">
                                                    <div className="w380">
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
                                                    <div className="pfput_right">
                                                        <div className="dflx_ac_jend">
                                                            <ButtonComponent onClick={closeGender} class="btn_sm1 m-r-12" txt="Cancel" />
                                                            <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt className="dflx_ac_jbet">
                                                        <span className="title">Language</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>
                                                                Select the language you use on sparwk
                                                            </p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={prLang ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <h3 className="elip">
                                                            English, Korean
                                                        </h3>
                                                    </div>
                                                    <div onClick={openLang} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={prLang ? "pf_under" : "pf_under hidd"}>
                                                <article className="putt_zone dflx_ae">
                                                    <div className="putt_box">
                                                        <article className="form_bord">
                                                            <div className="cont">
                                                                <div className="bord_wrap">
                                                                    <BordComp word="English" />
                                                                    <BordComp word="Korean" />
                                                                </div>
                                                                <button onClick={openRolpop} className="btsq bt20 norm">
                                                                    <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                                                    <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                                                </button>
                                                            </div>
                                                        </article>
                                                    </div>
                                                    <div className="pfput_right">
                                                        <div className="dflx_ac_jend">
                                                            <ButtonComponent onClick={closeLang} class="btn_sm1 m-r-12" txt="Cancel" />
                                                            <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt className="dflx_ac_jbet">
                                                        <span className="title">Current City</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>
                                                                Select the Current City you use on sparwk
                                                            </p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={prCity ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <h3 className="elip">
                                                            Seoul, Republic of Korean
                                                        </h3>
                                                    </div>
                                                    <div onClick={openCity} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={prCity ? "pf_under" : "pf_under hidd"}>
                                                <article className="putt_zone dflx_ae">
                                                    <div className="dflx_ac_jbet half_putt">
                                                        <div className="putt_box">
                                                            <InputComponent class="wrput" placeholder="City" />
                                                        </div>
                                                        <div className="putt_box see">
                                                            <ButtonWith onClick={openLoct} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                                            <InputComponent class="wrput" placeholder="Country" />
                                                        </div>
                                                    </div>
                                                    <div className="pfput_right">
                                                        <div className="dflx_ac_jend">
                                                            <ButtonComponent onClick={closeCity} class="btn_sm1 m-r-12" txt="Cancel" />
                                                            <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt className="dflx_ac_jbet">
                                                        <span className="title">Home Town</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>
                                                                Select the Home town you use on sparwk
                                                            </p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={prTown ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <h3 className="elip">
                                                            Seoul, Republic of Korean
                                                        </h3>
                                                    </div>
                                                    <div onClick={openTown} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={prTown ? "pf_under" : "pf_under hidd"}>
                                                <article className="putt_zone dflx_ae">
                                                    <div className="dflx_ac_jbet half_putt">
                                                        <div className="putt_box">
                                                            <InputComponent class="wrput" placeholder="City" />
                                                        </div>
                                                        <div className="putt_box see">
                                                            <ButtonWith onClick={openLoct} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                                            <InputComponent class="wrput" placeholder="Country" />
                                                        </div>
                                                    </div>
                                                    <div className="pfput_right">
                                                        <div className="dflx_ac_jend">
                                                            <ButtonComponent onClick={closeTown} class="btn_sm1 m-r-12" txt="Cancel" />
                                                            <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt className="dflx_ac_jbet">
                                                        <span className="title">On the Web</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>
                                                                Collaborators and industry officials can share URLs to know more about you.
                                                            </p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={prWeb ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <div className="society_iconts">
                                                            <a>
                                                                <ImgComponent src="../resources/images/vl24_facebook.png" />
                                                            </a>
                                                            <a>
                                                                <ImgComponent src="../resources/images/vl24_youtube.png" />
                                                            </a>
                                                            <a>
                                                                <ImgComponent src="../resources/images/vl24_instagram.png" />
                                                            </a>
                                                            <a>
                                                                <ImgComponent src="../resources/images/vl24_twitter.png" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div onClick={openWeb} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={prWeb ? "pf_under" : "pf_under hidd"}>
                                                <article className="the_feed">
                                                    <div className="put_cont">
                                                        <p className="put_title">
                                                            Official Page
                                                        </p>
                                                        <div className="putt_box">
                                                            <InputComponent class="wrput" placeholder="Enter URL" />
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="the_feed">
                                                    <div className="put_cont">
                                                        <div className="putt_box">
                                                            <select className="selector">
                                                                <option value="">Select SNS Media</option>
                                                            </select>
                                                        </div>
                                                        <div className="putt_box m-t-15">
                                                            <InputComponent class="wrput" placeholder="Enter URL" />
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="the_feed">
                                                    <div className="put_cont">
                                                        <div className="putt_box">
                                                            <select className="selector">
                                                                <option value="">Facebook</option>
                                                            </select>
                                                        </div>
                                                        <div className="putt_box m-t-15">
                                                            <InputComponent class="wrput" placeholder="Enter URL" />
                                                        </div>
                                                    </div>
                                                </article>
                                                <div className="dflx_ae_jbet">
                                                    <article className="feed_add dpinblock">
                                                        <div className="dflx_ac_jcent">
                                                            <h1>Add SNS Media</h1>
                                                            <button className="btsq bt20 norm">
                                                                <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                                                <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                                            </button>
                                                        </div>
                                                    </article>
                                                    <article className="dflx_ac_jend">
                                                        <ButtonComponent onClick={closeWeb} class="btn_sm1 m-r-12" txt="Cancel" />
                                                        <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt>
                                                        <span className="title">Mailing Address</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>Please set the address where I can receive the official mail.</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={prAddress ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <h3 className="elip">
                                                            114 Seolleung-ro 190-gil, Cheongdam-dong, Gangnam-gu, Seoul
                                                        </h3>
                                                    </div>
                                                    <div onClick={openAddress} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={prAddress ? "pf_under" : "pf_under hidd"}>
                                                <div className="half_putt">
                                                    <div className="dflx_ac_jbet">
                                                        <div className="putt_box see">
                                                            <ButtonWith onClick={openLoct} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                                            <InputComponent type="text" class="wrput" placeholder="Business Location" />
                                                        </div>
                                                        <div className="putt_box">
                                                            <InputComponent type="text" class="wrput" placeholder="Zip/Postal code" />
                                                        </div>
                                                    </div>
                                                    <div className="dflx_ac_jbet">
                                                        <div className="putt_box m-t-15">
                                                            <InputComponent type="text" class="wrput" placeholder="State/Region" />
                                                        </div>
                                                        <div className="putt_box m-t-15">
                                                            <InputComponent type="text" class="wrput" placeholder="City/Town" />
                                                        </div>
                                                    </div>
                                                    <div className="putt_box m-t-15 w-100">
                                                        <InputComponent type="text" class="wrput" placeholder="Address Line1" />
                                                    </div>
                                                    <div className="putt_box m-t-15 w-100">
                                                        <InputComponent type="text" class="wrput" placeholder="Address Line2" />
                                                    </div>
                                                    <div className="dflx_ac_jend m-t-30">
                                                        <ButtonComponent onClick={closeAddress} class="btn_sm1 m-r-12" txt="Cancel" />
                                                        <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                    </div>
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

            <PopRoles open={rolesPop} close={closeRolpop} />
            <PopLocation open={popLoct} close={closeLoct} />
        </div>
    )
}

