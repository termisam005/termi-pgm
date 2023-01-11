import { useState } from "react";
import ImgComponent from "../common/ImgComponent";
import ProfComponent from "../common/ProfComponent";
import ListSpot from "../../pages/list/ListSpot";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css';
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function AnrSwiperSpot() {

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
                    <p className="tab">Not Started</p>
                    <p className="tab">In Work</p>
                    <p className="tab">Master</p>
                    <p className="tab">Verified</p>
                    <p className="tab">Out of term</p>
                </div>
            </div>
            <article className="card_line m-t-5">
                <Swiper slidesPerView={4} navigation={true} spaceBetween={5}>
                    <SwiperSlide>
                        <ListSpot status="Not Started">
                            <div className="ctr_info">
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        What Do I Call You
                                    </h4>
                                    <p className="pitch_note">
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
                                <div className="img_cover">
                                    <div className="cover100">
                                        <ImgComponent class="prj_img" src="../resources/images/cover_ex_butter.jpg" />
                                    </div>
                                </div>
                            </div>
                        </ListSpot>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListSpot status="In Work">
                            <div className="ctr_info">
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Weekend
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
                        </ListSpot>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListSpot status="Master">
                            <div className="ctr_info">
                                <div className="pitch_top">
                                    <dl className="message_dl message_dl32">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/simb_butter64.png" />
                                        </dt>
                                        <dd>
                                            <p className="pit_call">
                                                TAEYEON
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Purpose
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
                        </ListSpot>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListSpot status="Verified">
                            <div className="ctr_info">
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
                        </ListSpot>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListSpot status="Verified">
                            <div className="ctr_info">
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
                        </ListSpot>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListSpot status="Master">
                            <div className="ctr_info">
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
                        </ListSpot>
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