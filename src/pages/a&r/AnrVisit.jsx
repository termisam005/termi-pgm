import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ImgComponent from "../../components/common/ImgComponent";
import ButtonWith from "../../components/common/ButtonWith";
import Footer from "../../components/layout/Footer";
import ProfComponent from "../../components/common/ProfComponent";
import SlideToggle from "react-slide-toggle";

//contents
import FeatureName from "../../components/layout/FeatureName";
import Featured from "../../components/layout/Featured";
import FeatureSkill from "../../components/layout/FeatureSkill";


export default function AnrVisit() {

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

    return (
        <div className="wrap">
            <Header />

            <div className="banner">
                <div className="banner_bg">
                    <section className="banner_center">
                        <Blueline />
                    </section>
                    <ImgComponent class="banner_img" src="../resources/images/banner_ex1.jpg" />
                </div>
            </div>

            <div className="container bann_container">

                <div className="contents">

                    <section className="aside_line">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone">
                                        <div className="call_line">
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>A&R</span>
                                            </p>
                                        </div>
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof c120 prof_shadow"
                                            line_class="line_over" imgclass="imgw100" src="../resources/images/prof_ex2.png">
                                            <div className="photo_cont">
                                                <div className="photo_wrap">
                                                    <p className="ptop_x16 in"></p>
                                                    <input type="file" className="file_put" />
                                                    <img className="img_thumb" src="../resources/images/photo_photo.png" alt="photo" />
                                                    <p>200 x 200</p>
                                                    <span className="word">Pixel</span>
                                                </div>
                                            </div>
                                        </ProfComponent>
                                        <p className="prof_name_big">
                                            <span>Kristoffer Kilen Aase</span>
                                        </p>
                                        <div className="prof_from">
                                            <p className="f-s-13">
                                            </p>
                                            <p className="prof_location m-t-30">
                                                <span className="cor913">Olso, Norway</span>
                                            </p>
                                        </div>
                                    </div>
                                </section>
                                <div className="aside_desc">
                                    <div className="hire_wrap m-b-40">
                                        <ButtonWith class="btn_md1 with w-48" spant="Connect" src="../resources/images/plusman_wh20.png" />
                                        <ButtonWith class="btn_md1 cor with w-48" spant="Pitching" src="../resources/images/pit_wh20.png" />
                                    </div>
                                    <div className="company_aside">
                                        <p className="top">
                                            ON THE WEB
                                        </p>
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
                                    <div className="company_aside">
                                        <p className="top">
                                            COMPANY & GROUP
                                        </p>
                                        <dl className="dl_company aside">
                                            <dt>
                                                <div className="prof_wrap40">
                                                    <span className="comming ing"></span>
                                                    <p className="simbol40">
                                                        <img src="../resources/images/simb_sm40.png" alt="logo" />
                                                    </p>
                                                </div>
                                            </dt>
                                            <dd>
                                                <div className="prof_from">
                                                    <p className="prof_company">
                                                        <span className="cor913">SM Entertainment</span>
                                                    </p>
                                                    <p className="word">
                                                        <span>Seoul, Republic of Korea </span>
                                                    </p>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="feat_content p-t-0">
                                        <div className="dflx_ac_jbet m-b-8">
                                            <p className="title">BIO</p>
                                        </div>
                                        <section className="area_set hauto">
                                            <article className="area_result">
                                                <p className="rslt">"Multi-platinum selling producer😎✨"</p>
                                            </article>
                                        </section>
                                    </div>
                                    <div className="feat_content m-t-30">
                                        <div className="dflx_ac_jbet m-b-8">
                                            <p className="title">VERIFICATION</p>
                                            <p></p>
                                        </div>
                                        <div className="bn_lg">
                                            <div className="curpt">
                                                <span className="shield"></span>
                                                <span className="word">Account</span>
                                            </div>
                                            {/* <span className="pipe">|</span> */}
                                            <div className="curpt">
                                                <span className="person14"></span>
                                                <span className="word m-t-1">Profile</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aside_last dflx_ac_jbet p-t-10">
                                    <p className="aslast_text">
                                        Member since : 13 Aug 2022
                                    </p>
                                    <p className="report">
                                        <span>Report</span>
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <div className="tab_line maint_line">
                                        <p className="art on">
                                            <a href="/MainVisitHome">
                                                Home
                                            </a>
                                        </p>
                                        <p className="art">
                                            <a>Post</a>
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <p className="line1"></p>

                            <section className="contain_body">

                                <FeatureName title="Kristoffer Kilen Aase" contain_class="outer_contain" />

                                <Featured title="Featured Post" />

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
                                                    <p className={educToggle ? "up_arrow on" : "up_arrow"} onClick={clickEduc}>
                                                        <span onClick={toggle} className="dpblock h-100"></span>
                                                    </p>
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
                                                    <p className={carToggle ? "up_arrow on" : "up_arrow"} onClick={clickCar}>
                                                        <span onClick={toggle} className="dpblock h-100"></span>
                                                    </p>
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

                                <FeatureSkill title="Skill" contain_class="outer_contain" />

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
                                                    <p className={isToggle ? "up_arrow on" : "up_arrow"} onClick={clickToggle}>
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
                                                                Courses
                                                            </td>
                                                            <td>
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

                    </main>

                </div>
            </div>

            <Footer />

        </div >
    )
}
