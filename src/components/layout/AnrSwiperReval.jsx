import { useState } from "react";
import ImgComponent from "../common/ImgComponent";
import ProfComponent from "../common/ProfComponent";
import ListReval from "../../pages/list/ListReval";
import MarkFavorite from "../common/MarkFavorite";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function AnrSwiperReval() {

    return (
        <>
            <div className="inner_contact_line posab">
                <select className="selector wh mini w180">
                    <option value="">Recently Added</option>
                    <option value="">A to Z</option>
                    <option value="">Z to A</option>
                </select>
                <div className="tab_line p-l-20">
                    <p className="tab on">All</p>
                    <p className="tab">Hold</p>
                    <p className="tab">Pass</p>
                    <p className="tab">Suspended</p>
                </div>
            </div>
            <article className="card_line m-t-5">
                <Swiper slidesPerView={4} navigation={true} spaceBetween={5}>
                    <SwiperSlide>
                        <ListReval status="Hold">
                            <div className="ctr_info">
                                <MarkFavorite />
                                <div className="pitch_top">
                                    <dl className="message_dl message_dl32">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/simb_sm40.png" />
                                        </dt>
                                        <dd>
                                            <p className="pit_call fav">
                                                Ekko Music Right Eucation
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Midnoon Songs
                                    </h4>
                                    <p className="pitch_note">
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
                                <div className="img_cover">
                                    <div className="cover100">
                                        <ImgComponent class="prj_img" src="../resources/images/project_ex1.jpg" />
                                    </div>
                                </div>
                            </div>
                        </ListReval>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListReval status="Pass">
                            <div className="ctr_info">
                                <MarkFavorite />
                                <div className="pitch_top">
                                    <dl className="message_dl message_dl32">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/simb_sm40.png" />
                                        </dt>
                                        <dd>
                                            <p className="pit_call fav">
                                                Ekko Music Right Eucation
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Sweating Concrete
                                    </h4>
                                    <p className="pitch_note">
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
                                <div className="img_cover">
                                    <div className="cover100">
                                        <ImgComponent class="prj_img" src="../resources/images/album_cover2.jpg" />
                                    </div>
                                </div>
                            </div>
                        </ListReval>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListReval status="Pass">
                            <div className="ctr_info">
                                <MarkFavorite />
                                <div className="pitch_top">
                                    <dl className="message_dl message_dl32">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/simb_tono40.png" />
                                        </dt>
                                        <dd>
                                            <p className="pit_call fav">
                                                JYP Publishing
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Shanghai
                                    </h4>
                                    <p className="pitch_note">
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
                                <div className="img_cover">
                                    <div className="cover100">
                                        <ImgComponent class="prj_img" src="../resources/images/nemo_prof_ex1.jpg" />
                                    </div>
                                </div>
                            </div>
                        </ListReval>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListReval status="Pass">
                            <div className="ctr_info">
                                <MarkFavorite />
                                <div className="pitch_top">
                                    <dl className="message_dl message_dl32">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/simb_sm40.png" />
                                        </dt>
                                        <dd>
                                            <p className="pit_call fav">
                                                Ekko Music Right Eucation
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Love, Hate & Infatuation
                                    </h4>
                                    <p className="pitch_note">
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
                                <div className="img_cover">
                                    <div className="cover100">
                                        <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                    </div>
                                </div>
                            </div>
                        </ListReval>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListReval status="Suspended">
                            <div className="ctr_info">
                                <MarkFavorite />
                                <div className="pitch_top">
                                    <dl className="message_dl message_dl32">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/simb_sm40.png" />
                                        </dt>
                                        <dd>
                                            <p className="pit_call fav">
                                                Ekko Music Right Eucation
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Midnoon Songs
                                    </h4>
                                    <p className="pitch_note">
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
                                <div className="img_cover">
                                    <div className="cover100">
                                        <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                    </div>
                                </div>
                            </div>
                        </ListReval>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListReval status="Suspended">
                            <div className="ctr_info">
                                <MarkFavorite />
                                <div className="pitch_top">
                                    <dl className="message_dl message_dl32">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/simb_sm40.png" />
                                        </dt>
                                        <dd>
                                            <p className="pit_call fav">
                                                Ekko Music Right Eucation
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Midnoon Songs
                                    </h4>
                                    <p className="pitch_note">
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
                                <div className="img_cover">
                                    <div className="cover100">
                                        <ImgComponent class="prj_img" src="../resources/images/album_cover2.jpg" />
                                    </div>
                                </div>
                            </div>
                        </ListReval>
                    </SwiperSlide>
                </Swiper>
            </article>
            <div className="pos_more">
                <p className="see_view">
                    <a>View all</a>
                </p>
            </div>
        </>
    );
}