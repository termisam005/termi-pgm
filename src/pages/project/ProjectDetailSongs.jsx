import { Link, useState } from "react-router-dom";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ProfComponent from "../../components/common/ProfComponent";
import Footer from "../../components/layout/Footer";
import DropComponent from "../../components/common/DropComponent";

import ListStart from "../../pages/list/ListStart";
import ListSong from "../../pages/list/ListSong";


export default function ProjectDetailSongs() {

    const goHome = () => {
        window.location.href = "/ProjectDetailHome"
    }
    const goSongs = () => {
        window.location.href = "/ProjectDetailSongs"
    };
    const goRefer = () => {
        window.location.href = "/ProjectDetailRefer"
    };
    const goWriter = () => {
        window.location.href = "/ProjectDetailWriter"
    };

    const creAte = () => {
        window.location.href = "/NewSong1"
    };


    return (
        <div className="wrap">
            <Header />

            <div className="container">
                <Blueline />

                <div className="contents">

                    <section className="aside_line">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone norm">
                                        <span className="lock17"></span>
                                        <p className="project_call">
                                            <span>Collaboration</span>
                                            <span className="m-l-2 m-r-2">/</span>
                                            <span>Cowrite</span>
                                        </p>
                                        <div className="nemo_prof">
                                            <img src="../resources/images/nemo_prof_ex1.jpg" alt="photo" />
                                        </div>
                                        <p className="prof_name_big cor913">
                                            <span>PROJECT NOEASY</span>
                                        </p>
                                        <div className="prof_from">
                                            <p className="prof_location">
                                                <span>Hip Hop, K-POP</span>
                                            </p>
                                        </div>
                                        <div className="tip_prof op07">
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Cool</span>
                                            </p>
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Fun</span>
                                            </p>
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Happy</span>
                                            </p>
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Urgent</span>
                                            </p>
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Party</span>
                                            </p>
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Summer</span>
                                            </p>
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Dramma</span>
                                            </p>
                                        </div>
                                        <div className="multi_prof">
                                            <div className="dflx_ac_jcent">
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                            </div>
                                            <p className="mul_pr_txt">
                                                <span className="cor994 m-r-3">5</span>
                                                <span>Applicants</span>
                                            </p>
                                        </div>
                                    </div>
                                    <dl className="dl_company aside">
                                        <dt>
                                            <p className="simbol40">
                                                <img src="../resources/images/simb_tono40.png" alt="logo" />
                                            </p>
                                        </dt>
                                        <dd>
                                            <div className="prof_from">
                                                <p className="prof_company">
                                                    <span>EKKO Music Rights Europe</span>
                                                </p>
                                                <p className="word">
                                                    <span>Stockholm, Sweden</span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </section>
                            </div>
                            <div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <p className="top">Short Description</p>
                                    <div className="asdesc_zone">
                                        <span>
                                            Producer, mixing & mastering engineer
                                            looking for a manager/agent
                                        </span>
                                    </div>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_last">
                                    <p className="aslast_text">
                                        Project since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>

                    </section>

                    <main className="the_main">

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">PROJECT NOEASY</h1>
                                </div>
                                <DropComponent wclass="dflx_ac_jbet w250" />
                            </section>
                            <p className="line1"></p>
                            <section className="contain_body">
                                <article className="contact_line">
                                    <div className="tab_line">
                                        <p onClick={goHome} className="tab">Home</p>
                                        <p onClick={goSongs} className="tab on">Songs</p>
                                        <p onClick={goRefer} className="tab">Reference</p>
                                        <p onClick={goWriter} className="tab">Co-Writers</p>
                                    </div>
                                </article>

                                <article className="contain plus_contain">
                                    <section className="mini_top">
                                        <h1>Songs</h1>
                                    </section>
                                    <p className="line1"></p>
                                    <section className="contain_list">
                                        <article className="contact_line">
                                            <div className="contact_sel">
                                                <div className="tab_line">
                                                    <p className="art on">
                                                        All
                                                    </p>
                                                    <p className="art">
                                                        Co-Writing
                                                    </p>
                                                    <p className="art">
                                                        Available
                                                    </p>
                                                    <p className="art disble">
                                                        Pass
                                                    </p>
                                                    <p className="art disble">
                                                        Hold
                                                    </p>
                                                    <p className="art disble">
                                                        Cut
                                                    </p>
                                                </div>
                                                <select className="selector wh mini w220">
                                                    <option value="">Recently Added</option>
                                                    <option value="">A to Z</option>
                                                    <option value="">Z to A</option>
                                                </select>
                                            </div>
                                        </article>

                                        <article className="list_body jcent">
                                            <ListStart create={creAte} go_class="cor994" go_txt="New Song">
                                                <div className="ctr_hidd_cent">
                                                    <p className="ctr_hidd_txt tac">
                                                        Use the button to create your<br />
                                                        song to your SPARWK!
                                                    </p>
                                                </div>
                                            </ListStart>
                                            <ListSong />
                                            <ListSong />
                                            <ListSong />
                                            <ListSong />
                                            <ListSong />
                                        </article>
                                    </section>
                                </article>

                            </section>
                        </article>

                    </main>

                </div>
            </div>

            <Footer />

        </div >
    )
}
