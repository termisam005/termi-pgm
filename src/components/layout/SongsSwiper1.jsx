import { useState } from "react";
import ListStart from "../../pages/list/ListStart";
import ListSong from "../../pages/list/ListSong";
import EtcCont from "../common/EtcCont";
import ImgComponent from "../common/ImgComponent";
import ProfComponent from "../common/ProfComponent";
import MarkFavorite from "../common/MarkFavorite";
import ReactTooltip from "react-tooltip";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function SongsSwiper1() {

    const creAte = () => {
        window.location.href = "/NewSong1"
    };

    //ListSong
    const [hiddState, setHiddState] = useState(false);
    const hoverRecompt = () => {
        setHiddState(true);
    }
    const outRecompt = () => {
        setHiddState(false);
    }
    const goDetail = () => {
        window.location.href = "/SongLyrics"
    };

    return (
        <article className="contain inner_contain">
            <section className="mini_top">
                <h1>Songs</h1>
            </section>
            <p className="line1"></p>
            <section className="contain_body swiper_body">
                <div className="inner_contact_line posab">
                    <select className="selector wh mini w220">
                        <option value="">Recently Added</option>
                        <option value="">A to Z</option>
                        <option value="">Z to A</option>
                    </select>
                    <div className="tab_line">
                        <p className="art on">
                            All
                        </p>
                        <p className="art">
                            Co-writing
                        </p>
                        <p className="art">
                            Available
                        </p>
                        <p className="art disble">
                            Pass
                        </p>
                        <p className="art disble">
                            Hold
                        </p>
                        <p className="art disble">
                            Cut
                        </p>
                    </div>
                </div>
                <article className="card_line">
                    <Swiper slidesPerView={4} navigation={true} spaceBetween={0}>
                        <SwiperSlide>
                            <ListStart create={creAte} go_class="cor994" go_txt="New Song">
                                <div className="ctr_hidd_cent">
                                    <p className="ctr_hidd_txt tac">
                                        Use the button to create your<br />
                                        song to your SPARWK!
                                    </p>
                                </div>
                            </ListStart>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article onMouseLeave={outRecompt} className="creator">
                                <div className="ctr_wrap">
                                    <article onMouseLeave={outRecompt} className={hiddState ? "hidd_recompt on song" : "hidd_recompt song"}>
                                        <div className="ctr_wrap">
                                            <div className="ctr_info">
                                                <div className="over">
                                                    <div className="dflx_jbet w-100">
                                                        <section className="recomt_wrap">
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                                line_class="line_over" src="../resources/images/simb_sm40.png" />
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
                                                        <h3 className="lst_title">Ekko Music Right</h3>
                                                        <span className="shield"></span>
                                                    </div>
                                                    <div className="ctr_text hauto">
                                                        <span>Oslo, Norway</span>
                                                        <div className="mid_text">
                                                            <p className="midsp">
                                                                <span>http://www.ekkomusicrights.com/</span>
                                                            </p>
                                                            <p className="midsp">
                                                                <span>contact@tono.no</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctr_foot">
                                            <p className="line2"></p>
                                            <div className="foot_info">
                                                <span className="circ_company">RL</span>
                                                <span className="circ_company">MP</span>
                                                <span className="circ_company">SC</span>
                                            </div>
                                        </div>
                                    </article>
                                    <div className="vl_hidd dark">
                                        <div className="ctr_hidd_in">
                                            <MarkFavorite />
                                            <div className="over">
                                                <dl className="message_dl message_dl32">
                                                    <dt onMouseOver={hoverRecompt}>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd className="conn_dd">
                                                        <div className="mess_who mess_fav">
                                                            <span className="who">SM Entertainment</span>

                                                        </div>
                                                        <div className="tip_line">
                                                            <p className="tip_word tip_sm op1">
                                                                <span>Seoul, Republic of Korea</span>
                                                            </p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div onClick={goDetail} className="bottom">
                                                <div className="ctr_name">
                                                    <h4 className="sglst_title">
                                                        Sail to the Terminal Carefree
                                                        (Version.name)
                                                    </h4>
                                                </div>
                                                <div className="ctr_text">
                                                    <p className="record">Collaboration / Cowrite</p>
                                                    <p className="record">Ekko Music Right</p>
                                                    <p className="record">Oslo, Norway</p>
                                                </div>
                                                <div className="multi_prof p-t-0">
                                                    <div className="dflx_ac">
                                                        <div className="dflx_ac">
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                        </div>
                                                        <p className="co_writers">
                                                            <span className="cor994">5</span>
                                                            <span className="m-l-5">co-writers here</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ctr_info">
                                        <span className="bord_tip cor994">Pitched</span>
                                        <div className="ctr_name ctr_call">
                                            <h4 className="down_title">
                                                Sail to the Terminal Carefree
                                                (Version.name)
                                            </h4>
                                        </div>
                                        <div className="prj_dark"></div>
                                        <ImgComponent class="img_norm" src="../resources/images/trans_sparwk70.png" />
                                    </div>
                                </div>
                                <div className="ctr_foot">
                                    <p className="line1"></p>
                                    <div className="foot_info">
                                        <p className="status">Available</p>
                                    </div>
                                    <div className="foot_right">
                                        <p className="appcant wh">
                                            <span className="m-r-2">26</span>
                                            <span>Pitched</span>
                                        </p>
                                        <EtcCont wrap_class="wrap_etc sm m-t-7" btn_class="btn_hor_etc">
                                            <li>Bookmark</li>
                                            <li>View</li>
                                            <li>Share URL</li>
                                            <li>Edit info</li>
                                        </EtcCont>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ListSong />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ListSong />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ListSong />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ListSong />
                        </SwiperSlide>
                        <p className="see_view">
                            <a>View all</a>
                        </p>
                    </Swiper>
                </article>

            </section>
        </article>
    );
}