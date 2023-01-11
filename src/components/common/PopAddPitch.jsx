import ImgComponent from "./ImgComponent";
import ListPitchAdd from "../../pages/list/ListPitchAdd";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function PopAddPitch(props) {

    const { open, close } = props;

    return (
        <section className={open ? "pop_swipe active" : "pop_swipe"}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent selectPop">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title f-s-20">
                            Add to Pitch List
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="contain_body p-b-20">
                    <div className="contact_line posab">
                        <select className="selector wh mini w220">
                            <option value="">Recently Added</option>
                            <option value="">A to Z</option>
                            <option value="">Z to A</option>
                        </select>
                    </div>
                    <article>
                        <Swiper slidesPerView={4} navigation={true} spaceBetween={0}>
                            <SwiperSlide>
                                <ListPitchAdd>
                                    <div className="ctr_info">
                                        <div className="pitch_call">
                                            <h4 className="down_vol">
                                                Pitch list vol.6
                                            </h4>
                                            <p className="pitch_note">
                                                <span className="note20"></span>
                                                <span className="cor913">1</span>
                                            </p>
                                        </div>
                                        <div className="prj_dark"></div>
                                        <ImgComponent class="img_norm" src="../resources/images/trans_sparwk70.png" />
                                    </div>
                                </ListPitchAdd>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ListPitchAdd>
                                    <div className="ctr_info">
                                        <div className="pitch_call">
                                            <h4 className="down_vol">
                                                Pitch list vol.5
                                            </h4>
                                            <p className="pitch_note">
                                                <span className="note20"></span>
                                                <span className="cor913">0</span>
                                            </p>
                                        </div>
                                        <div className="prj_dark"></div>
                                        <div className="img_cover">
                                            <div className="cover100">
                                                <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </ListPitchAdd>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ListPitchAdd>
                                    <div className="ctr_info">
                                        <div className="pitch_call">
                                            <h4 className="down_vol">
                                                Pitch list vol.4
                                            </h4>
                                            <p className="pitch_note">
                                                <span className="note20"></span>
                                                <span className="cor913">2</span>
                                            </p>
                                        </div>
                                        <div className="prj_dark"></div>
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
                                            </div>
                                        </div>
                                    </div>
                                </ListPitchAdd>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ListPitchAdd>
                                    <div className="ctr_info">
                                        <div className="pitch_call">
                                            <h4 className="down_vol">
                                                Pitch list vol.5
                                            </h4>
                                            <p className="pitch_note">
                                                <span className="note20"></span>
                                                <span className="cor913">0</span>
                                            </p>
                                        </div>
                                        <div className="prj_dark"></div>
                                        <div className="img_cover">
                                            <div className="cover100">
                                                <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </ListPitchAdd>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ListPitchAdd>
                                    <div className="ctr_info">
                                        <div className="pitch_call">
                                            <h4 className="down_vol">
                                                Pitch list vol.5
                                            </h4>
                                            <p className="pitch_note">
                                                <span className="note20"></span>
                                                <span className="cor913">0</span>
                                            </p>
                                        </div>
                                        <div className="prj_dark"></div>
                                        <div className="img_cover">
                                            <div className="cover100">
                                                <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </ListPitchAdd>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ListPitchAdd>
                                    <div className="ctr_info">
                                        <div className="pitch_call">
                                            <h4 className="down_vol">
                                                Pitch list vol.5
                                            </h4>
                                            <p className="pitch_note">
                                                <span className="note20"></span>
                                                <span className="cor913">0</span>
                                            </p>
                                        </div>
                                        <div className="prj_dark"></div>
                                        <div className="img_cover">
                                            <div className="cover100">
                                                <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </ListPitchAdd>
                            </SwiperSlide>
                        </Swiper>
                    </article>
                </div>
            </div>
        </section >
    )
}


