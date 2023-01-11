import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import Footer from "../../components/layout/Footer";
import ButtonWith from "../../components/common/ButtonWith";
import ImgComponent from "../../components/common/ImgComponent";
import PopGenres from "../../components/common/PopGenres";
import ListStart from "../../pages/list/ListStart";
import ListLabel from "../../pages/list/ListLabel";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function LabelAlbum() {

    const [genPop, setGenPop] = useState(false);
    const openGenpop = () => {
        setGenPop(true);
    };
    const closeGenpop = () => {
        setGenPop(false);
    }

    const detailLabel = () => {
        window.location.href = "/DetailLabel"
    }

    const goNew = () => {
        window.location.href = "/NewAlbum1"
    }


    return (
        <div className="wrap">
            <Header />

            <div className="container">
                <Blueline />

                <div className="contents">

                    <section className="aside_line">
                        <aside className="the_aside">
                            <div>
                                <div className="mini_top">
                                    <h1>Search</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="m-t-5 m-b-20">
                                        <article className="hd_search">
                                            <button type="button" className="btn_srch"></button>
                                            <input type="text" className="hd_input" placeholder="Search Songs" />
                                        </article>
                                    </div>
                                    <article className="addConts">
                                        <div onClick={openGenpop} className="add_line">
                                            <p>Genre</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div className="add_line">
                                            <p>Sub-Genre</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="dflx_ac_jbet">
                                        <p className="m-b-5">
                                            Recent search Filter
                                        </p>
                                        <p className="cor913 curpt">Clear All</p>
                                    </div>
                                    <div className="aside_bord">
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">Label Copy</h1>
                                </div>
                            </section>
                            <p className="line1"></p>
                            <section className="contain_body">
                                <article className="contact_line">
                                    <div className="tab_line maint_line p-b-20">
                                        <p className="art">
                                            <a href="/LabelCopy">Song</a>
                                        </p>
                                        <p className="art on">
                                            <a href="/LabelAlbum">Album</a>
                                        </p>
                                        <p className="art">
                                            <a href="/LabelCopyCopy">Label Copy</a>
                                        </p>
                                    </div>
                                </article>

                                <article className="the_feed">
                                    <div className="mini_top p-t-20">
                                        <h1 className="top_title">
                                            Song List
                                        </h1>
                                    </div>
                                    <p className="line1"></p>
                                    <div className="feed_conts">
                                        <article className="contact_line posab">
                                            <div className="contact_sel">
                                                <div className="tab_line">
                                                    <p className="go on">All</p>
                                                    <p className="go">Registering</p>
                                                    <p className="go">Approved</p>
                                                </div>
                                                <select className="selector wh mini w220">
                                                    <option value="">Recently Activity</option>
                                                    <option value="">A to Z</option>
                                                    <option value="">Z to A</option>
                                                </select>
                                            </div>
                                        </article>

                                        <article className="card_line m-t-55">
                                            <Swiper slidesPerView={4} navigation={true} spaceBetween={0}>
                                                <SwiperSlide>
                                                    <ListStart create={goNew} go_class="cor994" go_txt="New Album">
                                                        <div className="ctr_hidd_cent">
                                                            <p className="ctr_hidd_txt tac"></p>
                                                        </div>
                                                    </ListStart>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ListLabel status="Registering">
                                                        <div className="pitch_call">
                                                            <h4 className="down_vol">
                                                                Album Title
                                                            </h4>
                                                            <p className="pitch_note">
                                                                <span className="word">Single</span>
                                                                <span className="word cor913">1 Song</span>
                                                            </p>
                                                            <p className="label_note">
                                                                <span className="word who">Stray Kids</span>
                                                            </p>
                                                        </div>
                                                        <div onClick={detailLabel} className="prj_dark"></div>
                                                        <div className="img_cover">
                                                            <div className="cover100">
                                                                <ImgComponent class="prj_img" src="../resources/images/thumb_ex3.jpg" />
                                                            </div>
                                                        </div>
                                                    </ListLabel>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ListLabel status="Approval">
                                                        <div className="pitch_call">
                                                            <h4 className="down_vol">
                                                                Album Title
                                                            </h4>
                                                            <p className="pitch_note">
                                                                <span className="word">Album</span>
                                                                <span className="word cor913">10 Song</span>
                                                            </p>
                                                            <p className="label_note">
                                                                <span className="word who">TAEYEON</span>
                                                            </p>
                                                        </div>
                                                        <div onClick={detailLabel} className="prj_dark"></div>
                                                        <div className="img_cover">
                                                            <div className="cover100">
                                                                <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                            </div>
                                                        </div>
                                                    </ListLabel>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ListLabel status="Approval">
                                                        <div className="pitch_call">
                                                            <h4 className="down_vol">
                                                                Album Title
                                                            </h4>
                                                            <p className="pitch_note">
                                                                <span className="word">Album</span>
                                                                <span className="word cor913">10 Song</span>
                                                            </p>
                                                            <p className="label_note">
                                                                <span className="word who">TAEYEON</span>
                                                            </p>
                                                        </div>
                                                        <div onClick={detailLabel} className="prj_dark"></div>
                                                        <div className="img_cover">
                                                            <div className="cover100">
                                                                <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                            </div>
                                                        </div>
                                                    </ListLabel>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ListLabel status="Approval">
                                                        <div className="pitch_call">
                                                            <h4 className="down_vol">
                                                                Album Title
                                                            </h4>
                                                            <p className="pitch_note">
                                                                <span className="word">Album</span>
                                                                <span className="word cor913">10 Song</span>
                                                            </p>
                                                            <p className="label_note">
                                                                <span className="word who">TAEYEON</span>
                                                            </p>
                                                        </div>
                                                        <div onClick={detailLabel} className="prj_dark"></div>
                                                        <div className="img_cover">
                                                            <div className="cover100">
                                                                <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                            </div>
                                                        </div>
                                                    </ListLabel>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ListLabel status="Approval">
                                                        <div className="pitch_call">
                                                            <h4 className="down_vol">
                                                                Album Title
                                                            </h4>
                                                            <p className="pitch_note">
                                                                <span className="word">Album</span>
                                                                <span className="word cor913">10 Song</span>
                                                            </p>
                                                            <p className="label_note">
                                                                <span className="word who">TAEYEON</span>
                                                            </p>
                                                        </div>
                                                        <div onClick={detailLabel} className="prj_dark"></div>
                                                        <div className="img_cover">
                                                            <div className="cover100">
                                                                <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                            </div>
                                                        </div>
                                                    </ListLabel>
                                                </SwiperSlide>
                                            </Swiper>
                                        </article>
                                    </div>
                                </article>

                            </section>
                        </article>

                    </main>

                    <PopGenres open={genPop} close={closeGenpop} />

                </div>
            </div>

            <Footer />

        </div >
    )
}
