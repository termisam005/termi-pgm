import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ImgComponent from "../../components/common/ImgComponent";
import ProfComponent from "../../components/common/ProfComponent";
import Footer from "../../components/layout/Footer";
import EtcCont from "../../components/common/EtcCont";
import AsideDashAnr from "../../components/layout/AsideDashAnr";
import SlideToggle from "react-slide-toggle";
import PopEduc from "../../components/common/PopEduc";
import PopCareer from "../../components/common/PopCareer";
import AnrSwiperFull from "../../components/layout/AnrSwiperFull";
import AnrSwiperNone from "../../components/layout/AnrSwiperNone";
import AnrSwiperCatal from "../../components/layout/AnrSwiperCatal";
import AnrSwiperEval from "../../components/layout/AnrSwiperEval";
import AnrSwiperReval from "../../components/layout/AnrSwiperReval";
import AnrSwiperSpot from "../../components/layout/AnrSwiperSpot";
import AnrSwiperAlbums from "../../components/layout/AnrSwiperAlbums";
import AnrSwiperSub from "../../components/layout/AnrSwiperSub";

//contents
import FeatureName from "../../components/layout/FeatureName";
import Featured from "../../components/layout/Featured";


export default function AnrDashboard() {

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
    const [fullToggle, setFullToggle] = useState(false);
    const clickFull = () => {
        setFullToggle(!fullToggle);
    }
    const [noneToggle, setNoneToggle] = useState(false);
    const clickNone = () => {
        setNoneToggle(!noneToggle);
    }
    const [catalToggle, setCatalToggle] = useState(false);
    const clickCatal = () => {
        setCatalToggle(!catalToggle);
    }
    const [evalToggle, setEvalToggle] = useState(false);
    const clickEval = () => {
        setEvalToggle(!catalToggle);
    }
    const [revalToggle, setRevalToggle] = useState(false);
    const clickReval = () => {
        setRevalToggle(!revalToggle);
    }
    const [spotToggle, setSpotToggle] = useState(false);
    const clickSpot = () => {
        setSpotToggle(!spotToggle);
    }
    const [albToggle, setAlbToggle] = useState(false);
    const clickAlb = () => {
        setAlbToggle(!albToggle);
    }
    const [subToggle, setSubToggle] = useState(false);
    const clickSub = () => {
        setSubToggle(!subToggle);
    }

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

    //Edit
    const [editors, setEditors] = useState(false);
    const clickEdit = () => {
        setEditors(true);
    };
    const clickSave = () => {
        setEditors(false);
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
                        <AsideDashAnr />
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
                                                    <li>Remove</li>
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
                                                    <li>Remove</li>
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
                                                    <li>Remove</li>
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

                        <SlideToggle duration={150}
                            render={({ toggle, setCollapsibleElement }) => (
                                <article className="contain">
                                    <section className="contain_top">
                                        <div className="cttop_left">
                                            <h1 className="top_title">Pitched list for 'A&R.FullName'</h1>
                                        </div>
                                        <div className="dflx_ac">
                                            <p className={fullToggle ? "up_arrow on" : "up_arrow"} onClick={clickFull}>
                                                <span onClick={toggle} className="dpblock h-100"></span>
                                            </p>
                                        </div>
                                    </section>
                                    <p className="line1"></p>
                                    <section className="contain_list">
                                        <div ref={setCollapsibleElement}>
                                            <AnrSwiperFull />
                                        </div>
                                    </section>
                                </article>
                            )}
                        />

                        <SlideToggle duration={150}
                            render={({ toggle, setCollapsibleElement }) => (
                                <article className="contain">
                                    <section className="contain_top">
                                        <div className="cttop_left">
                                            <h1 className="top_title">Pitched list for 'A&R.FullName'</h1>
                                        </div>
                                        <div className="dflx_ac">
                                            <p className={noneToggle ? "up_arrow on" : "up_arrow"} onClick={clickNone}>
                                                <span onClick={toggle} className="dpblock h-100"></span>
                                            </p>
                                        </div>
                                    </section>
                                    <p className="line1"></p>
                                    <section className="contain_list">
                                        <div ref={setCollapsibleElement}>
                                            <AnrSwiperNone />
                                        </div>
                                    </section>
                                </article>
                            )}
                        />

                        <SlideToggle duration={150}
                            render={({ toggle, setCollapsibleElement }) => (
                                <article className="contain">
                                    <section className="contain_top">
                                        <div className="cttop_left">
                                            <h1 className="top_title">Catalog</h1>
                                        </div>
                                        <div className="dflx_ac">
                                            <p className={catalToggle ? "up_arrow on" : "up_arrow"} onClick={clickCatal}>
                                                <span onClick={toggle} className="dpblock h-100"></span>
                                            </p>
                                        </div>
                                    </section>
                                    <p className="line1"></p>
                                    <section className="contain_list">
                                        <div ref={setCollapsibleElement}>
                                            <AnrSwiperCatal />
                                        </div>
                                    </section>
                                </article>
                            )}
                        />

                        <SlideToggle duration={150}
                            render={({ toggle, setCollapsibleElement }) => (
                                <article className="contain">
                                    <section className="contain_top">
                                        <div className="cttop_left">
                                            <h1 className="top_title">Evaluation</h1>
                                        </div>
                                        <div className="dflx_ac">
                                            <p className={evalToggle ? "up_arrow on" : "up_arrow"} onClick={clickEval}>
                                                <span onClick={toggle} className="dpblock h-100"></span>
                                            </p>
                                        </div>
                                    </section>
                                    <p className="line1"></p>
                                    <section className="contain_list">
                                        <div ref={setCollapsibleElement}>
                                            <AnrSwiperEval />
                                        </div>
                                    </section>
                                </article>
                            )}
                        />

                        <SlideToggle duration={150}
                            render={({ toggle, setCollapsibleElement }) => (
                                <article className="contain">
                                    <section className="contain_top">
                                        <div className="cttop_left">
                                            <h1 className="top_title">Revaluation</h1>
                                        </div>
                                        <div className="dflx_ac">
                                            <p className={revalToggle ? "up_arrow on" : "up_arrow"} onClick={clickReval}>
                                                <span onClick={toggle} className="dpblock h-100"></span>
                                            </p>
                                        </div>
                                    </section>
                                    <p className="line1"></p>
                                    <section className="contain_list">
                                        <div ref={setCollapsibleElement}>
                                            <AnrSwiperReval />
                                        </div>
                                    </section>
                                </article>
                            )}
                        />

                        <SlideToggle duration={150}
                            render={({ toggle, setCollapsibleElement }) => (
                                <article className="contain">
                                    <section className="contain_top">
                                        <div className="cttop_left">
                                            <h1 className="top_title">Spotting</h1>
                                        </div>
                                        <div className="dflx_ac">
                                            <p className={spotToggle ? "up_arrow on" : "up_arrow"} onClick={clickSpot}>
                                                <span onClick={toggle} className="dpblock h-100"></span>
                                            </p>
                                        </div>
                                    </section>
                                    <p className="line1"></p>
                                    <section className="contain_list">
                                        <div ref={setCollapsibleElement}>
                                            <AnrSwiperSpot />
                                        </div>
                                    </section>
                                </article>
                            )}
                        />

                        <SlideToggle duration={150}
                            render={({ toggle, setCollapsibleElement }) => (
                                <article className="contain">
                                    <section className="contain_top">
                                        <div className="cttop_left">
                                            <h1 className="top_title">Albums</h1>
                                        </div>
                                        <div className="dflx_ac">
                                            <p className={albToggle ? "up_arrow on" : "up_arrow"} onClick={clickAlb}>
                                                <span onClick={toggle} className="dpblock h-100"></span>
                                            </p>
                                        </div>
                                    </section>
                                    <p className="line1"></p>
                                    <section className="contain_list">
                                        <div ref={setCollapsibleElement}>
                                            <AnrSwiperAlbums />
                                        </div>
                                    </section>
                                </article>
                            )}
                        />

                        <SlideToggle duration={150}
                            render={({ toggle, setCollapsibleElement }) => (
                                <article className="contain">
                                    <section className="contain_top">
                                        <div className="cttop_left">
                                            <h1 className="top_title">Submit to PRO</h1>
                                        </div>
                                        <div className="dflx_ac">
                                            <p className={subToggle ? "up_arrow on" : "up_arrow"} onClick={clickSub}>
                                                <span onClick={toggle} className="dpblock h-100"></span>
                                            </p>
                                        </div>
                                    </section>
                                    <p className="line1"></p>
                                    <section className="contain_list">
                                        <div ref={setCollapsibleElement}>
                                            <AnrSwiperSub />
                                        </div>
                                    </section>
                                </article>
                            )}
                        />

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <div className="tab_line maint_line">
                                        <p className="art on">
                                            <a>Home</a>
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
            </div >

            <Footer />

        </div >
    )
}









