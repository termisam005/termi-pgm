import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import Footer from "../../components/layout/Footer";
import BordComp from "../../components/common/BordComp";
import ButtonWith from "../../components/common/ButtonWith";
import SongList5 from "../list/SongList5";


export default function SongPitchWriter() {

    return (
        <div className="wrap">
            <Header />

            <div className="container">
                <Blueline />

                <div className="contents">

                    <section className="aside_line">
                        <aside className="the_aside">
                            <div>
                                <div className="mini_top">
                                    <h1>Search</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="m-t-5 m-b-20">
                                        <article className="hd_search">
                                            <button type="button" className="btn_srch"></button>
                                            <input type="text" className="hd_input" placeholder="Search Writer" />
                                        </article>
                                    </div>
                                    <article className="addConts">
                                        <div className="add_line">
                                            <p>Role</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div className="add_line">
                                            <p>Genre</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="dflx_ac_jbet">
                                        <p className="m-b-5">
                                            Recent search Filter
                                        </p>
                                        <p className="cor913 curpt">Clear All</p>
                                    </div>
                                    <div className="aside_bord">
                                        <BordComp word="Soundtrack" />
                                        <BordComp word="Blues" />
                                        <BordComp word="Romantic" />
                                        <BordComp word="Male vocals" />
                                        <BordComp word="Strings" />
                                        <BordComp word="Hot" />
                                        <BordComp word="Sweety" />
                                        <BordComp word="Sad" />
                                        <BordComp word="Label" />
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">Song Library</h1>
                                </div>
                            </section>
                            <p className="line1"></p>
                            <section className="contain_body">
                                <article className="contact_line">
                                    <div className="tab_line maint_line p-b-20">
                                        <p className="art">
                                            <a href="/SongPitchList">Pitch List</a>
                                        </p>
                                        <p className="art">
                                            <a href="/SongPitchSong">Song</a>
                                        </p>
                                        <p className="art">
                                            <a href="/SongPitchResult">Pitched Result</a>
                                        </p>
                                        <p className="art on">
                                            <a href="/SongPitchWriter">Co-Writer</a>
                                        </p>
                                    </div>
                                </article>

                                <article className="the_feed">
                                    <div className="mini_top p-t-20">
                                        <h1 className="top_title">
                                            Co-Writer
                                        </h1>
                                    </div>
                                    <p className="line1"></p>
                                    <div className="feed_conts">
                                        <article className="contact_line">
                                            <div className="contact_sel">
                                                <select className="selector wh mini w220">
                                                    <option value="">Recently Added</option>
                                                    <option value="">A to Z</option>
                                                    <option value="">Z to A</option>
                                                </select>
                                            </div>
                                        </article>
                                        <article className="list_zone">
                                            <SongList5 company="Ekko Music Rights">
                                                <p className="txt txt_avail">
                                                    <span className="sball"></span>
                                                    <span>Available</span>
                                                </p>
                                            </SongList5>
                                            <SongList5 company="Ekko Music Rights">
                                                <p className="txt txt_avail">
                                                    <span className="sball"></span>
                                                    <span>Available</span>
                                                </p>
                                            </SongList5>
                                            <SongList5 company="Ekko Music Rights">
                                                <p className="txt txt_avail">
                                                    <span className="sball"></span>
                                                    <span>Available</span>
                                                </p>
                                            </SongList5>
                                            <SongList5 company="Ekko Music Rights">
                                                <p className="txt txt_avail">
                                                    <span className="sball"></span>
                                                    <span>Available</span>
                                                </p>
                                            </SongList5>
                                            <SongList5 company="Ekko Music Rights">
                                                <p className="txt txt_avail">
                                                    <span className="sball"></span>
                                                    <span>Available</span>
                                                </p>
                                            </SongList5>
                                            <SongList5 company="Ekko Music Rights">
                                                <p className="txt txt_avail">
                                                    <span className="sball"></span>
                                                    <span>Available</span>
                                                </p>
                                            </SongList5>
                                            <SongList5 company="Ekko Music Rights">
                                                <p className="txt txt_avail">
                                                    <span className="sball"></span>
                                                    <span>Available</span>
                                                </p>
                                            </SongList5>
                                            <SongList5 company="Ekko Music Rights">
                                                <p className="txt txt_avail">
                                                    <span className="sball"></span>
                                                    <span>Available</span>
                                                </p>
                                            </SongList5>
                                            <SongList5 company="Ekko Music Rights">
                                                <p className="txt txt_unavail">
                                                    <span className="sball"></span>
                                                    <span>Unavailable</span>
                                                </p>
                                            </SongList5>
                                            <SongList5 company="Ekko Music Rights">
                                                <p className="txt txt_unavail">
                                                    <span className="sball"></span>
                                                    <span>Unavailable</span>
                                                </p>
                                            </SongList5>
                                        </article>
                                    </div>
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
