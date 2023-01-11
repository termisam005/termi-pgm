import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ProfComponent from "../../components/common/ProfComponent";
import ImgComponent from "../../components/common/ImgComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import MarkFavorite from "../../components/common/MarkFavorite";
import ReactTooltip from "react-tooltip";
import SongInformation from "./SongInformation";
import FootPlay from "./FootPlay";
import PopCredits from "../../components/common/PopCredits";
import VersTab from "../../components/common/VersTab";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
import InputComponent from "../../components/common/InputComponent";
SwiperCore.use([Navigation, Pagination]);


export default function SongLyrics() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const goCreator = () => {
        window.location.href = "/RecommendCreator"
    };
    const goProject = () => {
        window.location.href = "/RecommendProject"
    };

    const [recruit, setRecruit] = useState(false);
    const toggleRec = () => {
        setRecruit(!recruit);
        let switRoom = document.querySelector('.swith_room');
        switRoom.classList.toggle('on');
    };

    const [versPop, setVersPop] = useState(false);
    const openVersPop = () => {
        setVersPop(true);
    };
    const closeVersPop = () => {
        setVersPop(false);
    }

    const [crdPop, setCrdPop] = useState(false);
    const openCrdPop = () => {
        setCrdPop(true);
    };
    const closeCrdPop = () => {
        setCrdPop(false);
    }


    return (
        <div className="wrap">
            <Header />

            <div className="container">
                <Blueline />

                <div className="contents">

                    <section className="aside_line">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone norm">
                                        <span className="lock17"></span>
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
                                        <div className="multi_prof">
                                            <div className="dflx_ac_jcent">
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                            </div>
                                            <p className="mul_pr_txt">
                                                <span className="cor994 m-r-3">5</span>
                                                <span>Applicants</span>
                                            </p>
                                        </div>
                                    </div>
                                    <dl className="dl_company aside">
                                        <dt>
                                            <p className="simbol40">
                                                <img src="../resources/images/simb_tono40.png" alt="logo" />
                                            </p>
                                        </dt>
                                        <dd>
                                            <div className="prof_from">
                                                <p className="prof_company">
                                                    <span>EKKO Music Rights Europe</span>
                                                </p>
                                                <p className="word">
                                                    <span>Stockholm, Sweden</span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </section>
                            </div>
                            <div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <p className="top">Short Description</p>
                                    <div className="asdesc_zone">
                                        <span>
                                            Producer, mixing & mastering engineer
                                            looking for a manager/agent
                                        </span>
                                    </div>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_last">
                                    <p className="aslast_text">
                                        Project since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>

                    </section>

                    <main className="the_main">

                        <article className="contain">
                            <section className="wrap_title">
                                <p onClick={goBack} className="go_delete"></p>

                                <div className="avail_line">
                                    <div onClick={toggleRec} className={recruit ? "recru_line on" : "recru_line"}>
                                        <div className="avail_cont">
                                            <img className="ic" src="../resources/images/thunder_off.png" />
                                            <img className="ic_on" src="../resources/images/thunder.png" />
                                            <span className="m-l-2 word">Available</span>
                                        </div>
                                        <div className="switch_zone">
                                            <div className="swith_room">
                                                <input className="switch-checkbox" type="checkbox" />
                                                <label className="switch-label">
                                                    <span className="swt_sun"></span>
                                                    <span className="swt_moon"></span>
                                                    <span className="switch-button" />
                                                </label>
                                            </div>
                                            <span className="circ_feel"></span>
                                        </div>
                                    </div>
                                </div>

                                <dl className="title_dl">
                                    <dt>
                                        <div className="nemo_prof60">
                                            <ImgComponent src="../resources/images/nemo_prof_ex1.jpg" />
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className="title_tlt">
                                            <h1>MAL HAL SU EOBS NEUN BI MIL</h1>
                                            <span className="edit">Edit</span>
                                        </div>
                                        <div className="title_mini">
                                            <p className="f-s-13">
                                                Secret Secret
                                            </p>
                                            <p className="cor994">
                                                Adapted Song Title
                                            </p>
                                        </div>
                                    </dd>
                                </dl>
                            </section>
                            <p className="line1"></p>

                            <section className="verstab_line posab">
                                {/* <MarkFavorite /> */}
                                <div className="vers_btline">
                                    <div className="btbox">
                                        <button onClick={openVersPop} className="btn_vers_plus">
                                            <img className="bticon" src="../resources/images/arr36_plus_wh.png" alt="image" />
                                        </button>
                                    </div>
                                    <div className="btbox">
                                        <button className="btn_vers_plus">
                                            <img className="bticon" src="../resources/images/hamb_wh20.png" alt="image" />
                                        </button>
                                        <div className="etc_cont">
                                            <ul>
                                                <li>Duplicate</li>
                                                <li>Delete</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <article className="verl_wrap">
                                    <Swiper slidesPerView={5} navigation={true} spaceBetween={0}>
                                        <SwiperSlide>
                                            <VersTab title="Demop Version" class="verstab on" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <VersTab title="Korean Version" class="verstab" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <VersTab title="Version list 1" class="verstab" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <VersTab title="Version list 2" class="verstab" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <VersTab title="Version list 3" class="verstab" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <VersTab title="Version list 4" class="verstab" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <VersTab title="Version list 5" class="verstab" />
                                        </SwiperSlide>
                                    </Swiper>
                                </article>
                            </section>

                            <section className="co_wrap co_with_wrap">

                                <div className="co_cont">
                                    <div className="co_title">
                                        <h3>Co-Writers</h3>
                                    </div>
                                    <article className="co_sw_wrap">
                                        <div className="posab">
                                            <div className="co_sw_line">
                                                <Swiper slidesPerView={4} navigation={true} spaceBetween={0}>
                                                    <SwiperSlide>
                                                        <div className="hover_prof">
                                                            <ProfComponent wrap_class="prof_wrap" comming_class="comming ing" prof_class="prof in c50"
                                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="hover_prof">
                                                            <ProfComponent wrap_class="prof_wrap" comming_class="comming ing check" prof_class="prof in c50"
                                                                line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="hover_prof">
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="hover_prof">
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="co_plus">
                                                            <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                        </div>
                                    </article>
                                    <div className="co_period p-t-20">
                                        <span className="m-r-5">Agreed and Accepted :</span>
                                        <span className="cor994">15 May 2022</span>
                                    </div>
                                </div>
                                <div className="co_cont credits">
                                    <div className="co_title">
                                        <h3>Credits</h3>
                                    </div>
                                    <div className="co_line">
                                        <div className="hover_prof">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        </div>
                                        <div className="hover_prof">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        </div>
                                        <div className="hover_prof">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex2.png" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <p className="line1"></p>
                            <section className="descr_contain">
                                <div className="descr_profile">
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                        line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                    <p className="prof_name_mid">
                                        Jin suk choi
                                    </p>
                                </div>
                                <div className="desc_zone">
                                    <p>Short Description Contents</p>
                                    <br />
                                    <p>Komtru is an artist who likes to fuse a blend of different music genres..from pop to hiphop and Afrobeats..</p>
                                </div>
                            </section>
                        </article>

                        <SongInformation />

                    </main>

                </div>
            </div>

            <section className="footer">
                <article className="footer_text">
                    <div className="footer_terms">
                        <Link to="/">
                            <p>Privacy policy</p>
                        </Link>
                        <Link to="/">
                            <p>Privacy policy</p>
                        </Link>
                    </div>
                    <div className="footer_copy">
                        sparwk.com ⓒ 2022 all rights reserved
                    </div>
                    <div className="footer_society">
                        <span className="m-r-35">Contact us</span>
                        <div className="society_iconts">
                            <Link to="/">
                                <ImgComponent src="../resources/images/foot_facebook.png" />
                            </Link>
                            <Link to="/">
                                <ImgComponent src="../resources/images/foot_youtube.png" />
                            </Link>
                            <Link to="/">
                                <ImgComponent src="../resources/images/foot_instagram.png" />
                            </Link>
                            <Link to="/">
                                <ImgComponent src="../resources/images/foot_twitter.png" />
                            </Link>
                        </div>
                    </div>
                </article>
            </section>
            <FootPlay />

            <PopVersion open={versPop} close={closeVersPop} />
            <PopCredits open={crdPop} close={closeCrdPop} popname="Search Credits" />
        </div >
    )
}

const PopVersion = (props) => {
    const { open, close } = props;
    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">Add Version</h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts">
                    <article className="pop_version">
                        <dl className="dl_company">
                            <dt>
                                <p className="simbol40">
                                    <img src="../resources/images/nemo_prof_ex1.jpg" alt="image" />
                                </p>
                            </dt>
                            <dd>
                                <div className="prof_from">
                                    <p className="prof_company">
                                        <span>That's What I like</span>
                                    </p>
                                </div>
                            </dd>
                        </dl>
                        <select className="selector wh mid">
                            <option value="">AlbumVersion</option>
                            <option value="">AcapellaVersion</option>
                            <option value="">AlternativeVersion</option>
                            <option value="">CleanVersion</option>
                            <option value="">DemoVersion</option>
                        </select>
                        <div className="putt_box">
                            <InputComponent type="text" class="wrput trans m-t-15 f-s-14" placeholder="Enter Version title" />
                        </div>
                    </article>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md3 w-100" txt="New tab" />
                </div>
            </div>
        </section >
    )
}
