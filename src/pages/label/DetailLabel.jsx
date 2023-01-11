import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import FootPlay from "../song/FootPlay";
import ButtonComponent from "../../components/common/ButtonComponent";
import ImgComponent from "../../components/common/ImgComponent";
import SongList7 from "../list/SongList7";
import SongList8 from "../list/SongList8";
import ListLabel from "../list/ListLabel";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function DetailLabel() {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [recruit, setRecruit] = useState(false);
    const toggleRec = () => {
        setRecruit(!recruit);
        let switRoom = document.querySelector('.swith_room');
        switRoom.classList.toggle('on');
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
                                        <div className="cover100">
                                            <img className="prj_img" src="../resources/images/album_cover1.jpg" alt="image" />
                                        </div>
                                    </div>
                                </article>
                                <article className="vol_conts">
                                    <div className="avail_line">
                                        <div onClick={toggleRec} className={recruit ? "recru_line on" : "recru_line"}>
                                            <div className="avail_cont">
                                                <img className="ic" src="../resources/images/thunder_off.png" />
                                                <img className="ic_on" src="../resources/images/thunder.png" />
                                                <span className="m-l-2 word">Available</span>
                                            </div>
                                            <div className="switch_zone">
                                                <div className="swith_room">
                                                    <input className="switch-checkbox" type="checkbox" />
                                                    <label className="switch-label">
                                                        <span className="swt_sun"></span>
                                                        <span className="swt_moon"></span>
                                                        <span className="switch-button" />
                                                    </label>
                                                </div>
                                                <span className="circ_feel"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dflx_dcol_jbet h-100">
                                        <div className="vol_texts">
                                            <dl className="vol_tlt_dl">
                                                <dt>
                                                    <h1>Album.Title</h1>
                                                </dt>
                                                <dd>
                                                    <div className="tip_line">
                                                        <p className="tip_word cor994">
                                                            <span className="jum"></span>
                                                            <span>Album</span>
                                                        </p>
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>14 song</span>
                                                        </p>
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>46:50</span>
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <div className="vol_mess">
                                                <div className="mess_tip bord">
                                                    <span className="bord_tip">Hip hop</span>
                                                    <span className="bord_tip">K-pop</span>
                                                </div>
                                                <div className="mess_tip bord">
                                                    <span className="bord_tip">Fun</span>
                                                    <span className="bord_tip">Happy</span>
                                                    <span className="bord_tip">Urgent</span>
                                                </div>
                                                <p className="album_record p-t-5">
                                                    <span>Release : </span>
                                                    <span> 13 Aug 2021</span>
                                                </p>
                                                <p className="album_record">
                                                    <span>Pre-Order : </span>
                                                    <span> 13 Aug 2021</span>
                                                </p>
                                                <p className="album_record p-t-5">
                                                    <span>ⓟ 2021 JYP Entertatinment</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="vol_btline posab">
                                            <ButtonComponent class="btn_sm1 w100 m-r-15" txt="Information" />
                                            <ButtonComponent class="btn_sm1 cor w100 m-r-15" txt="Label Copy" />
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </section>
                        <p className="line1"></p>
                        <section className="contain_mid">
                            <article className="contact_line">
                                <div className="tab_line">
                                    <p className="go on">All</p>
                                    <p className="go">Registering</p>
                                    <p className="go">Approved</p>
                                </div>
                            </article>
                            <article className="list_zone">
                                <div className="list_top">
                                    <div className="top_space left p-l-20 w-33">
                                        <span className="word">Product</span>
                                    </div>
                                    <div className="top_space w-15">
                                        <span className="word">Duration</span>
                                    </div>
                                    <div className="top_space w-20">
                                        <span className="word">Status</span>
                                    </div>
                                    <div className="top_space w-15">
                                        <span className="word">Artist</span>
                                    </div>
                                    <div className="top_space w-17">
                                        <span className="word">Additional</span>
                                    </div>
                                </div>
                                <SongList7 txt_class="txt txt_avail" time="03:50" date="12 Aug 2022" artist="Stray Kids">
                                    <p className="txt txt_approve">
                                        <span className="sball"></span>
                                        <span>Approved</span>
                                    </p>
                                </SongList7>
                                <SongList7 txt_class="txt txt_avail" time="03:50" date="12 Aug 2022" artist="Stray Kids">
                                    <p className="txt txt_approve">
                                        <span className="sball"></span>
                                        <span>Approved</span>
                                    </p>
                                </SongList7>
                                <SongList7 txt_class="txt txt_avail" time="03:50" date="12 Aug 2022" artist="Stray Kids">
                                    <p className="txt txt_approve">
                                        <span className="sball"></span>
                                        <span>Approved</span>
                                    </p>
                                </SongList7>
                            </article>
                        </section>
                        <p className="line1"></p>
                        <section className="contain_mid p-t-25 p-b-20">
                            <div className="add_title">
                                <span className="addwh30"></span>
                                <span className="big">Add to Album List</span>
                                <span className="mini cor913">Autolist Of CUT Songs</span>
                            </div>
                        </section>
                        <p className="line1"></p>
                        <section className="contain_mid">
                            <article className="contact_line">
                                <div className="contact_sel">
                                    <div className="tab_line">
                                        <p className="go on">All</p>
                                        <p className="go">Registering</p>
                                        <p className="go">Approval</p>
                                    </div>
                                    <select className="selector wh mini w220">
                                        <option value="">Recently Added</option>
                                        <option value="">A to Z</option>
                                        <option value="">Z to A</option>
                                    </select>
                                </div>
                            </article>
                            <article className="list_zone">
                                <div className="list_top">
                                    <div className="top_space left p-l-20 w-33">
                                        <span className="word">Product</span>
                                    </div>
                                    <div className="top_space w-15">
                                        <span className="word">Duration</span>
                                    </div>
                                    <div className="top_space w-20">
                                        <span className="word">Status</span>
                                    </div>
                                    <div className="top_space w-15">
                                        <span className="word">Artist</span>
                                    </div>
                                    <div className="top_space w-17">
                                        <span className="word">Additional</span>
                                    </div>
                                </div>
                                <SongList8 txt_class="txt txt_avail" time="03:50" date="12 Aug 2022" artist="Stray Kids">
                                    <p className="txt txt_approve">
                                        <span className="sball"></span>
                                        <span>Approved</span>
                                    </p>
                                </SongList8>
                                <SongList8 txt_class="txt txt_avail" time="03:50" date="12 Aug 2022" artist="Stray Kids">
                                    <p className="txt txt_approve">
                                        <span className="sball"></span>
                                        <span>Approved</span>
                                    </p>
                                </SongList8>
                                <SongList8 txt_class="txt txt_avail" time="03:50" date="12 Aug 2022" artist="Stray Kids">
                                    <p className="txt txt_approve">
                                        <span className="sball"></span>
                                        <span>Approved</span>
                                    </p>
                                </SongList8>
                                <SongList8 txt_class="txt txt_avail" time="03:50" date="12 Aug 2022" artist="Stray Kids">
                                    <p className="txt txt_approve">
                                        <span className="sball"></span>
                                        <span>Approved</span>
                                    </p>
                                </SongList8>
                                <SongList8 txt_class="txt txt_avail" time="03:50" date="12 Aug 2022" artist="Stray Kids">
                                    <p className="txt txt_approve">
                                        <span className="sball"></span>
                                        <span>Approved</span>
                                    </p>
                                </SongList8>
                            </article>
                        </section>
                    </article>

                    <article className="contain">
                        <div className="mini_top p-t-20">
                            <div className="dflx_ac_jbet m-b-5">
                                <h1 className="top_title semib">
                                    Recently Activity Album
                                </h1>
                                <div></div>
                            </div>
                        </div>
                        <p className="line1"></p>
                        <div className="contain_body">
                            <Swiper slidesPerView={4} navigation={true} spaceBetween={0}>
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
                                        <div className="prj_dark"></div>
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
                                        <div className="prj_dark"></div>
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
                                        <div className="prj_dark"></div>
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
                                        <div className="prj_dark"></div>
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
                                        <div className="prj_dark"></div>
                                        <div className="img_cover">
                                            <div className="cover100">
                                                <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                            </div>
                                        </div>
                                    </ListLabel>
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