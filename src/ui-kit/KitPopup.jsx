import { useState } from "react";
import ButtonComponent from "../components/common/ButtonComponent";
import InputComponent from "../components/common/InputComponent";
import PopComponent from "../components/common/PopComponent";
import BordComp from "../components/common/BordComp";
import BordTact from "../components/common/BordTact";
import SearchComponent from "../components/common/SearchComponent";
import ImgComponent from "../components/common/ImgComponent";
import ToggleCheck from "../components/common/ToggleCheck";


export default function DemoPop() {
    const [popUps, setpopUps] = useState(false);
    const openPop = () => {
        setpopUps(true);
    }
    const closePop = () => {
        setpopUps(false);
    }

    const [selpLine1, setSelpLine1] = useState(false);
    const selpOn1 = () => {
        setSelpLine1(!selpLine1);
    }
    const [selpLine2, setSelpLine2] = useState(false);
    const selpOn2 = () => {
        setSelpLine2(!selpLine2);
    }
    const [selpLine3, setSelpLine3] = useState(false);
    const selpOn3 = () => {
        setSelpLine3(!selpLine3);
    }
    const [selpLine4, setSelpLine4] = useState(false);
    const selpOn4 = () => {
        setSelpLine4(!selpLine4);
    }
    const [selpLine02, setSelpLine02] = useState(false);
    const selpOn02 = () => {
        setSelpLine02(!selpLine02);
    }

    return (
        <div className="wrap_grad">
            <div className="container">

                <section className="demo_title">
                    <h1>Popup</h1>
                </section>

                <section className="demo_line">
                    <ButtonComponent onClick={openPop} class="btn_sm1 cor" txt="Popup" />
                    <PopComponent open={popUps} close={closePop} pop_cent={"Popup open test"} />
                </section>

                <section className="dpflx">
                    <div className="p-20">
                        <div className={"pop_body"}>
                            <div className={"pop_conts"}>
                                <div className={"pop_cent"}>
                                    The verification code does not match.
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <div className={"pop_foot"}>
                                <ButtonComponent class="btn_md3 w-100" txt="Confirm" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20">
                        <div className={"pop_body"}>
                            <div className={"pop_conts"}>
                                <div className={"pop_cent"}>
                                    This phone number is already in use.<br />
                                    If you are not the person,<br />
                                    please contact us through 1:1 inquiry.
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <div className={"pop_foot"}>
                                <ButtonComponent class="btn_md3 w-100" txt="Confirm" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20">
                        <div className={"pop_body"}>
                            <div className={"pop_top"}>
                                <div className={"ptop_txt"}>
                                    <span className={"soc_mark"}>
                                        <img src="../resources/images/sm_google.png" alt="google" />
                                    </span>
                                    <span className={"word"}>Create a SPARWK account through Google</span>
                                </div>
                                <p className="ptop_x"></p>
                            </div>
                            <p className={"line1"}></p>
                            <div className={"pop_conts"}>
                                <dl className="message_dl">
                                    <dt>
                                        <span className="coming"></span>
                                        <p className="prof_c40">
                                            <img src="../resources/images/prof_none.png" alt="none profile" />
                                        </p>
                                    </dt>
                                    <dd>
                                        <div className="mess_who">
                                            <span className="who">Christoph Willbaldard</span>
                                        </div>
                                        <div className="mess_tip">
                                            <span className="word">requested a friend.</span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div className={"pop_bottom"}>
                                <ButtonComponent class="btn_md3 w-100" txt="Use account" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">
                        <div className={"pop_body"}>
                            <div className={"pop_conts"}>
                                <div className={"pop_cent"}>
                                    The verification code does not match.
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <div className={"pop_foot"}>
                                <ButtonComponent class="btn_md3 none w-50" txt="Cancel" />
                                <ButtonComponent class="btn_md3 w-50" txt="Confirm" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20">
                        <div className={"pop_body"}>
                            <div className={"pop_conts"}>
                                <div className={"pop_cent"}>
                                    This phone number is already in use.<br />
                                    If you are not the person,<br />
                                    please contact us through 1:1 inquiry.
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <div className={"pop_foot"}>
                                <ButtonComponent class="btn_md3 none w-50" txt="Cancel" />
                                <ButtonComponent class="btn_md3 w-50" txt="Confirm" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">
                        <div className={"pop_body pop_dial"}>
                            <div className={"pop_top"}>
                                <div className={"ptop_txt"}>
                                    <h1>Enter your mobile phone number</h1>
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <form>
                                <div className={"pop_conts"}>
                                    <div className={"pop_conts_dial"}>
                                        <dl className={"natdial_dl"}>
                                            <dt>
                                                <div className={"dial_selbox"}>
                                                    <p className={"nation"}>
                                                        <img src="../resources/images/nation_usa.png" alt="usa" />
                                                        <span className={"word"}>US (+1)</span>
                                                    </p>
                                                    <span className="sort">
                                                        <img src="../resources/images/sv_sort_wh.svg" alt="sorting" />
                                                    </span>
                                                </div>
                                            </dt>
                                            <dd>
                                                <InputComponent type="text" class="wrput" />
                                            </dd>
                                        </dl>
                                        <p className={"pop_txt"}>
                                            To verify this number, we will send a verification code
                                            by text message and data charges may apply.
                                        </p>
                                    </div>
                                </div>
                                <p className="line1"></p>
                                <div className={"pop_foot"}>
                                    <ButtonComponent class="btn_md3 w-48" txt="Cancel" />
                                    <ButtonComponent class="btn_md3 cor w-48" txt="Save" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-20">
                        <div className={"pop_body pop_dial"}>
                            <div className={"pop_top"}>
                                <div className={"ptop_txt"}>
                                    <h1>Enter your mobile phone number</h1>
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <form>
                                <div className={"pop_conts"}>
                                    <div className={"pop_conts_dial"}>
                                        <dl className={"natdial_dl"}>
                                            <dt>
                                                <div className={"dial_selbox"}>
                                                    <p className={"nation"}>
                                                        <img src="../resources/images/nation_usa.png" alt="usa" />
                                                        <span className={"word"}>US (+1)</span>
                                                    </p>
                                                    <span className="sort">
                                                        <img src="../resources/images/sv_sort_wh.svg" alt="sorting" />
                                                    </span>
                                                </div>
                                            </dt>
                                            <dd>
                                                <InputComponent type="text" class="wrput" />
                                            </dd>
                                        </dl>
                                        <dl className={"natdial_dl m-0"}>
                                            <dt>
                                                <p className={"pop_txt"}>Certification Number</p>
                                            </dt>
                                            <dd>
                                                <div className="putt_box time">
                                                    <span className="put_timer">3:00</span>
                                                    <InputComponent type="text" class="wrput" />
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <p className={"line1"}></p>
                                <div className={"pop_foot"}>
                                    <ButtonComponent class="btn_md3 w-48" txt="Cancel" />
                                    <ButtonComponent class="btn_md3 cor w-48" txt="Save" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">
                        <div className={"pop_body pop_dial"}>
                            <div className={"pop_top"}>
                                <div className={"ptop_txt"}>
                                    <h1>Enter your mobile phone number</h1>
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <form>
                                <div className={"pop_conts"}>
                                    <div className={"pop_conts_dial"}>
                                        <dl className={"natdial_dl"}>
                                            <dt>
                                                <div className={"dial_selbox"}>
                                                    <p className={"nation"}>
                                                        <img src="../resources/images/nation_usa.png" alt="usa" />
                                                        <span className={"word"}>US (+1)</span>
                                                    </p>
                                                    <span className="sort">
                                                        <img src="../resources/images/sv_sort_wh.svg" alt="sorting" />
                                                    </span>
                                                </div>
                                            </dt>
                                            <dd>
                                                <InputComponent type="text" class="wrput" />
                                            </dd>
                                        </dl>
                                        <dl className={"natdial_dl m-0"}>
                                            <dt>
                                                <p className={"pop_txt"}>Certification Number</p>
                                            </dt>
                                            <dd>
                                                <div className="resend_line">
                                                    <InputComponent type="text" class="wrput" />
                                                    <ButtonComponent class="btn_sm1 trans h40" txt="Resend" />
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <p className={"line1"}></p>
                                <div className={"pop_foot"}>
                                    <ButtonComponent class="btn_md3 w-48" txt="Cancel" />
                                    <ButtonComponent class="btn_md3 cor w-48" txt="Save" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">
                        <div className="pop_body selectPop">
                            <div className="pop_top">
                                <div className="ptop_txt">
                                    <h1 className="ptop_title">
                                        Select Territories
                                    </h1>
                                </div>
                                <p className="ptop_x"></p>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_conts">
                                <div className="dflx_ac_jbet">
                                    <p></p>
                                    <p className="mid_title">
                                        Selected Territories  (Choose at least one)
                                    </p>
                                </div>
                                <div className="selPop_wrap">
                                    <section className="selpp_content">
                                        <article className="selpp_top">
                                            <h3>Apply territory preset</h3>
                                            <p className="line1"></p>
                                        </article>
                                        <article className="selpp_cont">
                                            <div className="selpp_contin scroll sc_y">
                                                <div className="selpp_group">
                                                    <dl onClick={selpOn1} className="selpp_dl">
                                                        <dt>
                                                            <span className={selpLine1 ? "trg on" : "trg"}></span>
                                                        </dt>
                                                        <dd>
                                                            <div className="selpp_tact">
                                                                <BordTact txt="Worldwide" />
                                                                <span className="word">
                                                                    +279(countries)
                                                                </span>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                    <div className={selpLine1 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                                        <dl onClick={selpOn02} className="selpp_dl">
                                                            <dt>
                                                                <span className={selpLine02 ? "trg on" : "trg"}></span>
                                                            </dt>
                                                            <dd>
                                                                <div className="selpp_tact">
                                                                    <BordTact txt="Africa" />
                                                                    <span className="word">
                                                                        +52(countries)
                                                                    </span>
                                                                    <span className="selpp_sign">
                                                                        25
                                                                    </span>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className={selpLine1 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                                        <dl onClick={selpOn2} className="selpp_dl">
                                                            <dt>
                                                                <span className={selpLine2 ? "trg on" : "trg"}></span>
                                                            </dt>
                                                            <dd>
                                                                <div className="selpp_tact">
                                                                    <BordTact txt="America" />
                                                                    <span className="word">
                                                                        +52(countries)
                                                                    </span>
                                                                    <span className="selpp_sign">
                                                                        50
                                                                    </span>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                        <div className={selpLine2 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                                            <dl onClick={selpOn3} className="selpp_dl">
                                                                <dt>
                                                                    <span className={selpLine3 ? "trg on" : "trg"}></span>
                                                                </dt>
                                                                <dd>
                                                                    <div className="selpp_tact">
                                                                        <BordTact txt="America Countinent" />
                                                                        <span className="word">
                                                                            +43(countries)
                                                                        </span>
                                                                    </div>
                                                                </dd>
                                                            </dl>
                                                            <div className={selpLine3 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                                                <dl onClick={selpOn4} className="selpp_dl">
                                                                    <dt>
                                                                        <span className={selpLine4 ? "trg on" : "trg"}></span>
                                                                    </dt>
                                                                    <dd>
                                                                        <div className="selpp_tact">
                                                                            <BordTact txt="Antilles" />
                                                                            <span className="word">
                                                                                +13(countries)
                                                                            </span>
                                                                        </div>
                                                                    </dd>
                                                                </dl>
                                                                <div className={selpLine4 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                                                    <article className="selpp_share">
                                                                        <div className="share3">
                                                                            <BordTact txt="Antigua and Bar…" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Barbados" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Cuba" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Dominica" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Dominica Rep..." />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Grenada" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="haiti" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Jamaica" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Puerto Rico" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Sain Kitts and…" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Saint Lucia" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Saint Vincent..." />
                                                                        </div>
                                                                    </article>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </section>
                                    <section className="selpp_select">
                                        <article className="selpp_top">
                                            <h3>Selected</h3>
                                            <p className="clear">
                                                Clear all
                                            </p>
                                            <p className="line1"></p>
                                        </article>
                                        <article className="selpp_bords">
                                            <div className="selpp_vert_wrap scroll sc_y">
                                                <BordComp word="Dominica" />
                                                <BordComp word="Cuba" />
                                                <BordComp word="Jamaica" />
                                                <BordComp word="Puerto Rico" />
                                                <BordComp word="Barbados" />
                                                <BordComp word="Africa  +52" />
                                            </div>
                                        </article>
                                    </section>
                                </div>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_foot">
                                <ButtonComponent class="btn_md2" txt="Cancel" />
                                <ButtonComponent class="btn_md2 cor" txt="Save" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">

                        <div className="pop_body selectPop">
                            <div className="pop_top">
                                <div className="ptop_txt">
                                    <h1 className="ptop_title">
                                        Select Territories
                                    </h1>
                                </div>
                                <p className="ptop_x"></p>
                            </div>
                            <p className="line1"></p>

                            <div className="pop_conts">
                                <div className="dflx_ac_jbet">
                                    <p></p>
                                    <p className="mid_title">
                                        Selected Territories  (Choose at least one)
                                    </p>
                                </div>

                                <div className="selPop_wrap">
                                    <section className="selpp_content">
                                        <article className="selpp_top">
                                            <h3>Apply territory preset</h3>
                                            <p className="line1"></p>
                                        </article>
                                        <article className="selpp_cont">
                                            <div className="selpp_contin scroll sc_y">
                                                <div className="selpp_group">
                                                    <dl onClick={selpOn1} className="selpp_dl">
                                                        <dt>
                                                            <span className={selpLine1 ? "trg on" : "trg"}></span>
                                                        </dt>
                                                        <dd>
                                                            <div className="selpp_tact">
                                                                <BordTact txt="Worldwide" />
                                                                <span className="word">
                                                                    +279(countries)
                                                                </span>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                    <div className={selpLine1 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                                        <dl onClick={selpOn02} className="selpp_dl">
                                                            <dt>
                                                                <span className={selpLine02 ? "trg on" : "trg"}></span>
                                                            </dt>
                                                            <dd>
                                                                <div className="selpp_tact">
                                                                    <BordTact txt="Africa" />
                                                                    <span className="word">
                                                                        +52(countries)
                                                                    </span>
                                                                    <span className="selpp_sign">
                                                                        25
                                                                    </span>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className={selpLine1 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                                        <dl onClick={selpOn2} className="selpp_dl">
                                                            <dt>
                                                                <span className={selpLine2 ? "trg on" : "trg"}></span>
                                                            </dt>
                                                            <dd>
                                                                <div className="selpp_tact">
                                                                    <BordTact txt="America" />
                                                                    <span className="word">
                                                                        +52(countries)
                                                                    </span>
                                                                    <span className="selpp_sign">
                                                                        50
                                                                    </span>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                        <div className={selpLine2 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                                            <dl onClick={selpOn3} className="selpp_dl">
                                                                <dt>
                                                                    <span className={selpLine3 ? "trg on" : "trg"}></span>
                                                                </dt>
                                                                <dd>
                                                                    <div className="selpp_tact">
                                                                        <BordTact txt="America Countinent" />
                                                                        <span className="word">
                                                                            +43(countries)
                                                                        </span>
                                                                    </div>
                                                                </dd>
                                                            </dl>
                                                            <div className={selpLine3 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                                                <dl onClick={selpOn4} className="selpp_dl">
                                                                    <dt>
                                                                        <span className={selpLine4 ? "trg on" : "trg"}></span>
                                                                    </dt>
                                                                    <dd>
                                                                        <div className="selpp_tact">
                                                                            <BordTact txt="Antilles" />
                                                                            <span className="word">
                                                                                +13(countries)
                                                                            </span>
                                                                        </div>
                                                                    </dd>
                                                                </dl>
                                                                <div className={selpLine4 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                                                    <article className="selpp_share">
                                                                        <div className="share3">
                                                                            <BordTact txt="Antigua and Bar…" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Barbados" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Cuba" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Dominica" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Dominica Rep..." />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Grenada" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="haiti" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Jamaica" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Puerto Rico" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Sain Kitts and…" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Saint Lucia" />
                                                                        </div>
                                                                        <div className="share3">
                                                                            <BordTact txt="Saint Vincent..." />
                                                                        </div>
                                                                    </article>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </section>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">

                        <div className="pop_body middlePop">
                            <div className="pop_top">
                                <div className="ptop_txt">
                                    <h1 className="ptop_title">
                                        Select Business Location
                                    </h1>
                                </div>
                                <p className="ptop_x"></p>
                            </div>
                            <p className="line1"></p>

                            <div className="pop_conts">
                                <SearchComponent srch_class="hd_search" btn_type="button"
                                    btn_class="btn_srch" input_class="hd_input" placeholder="Enter Country name" />
                                <div className="selPop_wrap">
                                    <section className="selpp_content">
                                        <article className="selpp_top">
                                            <h3 className="dflx_ac">
                                                <span>Search Mode</span>
                                            </h3>
                                            <p className="line1"></p>
                                        </article>

                                        <article className="selpp_cont">
                                            <div className="selpp_contin scroll sc_y">
                                                <div className="selpp_srch">
                                                    <div className="share4">
                                                        <BordTact txt="Avertsing" />
                                                    </div>
                                                    <div className="share4">
                                                        <BordTact txt="Adapter" />
                                                    </div>
                                                    <div className="share4">
                                                        <BordTact txt="Architect" />
                                                    </div>
                                                    <div className="share4">
                                                        <BordTact txt="Arranger" />
                                                    </div>
                                                    <div className="share4">
                                                        <BordTact txt="Author" />
                                                    </div>
                                                    <div className="share4">
                                                        <BordTact txt="AuthorinQuotatitor" />
                                                    </div>
                                                    <div className="share4">
                                                        <BordTact txt="AuthorOfAfterworld" />
                                                    </div>
                                                    <div className="share4">
                                                        <BordTact txt="App design" />
                                                    </div>
                                                    <div className="share4">
                                                        <BordTact txt="Art Direction" />
                                                    </div>
                                                    <div className="share4">
                                                        <BordTact txt="Antigua andBarfjfk" />
                                                    </div>
                                                    <div className="share4">
                                                        <BordTact txt="Advertising" />
                                                    </div>
                                                    <div className="share4">
                                                        <BordTact txt="Automotive Design" />
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </section>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">

                        <div className="pop_body selectPop">
                            <div className="pop_top">
                                <div className="ptop_txt">
                                    <h1 className="ptop_title">
                                        Select Creative Roles
                                    </h1>
                                </div>
                                <p className="ptop_x"></p>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_conts">
                                <SearchComponent srch_class="hd_search m-b-10" btn_type="button"
                                    btn_class="btn_srch" input_class="hd_input" placeholder="Search the creative roles" />
                                <div className="selPop_wrap">
                                    <section className="selpp_content">
                                        <article className="selpp_top">
                                            <h3 className="w140">Popular</h3>
                                            <h3>Alphabetical</h3>
                                            <p className="line1"></p>
                                        </article>
                                        <article className="selpp_cont p-0">
                                            <div className="selpp_contin scroll sc_y">
                                                <section className="selrole_wrap">
                                                    <div className="popular">
                                                        <div className="popul_kind">
                                                            <BordTact txt="Producer" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="Topliner" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="Avertsing" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="Compiler" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="Lyricist" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="Translator" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="MusicPublisher" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="CopyrightHolder" />
                                                        </div>
                                                    </div>
                                                    <div className="alphab">
                                                        <div className="alphab_line">
                                                            <div className="line">
                                                                <span className="alp on">#</span>
                                                                <span className="alp">A</span>
                                                                <span className="alp">B</span>
                                                                <span className="alp">C</span>
                                                                <span className="alp">D</span>
                                                                <span className="alp">E</span>
                                                                <span className="alp">F</span>
                                                                <span className="alp">G</span>
                                                                <span className="alp">H</span>
                                                                <span className="alp">I</span>
                                                            </div>
                                                        </div>
                                                        <div className="alphab_share">
                                                            <div className="share3">
                                                                <BordTact txt="3D Modeling" />
                                                            </div>
                                                        </div>
                                                        <div className="alphab_line">
                                                            <div className="line">
                                                                <span className="alp on">#</span>
                                                                <span className="alp">A</span>
                                                                <span className="alp">B</span>
                                                                <span className="alp">C</span>
                                                                <span className="alp">D</span>
                                                                <span className="alp">E</span>
                                                                <span className="alp">F</span>
                                                                <span className="alp">G</span>
                                                                <span className="alp">H</span>
                                                                <span className="alp">I</span>
                                                            </div>
                                                        </div>
                                                        <div className="alphab_share">
                                                            <div className="share3">
                                                                <BordTact txt="Adapter" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Architect" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Arranger" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Author" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Authorln Quota.." />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Architect" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Arranger" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Author" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Authorln Quota.." />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Architect" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Arranger" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Author" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Authorln Quota.." />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Architect" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Arranger" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Author" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Authorln Quota.." />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Architect" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Arranger" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Author" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Authorln Quota.." />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </article>
                                    </section>
                                    <section className="selpp_select">
                                        <article className="selpp_top">
                                            <h3 className="dflx_ac">
                                                <span>Selected</span>
                                                <span className="hc_cout">56</span>
                                            </h3>
                                            <p className="clear">
                                                Clear all
                                            </p>
                                            <p className="line1"></p>
                                        </article>
                                        <article className="selpp_bords">
                                            <div className="selpp_vert_wrap scroll sc_y">
                                                <BordComp word="Architect" />
                                                <BordComp word="Binder" />
                                                <BordComp word="Author" />
                                                <BordComp word="Arranger" />
                                            </div>
                                        </article>
                                    </section>
                                </div>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_foot">
                                <ButtonComponent class="btn_md2" txt="Cancel" />
                                <ButtonComponent class="btn_md2 cor" txt="Select" />
                            </div>
                        </div>

                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">

                        <div className="pop_body selectPop">
                            <div className="pop_top">
                                <div className="ptop_txt">
                                    <h1 className="ptop_title">
                                        Select Genres
                                    </h1>
                                </div>
                                <p className="ptop_x"></p>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_conts">
                                <div className="dflx_ac_jbet">
                                    <SearchComponent srch_class="hd_search" btn_type="button"
                                        btn_class="btn_srch" input_class="hd_input" placeholder="Search Genres" />
                                    <p className="mid_title">
                                        Please select a Genres (Choose at least one)
                                    </p>
                                </div>

                                <div className="selPop_wrap">
                                    <section className="selpp_content">
                                        <article className="selpp_top">
                                            <h3 className="w140">Popular</h3>
                                            <h3>Alphabetical</h3>
                                            <p className="line1"></p>
                                        </article>

                                        <article className="selpp_cont p-0">
                                            <div className="selpp_contin scroll sc_y">

                                                <section className="selrole_wrap">
                                                    <div className="popular">
                                                        <div className="popul_kind">
                                                            <BordTact txt="Avertsing" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="Avertsing" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="Avertsing" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="Avertsing" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="Avertsing" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="Avertsing" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="Avertsing" />
                                                        </div>
                                                        <div className="popul_kind">
                                                            <BordTact txt="Avertsing" />
                                                        </div>
                                                    </div>
                                                    <div className="alphab">
                                                        <div className="alphab_line">
                                                            <div className="line">
                                                                <span className="alp">#</span>
                                                                <span className="alp on">A</span>
                                                                <span className="alp">B</span>
                                                                <span className="alp">C</span>
                                                                <span className="alp">D</span>
                                                                <span className="alp">E</span>
                                                                <span className="alp">F</span>
                                                                <span className="alp">G</span>
                                                                <span className="alp">H</span>
                                                                <span className="alp">I</span>
                                                            </div>
                                                        </div>
                                                        <div className="alphab_share">
                                                            <div className="share3">
                                                                <BordTact txt="Accent" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Allemande" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Anthem" />
                                                            </div>
                                                        </div>
                                                        <div className="alphab_line">
                                                            <div className="line">
                                                                <span className="alp">#</span>
                                                                <span className="alp">A</span>
                                                                <span className="alp on">B</span>
                                                                <span className="alp">C</span>
                                                                <span className="alp">D</span>
                                                                <span className="alp">E</span>
                                                                <span className="alp">F</span>
                                                                <span className="alp">G</span>
                                                                <span className="alp">H</span>
                                                                <span className="alp">I</span>
                                                            </div>
                                                        </div>
                                                        <div className="alphab_share">
                                                            <div className="share3">
                                                                <BordTact txt="Ballad" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Ballet" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Ballroom (Nonthing go wanna)" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Barn Dance" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Bed / Underscore" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Black Bottom" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Bolero" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Bop" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Bossa Nova" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Bouree" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Build" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Bumper" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Business" />
                                                            </div>

                                                            <div className="share3">
                                                                <BordTact txt="Architect" />
                                                            </div>
                                                        </div>
                                                        <div className="alphab_line">
                                                            <div className="line">
                                                                <span className="alp">#</span>
                                                                <span className="alp">A</span>
                                                                <span className="alp">B</span>
                                                                <span className="alp on">C</span>
                                                                <span className="alp">D</span>
                                                                <span className="alp">E</span>
                                                                <span className="alp">F</span>
                                                                <span className="alp">G</span>
                                                                <span className="alp">H</span>
                                                                <span className="alp">I</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>

                                            </div>
                                        </article>
                                    </section>
                                    <section className="selpp_select">
                                        <article className="selpp_top">
                                            <h3 className="dflx_ac">
                                                <span>Selected</span>
                                                <span className="hc_cout">56</span>
                                            </h3>
                                            <p className="clear">
                                                Clear all
                                            </p>
                                            <p className="line1"></p>
                                        </article>
                                        <article className="selpp_bords">
                                            <div className="selpp_vert_wrap scroll sc_y">
                                                <BordComp word="Barn Dance" />
                                                <BordComp word="Build" />
                                                <BordComp word="Bumper" />
                                                <BordComp word="Allemande" />
                                                <BordComp word="Bumper" />
                                            </div>
                                        </article>
                                    </section>
                                </div>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_foot">
                                <ButtonComponent class="btn_md2" txt="Cancel" />
                                <ButtonComponent class="btn_md2 cor" txt="Select" />
                            </div>
                        </div>

                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">

                        <div className="pop_body selectPop">
                            <div className="pop_top">
                                <div className="ptop_txt">
                                    <h1 className="ptop_title">
                                        Select Your Company
                                    </h1>
                                </div>
                                <p className="ptop_x"></p>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_conts">
                                <SearchComponent srch_class="hd_search" btn_type="button"
                                    btn_class="btn_srch" input_class="hd_input" placeholder="Company" />
                                <div className="selPop_wrap">
                                    <section className="selpp_content">
                                        <article className="selpp_top">
                                            <h3 className="dflx_ac">
                                                <span>About</span>
                                                <span className="sm">1,234</span>
                                                <span>Results</span>
                                            </h3>
                                            <p className="line1"></p>
                                        </article>
                                        <article className="selpp_cont">
                                            <div className="selpp_contin scroll sc_y">
                                                <section className="company_group">
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_sm40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        SM Entertainment
                                                                    </p>
                                                                    <p className="word">
                                                                        Seoul, Republic of Korea
                                                                    </p>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_ui40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        UI Netwroks
                                                                    </p>
                                                                    <p className="word">
                                                                        Seoul, Republic of Korea
                                                                    </p>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_tono40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        TONO Company
                                                                    </p>
                                                                    <p className="word">
                                                                        New York, USA
                                                                    </p>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_spw40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        Sparwk
                                                                    </p>
                                                                    <p className="word">
                                                                        Seoul, Republic of Korea
                                                                    </p>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_tono40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        TONO Company
                                                                    </p>
                                                                    <p className="word">
                                                                        New York, USA
                                                                    </p>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_spw40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        Sparwk
                                                                    </p>
                                                                    <p className="word">
                                                                        Seoul, Republic of Korea
                                                                    </p>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_spw40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        Sparwk
                                                                    </p>
                                                                    <p className="word">
                                                                        Seoul, Republic of Korea
                                                                    </p>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_sm40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        SM Entertainment
                                                                    </p>
                                                                    <p className="word">
                                                                        Seoul, Republic of Korea
                                                                    </p>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_ui40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        UI Netwroks
                                                                    </p>
                                                                    <p className="word">
                                                                        Seoul, Republic of Korea
                                                                    </p>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_sm40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        SM Entertainment
                                                                    </p>
                                                                    <p className="word">
                                                                        Seoul, Republic of Korea
                                                                    </p>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_sm40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        SM Entertainment
                                                                    </p>
                                                                    <p className="word">
                                                                        Seoul, Republic of Korea
                                                                    </p>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_ui40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        UI Netwroks
                                                                    </p>
                                                                    <p className="word">
                                                                        Seoul, Republic of Korea
                                                                    </p>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                </section>

                                            </div>
                                        </article>
                                    </section>
                                    <section className="selpp_select">
                                        <article className="selpp_top">
                                            <h3 className="dflx_ac">
                                                <span>Selected</span>
                                                <span className="hc_cout">2</span>
                                            </h3>
                                            <p className="clear">
                                                Clear all
                                            </p>
                                            <p className="line1"></p>
                                        </article>
                                        <article className="selpp_bords">
                                            <div className="selpp_vert_wrap scroll sc_y">

                                                <div className="company_line">
                                                    <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                    <dl className="company_dl">
                                                        <dt>
                                                            <p className="simbol40">
                                                                <ImgComponent src="../resources/images/simb_ui40.png" />
                                                            </p>
                                                        </dt>
                                                        <dd>
                                                            <div className="prof_from">
                                                                <p className="prof_company">
                                                                    UI Netwroks
                                                                </p>
                                                                <p className="word">
                                                                    Seoul, Republic of Korea
                                                                </p>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <div className="company_line">
                                                    <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                    <dl className="company_dl">
                                                        <dt>
                                                            <p className="simbol40">
                                                                <ImgComponent src="../resources/images/simb_tono40.png" />
                                                            </p>
                                                        </dt>
                                                        <dd>
                                                            <div className="prof_from">
                                                                <p className="prof_company">
                                                                    TONO Company
                                                                </p>
                                                                <p className="word">
                                                                    New York, USA
                                                                </p>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <div className="company_line">
                                                    <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                    <dl className="company_dl">
                                                        <dt>
                                                            <p className="simbol40">
                                                                <ImgComponent src="../resources/images/simb_tono40.png" />
                                                            </p>
                                                        </dt>
                                                        <dd>
                                                            <div className="prof_from">
                                                                <p className="prof_company">
                                                                    TONO Company
                                                                </p>
                                                                <p className="word">
                                                                    New York, USA
                                                                </p>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>

                                            </div>
                                        </article>
                                    </section>
                                </div>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_foot">
                                <ButtonComponent class="btn_md2" txt="Cancel" />
                                <ButtonComponent class="btn_md2 cor" txt="Select" />
                            </div>
                        </div>

                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">

                        <div className="pop_body selectPop">
                            <div className="pop_top">
                                <div className="ptop_txt">
                                    <h1 className="ptop_title">
                                        Search A&R
                                    </h1>
                                </div>
                                <p className="ptop_x"></p>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_conts">
                                <div className="selPop_wrap">
                                    <section className="selpp_content norm">
                                        <article className="selpp_top h60">
                                            <SearchComponent srch_class="hd_search m-t-10 box" btn_type="button"
                                                btn_class="btn_srch" input_class="hd_input" placeholder="Enter Collaborator name" />
                                        </article>
                                        <article className="selpp_cont">
                                            <div className="selpp_contin scroll sc_y">

                                                <section className="company_group">
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/prof_ex2.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        A&R.FullName
                                                                    </p>
                                                                    <div className="tip_line">
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>A&R</span>
                                                                        </p>
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>Manager</span>
                                                                        </p>
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>Role 1</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/prof_ex2.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        A&R.FullName
                                                                    </p>
                                                                    <div className="tip_line">
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>A&R</span>
                                                                        </p>
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>Manager</span>
                                                                        </p>
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>Role 1</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/prof_ex2.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        A&R.FullName
                                                                    </p>
                                                                    <div className="tip_line">
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>A&R</span>
                                                                        </p>
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>Manager</span>
                                                                        </p>
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>Role 1</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                </section>

                                            </div>
                                        </article>
                                    </section>
                                    <section className="selpp_select">
                                        <article className="selpp_top">
                                            <h3 className="dflx_ac">
                                                <span>Selected</span>
                                                <span className="hc_cout">2</span>
                                            </h3>
                                            <p className="clear">
                                                Clear all
                                            </p>
                                            <p className="line1"></p>
                                        </article>
                                        <article className="selpp_bords norm">
                                            <div className="selpp_vert_wrap scroll sc_y">

                                                <div className="company_line norm">
                                                    <span className="del_x"></span>
                                                    <dl className="company_dl">
                                                        <dt>
                                                            <p className="simbol40">
                                                                <ImgComponent src="../resources/images/prof_ex2.png" />
                                                            </p>
                                                        </dt>
                                                        <dd>
                                                            <div className="prof_from">
                                                                <p className="prof_company">
                                                                    A&R.FullName
                                                                </p>
                                                                <div className="tip_line">
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>A&R</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Manager</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Role 1</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <div className="company_line norm">
                                                    <span className="del_x"></span>
                                                    <dl className="company_dl">
                                                        <dt>
                                                            <p className="simbol40">
                                                                <ImgComponent src="../resources/images/prof_ex2.png" />
                                                            </p>
                                                        </dt>
                                                        <dd>
                                                            <div className="prof_from">
                                                                <p className="prof_company">
                                                                    A&R.FullName
                                                                </p>
                                                                <div className="tip_line">
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>A&R</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Manager</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Role 1</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>

                                            </div>
                                        </article>
                                    </section>
                                </div>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_foot">
                                <ButtonComponent class="btn_md2" txt="Cancel" />
                                <ButtonComponent class="btn_md2 cor" txt="Select" />
                            </div>
                        </div>

                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">

                        <div className="pop_body middlePop">
                            <div className="pop_top">
                                <div className="ptop_txt">
                                    <h1 className="ptop_title">
                                        Select Original Publisher
                                    </h1>
                                </div>
                                <p className="ptop_x"></p>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_conts">
                                <div className="selPop_wrap">
                                    <section className="selpp_content norm">
                                        <article className="selpp_top h60">
                                            <SearchComponent srch_class="hd_search m-t-10 box" btn_type="button"
                                                btn_class="btn_srch" input_class="hd_input" placeholder="Try searching for Project Member list" />
                                        </article>
                                        <article className="selpp_cont">
                                            <div className="selpp_contin scroll sc_y">
                                                <section className="company_group">
                                                    <div className="company_line">
                                                        <div className="check_line on">
                                                            <p className="checkbox circ_norm">
                                                                <span className="circle"></span>
                                                            </p>
                                                        </div>
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_sm40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        OP.Name
                                                                    </p>
                                                                    <div className="tip_line">
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>City</span>
                                                                        </p>
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>Country</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <div className="check_line">
                                                            <p className="checkbox circ_norm">
                                                                <span className="circle"></span>
                                                            </p>
                                                        </div>
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_sm40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        OP.Name
                                                                    </p>
                                                                    <div className="tip_line">
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>City</span>
                                                                        </p>
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>Country</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <div className="check_line">
                                                            <p className="checkbox circ_norm">
                                                                <span className="circle"></span>
                                                            </p>
                                                        </div>
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_tono40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        OP.Name
                                                                    </p>
                                                                    <div className="tip_line">
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>City</span>
                                                                        </p>
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>Country</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <div className="check_line">
                                                            <p className="checkbox circ_norm">
                                                                <span className="circle"></span>
                                                            </p>
                                                        </div>
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_tono40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        OP.Name
                                                                    </p>
                                                                    <div className="tip_line">
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>City</span>
                                                                        </p>
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>Country</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="company_line">
                                                        <div className="check_line">
                                                            <p className="checkbox circ_norm">
                                                                <span className="circle"></span>
                                                            </p>
                                                        </div>
                                                        <dl className="company_dl">
                                                            <dt>
                                                                <p className="simbol40">
                                                                    <ImgComponent src="../resources/images/simb_tono40.png" />
                                                                </p>
                                                            </dt>
                                                            <dd>
                                                                <div className="prof_from">
                                                                    <p className="prof_company">
                                                                        OP.Name
                                                                    </p>
                                                                    <div className="tip_line">
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>City</span>
                                                                        </p>
                                                                        <p className="tip_word">
                                                                            <span className="jum"></span>
                                                                            <span>Country</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                </section>
                                            </div>
                                        </article>
                                    </section>
                                </div>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_foot">
                                <ButtonComponent class="btn_md2" txt="Cancel" />
                                <ButtonComponent class="btn_md2 cor" txt="Select" />
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
}