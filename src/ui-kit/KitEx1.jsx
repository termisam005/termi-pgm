import { Link } from "react-router-dom";
import ImgComponent from "../components/common/ImgComponent";
import ProfComponent from "../components/common/ProfComponent";
import PlayBox from "../components/common/PlayBox";
import EtcCont from "../components/common/EtcCont";
import WriteZone from "../components/common/WriteZone";
import ListProducer from "../pages/list/ListProducer";
import ListProject from "../pages/list/ListProject";

export default function KitEx1() {

    return (
        <div className="wrap_grad dark">
            <div className="container">

                <section className="demo_title">
                    <h1>EX 1</h1>
                </section>

                <section className="dflx_jcent">

                    <div className="p-30 m-r-30">
                        <section className="w290 h880">

                            <div className="message_wrap">
                                <article className="message_top">
                                    <div className="mess_top_line">
                                        <h1 className="top_title">Message</h1>
                                    </div>
                                </article>
                                <p className="line1"></p>
                                <article className="message_body">
                                    <div className="message_cont">
                                        <h3>Friend request</h3>
                                        <section className="message_team">
                                            <div className="message_box">
                                                <p className="line1"></p>
                                                <dl className="message_dl">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof norm c40"
                                                            imgclass="m-t-12" src="../resources/images/prof_none_40.png" />
                                                    </dt>
                                                    <dd>
                                                        <div className="mess_who">
                                                            <span className="who">Christoph Willbaldard</span>
                                                            <span className="time">05:20</span>
                                                        </div>
                                                        <div className="mess_tip">
                                                            <span className="word">requested a friend.</span>
                                                            <span className="bagde">1</span>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="message_cont">
                                        <h3>Message</h3>
                                        <section className="message_team">
                                            <div className="message_box on">
                                                <p className="line1"></p>
                                                <dl className="message_dl">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming ing" prof_class="prof in norm c40"
                                                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                    </dt>
                                                    <dd>
                                                        <div className="mess_who">
                                                            <span className="who">Issac Alberiz</span>
                                                            <span className="time">Now</span>
                                                        </div>
                                                        <div className="mess_tip">
                                                            <span className="word">Even where the road to artist</span>
                                                            <span className="bagde">1</span>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="message_box">
                                                <p className="line1"></p>
                                                <dl className="message_dl">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming dis" prof_class="prof in norm c40"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                    </dt>
                                                    <dd>
                                                        <div className="mess_who">
                                                            <span className="who">Issac Alberiz</span>
                                                            <span className="time">23m</span>
                                                        </div>
                                                        <div className="mess_tip">
                                                            <span className="word">Even where the road to artist</span>
                                                            <span className="bagde">999</span>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="message_box">
                                                <p className="line1"></p>
                                                <dl className="message_dl">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                    </dt>
                                                    <dd>
                                                        <div className="mess_who">
                                                            <span className="who">Issac Alberiz</span>
                                                            <span className="time">Now</span>
                                                        </div>
                                                        <div className="mess_tip">
                                                            <span className="word">Even where the road to artist</span>
                                                            <span className="bagde">1</span>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="message_cont">
                                        <h3>recommended friend</h3>
                                        <section className="message_team">
                                            <div className="message_box">
                                                <p className="line1"></p>
                                                <dl className="message_dl">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                                            line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                    </dt>
                                                    <dd>
                                                        <div className="mess_who">
                                                            <span className="who">Jay.Park</span>
                                                            <span className="time">Now</span>
                                                        </div>
                                                        <div className="mess_tip bord">
                                                            <span className="bord_tip">Producer</span>
                                                            <span className="bord_tip">Top liner</span>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </section>
                                    </div>
                                </article>
                            </div>

                        </section>
                    </div>

                    <div className="p-30 m-r-30">
                        <section className="w290 h880">

                            <div className="message_wrap">
                                <article className="message_top">
                                    <div className="mess_top_line">
                                        <h1 className="top_title">Notice</h1>
                                    </div>
                                </article>
                                <p className="line1"></p>
                                <article className="message_body">
                                    <div className="message_cont">
                                        <h3>New notifications</h3>
                                        <section className="message_team">
                                            <div className="message_box">
                                                <p className="line1"></p>
                                                <dl className="message_dl">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof norm c40"
                                                            imgclass="m-t-12" src="../resources/images/prof_none_40.png" />
                                                    </dt>
                                                    <dd>
                                                        <div className="mess_who">
                                                            <span className="who">Christoph Willbaldard</span>
                                                            <span className="time">05:20</span>
                                                        </div>
                                                        <div className="mess_tip">
                                                            <span className="word">requested a friend.</span>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="message_cont">
                                        <h3>Previous notice</h3>
                                        <section className="message_team">
                                            <div className="message_box">
                                                <p className="line1"></p>
                                                <dl className="message_dl">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof norm c40"
                                                            imgclass="m-t-12" src="../resources/images/prof_none_40.png" />
                                                    </dt>
                                                    <dd>
                                                        <div className="mess_who">
                                                            <span className="who">Tomaso Albinoni</span>
                                                            <span className="time">05:20</span>
                                                        </div>
                                                        <div className="mess_tip">
                                                            <span className="word">posted a post.</span>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </section>
                                    </div>
                                </article>
                            </div>

                        </section>
                    </div>

                    <div className="p-30 m-r-30">

                        <aside className="the_aside">
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
                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        </dt>
                                        <dd className="conn_dd">
                                            <div className="mess_who">
                                                <span className="who">Issac Alberiz</span>
                                                <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                                                    <li>Message</li>
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

                    </div>

                    <div className="p-30 m-r-30">

                        <section className="w290 h880">

                            <div className="play_wrap">
                                <p className="play_badge">
                                    <img src="../resources/images/arr_right_wh8.png" alt="image" />
                                </p>
                                <article className="play_top">
                                    <p className="line1"></p>
                                    <p className="play_back"></p>
                                    <div className="play_title">
                                        <span>playlist name</span>
                                        <span className="m-l-4">1</span>
                                    </div>
                                </article>
                                <article className="play_body">
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c145" src="../resources/images/alcove_145.png" />
                                    <div className="the_player">
                                        <section className="player_line">
                                            <p className="pline">
                                                <span className="line_ing"></span>
                                            </p>
                                            <div className="pline_status">
                                                <p className="stat">
                                                    <span className="m-r-8">01:40</span>
                                                    <span className="tmall">03:50</span>
                                                </p>
                                                <p className="stat">
                                                    <span className="speaker"></span>
                                                </p>
                                            </div>
                                        </section>
                                        <section className="player_set">
                                            <p className="plset re"></p>
                                            <div className="play_set_cent">
                                                <button className="btn_c24">
                                                    <img src="../resources/images/sv_playprev_cor24.svg" alt="images" />
                                                </button>
                                                <button className="btn_c32 cor">
                                                    <span className="btcor_inner p-l-5">
                                                        <img src="../resources/images/play_wh32.png" alt="images" />
                                                    </span>
                                                </button>
                                                <button className="btn_c24">
                                                    <img src="../resources/images/sv_playnext_cor24.svg" alt="images" />
                                                </button>
                                            </div>
                                            <p className="plset swit"></p>
                                        </section>
                                    </div>
                                </article>
                                <article className="play_list">
                                    <PlayBox box_class="play_box stop" play_dt="Warm on a Cold Night" play_dd="Pietro Mascagni" btn_class="btn_cplay stop" />
                                    <PlayBox box_class="play_box" play_dt="Warm on a Cold Night" play_dd="Pietro Mascagni" btn_class="btn_cplay" />
                                    <PlayBox box_class="play_box" play_dt="Warm on a Cold Night" play_dd="Pietro Mascagni" btn_class="btn_cplay" />
                                    <PlayBox box_class="play_box" play_dt="Warm on a Cold Night" play_dd="Pietro Mascagni" btn_class="btn_cplay" />
                                    <PlayBox box_class="play_box" play_dt="Warm on a Cold Night" play_dd="Pietro Mascagni" btn_class="btn_cplay" />
                                    <PlayBox box_class="play_box" play_dt="Warm on a Cold Night" play_dd="Pietro Mascagni" btn_class="btn_cplay" />
                                    <PlayBox box_class="play_box" play_dt="Warm on a Cold Night" play_dd="Pietro Mascagni" btn_class="btn_cplay" />
                                    <PlayBox box_class="play_box" play_dt="Warm on a Cold Night" play_dd="Pietro Mascagni" btn_class="btn_cplay" />
                                    <PlayBox box_class="play_box" play_dt="Warm on a Cold Night" play_dd="Pietro Mascagni" btn_class="btn_cplay" />
                                </article>
                            </div>

                        </section>

                    </div>

                </section>

                <section className="dflx_ac_jcent">
                    <div className="p-20 m-r-30">
                        <div className="p-10">
                            <p className="borus_mid blue">
                                <span className="ball"></span>
                                <span className="word">Eating to accept</span>
                            </p>
                        </div>
                        <div className="p-10">
                            <p className="borus_mid">
                                <span className="word">Music Publisher</span>
                            </p>
                            <p className="borus_mid">
                                <span className="word">Session Musician</span>
                            </p>
                            <p className="borus_mid">
                                <span className="word">Record Label</span>
                            </p>
                        </div>
                        <div className="p-10">
                            <p className="borus">
                                <span className="word">Producer</span>
                            </p>
                            <p className="borus">
                                <span className="word">Top liner</span>
                            </p>
                        </div>
                    </div>

                    <div className="p-20 dpflx">
                        <div className="p-20">
                            <section className="bordnemo_188">
                                <EtcCont wrap_class="wrap_etc posab" btn_class="btn_hor_etc" delli="Delete">
                                    <li>Split sheet view</li>
                                </EtcCont>
                                <div className="bordnemo_in">
                                    <article className="nemo_vertical">
                                        <div className="nemo_over">
                                            <ImgComponent src="../resources/images/file_img.png" />
                                            <h3>File name.jpeg</h3>
                                        </div>
                                        <div className="nemo_under">
                                            <p className="nemod_p">Astor Piazzola</p>
                                            <p className="nemod_p">
                                                Validity period : 07.07.2021
                                            </p>
                                            <p className="nemod_p">
                                                3.8 MB
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </section>
                        </div>
                        <div className="p-20">
                            <section className="bordnemo_188">
                                <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                    <li>Split sheet view</li>
                                    <li>Split sheet view</li>
                                    <li>Split sheet view</li>
                                </EtcCont>
                                <div className="bordnemo_in">
                                    <article className="nemo_vertical">
                                        <div className="nemo_over">
                                            <ImgComponent src="../resources/images/file_video.png" />
                                            <h3>File name.mp4</h3>
                                        </div>
                                        <div className="nemo_under">
                                            <p className="nemod_p">Astor Piazzola</p>
                                            <p className="nemod_p">
                                                Validity period : 07.07.2021
                                            </p>
                                            <p className="nemod_p">
                                                3.8 MB
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </section>
                        </div>
                        <div className="p-20">
                            <section className="bordnemo_188">
                                <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                    <li>Open</li>
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
                        </div>
                        <div className="p-20">
                            <section className="bordnemo_188">
                                <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                    <li>Open</li>
                                </EtcCont>
                                <div className="bordnemo_in">
                                    <article className="nemo_vertical">
                                        <div className="nemo_over">
                                            <p className="icon">
                                                <ImgComponent src="../resources/images/file_share.png" />
                                            </p>
                                            <h3>Share URL</h3>
                                        </div>
                                        <div className="nemo_under">
                                            <p className="nemod_p">
                                                https://www.notion.so/7454
                                                60ec51374adaadaa4f08696
                                                81baf?v=815ea9e56981430
                                                5986bbebb6db0
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </section>
                        </div>

                        <div className="p-20 p-l-50 dflx_ac_jcent">
                            <EtcCont wrap_class="wrap_etc" btn_class="btn_hor_etc" delli="Delete">
                                <li>Split sheet view</li>
                                <li>Split sheet view</li>
                            </EtcCont>
                        </div>
                    </div>
                </section>

                <section className="dflx_jcent">
                    <main className="the_main">

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">Feed</h1>
                                </div>
                            </section>
                            <p className="line1"></p>
                            <section className="contain_body">
                                <article className="the_feed">
                                    <div className="feed_top">
                                        <div className="write_line">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                            <WriteZone zone_class="write_zone" type="text" class="wirte_put" placeholder="Do you have a story you would like to share?" />
                                        </div>
                                    </div>
                                    <div className="feed_conts">
                                        <p className="line1"></p>
                                        <div className="comp_line">
                                            <p className="the_comp">
                                                <ImgComponent src="../resources/images/sv_photo_wh.svg" />
                                                <span className="word">
                                                    Photo/Video
                                                </span>
                                            </p>
                                            <p className="the_comp">
                                                <ImgComponent src="../resources/images/sv_calendar_wh.svg" />
                                                <span className="word">
                                                    important event
                                                </span>
                                            </p>
                                            <p className="the_comp">
                                                <ImgComponent src="../resources/images/sv_navi_wh.svg" />
                                                <span className="word">
                                                    Check-in
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="the_feed m-t-20">

                                    <div className="feed_conts">
                                        <p className="line1"></p>
                                        <div className="whois_cont">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50" src="../resources/images/thumb_bts.png" />
                                            <dl className="whois_dl">
                                                <dt>BTS</dt>
                                                <dd>
                                                    <span className="word">35 minutes ago</span>
                                                    <span className="word">Seoul, Republic of Korea</span>
                                                </dd>
                                            </dl>
                                            <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc md" delli="Delete">
                                                <li>Edit</li>
                                            </EtcCont>
                                        </div>
                                        <div className="text_cont">
                                            <div className="text">
                                                Who is looking forward to next week's #BTS _ Butter CD release? 🙋 ♂️ ♀️🙋#Soft Like Butter<br />
                                                <a href="">🧈 listen now: https://www.bts-butter.com/</a><br />
                                                <a href="">🧈 Pre-book now: https://biglink.to/BTS_BUTTERCD_GLOBAL</a>
                                            </div>
                                            <Link className="go_more" to="">View more</Link>
                                        </div>
                                        <div className="visual_cont">
                                            <div className="visual_box">
                                                <ImgComponent className="visu_img" src="../resources/images/visu_ex1.jpg" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="feed_conts">
                                        <p className="line1"></p>
                                        <div className="comp_line">
                                            <p className="the_comp">
                                                <ImgComponent src="../resources/images/sv_like_wh.svg" />
                                                <span className="word">
                                                    <span>10</span>
                                                    <span className="m-l-7">Likes</span>
                                                </span>
                                            </p>
                                            <p className="the_comp">
                                                <ImgComponent src="../resources/images/sv_talk_wh.svg" />
                                                <span className="word">
                                                    <span>12</span>
                                                    <span className="m-l-7">Comments</span>
                                                </span>
                                            </p>
                                            <p className="the_comp">
                                                <ImgComponent src="../resources/images/sv_share_wh.svg" />
                                                <span className="word">
                                                    Share
                                                </span>
                                            </p>
                                            <p className="the_comp">
                                                <ImgComponent src="../resources/images/sv_letter_wh.svg" />
                                                <span className="word">
                                                    Send
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="feed_conts">
                                        <p className="line1"></p>
                                        <div className="the_comments">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32" src="../resources/images/thumb_kg.png" />
                                            <article className="comment_cont">
                                                <div className="comment_top">
                                                    <h1>KYGO</h1>
                                                    <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc" delli="Delete">
                                                        <li>Edit</li>
                                                    </EtcCont>
                                                </div>
                                                <div className="comment">
                                                    <p className="ment">I'm looking forward to it too!!</p>
                                                    <Link className="go_more" to="">View more</Link>
                                                </div>
                                                <div className="ment_result">
                                                    <p>14 minutes ago</p>
                                                    <p>Like</p>
                                                    <p>Reply</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div>
                                            <p className="comment_more">
                                                <span>More comments</span>
                                                <img src="../resources/images/arr_down_md_wh.png" alt="image" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="feed_conts">
                                        <p className="line1"></p>
                                        <div className="write_line">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                            <WriteZone zone_class="write_zone send" type="text" class="wirte_put" placeholder="Whrite your comments…" />
                                        </div>
                                    </div>

                                </article>
                            </section>

                        </article>

                    </main>
                    <p className="cl"></p>
                </section>

                <section className="dflx_jcent m-t-30 m-b-80">
                    <main className="the_main">
                        <div className="dpflx">

                            <article className="creator">
                                <div className="ctr_wrap">
                                    <div className="ctr_hidd">
                                        <div className="ctr_hidd_in">
                                            <div>
                                                <p className="borus">
                                                    <span className="word">K-POP</span>
                                                </p>
                                                <p className="borus">
                                                    <span className="word">Dance</span>
                                                </p>
                                                <p className="borus">
                                                    <span className="word">Hip-Hop</span>
                                                </p>
                                            </div>
                                            <p className="ctr_hidd_txt">
                                                "Collabo, Mixmaster, Outsourcing, Lesson"
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ctr_info">
                                        <div className="over">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                            <div className="ctr_name">
                                                <h3>Jin Suk Choi</h3>
                                                <span className="shield"></span>
                                            </div>
                                            <dl className="ctr_dl">
                                                <dt>
                                                    <span className="ball"></span>
                                                    <span className="what">
                                                        Creative Manager at Ekko Music
                                                    </span>
                                                </dt>
                                                <dd>
                                                    <p className="details">Seoul, Republic of Korea</p>
                                                    <p className="details">
                                                        English, Korean
                                                    </p>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="bottom">
                                            <p className="borus">
                                                <span className="word">Producer</span>
                                            </p>
                                            <p className="borus">
                                                <span className="word">Topliner</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ctr_foot">
                                    <p className="line1"></p>
                                    <div className="foot_info">
                                        <p className="apply">Applied</p>
                                        <p>
                                            <span className="minute">3</span>
                                            <span>minute ago</span>
                                        </p>
                                    </div>
                                    <EtcCont wrap_class="wrap_etc sm m-t-7" btn_class="btn_hor_etc" delli="Close">
                                        <li>+ Connect</li>
                                        <li>Confirm</li>
                                    </EtcCont>
                                </div>
                            </article>

                            <div className="p-10"></div>
                            <ListProducer />
                            <div className="p-10"></div>
                            <ListProject />

                        </div>
                    </main>
                    <p className="cl"></p>
                </section>

            </div>
        </div>
    )
}