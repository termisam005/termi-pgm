import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ImgComponent from "../../components/common/ImgComponent";
import ProfComponent from "../../components/common/ProfComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import Switch from "../../components/common/Switch";
import DropCont from "../../components/common/DropCont";
import ToggleCheck from "../../components/common/ToggleCheck";
import RangeSlider from "../../components/common/RangeSlider";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";


export default function SongDetail() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [favState, setFavState] = useState(false);
    const toggleFav = () => {
        setFavState(!favState);
    }

    const [popUpsColl, setpopUpsColl] = useState(false);
    const openPopColl = () => {
        setpopUpsColl(true);
    }
    const closePopColl = () => {
        setpopUpsColl(false);
    }

    const [popUpsSrc, setpopUpsSrc] = useState(false);
    const openPopSrc = () => {
        setpopUpsSrc(true);
    }
    const closePopSrc = () => {
        setpopUpsSrc(false);
    }

    return (
        <div className="wrap">
            <Header />
            <div className="container">
                <Blueline />
                <div className="contents">

                    <aside className="the_aside">
                        <section className="aside_top">
                            <div className="prof_zone">
                                <p className="project_call">
                                    <span>Collaboration</span>
                                    <span className="m-l-3 m-r-3">/</span>
                                    <span>Cowrite</span>
                                </p>
                                <div className="nemo_prof">
                                    <img src="../resources/images/nemo_prof_ex1.jpg" alt="photo" />
                                </div>
                                <p className="prof_name_big">
                                    <span className="lock17"></span>
                                    <span>Project.Name</span>
                                </p>
                                <div className="prof_from">
                                    <p className="prof_company">
                                        <span className="simb_ball"></span>
                                        <span>UINETWORKS</span>
                                    </p>
                                    <p className="prof_location">
                                        <span className="simb_navi"></span>
                                        <span>Seoul, Republic of Korea </span>
                                    </p>
                                </div>
                                <div className="multi_prof">
                                    <div className="dflx_ac_jcent">
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32"
                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32"
                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32"
                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32"
                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32"
                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                    </div>
                                    <p className="mul_pr_txt">
                                        5 connections work here
                                    </p>
                                </div>
                            </div>
                            <dl className="dl_company">
                                <dt>
                                    <p className="simbol38">
                                        <img src="../resources/images/simb_sm38.png" alt="sm logo" />
                                    </p>
                                </dt>
                                <dd>
                                    <div className="prof_from">
                                        <p className="prof_company">
                                            <span>SM Entertainment</span>
                                        </p>
                                        <p className="prof_location">
                                            <span className="simb_navi"></span>
                                            <span>Seoul, Republic of Korea </span>
                                        </p>
                                    </div>
                                </dd>
                            </dl>
                        </section>
                        <p className="line1"></p>
                        <div className="aside_desc">
                            <p className="top">Short Description</p>
                            <span>
                                Producer, mixing & mastering engineer
                                looking for a manager/agent
                            </span>
                        </div>
                        <p className="line1"></p>
                        <div className="aside_last">
                            <p className="aslast_text">
                                Project since : May, 28, 2022
                            </p>
                        </div>
                    </aside>

                    <main className="the_main">

                        <article className="contain song_contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <div className="tab_line">
                                        <p className="art">
                                            Home
                                        </p>
                                        <p className="art on">
                                            Song Files
                                        </p>
                                        <p className="art">
                                            Reference
                                        </p>
                                        <p className="art">
                                            Members
                                        </p>
                                    </div>
                                </div>
                                <div className="dflx_ac_jbet w250">
                                    <DropCont btn_class="btn_sm1 w120 btn_drop" spant="Joined" >
                                        <li>Owner change</li>
                                        <li>Completed</li>
                                        <li>Leave</li>
                                    </DropCont>
                                    <DropCont btn_class="btn_sm1 w120 cor btn_drop" spant="Invite" >
                                        <li>Invite</li>
                                        <li>Recommend</li>
                                    </DropCont>
                                </div>
                            </section>
                            <p className="line1"></p>
                            <section className="title_wrap">
                                <article className="gr_songtlt">
                                    <p className="xone_30"></p>
                                    <p onClick={toggleFav} className={favState ? "mark_favorite on" : "mark_favorite"}>
                                        <ImgComponent class="bticon" src="../resources/images/mark_fav14.png" />
                                        <ImgComponent class="bticon_on" src="../resources/images/mark_fav14_on.png" />
                                    </p>
                                    <dl className="dl_songtlt">
                                        <dt className="dt_simbol">
                                            <p className="simbol64">
                                                <img src="../resources/images/simb_butter64.png" alt="butter logo" />
                                            </p>
                                            <p className="simbol64">
                                                <img src="../resources/images/simb_sm64.png" alt="sm logo" />
                                            </p>
                                        </dt>
                                        <dd className="dd_title">
                                            <h1 className="song_title">
                                                Song_title.Name
                                            </h1>
                                            <div className="prof_from">
                                                <p className="prof_company">
                                                    <span className="simb_ball"></span>
                                                    <span>SM Entertainment</span>
                                                </p>
                                                <p className="prof_location">
                                                    <span className="simb_navi"></span>
                                                    <span>Seoul, Republic of Korea </span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </article>
                                <article className="verstab_line">
                                    <div className="vers_line">
                                        <button className="verstab">
                                            version.name
                                        </button>
                                        <button className="verstab">
                                            korean version
                                        </button>
                                    </div>
                                    <button className="vers_btn">
                                        <span className="plus"></span>
                                    </button>
                                </article>
                            </section>
                            <p className="line1"></p>

                            <div className="song_group">
                                <section className="contain_body">
                                    <div className="member_wrap">
                                        <article className="member_left">
                                            <div className="the_member">
                                                <div className="member_zone">
                                                    <span className="crown"></span>
                                                    <ProfComponent wrap_class="prof_wrap" comming_class="comming ing" prof_class="prof in c50"
                                                        line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                    <p className="prof_name">
                                                        <span>Jin Suk Choi</span>
                                                        <span className="shield"></span>
                                                    </p>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            <span className="simb_ball"></span>
                                                            <span>Creative Manager at Ekko Music Right</span>
                                                        </p>
                                                        <p className="prof_location m-l-2">
                                                            <span className="simb_navi"></span>
                                                            <span>Seoul, Republic of Korea</span>
                                                        </p>
                                                        <p className="prof_location">
                                                            <span className="simb_earth"></span>
                                                            <span>English, Korean</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="members">
                                                <p className="priv_name">
                                                    <span className="lock12"></span>
                                                    <span>Private project · 5 members</span>
                                                </p>
                                                <div className="multi_prof">
                                                    <div className="dflx_ac">
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                    </div>
                                                    <p className="mul_pr_txt">
                                                        3 connections work here
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="member_right">
                                            <div className="avail_line">
                                                <span className="avail">Availability</span>
                                                <div className="switch_zone">
                                                    <Switch label_class="switch-label" />
                                                    <span className="circ_feel">i</span>
                                                </div>
                                            </div>
                                            <div className="dflx_ac_jbet">
                                                <ButtonComponent class="btn_sm1 w120 m-r-10" txt="Split Sheet" />
                                                <ButtonComponent onClick={openPopColl} class="btn_sm1 w120 cor" txt="Collaborators" />
                                                <PopCollabo open={popUpsColl} close={closePopColl} />
                                            </div>
                                        </article>
                                    </div>
                                </section>
                                <p className="line1"></p>

                                <section className="contain_body">
                                    <div className="song_inner">

                                        <aside className="the_aside">
                                            <div className="mini_top">
                                                <h1>Song features</h1>
                                            </div>
                                            <p className="line1"></p>
                                            <section className="aside_top">
                                                <dl className="dl_record p-b-10">
                                                    <dt>
                                                        <span>Song Title</span>
                                                        <span className="edit">Edit</span>
                                                    </dt>
                                                    <dd>
                                                        <p className="what">That's what Llike</p>
                                                        <p className="record_lang">
                                                            <span className="simb_earth"></span>
                                                            <span>English</span>
                                                        </p>
                                                    </dd>
                                                </dl>
                                                <div className="feat_content">
                                                    <p className="title">Song Artwork</p>
                                                    <section className="cover_cont">
                                                        <img className="img_cover" src="../resources/images/cover_ex_butter.jpg" alt="coverimg" />
                                                        <div className="dark"></div>
                                                        <div className="top">
                                                            <h3 className="cover_tlt">Diving</h3>
                                                            <span className="line_edit">Edit</span>
                                                        </div>
                                                        <div className="cover_cam">
                                                            <p className="camera25"></p>
                                                            <span>
                                                                Optimal dimensions<br />248 x 248px
                                                            </span>
                                                        </div>
                                                        <div className="add_source">
                                                            <p onClick={openPopSrc}>+ Source</p>
                                                            <PopSource open={popUpsSrc} close={closePopSrc} />
                                                            <div className="dflx_ac_jcent">
                                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32"
                                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                                <div className="feat_content">
                                                    <div className="dflx_ac_jbet">
                                                        <p className="title">Comments</p>
                                                        <p className="cor994 curpt">Save</p>
                                                    </div>

                                                    <textarea className="text_area" placeholder="That's what Llike">
                                                    </textarea>
                                                    <p className="word_num tar">
                                                        <span>0</span><span className="m-l-3 m-r-3">/</span><span>200</span>
                                                    </p>
                                                </div>
                                            </section>
                                            <p className="line1"></p>
                                            <div className="aside_last">
                                                <p className="aslast_text">
                                                    Date Posted : May, 28, 2022
                                                </p>
                                            </div>
                                        </aside>

                                        <div className="the_inner">

                                            <article className="player_wrap m-b-25">
                                                <section className="player_setts m-b-20">
                                                    <div className="songplay_set">
                                                        <button className="btn_c32 cor">
                                                            <span className="btcor_inner p-l-5">
                                                                <img src="../resources/images/play_wh32.png" alt="images" />
                                                            </span>
                                                        </button>
                                                        <article className="song_player m-l-25">
                                                            <div className="progress_bar">
                                                                <Slider min={0} max={120}
                                                                    railStyle={{ height: 10 }}
                                                                    handleStyle={{
                                                                        height: 18,
                                                                        width: 18,
                                                                        marginLeft: -9,
                                                                        marginTop: -9,
                                                                        backgroundColor: "#304095",
                                                                        border: "none",
                                                                    }}
                                                                    trackStyle={{
                                                                        height: 6,
                                                                        top: 3,
                                                                        background: "#ff4f19",
                                                                    }} />
                                                            </div>
                                                        </article>
                                                    </div>
                                                    <div className="songtype_set">
                                                        <div className="pline_status">
                                                            <p className="stat">
                                                                <span className="m-r-7">01:40</span>
                                                                <span className="tmall">03:50</span>
                                                            </p>
                                                        </div>
                                                        <button type="button" className="btn_sm1 w120">
                                                            <img className="m-r-5" src="../resources/images/note_wh.png" alt="note" />
                                                            <span>Upload</span>
                                                        </button>
                                                    </div>
                                                </section>
                                                <section className="lyrics_cont">
                                                    <div className="lyrics_top">
                                                        <dl className="dl_record">
                                                            <dt>
                                                                <span>lyrics</span>
                                                                <span className="edit">Edit</span>
                                                            </dt>
                                                        </dl>
                                                        <div className="add_source">
                                                            <p onClick={openPopSrc}>+ Source</p>
                                                            <PopSource open={popUpsSrc} close={closePopSrc} />
                                                            <div className="dflx_ac">
                                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32"
                                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32"
                                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="lyrics_text scroll sc_y">
                                                        Hey, hey, hey<br />
                                                        I got a condo in Manhattan<br />
                                                        Baby girl, what's hatnin'?<br />
                                                        You and your ass invited<br />
                                                        So gon' and get to clappin'<br />
                                                        Go pop it for a player, pop-pop it for me<br />
                                                        Turn around and drop it for a player, drop-drop it for me<br />
                                                        I'll rent a beach house in Miami<br />
                                                        Wake up with no jammies (nope)<br />
                                                        Lobster tail for dinner<br />
                                                        Julio, serve that scampi<br />
                                                        You got it if you want it, got, got it if you want it<br />
                                                        Said you got it if you want it, take my wallet if you want it, now<br /><br />
                                                        Hey, hey, hey<br />
                                                        I got a condo in Manhattan<br />
                                                        Baby girl, what's hatnin'?<br />
                                                        You and your ass invited<br />
                                                        So gon' and get to clappin'<br />
                                                    </div>
                                                    <div className="save_btline">
                                                        <button className="btn_sav cancel">Cancel</button>
                                                        <button className="btn_sav">Save</button>
                                                    </div>
                                                </section>
                                            </article>

                                            <article className="contain">
                                                <section className="mini_top">
                                                    <h1>Song Information</h1>
                                                </section>
                                                <p className="line1"></p>
                                                <section className="contain_body">
                                                    <div className="dflx_ac_jbet p-b-18">
                                                        <div className="tab_line">
                                                            <p className={toggleState === 1 ? "art on" : "art"} onClick={() => toggleTab(1)}>
                                                                Song Info
                                                            </p>
                                                            <p className={toggleState === 2 ? "art on" : "art"} onClick={() => toggleTab(2)}>
                                                                Sync Info
                                                            </p>
                                                            <p className={toggleState === 3 ? "art on" : "art"} onClick={() => toggleTab(3)}>
                                                                Additional
                                                            </p>
                                                        </div>
                                                        <ButtonComponent class="btn_sm1 w120 cor" txt="Save" />
                                                    </div>
                                                    <div className="Songinfo_wrap">
                                                        <article className={toggleState === 1 ? "songinfo_cont on scroll sc_y" : "songinfo_cont scroll sc_y"}>
                                                            <dl className="dl_sinfo">
                                                                <dt>
                                                                    <span className="m-r-2">*</span>
                                                                    <span>Genres</span>
                                                                </dt>
                                                                <dd>
                                                                    <div>
                                                                        <p className="borus">
                                                                            <span>Dance</span>
                                                                        </p>
                                                                        <p className="borus">
                                                                            <span>K-POP</span>
                                                                        </p>
                                                                    </div>
                                                                    <p className="edit">
                                                                        * Add / Edit
                                                                    </p>
                                                                </dd>
                                                            </dl>
                                                            <dl className="dl_sinfo">
                                                                <dt>
                                                                    <span>Sub-Genre</span>
                                                                </dt>
                                                                <dd>
                                                                    <div>
                                                                        <p className="borus">
                                                                            <span>Hiphop</span>
                                                                        </p>
                                                                    </div>
                                                                    <p className="edit">
                                                                        * Add / Edit
                                                                    </p>
                                                                </dd>
                                                            </dl>
                                                            <dl className="dl_sinfo">
                                                                <dt>
                                                                    <span className="m-r-2">*</span>
                                                                    <span>Themes</span>
                                                                </dt>
                                                                <dd>
                                                                    <div>
                                                                        <p className="borus">
                                                                            <span>Party</span>
                                                                        </p>
                                                                        <p className="borus">
                                                                            <span>Summer</span>
                                                                        </p>
                                                                    </div>
                                                                    <p className="edit">
                                                                        * Add / Edit
                                                                    </p>
                                                                </dd>
                                                            </dl>
                                                            <dl className="dl_sinfo">
                                                                <dt>
                                                                    <span>Vocals</span>
                                                                </dt>
                                                                <dd>
                                                                    <div>
                                                                        <p className="borus">
                                                                            <span>Male</span>
                                                                        </p>
                                                                    </div>
                                                                    <p className="edit">
                                                                        * Add / Edit
                                                                    </p>
                                                                </dd>
                                                            </dl>
                                                            <dl className="dl_sinfo">
                                                                <dt>
                                                                    <span className="m-r-2">*</span>
                                                                    <span>Moods</span>
                                                                </dt>
                                                                <dd>
                                                                    <div>
                                                                        <p className="borus">
                                                                            <span>Dreamy</span>
                                                                        </p>
                                                                        <p className="borus">
                                                                            <span>Sexy</span>
                                                                        </p>
                                                                        <p className="borus">
                                                                            <span>Urgent</span>
                                                                        </p>
                                                                    </div>
                                                                    <p className="edit">
                                                                        * Add / Edit
                                                                    </p>
                                                                </dd>
                                                            </dl>
                                                            <dl className="dl_sinfo">
                                                                <dt>
                                                                    <span>Era</span>
                                                                </dt>
                                                                <dd>
                                                                    <div>
                                                                        <p className="borus">
                                                                            <span>2020's</span>
                                                                        </p>
                                                                    </div>
                                                                    <p className="edit">
                                                                        * Add / Edit
                                                                    </p>
                                                                </dd>
                                                            </dl>
                                                            <dl className="dl_sinfo">
                                                                <dt>
                                                                    <span>Instruments</span>
                                                                </dt>
                                                                <dd>
                                                                    <div>
                                                                        <p className="borus">
                                                                            <span>Accapella</span>
                                                                        </p>
                                                                        <p className="borus">
                                                                            <span>Drm Machine</span>
                                                                        </p>
                                                                    </div>
                                                                    <p className="edit">
                                                                        * Add / Edit
                                                                    </p>
                                                                </dd>
                                                            </dl>
                                                            <div>
                                                                <dl className="dl_sinfo w-100">
                                                                    <dt>
                                                                        <span>*</span>
                                                                        <span>BPM</span>
                                                                    </dt>
                                                                    <dd>
                                                                        <section className="range_wrap">
                                                                            <div className="range_text">
                                                                                <p className="range">
                                                                                    <span className="word">MIN</span>
                                                                                    <span className="word num">0</span>
                                                                                </p>
                                                                                <p className="range">
                                                                                    <span className="word">MAX</span>
                                                                                    <span className="word num">500</span>
                                                                                </p>
                                                                            </div>
                                                                            <div className="range_sett">
                                                                                <div className="the_ranger">
                                                                                    <RangeSlider />
                                                                                </div>
                                                                            </div>
                                                                        </section>
                                                                    </dd>
                                                                </dl>
                                                            </div>
                                                        </article>
                                                        <article className={toggleState === 2 ? "songinfo_cont on scroll sc_y" : "songinfo_cont scroll sc_y"}>
                                                            <div className="sync_cont">
                                                                <div className="top">
                                                                    <h5>Explicit Content</h5>
                                                                    <SwitchOn />
                                                                </div>
                                                                <p className="sync_txt">
                                                                    ⓘ If you’re putting in a version with explicit content, it’s good to have a clean version as well in
                                                                    case it’s an inquiry. The more versions, the fewer problems you’ll have with getting a license.
                                                                </p>
                                                            </div>
                                                            <div className="sync_cont">
                                                                <div className="top">
                                                                    <h5>Cover song</h5>
                                                                    <SwitchOn />
                                                                </div>
                                                                <p className="sync_txt">
                                                                    ⓘ Let people know if your song is all your own or a wonderful cover version! Clients can
                                                                    sometimes be specific in their request for originals and covers.
                                                                </p>
                                                            </div>
                                                            <div className="sync_cont">
                                                                <div className="top">
                                                                    <h5>Contains Samples</h5>
                                                                    <SwitchOn />
                                                                </div>
                                                                <p className="sync_txt">
                                                                    ⓘ Generally we’d advise not to use samples if you’re looking to get maximum work from your
                                                                    music as it’s preferred by clients when it comes to clearing the license. However, if you have used
                                                                    any samples it’s important that you have cleared those and to be upfront with regards to this so as
                                                                    not to cause any trouble later down the line.
                                                                </p>
                                                            </div>
                                                        </article>
                                                        <article className={toggleState === 3 ? "songinfo_cont on scroll sc_y" : "songinfo_cont scroll sc_y"}>
                                                            <div className="sync_cont addition">
                                                                <div className="top">
                                                                    <h5>Additional MP3 Metadata</h5>
                                                                </div>
                                                                <p className="sync_txt">
                                                                    ⓘ Enter any words you think are associated with your song. We’ve suggested some for you to
                                                                    get started or you can enter your own.
                                                                </p>
                                                            </div>
                                                            <div className="dpflx">
                                                                <div className="info_putcont">
                                                                    <p>Metadata Name</p>
                                                                    <input className="info_put" type="text" />
                                                                </div>
                                                                <div className="info_putcont">
                                                                    <p>Value</p>
                                                                    <input className="info_put" type="text" />
                                                                </div>
                                                            </div>
                                                            <p className="info_plus">
                                                                + Add Additional Meta Field
                                                            </p>
                                                        </article>
                                                    </div>
                                                </section>
                                            </article>

                                        </div>

                                    </div>
                                </section>
                            </div>
                        </article>

                    </main>

                </div>
            </div>
        </div>
    );
}

const PopCollabo = (props) => {
    const { open, close } = props;
    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className={"pop_bg"}></div>
            <div className="pop_body pop_ab_cent">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">+ Collaborators</h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts">
                    <article className="search_trans m-t-10 m-b-10">
                        <button type="button" className="btn_srch"></button>
                        <input type="text" className="hd_input" placeholder="Search" />
                    </article>
                    <article className="profile_zone scroll sc_y">
                        <div className="message_box">
                            <dl className="message_dl">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                </dt>
                                <dd className="dflx_ac_jbet">
                                    <div>
                                        <div className="mess_who">
                                            <span className="who">Jay.Park</span>
                                        </div>
                                        <div className="mess_tip bord">
                                            <span className="bord_tip">Producer</span>
                                            <span className="bord_tip">Top liner</span>
                                        </div>
                                    </div>
                                    <div>
                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="message_box">
                            <dl className="message_dl">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                </dt>
                                <dd className="dflx_ac_jbet">
                                    <div>
                                        <div className="mess_who">
                                            <span className="who">Jay.Park</span>
                                        </div>
                                        <div className="mess_tip bord">
                                            <span className="bord_tip">Producer</span>
                                            <span className="bord_tip">Top liner</span>
                                        </div>
                                    </div>
                                    <div>
                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="message_box">
                            <dl className="message_dl">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                </dt>
                                <dd className="dflx_ac_jbet">
                                    <div>
                                        <div className="mess_who">
                                            <span className="who">Jay.Park</span>
                                        </div>
                                        <div className="mess_tip bord">
                                            <span className="bord_tip">Producer</span>
                                            <span className="bord_tip">Top liner</span>
                                        </div>
                                    </div>
                                    <div>
                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="message_box">
                            <dl className="message_dl">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                </dt>
                                <dd className="dflx_ac_jbet">
                                    <div>
                                        <div className="mess_who">
                                            <span className="who">Jay.Park</span>
                                        </div>
                                        <div className="mess_tip bord">
                                            <span className="bord_tip">Producer</span>
                                            <span className="bord_tip">Top liner</span>
                                        </div>
                                    </div>
                                    <div>
                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="message_box">
                            <dl className="message_dl">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                </dt>
                                <dd className="dflx_ac_jbet">
                                    <div>
                                        <div className="mess_who">
                                            <span className="who">Jay.Park</span>
                                        </div>
                                        <div className="mess_tip bord">
                                            <span className="bord_tip">Producer</span>
                                            <span className="bord_tip">Top liner</span>
                                        </div>
                                    </div>
                                    <div>
                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="message_box">
                            <dl className="message_dl">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                </dt>
                                <dd className="dflx_ac_jbet">
                                    <div>
                                        <div className="mess_who">
                                            <span className="who">Jay.Park</span>
                                        </div>
                                        <div className="mess_tip bord">
                                            <span className="bord_tip">Producer</span>
                                            <span className="bord_tip">Top liner</span>
                                        </div>
                                    </div>
                                    <div>
                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </article>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md3 w-100" txt="Select" />
                </div>
            </div>
        </section>
    )
}

const PopSource = (props) => {
    const { open, close } = props;
    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className={"pop_bg"}></div>
            <div className="pop_body pop_ab_cent">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">+ Source(Lyrics)</h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts">
                    <article className="search_trans m-t-10 m-b-10">
                        <button type="button" className="btn_srch"></button>
                        <input type="text" className="hd_input" placeholder="Search" />
                    </article>
                    <article className="profile_zone scroll sc_y">
                        <div className="message_box">
                            <dl className="message_dl">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                </dt>
                                <dd className="dflx_ac_jbet">
                                    <div>
                                        <div className="mess_who">
                                            <span className="who">Jay.Park</span>
                                        </div>
                                        <div className="mess_tip bord">
                                            <span className="bord_tip">Producer</span>
                                            <span className="bord_tip">Top liner</span>
                                        </div>
                                    </div>
                                    <div>
                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="message_box">
                            <dl className="message_dl">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                </dt>
                                <dd className="dflx_ac_jbet">
                                    <div>
                                        <div className="mess_who">
                                            <span className="who">Jay.Park</span>
                                        </div>
                                        <div className="mess_tip bord">
                                            <span className="bord_tip">Producer</span>
                                            <span className="bord_tip">Top liner</span>
                                        </div>
                                    </div>
                                    <div>
                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </article>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md3 w-100" txt="Select" />
                </div>
            </div>
        </section>
    )
}

const SwitchOn = () => {
    const [checked, setChecked] = useState(true);
    const toggleSwitch = () => {
        setChecked(!checked);
    }
    return (
        <div onClick={toggleSwitch} className={checked ? "swith_room on" : "swith_room"}>
            <input className="switch-checkbox" type="checkbox" />
            <label className="switch-label">
                <span className="switch-button" />
            </label>
        </div>
    );
};
