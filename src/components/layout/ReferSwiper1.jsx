import { useState } from "react";
import ImgComponent from "../common/ImgComponent";
import EtcCont from "../common/EtcCont";
import PopAddrefer from "../common/PopAddrefer";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function ReferSwiper1() {

    //Pop Add Reference
    const [referPop, setReferPop] = useState(false);
    const addRefer = () => {
        setReferPop(true);
    };
    const closeRefer = () => {
        setReferPop(false);
    }

    return (
        <article className="contain inner_contain">
            <section className="mini_top">
                <h1>Reference File</h1>
            </section>
            <p className="line1"></p>
            <section className="contain_body">
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
                            Upload File
                        </p>
                        <p className="art">
                            Youtube
                        </p>
                        <p className="art">
                            Vimeo
                        </p>
                        <p className="art">
                            Share URL
                        </p>
                    </div>
                </div>
                <article className="card_line card_refer">
                    <Swiper slidesPerView={4} navigation={true}>
                        <SwiperSlide>
                            <section className="bordnemo_188">
                                <div className="bordnemo_movie posrel">
                                    <div className="cover_cam">
                                        <p onClick={addRefer} className="circle_add">
                                            <ImgComponent src="../resources/images/plus_wh17.png" />
                                        </p>
                                        <span className="f-s-16">File Upload</span>
                                    </div>
                                </div>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className="bordnemo_188">
                                <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                    <li>View</li>
                                    <li>Share URL</li>
                                </EtcCont>
                                <div className="bordnemo_movie">
                                    <div className="box">
                                        <ImgComponent class="img_cover" src="../resources/images/cover_ex_butter.jpg" />
                                    </div>
                                </div>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className="bordnemo_188">
                                <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                    <li>View</li>
                                    <li>Share URL</li>
                                </EtcCont>
                                <div className="bordnemo_in">
                                    <article className="nemo_vertical">
                                        <div className="nemo_over">
                                            <p className="icon">
                                                <ImgComponent src="../resources/images/file_polder.png" />
                                            </p>
                                            <h3>File name.jpg</h3>
                                        </div>
                                        <div className="nemo_under">
                                            <p className="nemod_p">Astor Piazzola</p>
                                            <p className="nemod_p">
                                                <span>Validity period</span>
                                                <span className="m-l-2 m-r-2">:</span>
                                                <span>07.07.2021</span>
                                            </p>
                                            <p className="nemod_p">
                                                <span>3.8</span>
                                                <span className="m-l-3">MB</span>
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className="bordnemo_188">
                                <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                    <li>View</li>
                                    <li>Share URL</li>
                                </EtcCont>
                                <div className="bordnemo_in">
                                    <article className="nemo_vertical">
                                        <div className="nemo_over">
                                            <p className="icon">
                                                <ImgComponent src="../resources/images/file_polder.png" />
                                            </p>
                                            <h3>File name.mp4</h3>
                                        </div>
                                        <div className="nemo_under">
                                            <p className="nemod_p">Astor Piazzola</p>
                                            <p className="nemod_p">
                                                <span>Validity period</span>
                                                <span className="m-l-2 m-r-2">:</span>
                                                <span>07.07.2021</span>
                                            </p>
                                            <p className="nemod_p">
                                                <span>3.8</span>
                                                <span className="m-l-3">MB</span>
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className="bordnemo_188">
                                <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                    <li>View</li>
                                    <li>Share URL</li>
                                </EtcCont>
                                <div className="bordnemo_in">
                                    <article className="nemo_vertical">
                                        <div className="nemo_over">
                                            <p className="icon">
                                                <ImgComponent src="../resources/images/file_polder.png" />
                                            </p>
                                            <h3>File name.mp4</h3>
                                        </div>
                                        <div className="nemo_under">
                                            <p className="nemod_p">Astor Piazzola</p>
                                            <p className="nemod_p">
                                                <span>Validity period</span>
                                                <span className="m-l-2 m-r-2">:</span>
                                                <span>07.07.2021</span>
                                            </p>
                                            <p className="nemod_p">
                                                <span>3.8</span>
                                                <span className="m-l-3">MB</span>
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </section>
                        </SwiperSlide>
                        <p className="see_view">
                            <a>View all</a>
                        </p>
                    </Swiper>
                </article>
            </section>
            <PopAddrefer open={referPop} close={closeRefer} />
        </article>
    );
}