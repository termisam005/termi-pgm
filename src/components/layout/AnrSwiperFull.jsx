import { useState } from "react";
import ImgComponent from "../common/ImgComponent";
import ProfComponent from "../common/ProfComponent";
import ListPitch3 from "../../pages/list/ListPitch3";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function AnrSwiperFull() {

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
                    <p className="tab">Pitched</p>
                    <p className="tab">Recommendation</p>
                </div>
            </div>
            <article className="card_line m-t-5">
                <Swiper slidesPerView={4} navigation={true} spaceBetween={5}>
                    <SwiperSlide>
                        <ListPitch3 status="Pitched">
                            <div className="ctr_info">
                                <div className="pitch_top">
                                    <dl className="message_dl message_dl32">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/simb_sm40.png" />
                                        </dt>
                                        <dd>
                                            <p className="pit_call">
                                                Ekko Music Right Eucation
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Pitch list vol.3
                                    </h4>
                                    <p className="pitch_note">
                                        <span className="note20"></span>
                                        <span className="cor913">3</span>
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
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
                        </ListPitch3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListPitch3 status="Pitched">
                            <div className="ctr_info">
                                <div className="pitch_top">
                                    <dl className="message_dl message_dl32">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/simb_tono40.png" />
                                        </dt>
                                        <dd>
                                            <p className="pit_call">
                                                JYP Publishing
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Pitch list vol.3
                                    </h4>
                                    <p className="pitch_note">
                                        <span className="note20"></span>
                                        <span className="cor913">3</span>
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
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
                        </ListPitch3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListPitch3 status="Recommended">
                            <div className="ctr_info">
                                <div className="pitch_top">
                                    <dl className="message_dl message_dl32">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/simb_sm40.png" />
                                        </dt>
                                        <dd>
                                            <p className="pit_call">
                                                Ekko Music Right Eucation
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Pitch list vol.3
                                    </h4>
                                    <p className="pitch_note">
                                        <span className="note20"></span>
                                        <span className="cor913">3</span>
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
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
                        </ListPitch3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListPitch3 status="Recommended">
                            <div className="ctr_info">
                                <div className="pitch_top">
                                    <dl className="message_dl message_dl32">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/simb_sm40.png" />
                                        </dt>
                                        <dd>
                                            <p className="pit_call">
                                                Ekko Music Right Eucation
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Pitch list vol.3
                                    </h4>
                                    <p className="pitch_note">
                                        <span className="note20"></span>
                                        <span className="cor913">3</span>
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
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
                        </ListPitch3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListPitch3 status="Recommended">
                            <div className="ctr_info">
                                <div className="pitch_top">
                                    <dl className="message_dl message_dl32">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/simb_sm40.png" />
                                        </dt>
                                        <dd>
                                            <p className="pit_call">
                                                Ekko Music Right Eucation
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Pitch list vol.3
                                    </h4>
                                    <p className="pitch_note">
                                        <span className="note20"></span>
                                        <span className="cor913">3</span>
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
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
                        </ListPitch3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListPitch3 status="Recommended">
                            <div className="ctr_info">
                                <div className="pitch_top">
                                    <dl className="message_dl message_dl32">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/simb_sm40.png" />
                                        </dt>
                                        <dd>
                                            <p className="pit_call">
                                                Ekko Music Right Eucation
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">
                                        Pitch list vol.3
                                    </h4>
                                    <p className="pitch_note">
                                        <span className="note20"></span>
                                        <span className="cor913">3</span>
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
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
                        </ListPitch3>
                    </SwiperSlide>
                    <div className="pos_more">
                        <p className="see_view">
                            <a>View all</a>
                        </p>
                    </div>
                </Swiper>
            </article>
        </>
    );
}