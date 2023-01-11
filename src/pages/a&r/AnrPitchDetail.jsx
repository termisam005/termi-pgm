import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import ImgComponent from "../../components/common/ImgComponent";
import ProfComponent from "../../components/common/ProfComponent";
import EtcCont from "../../components/common/EtcCont";
import Header from "../../components/header/Header";
import AsideDashAnr from "../../components/layout/AsideDashAnr";
import SongList3 from "../list/SongList3";
import FootPlay from "../song/FootPlay";


export default function AnrPitchDetail() {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    return (
        <div className="wrap dark">
            <Header />

            <div className="container_detail">

                <section className="dark_back">
                    <div className="dflx_ac_jbet h-100">
                        <div></div>
                        <h3 onClick={goBack}>
                            <span className="go_back32">
                                <img src="../resources/images/arr_back_wh32.png" alt="link back" />
                            </span>
                        </h3>
                    </div>
                </section>

                <div className="contents">

                    <section className="aside_line">
                        <AsideDashAnr />
                        <aside className="the_aside m-t-25">
                            <div className="mini_top dflx_ac_jbet">
                                <h1>Connect</h1>
                                <a className="view_go">
                                    <span>View more</span>
                                    <ImgComponent src="../resources/images/sv_arr_view.svg" />
                                </a>
                            </div>
                            <p className="line1"></p>
                            <div className="connector">
                                <div className="message_box">
                                    <dl className="message_dl connect_dl">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                        </dt>
                                        <dd className="conn_dd">
                                            <div className="mess_who">
                                                <span className="who">Issac Alberiz</span>
                                                <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                                                    <li>Message</li>
                                                    <li>Remove</li>
                                                </EtcCont>
                                            </div>
                                            <div className="tip_line">
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Producer</span>
                                                </p>
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Topliner</span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="message_box">
                                    <dl className="message_dl connect_dl">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        </dt>
                                        <dd className="conn_dd">
                                            <div className="mess_who">
                                                <span className="who">Issac Alberiz</span>
                                                <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                                                    <li>Message</li>
                                                    <li>Remove</li>
                                                </EtcCont>
                                            </div>
                                            <div className="dflx_ac tip_line">
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Producer</span>
                                                </p>
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Topliner</span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="message_box">
                                    <dl className="message_dl connect_dl">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex2.png" />
                                        </dt>
                                        <dd className="conn_dd">
                                            <div className="mess_who">
                                                <span className="who">Jay.Park</span>
                                                <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                                                    <li>Message</li>
                                                    <li>Remove</li>
                                                </EtcCont>
                                            </div>
                                            <div className="dflx_ac tip_line">
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Producer</span>
                                                </p>
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Topliner</span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

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
                                        <div className="pitch_top">
                                            <dl className="message_dl message_dl24">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                        line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                </dt>
                                                <dd>
                                                    <p className="pit_call">
                                                        Ekko Music Right Eucation
                                                    </p>
                                                </dd>
                                            </dl>
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
                                                {/* <ButtonComponent class="btn_sm1 w100 m-r-15" txt="Edit" /> */}
                                                <ButtonComponent class="btn_sm1 cor w200" txt="Add to Catalog" />
                                                <EtcCont wrap_class="wrap_etc sm m-l-15" btn_class="btn_hor_etc md" delli="Delete">
                                                    <li>Share URL</li>
                                                    <li>Pass</li>
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
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        <p className="prof_name_mid">
                                            Kristoffer Kilen Aase
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
                                    <div className="tab_line">
                                        <p className="go on">All</p>
                                        <p className="go">Available</p>
                                        <p className="go">Cut</p>
                                        <p className="go">Hold</p>
                                    </div>
                                </article>
                                <article className="list_zone">
                                    <SongList3 txt_class="txt txt_pitch" time="03:50" date="12 Aug 2022">
                                        <p className="txt txt_pitch">
                                            <span className="sball"></span>
                                            <span>Pitched</span>
                                        </p>
                                    </SongList3>
                                    <SongList3 txt_class="txt txt_pitch" time="03:50" date="12 Aug 2022">
                                        <p className="txt txt_pitch">
                                            <span className="sball"></span>
                                            <span>Pitched</span>
                                        </p>
                                    </SongList3>
                                    <SongList3 txt_class="txt txt_pitch" time="03:50" date="12 Aug 2022">
                                        <p className="txt txt_pitch">
                                            <span className="sball"></span>
                                            <span>Pitched</span>
                                        </p>
                                    </SongList3>
                                </article>
                            </section>
                        </article>

                    </main>

                    <FootPlay />
                </div>
            </div>

        </div >
    )
}