import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ProfComponent from "../../components/common/ProfComponent";
import ImgComponent from "../../components/common/ImgComponent";
import SongInfoEval from "../song/SongInfoEval";
import PopCredits from "../../components/common/PopCredits";
import VersTab from "../../components/common/VersTab";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function AdaptVersion() {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [crdPop, setCrdPop] = useState(false);
    const openCrdPop = () => {
        setCrdPop(true);
    };
    const closeCrdPop = () => {
        setCrdPop(false);
    }

    const [recruit, setRecruit] = useState(false);
    const toggleRec = () => {
        setRecruit(!recruit);
        let switRoom = document.querySelector('.swith_room');
        switRoom.classList.toggle('on');
    };

    const goVersion = () => {
        window.location.href = "/AdapTation"
    }


    return (
        <div className="wrap dark">

            <div className="container p-t-20">

                <main className="detail_main">

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
                                        <h1>Wish</h1>
                                        <span className="edit">Edit</span>
                                    </div>
                                    <div className="title_mini">
                                        <p className="cor994">
                                            Original Version
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
                                    <button onClick={goVersion} className="btn_vers_plus cor">
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
                                        <VersTab title="Original Version" class="verstab on" />
                                    </SwiperSlide>
                                </Swiper>
                            </article>
                        </section>

                        <section className="co_wrap co_with_wrap">
                            <div className="co_cont">
                                <div className="co_title">
                                    <h3>
                                        <span>Co-Writer</span>
                                        <span className="m-l-8 count">10</span>
                                    </h3>
                                </div>
                                <article className="co_sw_wrap">
                                    <div className="posab">
                                        <div className="co_sw_line">
                                            <Swiper slidesPerView={4} navigation={true} spaceBetween={0}>
                                                <SwiperSlide>
                                                    <div className="hover_prof">
                                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming ing check" prof_class="prof in c50"
                                                            line_class="line_over" src="../resources/images/prof_ex2.png" />
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
                                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming ing check" prof_class="prof in c50"
                                                            line_class="line_over" src="../resources/images/prof_ex2.png" />
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
                                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming ing check" prof_class="prof in c50"
                                                            line_class="line_over" src="../resources/images/prof_ex2.png" />
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
                                    <h3>
                                        <span>Credit</span>
                                        <span className="m-l-8 count">02</span>
                                    </h3>
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
                        <section className="contain_mid">
                            <div className="dflx_ac">
                                <div className="descr_profile">
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                        line_class="line_over" src="../resources/images/prof_ex1.png" />
                                    <p className="prof_name_mid">
                                        Are Bergerud
                                    </p>
                                </div>
                                <div className="desc_zone">
                                    <p className="bold">Project Owner Comment</p>
                                    <br />
                                    <p>We are very happy to welcome million selling songwriters, A&R’s and publishers from all over
                                        the world to participate in making Trondheim Song:Expo the biggest songwriting event in the world.
                                        Let’s all collaborate and bring our A-game to trigger maximum output and create future
                                        million selling #1 smash hits!</p>
                                </div>
                            </div>
                        </section>
                    </article>

                    <SongInfoEval />

                </main>

                <PopCredits open={crdPop} close={closeCrdPop} popname="Search A&R" />
            </div>

        </div >
    )
}

