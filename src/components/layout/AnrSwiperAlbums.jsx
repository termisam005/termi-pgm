import { useState } from "react";
import ImgComponent from "../common/ImgComponent";
import ProfComponent from "../common/ProfComponent";
import EtcCont from "../common/EtcCont";
import ListAlbum from "../../pages/list/ListAlbum";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css';
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function AnrSwiperAlbums() {

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
                    <p className="tab">Submit for</p>
                    <p className="tab">Unrelease</p>
                    <p className="tab">Release</p>
                    <p className="tab">Contributors</p>
                </div>
            </div>
            <article className="card_line m-t-5">
                <Swiper slidesPerView={4} navigation={true} spaceBetween={5}>
                    <SwiperSlide>
                        <article className="creator pitch_creator">
                            <div className="ctr_wrap">
                                <div className="ctr_hidd"></div>
                                <div className="ctr_ready">
                                    <p className="circle_add">
                                        <img src="../resources/images/plus_wh17.png" alt="image" />
                                    </p>
                                </div>
                                <div className="pitch_call">
                                    <h4 className="down_vol">New Album</h4>
                                </div>
                            </div>
                            <div className="ctr_foot">
                                <p className="line1"></p>
                                <div className='foot_info'>
                                    <p className='status'>
                                        Auto list
                                    </p>
                                </div>
                                <div className="foot_right">
                                    <EtcCont wrap_class="wrap_etc sm m-t-7" btn_class="btn_hor_etc">
                                        <li>Bookmark</li>
                                        <li>Add Album</li>
                                    </EtcCont>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListAlbum status="Unrelease">
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
                                        Weekend
                                    </h4>
                                    <p className="pitch_note">
                                        <span className="word">Single</span>
                                        <span className="word cor913">1 Songs</span>
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
                                <div className="img_cover">
                                    <div className="cover100">
                                        <ImgComponent class="prj_img" src="../resources/images/thumb_ex3.jpg" />
                                    </div>
                                </div>
                            </div>
                        </ListAlbum>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListAlbum status="Unrelease">
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
                                        <span className="word">EP</span>
                                        <span className="word cor913">5 Songs</span>
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
                                <div className="img_cover">
                                    <div className="cover100">
                                        <ImgComponent class="prj_img" src="../resources/images/thumb_ex3.jpg" />
                                    </div>
                                </div>
                            </div>
                        </ListAlbum>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListAlbum status="Release">
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
                                        Here I Am
                                    </h4>
                                    <p className="pitch_note">
                                        <span className="word">Album</span>
                                        <span className="word cor913">10 Songs</span>
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
                                <div className="img_cover">
                                    <div className="cover100">
                                        <ImgComponent class="prj_img" src="../resources/images/thumb_ex3.jpg" />
                                    </div>
                                </div>
                            </div>
                        </ListAlbum>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ListAlbum status="Release">
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
                                        Weekend
                                    </h4>
                                    <p className="pitch_note">
                                        <span className="word">Single</span>
                                        <span className="word cor913">1 Songs</span>
                                    </p>
                                </div>
                                <div className="prj_dark"></div>
                                <div className="img_cover">
                                    <div className="cover100">
                                        <ImgComponent class="prj_img" src="../resources/images/thumb_ex3.jpg" />
                                    </div>
                                </div>
                            </div>
                        </ListAlbum>
                    </SwiperSlide>
                </Swiper>
            </article >
            <div className="pos_more">
                <p className="see_view">
                    <a>View all</a>
                </p>
            </div>
        </>
    );
}