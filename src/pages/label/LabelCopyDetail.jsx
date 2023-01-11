import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import FootPlay from "../song/FootPlay";
import ButtonComponent from "../../components/common/ButtonComponent";
import ImgComponent from "../../components/common/ImgComponent";
import SongList9 from "../list/SongList9";
import ListLabel from "../list/ListLabel";
import ProfComponent from "../../components/common/ProfComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function LabelCopyDetail() {

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

                            <section className="label_share">

                                <div className="share_wrap">
                                    <h3 className="tlt">Basic Information</h3>
                                    <div className="share_wrap_line">
                                        <dl className="mini_dl w-50">
                                            <dt>Album Type</dt>
                                            <dd>Album</dd>
                                        </dl>
                                        <dl className="mini_dl w-50">
                                            <dt>Catalog Number</dt>
                                            <dd>SPARWK090s</dd>
                                        </dl>
                                        <dl className="mini_dl w-50">
                                            <dt>Product Purpose</dt>
                                            <dd>Physical / Digital Release</dd>
                                        </dl>
                                        <dl className="mini_dl w-50">
                                            <dt>Original Catalog Number</dt>
                                            <dd>
                                                <input type="text" className="mini_put" />
                                            </dd>
                                        </dl>
                                        <dl className="mini_dl w-50">
                                            <dt>Status</dt>
                                            <dd>Release</dd>
                                        </dl>
                                        <dl className="mini_dl w-50">
                                            <dt>UPC / Barcode*</dt>
                                            <dd>4872343135338</dd>
                                        </dl>
                                        <dl className="mini_dl w-50">
                                            <dt>Release</dt>
                                            <dd>27 Apr 2021</dd>
                                        </dl>
                                        <dl className="mini_dl w-50">
                                            <dt>EAN</dt>
                                            <dd>50542854496**</dd>
                                        </dl>
                                        <dl className="mini_dl w-50">
                                            <dt>Pre-Order</dt>
                                            <dd>27 Apr 2021</dd>
                                        </dl>
                                        <dl className="mini_dl w-50">
                                            <dt>Grid</dt>
                                            <dd>Empty</dd>
                                        </dl>
                                    </div>
                                </div>

                                <div className="w-33">
                                    <div className="share_wrap">
                                        <h3 className="tlt">Production</h3>
                                        <div className="share_wrap_line">
                                            <dl className="message_dl connect_dl disble">
                                                <dt>
                                                    <div className="hover_prof">
                                                        <div className="co_plus">
                                                            <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                        </div>
                                                    </div>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">Empty</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Approver</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                            <dl className="message_dl connect_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                        src="../resources/images/simb_sm40.png" />
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">EKKO Musit Rights</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Music Publisher</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                            <dl className="message_dl connect_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                        src="../resources/images/simb_sm40.png" />
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">EKKO Musit Rights</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Music Publisher</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                            <dl className="message_dl connect_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                        line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">JINBYJIN</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Producer</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                            <dl className="message_dl connect_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                        line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">JINBYJIN</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Producer</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </section>

                        <p className="line1"></p>
                        <section className="contain_mid">

                            <article className="list_zone">
                                <div className="list_top">
                                    <div className="top_space left p-l-20 w-30">
                                        <span className="word">Product</span>
                                    </div>
                                    <div className="top_space w-15">
                                        <span className="word">Status</span>
                                    </div>
                                    <div className="top_space w-19">
                                        <span className="word">Artist · Feat. Artist</span>
                                    </div>
                                    <div className="top_space w-16">
                                        <span className="word">Genre · Language</span>
                                    </div>
                                    <div className="top_space w-20">
                                        <span className="word">ISRC · Songcode</span>
                                    </div>
                                </div>

                                <SongList9 txt_class="txt" name="Album.name" artist="Feat.Artist" genre="Genre" lang="English"
                                    isrc="DE-AA1-16-60101" code="PL6269">
                                    <p className="txt txt_rel">
                                        <span className="sball"></span>
                                        <span>Released</span>
                                    </p>
                                    <p className="txt_help">13 May 2022</p>
                                </SongList9>
                                <SongList9 txt_class="txt" name="Album.name" artist="Feat.Artist" genre="Genre" lang="English"
                                    isrc="DE-AA1-16-60101" code="PL6269">
                                    <p className="txt txt_rel">
                                        <span className="sball"></span>
                                        <span>Released</span>
                                    </p>
                                    <p className="txt_help">13 May 2022</p>
                                </SongList9>
                                <SongList9 txt_class="txt" name="Album.name" artist="Feat.Artist" genre="Genre" lang="English"
                                    isrc="DE-AA1-16-60101" code="PL6269">
                                    <p className="txt txt_rel">
                                        <span className="sball"></span>
                                        <span>Released</span>
                                    </p>
                                    <p className="txt_help">13 May 2022</p>
                                </SongList9>
                                <SongList9 txt_class="txt" name="Album.name" artist="Feat.Artist" genre="Genre" lang="English"
                                    isrc="DE-AA1-16-60101" code="PL6269">
                                    <p className="txt txt_rel">
                                        <span className="sball"></span>
                                        <span>Released</span>
                                    </p>
                                    <p className="txt_help">13 May 2022</p>
                                </SongList9>
                                <SongList9 txt_class="txt" name="Album.name" artist="Feat.Artist" genre="Genre" lang="English"
                                    isrc="DE-AA1-16-60101" code="PL6269">
                                    <p className="txt txt_rel">
                                        <span className="sball"></span>
                                        <span>Released</span>
                                    </p>
                                    <p className="txt_help">13 May 2022</p>
                                </SongList9>
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