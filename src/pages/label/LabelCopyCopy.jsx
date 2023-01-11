import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import Footer from "../../components/layout/Footer";
import ButtonWith from "../../components/common/ButtonWith";
import PopGenres from "../../components/common/PopGenres";
import SongList9 from "../list/SongList9";


export default function LabelCopyCopy() {

    const [genPop, setGenPop] = useState(false);
    const openGenpop = () => {
        setGenPop(true);
    };
    const closeGenpop = () => {
        setGenPop(false);
    }

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
                                            <input type="text" className="hd_input" placeholder="Search Songs" />
                                        </article>
                                    </div>
                                    <article className="addConts">
                                        <div onClick={openGenpop} className="add_line">
                                            <p>Genre</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div className="add_line">
                                            <p>Sub-Genre</p>
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
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">Label Copy</h1>
                                </div>
                            </section>
                            <p className="line1"></p>
                            <section className="contain_body">
                                <article className="contact_line">
                                    <div className="tab_line maint_line p-b-20">
                                        <p className="art">
                                            <a href="/LabelCopy">Song</a>
                                        </p>
                                        <p className="art">
                                            <a href="/LabelAlbum">Album</a>
                                        </p>
                                        <p className="art on">
                                            <a href="/LabelCopyCopy">Label Copy</a>
                                        </p>
                                    </div>
                                </article>

                                <article className="the_feed">
                                    <div className="mini_top p-t-20">
                                        <h1 className="top_title">
                                            Label Copy List
                                        </h1>
                                    </div>
                                    <p className="line1"></p>
                                    <div className="feed_conts">
                                        <article className="contact_line">
                                            <div className="contact_sel">
                                                <div className="tab_line">
                                                    <p className="go on">Song</p>
                                                    <p className="go">Album</p>
                                                </div>
                                                <select className="selector wh mini w220">
                                                    <option value="">Recently Activity</option>
                                                    <option value="">A to Z</option>
                                                    <option value="">Z to A</option>
                                                </select>
                                            </div>
                                        </article>
                                        <article className="list_zone">
                                            <div className="list_top">
                                                <div className="top_space left p-l-20 w-30">
                                                    <span className="word">Product(Song Ver.)</span>
                                                </div>
                                                <div className="top_space w-15">
                                                    <span className="word">Status</span>
                                                </div>
                                                <div className="top_space w-19">
                                                    <span className="word">Album · Artist</span>
                                                </div>
                                                <div className="top_space w-16">
                                                    <span className="word">Genre · Language</span>
                                                </div>
                                                <div className="top_space w-20">
                                                    <span className="word">ISRC · Songcode</span>
                                                </div>
                                            </div>
                                            <SongList9 txt_class="txt comp" name="Album.name" artist="Artist" genre="Genre" lang="English"
                                                isrc="DE-AA1-16-60101" code="PL6269">
                                                <p className="txt txt_unrel">
                                                    <span className="sball"></span>
                                                    <span>Unrelease</span>
                                                </p>
                                                <p className="txt_help">ASAP</p>
                                            </SongList9>
                                            <SongList9 txt_class="txt comp" name="Album.name" artist="Artist" genre="Genre" lang="English"
                                                isrc="DE-AA1-16-60101" code="PL6269">
                                                <p className="txt txt_unrel">
                                                    <span className="sball"></span>
                                                    <span>Unrelease</span>
                                                </p>
                                                <p className="txt_help">ASAP</p>
                                            </SongList9>
                                            <SongList9 txt_class="txt comp" name="Album.name" artist="Artist" genre="Genre" lang="English"
                                                isrc="DE-AA1-16-60101" code="PL6269">
                                                <p className="txt txt_unrel">
                                                    <span className="sball"></span>
                                                    <span>Unrelease</span>
                                                </p>
                                                <p className="txt_help">ASAP</p>
                                            </SongList9>

                                            <SongList9 txt_class="txt comp" name="Album.name" artist="Artist" genre="Genre" lang="English"
                                                isrc="DE-AA1-16-60101" code="PL6269">
                                                <p className="txt txt_rel">
                                                    <span className="sball"></span>
                                                    <span>Release</span>
                                                </p>
                                                <p className="txt_help">13 May 2022</p>
                                            </SongList9>
                                            <SongList9 txt_class="txt comp" name="Album.name" artist="Artist" genre="Genre" lang="English"
                                                isrc="DE-AA1-16-60101" code="PL6269">
                                                <p className="txt txt_rel">
                                                    <span className="sball"></span>
                                                    <span>Release</span>
                                                </p>
                                                <p className="txt_help">13 May 2022</p>
                                            </SongList9>
                                        </article>
                                    </div>
                                </article>

                            </section>
                        </article>

                    </main>

                    <PopGenres open={genPop} close={closeGenpop} />

                </div>
            </div>

            <Footer />

        </div >
    )
}
