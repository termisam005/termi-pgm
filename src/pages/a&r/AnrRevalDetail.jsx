import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import FootPlay from "../song/FootPlay"
import ProfComponent from "../../components/common/ProfComponent";
import ImgComponent from "../../components/common/ImgComponent";
import MarkFavorite from "../../components/common/MarkFavorite";
import ReactTooltip from "react-tooltip";
import SongInfoEval from "../song/SongInfoEval";
import PopCredits from "../../components/common/PopCredits";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function AnrRevalDetail() {

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


    return (
        <div className="wrap dark">

            <div className="container p-t-20">

                <main className="detail_main">

                    <section className="dark_history">
                        <div className="dflx_ac_jbet">
                            <div></div>
                            <h3 onClick={goBack}>
                                <span className="go_back32">
                                    <img src="../resources/images/arr_back_wh32.png" alt="link back" />
                                </span>
                            </h3>
                        </div>
                    </section>

                    <article className="contain">
                        <section className="contain_top">
                            <div className="cttop_left">
                                <h1 className="top_title">Revaluation</h1>
                            </div>
                            <div></div>
                        </section>
                        <p className="line1"></p>
                        <section className="wrap_title">
                            <MarkFavorite />
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
                                            Demo Version
                                        </p>
                                    </div>
                                </dd>
                            </dl>
                        </section>
                        <p className="line1"></p>
                        <section className="co_wrap">
                            <div className="co_cont">
                                <div className="co_title">
                                    <h3>A&R Team</h3>
                                </div>
                                <article className="co_sw_wrap">
                                    <div className="posab">
                                        <div className="co_sw_line">
                                            <Swiper slidesPerView={4} navigation={true} spaceBetween={0}>
                                                <SwiperSlide>
                                                    <div className="hover_prof">
                                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming ing check" prof_class="prof in c50"
                                                            line_class="line_over" src="../resources/images/prof_ex2.png">
                                                            <div className="pr_record_wrap">
                                                                <p className="record_num">85</p>
                                                            </div>
                                                        </ProfComponent>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="hover_prof">
                                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming ing check" prof_class="prof in c50"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png">
                                                            <div className="pr_record_wrap">
                                                                <p className="record_num">85</p>
                                                            </div>
                                                        </ProfComponent>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="hover_prof">
                                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming ing stop" prof_class="prof in c50"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png">
                                                            <div className="pr_record_wrap">
                                                                <p className="record_num">85</p>
                                                            </div>
                                                        </ProfComponent>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="hover_prof">
                                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming ing cancel" prof_class="prof in c50"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png">
                                                            <div className="pr_record_wrap">
                                                                <p className="record_num">85</p>
                                                            </div>
                                                        </ProfComponent>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="hover_prof">
                                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming ing cancel" prof_class="prof in c50"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png">
                                                            <div className="pr_record_wrap">
                                                                <p className="record_num">85</p>
                                                            </div>
                                                        </ProfComponent>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="hover_prof">
                                                        <div onClick={openCrdPop} className="co_plus">
                                                            <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </article>
                                <div className="co_period p-t-20">
                                    <span className="m-r-5">Evaluation period Definition :</span>
                                    <span className="cor994">13 Aug 2021 ~ 13 Aug 2021</span>
                                    <p className="tip_word spec">
                                        <span className="jum"></span>
                                        <span>Waiting</span>
                                    </p>
                                </div>
                            </div>
                            <div className="co_cont">
                                <div className="co_title">
                                    <h3>Result</h3>
                                </div>
                                <div className='cent_mark m-0 p-t-5'>
                                    <ImgComponent src="../resources/images/stop_yellow72.png" />
                                    <h5 className='result'>EXCLUSIVE HOLD</h5>
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

                <FootPlay />

                <PopCredits open={crdPop} close={closeCrdPop} popname="Search A&R" />
            </div>

        </div >
    )
}

