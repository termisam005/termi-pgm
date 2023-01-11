import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ImgComponent from "../../components/common/ImgComponent";
import Footer from "../../components/layout/Footer";
import Broad from "../../components/common/Broad";
import AsideVisit from "../../components/layout/AsideVisit";
import SlideToggle from "react-slide-toggle";

//contents
import FeatureName from "../../components/layout/FeatureName";
import Featured from "../../components/layout/Featured";
import FeatureSkill from "../../components/layout/FeatureSkill";


export default function MainVisitHome() {

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
                        <div className="broad_line">
                            <Broad hc="2" src="../resources/images/broad_bil.png" />
                            <Broad hc="7" src="../resources/images/broad_qoon.png" />
                            <Broad hc="9" src="../resources/images/broad_dia.png" />
                        </div>
                    </section>
                    <ImgComponent class="banner_img" src="../resources/images/banner_ex1.jpg" />
                </div>
            </div>

            <div className="container bann_container">

                <div className="contents">

                    <section className="aside_line">
                        <AsideVisit />
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
