import { useState } from "react";
import MarkFavorite from "../common/MarkFavorite";
import ImgComponent from "../common/ImgComponent";
import ListStart from "../../pages/list/ListStart";
import ListPitch1 from "../../pages/list/ListPitch1";
import ListPitch2 from "../../pages/list/ListPitch2";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function PitchSwiper1() {

    const newPitch = () => {
        window.location.href = "/NewPitch1"
    };

    const detailPitch = () => {
        window.location.href = "/DetailPitch"
    }

    return (
        <article className="the_feed m-b-20">
            <section className="mini_top p-t-20">
                <h1>Pitch List</h1>
            </section>
            <p className="line1"></p>
            <section className="contain_body">

                <article className="contact_line posab">
                    <div className="contact_sel">
                        <div className="tab_line">
                            <p className="go on">All</p>
                            <p className="go">Available</p>
                            <p className="go">Pitched</p>
                            <p className="go">Bookmark</p>
                        </div>
                        <select className="selector wh mini w220">
                            <option value="">Recently Added</option>
                            <option value="">A to Z</option>
                            <option value="">Z to A</option>
                        </select>
                    </div>
                </article>

                <article className="card_line m-t-55">
                    <Swiper slidesPerView={4} navigation={true} spaceBetween={0}>
                        <SwiperSlide>
                            <ListStart create={newPitch} go_class="cor994" go_txt="New Pitch List">
                                <div className="ctr_hidd_cent">
                                    <p className="ctr_hidd_txt tac"></p>
                                </div>
                            </ListStart>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ListPitch1>
                                <MarkFavorite />
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Pitch list vol.5
                                    </h4>
                                    <p className="pitch_note">
                                        <span className="note20"></span>
                                        <span className="cor913">1</span>
                                    </p>
                                </div>
                                <div onClick={detailPitch} className="prj_dark"></div>
                                <ImgComponent class="img_norm" src="../resources/images/trans_sparwk70.png" />
                            </ListPitch1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ListPitch1 onClick={detailPitch}>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Pitch list vol.4
                                    </h4>
                                    <p className="pitch_note">
                                        <span className="note20"></span>
                                        <span className="cor913">3</span>
                                    </p>
                                </div>
                                <div onClick={detailPitch} className="prj_dark"></div>
                                <div className="img_cover">
                                    <div className="cover100">
                                        <ImgComponent class="prj_img" src="../resources/images/thumb_ex3.jpg" />
                                    </div>
                                </div>
                            </ListPitch1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ListPitch1 onClick={detailPitch}>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Pitch list vol.3
                                    </h4>
                                    <p className="pitch_note">
                                        <span className="note20"></span>
                                        <span className="cor913">5</span>
                                    </p>
                                </div>
                                <div onClick={detailPitch} className="prj_dark"></div>
                                <div className="img_cover">
                                    <div className="cover50">
                                        <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                    </div>
                                    <div className="cover50">
                                        <ImgComponent class="prj_img" src="../resources/images/album_cover2.jpg" />
                                    </div>
                                    <div className="cover50">
                                        <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                    </div>
                                    <div className="cover50">
                                        <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                    </div>
                                </div>
                            </ListPitch1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ListPitch2>
                                <div className="ctr_info">
                                    <div className="pitch_call">
                                        <h4 className="down_vol">
                                            Pitch list vol.2
                                        </h4>
                                        <p className="pitch_note">
                                            <span className="note20"></span>
                                            <span className="cor913">1</span>
                                        </p>
                                    </div>
                                    <div onClick={detailPitch} className="prj_dark"></div>
                                    <div className="img_cover">
                                        <div className="cover100">
                                            <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </ListPitch2>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ListPitch2>
                                <div className="ctr_info">
                                    <div className="pitch_call">
                                        <h4 className="down_vol">
                                            Pitch list vol.1
                                        </h4>
                                        <p className="pitch_note">
                                            <span className="note20"></span>
                                            <span className="cor913">2</span>
                                        </p>
                                    </div>
                                    <div onClick={detailPitch} className="prj_dark"></div>
                                    <div className="img_cover">
                                        <div className="img_cover">
                                            <div className="cover50">
                                                <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                            </div>
                                            <div className="cover50">
                                                <ImgComponent class="prj_img" src="../resources/images/album_cover2.jpg" />
                                            </div>
                                            <div className="cover50">
                                                <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                            </div>
                                            <div className="cover50">
                                                <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ListPitch2>
                        </SwiperSlide>
                    </Swiper>
                </article>

            </section>
        </article>
    );
}