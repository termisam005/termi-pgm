import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ImgComponent from "../../components/common/ImgComponent";
import InputComponent from "../../components/common/InputComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWith from "../../components/common/ButtonWith";
import Footer from "../../components/layout/Footer";
import AsideCompany1 from "../../components/layout/AsideCompany1";
import SlideToggle from "react-slide-toggle";
import PopLocation from "../../components/common/PopLocation";


export default function CompanyHome() {

    //Toggle
    const [overToggle, setOverToggle] = useState(false);
    const clickOver = () => {
        setOverToggle(!overToggle);
    }

    const [infoToggle, setInfoToggle] = useState(false);
    const clickInfo = () => {
        setInfoToggle(!infoToggle);
    }

    const [locToggle, setLocToggle] = useState(false);
    const clickLoc = () => {
        setLocToggle(!locToggle);
    }

    //Edit
    const [editors, setEditors] = useState(false);
    const clickEdit = () => {
        setEditors(true);
    };
    const clickSave = () => {
        setEditors(false);
    }

    const [infoEdit, setInfoEdit] = useState(false);
    const onInEdit = () => {
        setInfoEdit(true);
    };
    const onInSave = () => {
        setInfoEdit(false);
    }

    //PopMapedit
    const [mapPop, setMapPop] = useState(false);
    const openMap = () => {
        setMapPop(true);
    };
    const closeMap = () => {
        setMapPop(false);
    }


    return (
        <div className="wrap">
            <Header />

            <div className="banner_bg">
                <ImgComponent class="banner_img" src="../resources/images/banner_ex1.jpg" />
                <section className="banner_center">
                    <Blueline />
                </section>
            </div>

            <div className="container bann_container">

                <div className="contents">

                    <section className="aside_line">
                        <AsideCompany1 />
                    </section>

                    <main className="the_main">

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <div className="tab_line maint_line">
                                        <p className="art on">
                                            <a href="/CompanyHome">Home</a>
                                        </p>
                                        <p className="art">
                                            <a href="/CompanyRos">Roster</a>
                                        </p>
                                        <p className="art">
                                            <a href="/CompanyPart">Partner</a>
                                        </p>
                                        <p className="art">
                                            <a href="/CompanyPost">Post</a>
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <p className="line1"></p>

                            <section className="contain_body">

                                <SlideToggle duration={150}
                                    render={({ toggle, setCollapsibleElement }) => (
                                        <article className="the_feed m-b-20">
                                            <div className="mini_top p-t-20">
                                                <div className="dflx_ac_jbet m-b-5">
                                                    <div className="cttop_left">
                                                        <h1 className="top_title semib">
                                                            Overview
                                                        </h1>
                                                    </div>
                                                    <div className="dflx_ac">
                                                        <div className={editors ? "save_btline" : "save_btline hidd"}>
                                                            <p onClick={clickSave} className="edit_vl14 m-r-15">Save</p>
                                                        </div>
                                                        <p onClick={clickEdit} className={editors ? "edit_vl14 m-r-15 hidd" : "edit_vl14 m-r-15"}>Edit</p>
                                                        <p className={overToggle ? "up_arrow on" : "up_arrow"} onClick={clickOver}>
                                                            <span onClick={toggle} className="dpblock h-100"></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="line1"></p>
                                            <div ref={setCollapsibleElement} className="feed_conts">
                                                <div className={editors ? "overview_text hidd" : "overview_text"}>
                                                    <div className="accomp_text">
                                                        <p>EKKO Music Rights is a full-service music rights company. The foundation of our business is management,
                                                            administration and exploitation of copyrights.
                                                            <br /><br />
                                                            Our services include collection of royalties, hands-on creative A&R services, and marketing our creators and our song catalouge to the leading labels,
                                                            artists, managements, agencies, brands and sync departments across the globe.
                                                            <br /><br />
                                                            Our main priority is to provide the best service any creator can ask for. We pride ourselves in facilitating a friendly working environment.
                                                            EKKO is a place where hit songs are made and where hit songs are being pitched. We grow with our creators and our creators grow with us.
                                                            <br /><br />
                                                            Our administration deals with the leading international music rights companies Kobalt Music (Mainland China and ROW excluding Japan,
                                                            Korea and Scandinavia including Baltics), Avex Music Publishing (Japan), and EKKO Music Rights HQ (Korea).
                                                            <br /><br />
                                                            Our staff is experienced,  knowledgeable, results-driven and includes a huge international network.  Let your music EKKO in eternity!
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={editors ? "overview_text" : "overview_text hidd"}>
                                                    <textarea className="text_area accomp_area" placeholder="Artist Management"></textarea>
                                                </div>
                                            </div>
                                        </article>
                                    )}
                                />

                                <SlideToggle duration={150}
                                    render={({ toggle, setCollapsibleElement }) => (
                                        <article className="the_feed m-b-20">
                                            <div className="mini_top p-t-20">
                                                <div className="dflx_ac_jbet m-b-5">
                                                    <div className="cttop_left">
                                                        <h1 className="top_title semib">
                                                            Information
                                                        </h1>
                                                    </div>
                                                    <div className="dflx_ac">
                                                        <div className={infoEdit ? "save_btline" : "save_btline hidd"}>
                                                            <p onClick={onInSave} className="edit_vl14 m-r-15">Save</p>
                                                        </div>
                                                        <p onClick={onInEdit} className={infoEdit ? "edit_vl14 m-r-15 hidd" : "edit_vl14 m-r-15"}>Edit</p>
                                                        <p className={infoToggle ? "up_arrow on" : "up_arrow"} onClick={clickInfo}>
                                                            <span onClick={toggle} className="dpblock h-100"></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="line1"></p>
                                            <div ref={setCollapsibleElement} className="feed_conts">
                                                <table className={infoEdit ? "table table_skill hidd" : "table table_skill"}>
                                                    <tbody>
                                                        <tr>
                                                            <td className="crs_title">
                                                                Website
                                                            </td>
                                                            <td>
                                                                https://ekkomusicrights.com/
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="crs_title">
                                                                Phone
                                                            </td>
                                                            <td>
                                                                +46 8336910
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="crs_title">
                                                                Email
                                                            </td>
                                                            <td>
                                                                info@company.com
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table className={infoEdit ? "table table_skill" : "table table_skill hidd"}>
                                                    <tbody>
                                                        <tr>
                                                            <td className="crs_title vertmid">
                                                                Website
                                                            </td>
                                                            <td>
                                                                <InputComponent class="wrput mid trans" value="https://ekkomusicrights.com/" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="crs_title vertmid">
                                                                Phone
                                                            </td>
                                                            <td>
                                                                <InputComponent class="wrput mid trans" value="+46 8336910" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="crs_title vertmid">
                                                                Email
                                                            </td>
                                                            <td>
                                                                <InputComponent class="wrput mid trans" value="company" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </article>
                                    )}
                                />

                                <SlideToggle duration={150}
                                    render={({ toggle, setCollapsibleElement }) => (
                                        <article className="the_feed m-b-20">
                                            <div className="mini_top p-t-20">
                                                <div className="dflx_ac_jbet m-b-5">
                                                    <div className="cttop_left">
                                                        <h1 className="top_title semib">
                                                            Location
                                                        </h1>
                                                    </div>
                                                    <div className="dflx_ac">
                                                        <p onClick={openMap} className="edit_vl14 m-r-15">Edit</p>
                                                        <p className={locToggle ? "up_arrow on" : "up_arrow"} onClick={clickLoc}>
                                                            <span onClick={toggle} className="dpblock h-100"></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="line1"></p>
                                            <div ref={setCollapsibleElement} className="feed_conts">
                                                <section className="locatoin_cont">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    EKKO Music Rights
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Ölandsgatan 53, 116 63 Stockholm, Sweden
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    116 63, SE
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="location_map">
                                                        <ImgComponent class="img_ex" src="../resources/images/map_ex1.png" />
                                                    </div>
                                                </section>
                                            </div>
                                        </article>
                                    )}
                                />

                            </section>

                        </article>

                    </main >

                </div >

                <PopMapedit open={mapPop} close={closeMap} />
            </div >

            <Footer />

        </div >
    )
}


const PopMapedit = (props) => {

    const { open, close } = props;

    const [popLoct, setPopLoct] = useState(false);
    const openLoct = () => {
        setPopLoct(true);
    }
    const closeLoct = () => {
        setPopLoct(false);
    }

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent selectPop mx_h800 scroll scroll-y">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title f-s-20">
                            Business Location
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <div className="pf_txt">
                    <div className="put_tip">
                        <img src="../resources/images/feel_wh.png" alt="image" />
                    </div>
                    <p>Search for the place you want and indicate the place yourself.</p>
                </div>
                <p className="line1"></p>
                <div className="pop_map_conts pop_conts p-t-20 p-b-25">
                    <section className="locatoin_cont">
                        <div className="half_putt m-b-5">
                            <div className="dflx_ac_jbet">
                                <div className="putt_box see">
                                    <ButtonWith onClick={openLoct} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                    <InputComponent type="text" class="wrput" placeholder="Country" />
                                </div>
                                <div className="putt_box see">
                                    <p className="put_mark">
                                        <img src="../resources/images/sv_srch_wh.svg" alt="search" />
                                    </p>
                                    <InputComponent type="text" class="wrput" placeholder="Search Google Maps" />
                                </div>
                            </div>
                            <div className="putt_box w-100">
                                <InputComponent type="text" class="wrput" placeholder="Address Line" />
                            </div>
                        </div>
                        <div className="location_map">
                            <ImgComponent class="img_ex" src="../resources/images/map_ex1.png" />
                        </div>
                    </section>
                    <div className="dflx_ac_jend p-t-20">
                        <ButtonComponent onClick={close} class="btn_sm1 m-r-12 w100" txt="Cancel" />
                        <ButtonComponent class="btn_sm1 cor w100" txt="Save" />
                    </div>
                </div>
            </div>
            <PopLocation open={popLoct} close={closeLoct} />
        </section >
    )
}










