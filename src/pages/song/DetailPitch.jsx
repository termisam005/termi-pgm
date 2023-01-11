import { Link, useHistory } from "react-router-dom";
import FootPlay from "./FootPlay";
import ButtonComponent from "../../components/common/ButtonComponent";
import ProfComponent from "../../components/common/ProfComponent";
import EtcCont from "../../components/common/EtcCont";
import ImgComponent from "../../components/common/ImgComponent";
import SongList2 from "../list/SongList2";
import SongList3 from "../list/SongList3";
import ListPitch1 from "../list/ListPitch1";


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function DetailPitch() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

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
                        <section className="contain_mid posrel">
                            <div className="btline">
                                <button className="btsq bt20">
                                    <img className="bticon" src="../resources/images/sv_arr20_left_wh.png" alt="image" />
                                    <img className="bticon_on" src="../resources/images/sv_arr20_left_cor.png" alt="image" />
                                </button>
                                <button className="btsq bt20">
                                    <img className="bticon" src="../resources/images/sv_arr20_right_wh.png" alt="image" />
                                    <img className="bticon_on" src="../resources/images/sv_arr20_right_cor.png" alt="image" />
                                </button>
                            </div>
                            <div className="volume_wrap">
                                <article className="vol_cover">
                                    <div className="img_cover">
                                        <div className="cover50">
                                            <img className="prj_img" src="../resources/images/album_cover1.jpg" alt="image" />
                                        </div>
                                        <div className="cover50">
                                            <img className="prj_img" src="../resources/images/album_cover2.jpg" alt="image" />
                                        </div>
                                        <div className="cover50">
                                            <img className="prj_img" src="../resources/images/album_cover3.jpg" alt="image" />
                                        </div>
                                    </div>
                                </article>
                                <article className="vol_conts">
                                    <div className="dflx_dcol_jbet h-100">
                                        <div className="vol_texts">
                                            <dl className="vol_tlt_dl">
                                                <dt>
                                                    <h1>Pitch list vol.3</h1>
                                                </dt>
                                                <dd>
                                                    <div className="tip_line">
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>3 song</span>
                                                        </p>
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>10:50</span>
                                                        </p>
                                                    </div>
                                                    <div className="tip_line">
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>13 Aug 2021</span>
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <div className="vol_mess">
                                                <div className="mess_tip bord">
                                                    <span className="bord_tip">Hip hop</span>
                                                    <span className="bord_tip">K-pop</span>
                                                    <span className="bord_tip">Cool</span>
                                                </div>
                                                <div className="mess_tip bord">
                                                    <span className="bord_tip">Fun</span>
                                                    <span className="bord_tip">Happy</span>
                                                    <span className="bord_tip">Urgent</span>
                                                </div>
                                                <div className="mess_tip bord">
                                                    <span className="bord_tip">Party</span>
                                                    <span className="bord_tip">Summer</span>
                                                    <span className="bord_tip">Drama</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vol_btline">
                                            <ButtonComponent class="btn_sm1 w100 m-r-15" txt="Edit" />
                                            <ButtonComponent class="btn_sm1 cor w100 m-r-15" txt="Pitching" />
                                            <EtcCont wrap_class="wrap_etc sm m-l-15" btn_class="btn_hor_etc md" delli="Delete">
                                                <li>Duplicate</li>
                                                <li>Share URL</li>
                                                <li>Delete</li>
                                            </EtcCont>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </section>
                        <p className="line1"></p>
                        <section className="contain_mid">
                            <div className="dflx_ac">
                                <div className="descr_profile">
                                    <span className="crown"></span>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                        line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                    <p className="prof_name_mid">
                                        Jin suk choi
                                    </p>
                                </div>
                                <div className="desc_zone">
                                    <p>Short Description Contents</p>
                                    <br />
                                    <p>Komtru is an artist who likes to fuse a blend of different music genres..from pop to hiphop and Afrobeats..</p>
                                </div>
                            </div>
                        </section>
                        <p className="line1"></p>
                        <section className="contain_mid">
                            <article className="contact_line">
                                <div className="contact_sel">
                                    <div className="tab_line">
                                        <p className="go on">All</p>
                                        <p className="go">Available</p>
                                        <p className="go">Cut</p>
                                        <p className="go">Hold</p>
                                    </div>
                                    <select className="selector wh mini w220">
                                        <option value="">Recently Added</option>
                                        <option value="">A to Z</option>
                                        <option value="">Z to A</option>
                                    </select>
                                </div>
                            </article>
                            <article className="list_zone">
                                <SongList3 txt_class="txt txt_avail" time="03:50" date="12 Aug 2022">
                                    <p className="txt txt_avail">
                                        <span className="sball"></span>
                                        <span>Available</span>
                                    </p>
                                </SongList3>
                                <SongList3 txt_class="txt txt_cut" time="03:50" date="12 Aug 2022">
                                    <p className="txt txt_cut">
                                        <span className="sball"></span>
                                        <span>Cut</span>
                                    </p>
                                </SongList3>
                                <SongList3 txt_class="txt txt_hod" time="03:50" date="12 Aug 2022">
                                    <p className="txt txt_hold">
                                        <span className="sball"></span>
                                        <span>Hold</span>
                                    </p>
                                </SongList3>
                            </article>
                        </section>
                        <p className="line1"></p>
                        <section className="contain_mid p-t-25 p-b-20">
                            <div className="add_title">
                                <span className="addwh30"></span>
                                <span className="big">Add to Pitch List</span>
                                <span className="mini cor913">Autolist Of Available Demo Songs</span>
                            </div>
                        </section>
                        <p className="line1"></p>
                        <section className="contain_mid">
                            <article className="contact_line">
                                <div className="contact_sel">
                                    <div className="tab_line">
                                        <p className="go on">All</p>
                                        <p className="go">Available</p>
                                        <p className="go">Pitched</p>
                                        <p className="go">Pass</p>
                                    </div>
                                    <select className="selector wh mini w220">
                                        <option value="">Recently Added</option>
                                        <option value="">A to Z</option>
                                        <option value="">Z to A</option>
                                    </select>
                                </div>
                            </article>
                            <article className="list_zone">
                                <SongList2 txt_class="txt txt_avail" time="03:50" date="12 Aug 2022">
                                    <p className="txt txt_avail">
                                        <span className="sball"></span>
                                        <span>Available</span>
                                    </p>
                                </SongList2>
                                <SongList2 txt_class="txt txt_avail" time="03:50" date="12 Aug 2022">
                                    <p className="txt txt_avail">
                                        <span className="sball"></span>
                                        <span>Available</span>
                                    </p>
                                </SongList2>
                                <SongList2 txt_class="txt txt_avail" time="03:50" date="">
                                    <p className="txt txt_avail">
                                        <span className="sball"></span>
                                        <span>Available</span>
                                    </p>
                                </SongList2>
                                <SongList2 txt_class="txt txt_avail" time="03:50" date="">
                                    <p className="txt txt_avail">
                                        <span className="sball"></span>
                                        <span>Available</span>
                                    </p>
                                </SongList2>
                                <SongList2 txt_class="txt txt_avail" time="03:50" date="">
                                    <p className="txt txt_avail">
                                        <span className="sball"></span>
                                        <span>Available</span>
                                    </p>
                                </SongList2>
                                <SongList2 txt_class="txt txt_pass" time="03:50" date="12 Aug 2022">
                                    <p className="txt txt_pass">
                                        <span className="sball"></span>
                                        <span>Pass</span>
                                    </p>
                                </SongList2>
                                <SongList2 txt_class="txt txt_pass" time="03:50" date="">
                                    <p className="txt txt_pass">
                                        <span className="sball"></span>
                                        <span>Pass</span>
                                    </p>
                                </SongList2>
                                <SongList2 txt_class="txt txt_pitch" time="03:50" date="12 Aug 2022">
                                    <p className="txt txt_pitch">
                                        <span className="sball"></span>
                                        <span>Pitched</span>
                                    </p>
                                </SongList2>
                                <SongList2 txt_class="txt txt_pitch" time="03:50" date="12 Aug 2022">
                                    <p className="txt txt_pitch">
                                        <span className="sball"></span>
                                        <span>Pitched</span>
                                    </p>
                                </SongList2>
                                <SongList2 txt_class="txt txt_pitch" time="03:50" date="">
                                    <p className="txt txt_pitch">
                                        <span className="sball"></span>
                                        <span>Pitched</span>
                                    </p>
                                </SongList2>
                            </article>
                        </section>
                    </article>

                    <article className="contain">
                        <div className="mini_top p-t-20">
                            <div className="dflx_ac_jbet m-b-5">
                                <h1 className="top_title semib">
                                    Recently Pitch Lists
                                </h1>
                                <div></div>
                            </div>
                        </div>
                        <p className="line1"></p>
                        <div className="contain_body">
                            <Swiper slidesPerView={4} navigation={true} spaceBetween={0}>
                                <SwiperSlide>
                                    <ListPitch1>
                                        <div className="pitch_call">
                                            <h4 className="down_vol">
                                                Pitch list vol.5
                                            </h4>
                                            <p className="pitch_note">
                                                <span className="note20"></span>
                                                <span className="cor913">1</span>
                                            </p>
                                        </div>
                                        <div className="prj_dark"></div>
                                        <ImgComponent class="img_norm" src="../resources/images/trans_sparwk70.png" />
                                    </ListPitch1>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListPitch1>
                                        <div className="pitch_call">
                                            <h4 className="down_vol">
                                                Pitch list vol.4
                                            </h4>
                                            <p className="pitch_note">
                                                <span className="note20"></span>
                                                <span className="cor913">3</span>
                                            </p>
                                        </div>
                                        <div className="prj_dark"></div>
                                        <div className="img_cover">
                                            <div className="cover100">
                                                <ImgComponent class="prj_img" src="../resources/images/thumb_ex3.jpg" />
                                            </div>
                                        </div>
                                    </ListPitch1>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListPitch1>
                                        <div className="pitch_call">
                                            <h4 className="down_vol">
                                                Pitch list vol.3
                                            </h4>
                                            <p className="pitch_note">
                                                <span className="note20"></span>
                                                <span className="cor913">5</span>
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
                                    </ListPitch1>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListPitch1>
                                        <div className="pitch_call">
                                            <h4 className="down_vol">
                                                Pitch list vol.2
                                            </h4>
                                            <p className="pitch_note">
                                                <span className="note20"></span>
                                                <span className="cor913">1</span>
                                            </p>
                                        </div>
                                        <div className="prj_dark"></div>
                                        <div className="img_cover">
                                            <div className="cover100">
                                                <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                            </div>
                                        </div>
                                    </ListPitch1>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListPitch1>
                                        <div className="pitch_call">
                                            <h4 className="down_vol">
                                                Pitch list vol.2
                                            </h4>
                                            <p className="pitch_note">
                                                <span className="note20"></span>
                                                <span className="cor913">1</span>
                                            </p>
                                        </div>
                                        <div className="prj_dark"></div>
                                        <div className="img_cover">
                                            <div className="cover100">
                                                <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                            </div>
                                        </div>
                                    </ListPitch1>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListPitch1>
                                        <div className="pitch_call">
                                            <h4 className="down_vol">
                                                Pitch list vol.2
                                            </h4>
                                            <p className="pitch_note">
                                                <span className="note20"></span>
                                                <span className="cor913">1</span>
                                            </p>
                                        </div>
                                        <div className="prj_dark"></div>
                                        <div className="img_cover">
                                            <div className="cover100">
                                                <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                            </div>
                                        </div>
                                    </ListPitch1>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </article>

                </main>

                <FootPlay />
            </div>

        </div >
    )
}