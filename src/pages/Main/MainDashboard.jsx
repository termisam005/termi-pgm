import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ImgComponent from "../../components/common/ImgComponent";
import InputComponent from "../../components/common/InputComponent";
import ProfComponent from "../../components/common/ProfComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWith from "../../components/common/ButtonWith";
import Footer from "../../components/layout/Footer";
import Broad from "../../components/common/Broad";
import EtcCont from "../../components/common/EtcCont";
import BordComp from "../../components/common/BordComp";
import ListStart from "../list/ListStart";
import ListProject from "../list/ListProject";
import AsideDash from "../../components/layout/AsideDash";
import SlideToggle from "react-slide-toggle";
import PopEduc from "../../components/common/PopEduc";
import PopCareer from "../../components/common/PopCareer";
import MarkFavorite from "../../components/common/MarkFavorite";
import ReactTooltip from "react-tooltip";

//contents
import FeatureName from "../../components/layout/FeatureName";
import Featured from "../../components/layout/Featured";


export default function MainDashboard() {

    const creAte = () => {
        window.location.href = "/CreateProject1"
    };
    const StartVerify = () => {
        window.location.href = "/VerProfile1"
    };

    const [educPop, setEducPop] = useState(false);
    const openEduc = () => {
        setEducPop(true);
    };
    const closeEduc = () => {
        setEducPop(false);
    }

    const [careePop, setCareePop] = useState(false);
    const openCaree = () => {
        setCareePop(true);
    };
    const closeCaree = () => {
        setCareePop(false);
    }

    //Toggle
    const [educToggle, setEducToggle] = useState(false);
    const clickEduc = () => {
        setEducToggle(!educToggle);
    }
    const [carToggle, setCarToggle] = useState(false);
    const clickCar = () => {
        setCarToggle(!carToggle);
    }
    const [isToggle, setIsToggle] = useState(false);
    const clickToggle = () => {
        setIsToggle(!isToggle);
    }
    const [skillToggle, setSkillToggle] = useState(false);
    const clickSkill = () => {
        setSkillToggle(!skillToggle);
    }

    //Edit
    const [editors, setEditors] = useState(false);
    const clickEdit = () => {
        setEditors(true);
    };
    const clickSave = () => {
        setEditors(false);
    }

    //ListProject
    const [hiddState, setHiddState] = useState(false);
    const hoverRecompt = () => {
        setHiddState(true);
    }
    const outRecompt = () => {
        setHiddState(false);
    }

    //PopPassword
    const [passPop, setPassPop] = useState(false);
    const openPass = () => {
        setPassPop(true);
    };
    const closePass = () => {
        setPassPop(false);
    }


    return (
        <div className="wrap">
            <Header />

            <div className="banner_bg">
                <ImgComponent class="banner_img" src="../resources/images/banner_ex1.jpg" />
                <section className="banner_center">
                    <Blueline />

                    <div className="broad_line">
                        <Broad hc="2" src="../resources/images/broad_bil.png" />
                        <Broad hc="7" src="../resources/images/broad_qoon.png" />
                        <Broad hc="9" src="../resources/images/broad_dia.png" />
                    </div>
                </section>
            </div>

            <div className="container bann_container">

                <div className="contents">

                    <section className="aside_line">
                        <AsideDash />
                        <aside className="the_aside m-t-25">
                            <div className="mini_top dflx_ac_jbet">
                                <h1>Connect</h1>
                                <a className="view_go">
                                    <span>View more</span>
                                    <ImgComponent src="../resources/images/sv_arr_view.svg" />
                                </a>
                            </div>
                            <p className="line1"></p>
                            <div className="connector">
                                <div className="message_box">
                                    <dl className="message_dl connect_dl">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                        </dt>
                                        <dd className="conn_dd">
                                            <div className="mess_who">
                                                <span className="who">Issac Alberiz</span>
                                                <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                                                    <li>Message</li>
                                                </EtcCont>
                                            </div>
                                            <div className="tip_line">
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Producer</span>
                                                </p>
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Topliner</span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="message_box">
                                    <dl className="message_dl connect_dl">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        </dt>
                                        <dd className="conn_dd">
                                            <div className="mess_who">
                                                <span className="who">Issac Alberiz</span>
                                                <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                                                    <li>Message</li>
                                                </EtcCont>
                                            </div>
                                            <div className="dflx_ac tip_line">
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Producer</span>
                                                </p>
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Topliner</span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="message_box">
                                    <dl className="message_dl connect_dl">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex2.png" />
                                        </dt>
                                        <dd className="conn_dd">
                                            <div className="mess_who">
                                                <span className="who">Jay.Park</span>
                                                <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                                                    <li>Message</li>
                                                </EtcCont>
                                            </div>
                                            <div className="dflx_ac tip_line">
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Producer</span>
                                                </p>
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Topliner</span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

                        <article className="contain hidd on">
                            <div className="top_ct">
                                <section className="contain_top">
                                    <div className="cttop_left none">
                                        <h1 className="top_title">Verify Your Profile</h1>
                                        <p className="mid_title">
                                            Get your profile Verification in minutes
                                        </p>
                                    </div>
                                </section>
                                <div className="job_wrap">
                                    <ButtonComponent onClick={StartVerify} class="btn_md1 cor" txt="Get Started" />
                                </div>
                            </div>
                        </article>

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">Project</h1>
                                </div>
                                <div>
                                    <p className="mid_title">
                                        Based on your project
                                    </p>
                                </div>
                            </section>
                            <p className="line1"></p>
                            <section className="contain_list">
                                <article className="contact_line">
                                    <div className="contact_sel">
                                        <div className="tab_line">
                                            <p className="tab on">All</p>
                                            <p className="tab">Co-Write</p>
                                            <p className="tab">Recommend</p>
                                        </div>
                                        <select className="selector wh mini w220">
                                            <option value="">Recently Added</option>
                                            <option value="">A to Z</option>
                                            <option value="">Z to A</option>
                                        </select>
                                    </div>
                                </article>

                                <article className="list_body">
                                    <ListStart create={creAte} go_class="cor994" go_txt="Start Collaborating">
                                        <div className="ctr_hidd_cent">
                                            <p className="ctr_hidd_txt">
                                                Connect with like-minded
                                                creatives to achieve your goals.
                                                Co-writing & collaboration will
                                                further your career.
                                            </p>
                                        </div>
                                    </ListStart>
                                    <article onMouseLeave={outRecompt} className="creator">
                                        <div className="ctr_wrap">
                                            <div className="vl_hidd">
                                                <div className="ctr_hidd_in">
                                                    <MarkFavorite />
                                                    <div className="over">
                                                        <dl className="message_dl message_dl32">
                                                            <dt>
                                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                                    line_class="line_over" src="../resources/images/simb_tono40.png" />
                                                            </dt>
                                                            <dd className="conn_dd">
                                                                <div className="mess_who mess_fav">
                                                                    <span className="who">Issac Alberiz</span>
                                                                </div>
                                                                <div className="tip_line">
                                                                    <p className="tip_word tip_sm">
                                                                        <span>Seoul, Republic of Korea </span>
                                                                    </p>
                                                                </div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                    <div className="bottom">
                                                        <div onClick={openPass}>
                                                            <div className="ctr_name">
                                                                <span className="lock12 vl"></span>
                                                                <h3 className="lst_title">Back to the Roots</h3>
                                                            </div>
                                                            <div className="ctr_text">
                                                                <p className="record">Collaboration / Cowrite</p>
                                                                <p className="record">Ekko Music Right</p>
                                                                <p className="record">Oslo, Norway</p>
                                                            </div>
                                                        </div>
                                                        <dl onMouseOver={hoverRecompt} className="message_dl message_dl24">
                                                            <dt>
                                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                    line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                            </dt>
                                                            <dd className="conn_dd">
                                                                <div className="mess_who">
                                                                    <span className="who12">Jin Suk Choi</span>
                                                                </div>
                                                            </dd>
                                                            <article onMouseLeave={outRecompt} className={hiddState ? "hidd_recompt on" : "hidd_recompt"}>
                                                                <div className="ctr_wrap">
                                                                    <div className="ctr_info">
                                                                        <div className="over">
                                                                            <div className="dflx_jbet w-100">
                                                                                <section className="recomt_wrap">
                                                                                    <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof in c50"
                                                                                        line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                                                    <span className="crown"></span>
                                                                                </section>
                                                                                <div className="dpflx ctr_mark">
                                                                                    <p data-tip data-for="Chat" className="mark_talk m-t-1 m-r-15">
                                                                                        <ImgComponent src="../resources/images/mark_talk.png" />
                                                                                    </p>
                                                                                    <ReactTooltip id="Chat" place="top" effect="solid">
                                                                                        Chat
                                                                                    </ReactTooltip>
                                                                                    <MarkFavorite />
                                                                                </div>
                                                                            </div>
                                                                            <div className="ctr_name">
                                                                                <h3 className="lst_title">Jin Suk Choi</h3>
                                                                                <span className="shield"></span>
                                                                            </div>
                                                                            <div className="ctr_text hauto">
                                                                                <p className="record">
                                                                                    Seoul, Republic of Korea
                                                                                </p>
                                                                                <p className="record">
                                                                                    English, Korean
                                                                                </p>
                                                                                <div className="m-t-15 m-b-5">
                                                                                    <p className="f-s-12">
                                                                                        "Multi-platinum selling producer😎✨"
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ctr_foot">
                                                                    <p className="line2"></p>
                                                                    <div className="foot_set">
                                                                        <dl className="message_dl message_dl24">
                                                                            <dt>
                                                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                                    src="../resources/images/simb_tono40.png" />
                                                                            </dt>
                                                                            <dd className="conn_dd">
                                                                                <div className="mess_who">
                                                                                    <span className="who12 cor913">Ekko Music Right</span>
                                                                                </div>
                                                                            </dd>
                                                                        </dl>
                                                                        <dl className="message_dl message_dl24">
                                                                            <dt>
                                                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                                    src="../resources/images/simb_sm40.png" />
                                                                            </dt>
                                                                            <dd className="conn_dd">
                                                                                <div className="mess_who">
                                                                                    <span className="who12 cor913">Dsing Music</span>
                                                                                </div>
                                                                            </dd>
                                                                        </dl>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ctr_info">
                                                <div className="ctr_name ctr_call">
                                                    <span className="lock12"></span>
                                                    <h3>Back to the Roots</h3>
                                                </div>
                                                <div className="prj_dark"></div>
                                                <ImgComponent class="img_norm" src="../resources/images/trans_sparwk70.png" />
                                            </div>
                                        </div>
                                        <div className="ctr_foot">
                                            <p className="line1"></p>
                                            <div className="foot_info">
                                                <p className="status">Co-Writing</p>
                                            </div>
                                            <div className="foot_right">
                                                <p className="appcant wh">
                                                    <span className="m-r-2">3</span>
                                                    <span>Days ago</span>
                                                </p>
                                                <EtcCont wrap_class="wrap_etc sm m-t-7" btn_class="btn_hor_etc">
                                                    <li>Bookmark</li>
                                                    <li>View</li>
                                                    <li>Share URL</li>
                                                    <li>Apply</li>
                                                </EtcCont>
                                            </div>
                                        </div>
                                    </article>
                                    <ListProject />
                                    <ListProject />
                                </article>
                                <div className="pos_more">
                                    <p className="see_view">
                                        <a>View all</a>
                                    </p>
                                </div>
                            </section>
                        </article>

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <div className="tab_line maint_line">
                                        <p className="art on">
                                            <a href="/MainVisitHome">Home</a>
                                        </p>
                                        <p className="art">
                                            <a>EPK</a>
                                        </p>
                                        <p className="art">
                                            <a>Post</a>
                                        </p>
                                        <p className="art">
                                            <a>Accolade</a>
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <p className="line1"></p>

                            <section className="contain_body">

                                <FeatureName title="Jin Suk Choi" contain_class="outer_contain" />

                                <Featured title="Featured" />

                                <SlideToggle duration={150}
                                    render={({ toggle, setCollapsibleElement }) => (
                                        <article className="the_feed m-b-20">
                                            <div className="mini_top p-t-20">
                                                <div className="dflx_ac_jbet m-b-5">
                                                    <div className="cttop_left">
                                                        <h1 className="top_title semib">
                                                            Education
                                                        </h1>
                                                    </div>
                                                    <div className="dflx_ac">
                                                        <p onClick={openEduc} className="cor913 curpt m-r-15">Edit</p>
                                                        <p className={educToggle ? "up_arrow on" : "up_arrow"} onClick={clickEduc}>
                                                            <span onClick={toggle} className="dpblock h-100"></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="line1"></p>
                                            <div ref={setCollapsibleElement} className="feed_conts">
                                                <div className="educt_line">
                                                    <dl className="educt_dl w-50">
                                                        <dt>
                                                            <ImgComponent class="img_simbol" src="../resources/images/simbol_west.png" />
                                                        </dt>
                                                        <dd>
                                                            <h5 className="title">University of Westminster</h5>
                                                            <div className="text">
                                                                <p>Master of Arts with Distinction, Audio Production</p>
                                                                <p>2007</p>
                                                                <p>London, UK</p>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                    <dl className="educt_dl w-50">
                                                        <dt>
                                                            <ImgComponent class="img_simbol" src="../resources/images/simbol_koruv.png" />
                                                        </dt>
                                                        <dd>
                                                            <h5 className="title">고려대학교</h5>
                                                            <div className="text">
                                                                <p>Bachelor of Science - BS, Animal Science</p>
                                                                <p>1998</p>
                                                                <p>Seoul, Republic of Korea</p>
                                                            </div>
                                                        </dd>
                                                    </dl>
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
                                                            Education
                                                        </h1>
                                                    </div>
                                                    <div className="dflx_ac">
                                                        {/* <p onClick={openEduc} className="cor913 curpt m-r-15">Edit</p> */}
                                                        <p className={educToggle ? "up_arrow on" : "up_arrow"} onClick={clickEduc}>
                                                            <span onClick={toggle} className="dpblock h-100"></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="line1"></p>
                                            <div ref={setCollapsibleElement} className="feed_conts">
                                                <div className="educt_line">
                                                    <div className="none_text">
                                                        <p>there is no content to display</p>
                                                    </div>
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
                                                            Career
                                                        </h1>
                                                    </div>
                                                    <div className="dflx_ac">
                                                        <p onClick={openCaree} className="cor913 curpt m-r-15">Edit</p>
                                                        <p className={carToggle ? "up_arrow on" : "up_arrow"} onClick={clickCar}>
                                                            <span onClick={toggle} className="dpblock h-100"></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="line1"></p>
                                            <div ref={setCollapsibleElement} className="feed_conts">
                                                <div className="educt_line">
                                                    <dl className="educt_dl w-50">
                                                        <dt>
                                                            <ImgComponent class="img_simbol" src="../resources/images/simbol_ekko.png" />
                                                        </dt>
                                                        <dd>
                                                            <h5 className="title">EKKO Music Rights</h5>
                                                            <div className="text">
                                                                <p>Co-Founder,  VP & General Manager</p>
                                                                <p>Jun 2016 - Present, 1year 10months</p>
                                                                <p>Stockholm, Sweden</p>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                    <dl className="educt_dl w-50">
                                                        <dt>
                                                            <ImgComponent class="img_simbol" src="../resources/images/simbol_dsign.png" />
                                                        </dt>
                                                        <dd>
                                                            <h5 className="title">Dsign Music</h5>
                                                            <div className="text">
                                                                <p>Co-Founder,  VP & General Manager</p>
                                                                <p>Jun 2016 - Present, 1year 10months</p>
                                                                <p>Stockholm, Sweden</p>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                    <dl className="educt_dl w-50">
                                                        <dt>
                                                            <ImgComponent class="img_norm" src="../resources/images/trans_sparwk.png" />
                                                        </dt>
                                                        <dd>
                                                            <h5 className="title">Company name</h5>
                                                            <div className="text">
                                                                <p>Co-Founder,  VP & General Manager</p>
                                                                <p>Jun 2016 - Present, 1year 10months</p>
                                                                <p>Stockholm, Sweden</p>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                    <dl className="educt_dl w-50">
                                                        <dt>
                                                            <ImgComponent class="img_norm" src="../resources/images/trans_sparwk.png" />
                                                        </dt>
                                                        <dd>
                                                            <h5 className="title">Company name</h5>
                                                            <div className="text">
                                                                <p>Co-Founder,  VP & General Manager</p>
                                                                <p>Jun 2016 - Present, 1year 10months</p>
                                                                <p>Stockholm, Sweden</p>
                                                            </div>
                                                        </dd>
                                                    </dl>
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
                                                            Skill
                                                        </h1>
                                                    </div>
                                                    <p className={skillToggle ? "up_arrow on" : "up_arrow"} onClick={clickSkill}>
                                                        <span onClick={toggle} className="dpblock h-100"></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="line1"></p>
                                            <div ref={setCollapsibleElement} className="feed_conts">
                                                <table className="table table_skill">
                                                    <tbody>
                                                        <tr>
                                                            <td className="crs_title">
                                                                Studio
                                                            </td>
                                                            <td>
                                                                <BordComp word="Producer" />
                                                                <BordComp word="Mixing Engineer" />
                                                                <BordComp word="Mastering Engineer" />
                                                                <BordComp word="Remixer" />
                                                                <BordComp word="Producer" />
                                                                <BordComp word="Producer" />
                                                                <BordComp word="Producer" />
                                                                <BordComp word="Producer" />
                                                                <BordComp word="Producer" />
                                                                <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="crs_title">
                                                                Main Genre
                                                            </td>
                                                            <td>
                                                                <BordComp word="Pop" />
                                                                <BordComp word="Electronic" />
                                                                <BordComp word="Dance" />
                                                                <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="crs_title">
                                                                Main instruments
                                                            </td>
                                                            <td>
                                                                <BordComp word="Vocals" />
                                                                <BordComp word="Guitar" />
                                                                <BordComp word="Piano" />
                                                                <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="crs_title">
                                                                Software
                                                            </td>
                                                            <td>
                                                                <BordComp word="Cubase" />
                                                                <BordComp word="Nuendo" />
                                                                <BordComp word="Logic Pro" />
                                                                <BordComp word="Pro Tools" />
                                                                <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
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
                                                            Accomplishments
                                                        </h1>
                                                    </div>
                                                    <div className="dflx_ac">
                                                        <div className={editors ? "save_btline" : "save_btline hidd"}>
                                                            <p onClick={clickSave} className="edit_vl14 m-r-15 corfff">Cancel</p>
                                                            <p onClick={clickSave} className="edit_vl14 m-r-15">Save</p>
                                                        </div>
                                                        <p onClick={clickEdit} className={editors ? "edit_vl14 m-r-15 hidd" : "edit_vl14 m-r-15"}>Edit</p>
                                                        <p className={isToggle ? "up_arrow on" : "up_arrow"} onClick={clickToggle}>
                                                            <span onClick={toggle} className="dpblock h-100"></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="line1"></p>
                                            <div ref={setCollapsibleElement} className="feed_conts">
                                                <table className="table table_skill">
                                                    <tbody>
                                                        <tr>
                                                            <td className="crs_title">
                                                                Courses
                                                            </td>
                                                            <td>
                                                                <div className={editors ? "accomp_text hidd" : "accomp_text"}>
                                                                    <p>Artist Management</p>
                                                                    <p>Business Technology and Design</p>
                                                                    <p>Concert Management and Touring</p>
                                                                    <p>Critical Listening for Music Professionals</p>
                                                                    <p>Excel and Data Reporting</p>
                                                                    <p>Leadership and Organizational Behavior</p>
                                                                    <p>Music Business Law and Contract Negotiations</p>
                                                                    <p>Music Business Management</p>
                                                                    <p>Music Business Marketing</p>
                                                                    <p>Music Copyright and Publishing</p>
                                                                    <p>Music Distribution</p>
                                                                    <p>Music Merchandising and Retail Promotion</p>
                                                                    <p>Music Supervision</p>
                                                                </div>
                                                                <textarea className={editors ? "text_area accomp_area" : "text_area accomp_area hidd"}
                                                                    placeholder="Artist Management"></textarea>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </article>
                                    )}
                                />

                            </section>

                        </article>

                    </main >

                </div >

                <PopEduc open={educPop} close={closeEduc} />
                <PopCareer open={careePop} close={closeCaree} />
                <PopPassword open={passPop} close={closePass} />
            </div >

            <Footer />

        </div >
    )
}


const PopPassword = (props) => {

    const { open, close } = props;

    const [popUps, setpopUps] = useState(false);
    const openPop = () => {
        setpopUps(true);
    }
    const closePop = () => {
        setpopUps(false);
    }

    return (
        <section className={open ? 'pop_contents active pop_password' : 'pop_contents pop_password'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent privatePop">
                <div className="pop_conts">
                    <div className="proPop_title">
                        <h1>Password for Private Project</h1>
                    </div>
                    <div className="prof_zone norm prof_pop">
                        <p className="project_call">
                            <span>Collaboration</span>
                            <span className="m-l-2 m-r-2">/</span>
                            <span>Cowrite</span>
                        </p>
                        <div className="nemo_prof">
                            <img src="../resources/images/nemo_prof_ex1.jpg" alt="photo" />
                        </div>
                        <p className="prof_name_big cor913">
                            <span>PROJECT NOEASY</span>
                        </p>
                        <div className="prof_from">
                            <p className="prof_location">
                                <span>Hip Hop, K-POP</span>
                            </p>
                        </div>
                        <div className="tip_prof op07">
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>Cool</span>
                            </p>
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>Fun</span>
                            </p>
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>Happy</span>
                            </p>
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>Urgent</span>
                            </p>
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>Party</span>
                            </p>
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>Summer</span>
                            </p>
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>Dramma</span>
                            </p>
                        </div>
                    </div>
                    <div className="log_conts">
                        <div className="put_cont m-b-25">
                            <div className="putt_box">
                                <InputComponent type="password" class="wrput" placeholder="Enter Password for Private Project" />
                            </div>
                        </div>
                        <div className="m-b-30">
                            <ButtonComponent onClick={openPop} type="submit" class="btn_lg1 cor" txt="Submit" />
                        </div>
                    </div>
                </div>
            </div>
            <PopComponent open={popUps} close={closePop} />
        </section >
    )
}


const PopComponent = (props) => {
    const { open, close } = props;

    const goProject = () => {
        window.location.href = "/ProjectDetailHome";
    }

    return (
        <div>
            <section className={open ? 'pop_contents active pop_ups' : 'pop_contents pop_ups'}>
                <div onClick={close} className="pop_bg"></div>
                <div className="pop_body pop_dial pop_ab_cent">
                    <div className="pop_conts">
                        <div className="pop_cent">
                            <h5>
                                The Password for Private Project does not match.
                            </h5>
                            <br />
                            <p>
                                Please verify that your password information is correct and verify your email address so that you can access your account.
                            </p>
                        </div>
                    </div>
                    <p className="line1"></p>
                    <div className="pop_foot">
                        <ButtonComponent onClick={goProject} class="btn_md3 w-100" txt="Confirm" />
                    </div>
                </div>
            </section>
        </div>
    )
}








