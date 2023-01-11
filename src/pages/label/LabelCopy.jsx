import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import Footer from "../../components/layout/Footer";
import ButtonWith from "../../components/common/ButtonWith";
import PopGenres from "../../components/common/PopGenres";
import SongList6 from "../list/SongList6";


export default function LabelCopy() {

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
                                        <p className="art on">
                                            <a href="/LabelCopy">Song</a>
                                        </p>
                                        <p className="art">
                                            <a href="/LabelAlbum">Album</a>
                                        </p>
                                        <p className="art">
                                            <a href="/LabelCopyCopy">Label Copy</a>
                                        </p>
                                    </div>
                                </article>

                                <article className="the_feed">
                                    <div className="mini_top p-t-20">
                                        <h1 className="top_title">
                                            Song List
                                        </h1>
                                    </div>
                                    <p className="line1"></p>
                                    <div className="feed_conts">
                                        <article className="contact_line">
                                            <div className="contact_sel">
                                                <div className="tab_line">
                                                    <p className="go on">All</p>
                                                    <p className="go">Registering</p>
                                                    <p className="go">Approved</p>
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
                                                <div className="top_space w-30">
                                                    <span className="word">Product</span>
                                                </div>
                                                <div className="top_space w-10">
                                                    <span className="word">Duration</span>
                                                </div>
                                                <div className="top_space w-13">
                                                    <span className="word">Status</span>
                                                </div>
                                                <div className="top_space w-15">
                                                    <span className="word">Album</span>
                                                </div>
                                                <div className="top_space w-13">
                                                    <span className="word">Artist</span>
                                                </div>
                                                <div className="top_space w-19">
                                                    <span className="word">Additional</span>
                                                </div>
                                            </div>
                                            <SongList6 txt_class="txt" time="03:50" title="Album.title" artist="Stray Kids">
                                                <p className="txt txt_approve">
                                                    <span className="sball"></span>
                                                    <span>Approved</span>
                                                </p>
                                            </SongList6>
                                            <SongList6 txt_class="txt" time="03:50" title="Album.title" artist="Stray Kids">
                                                <p className="txt txt_approve">
                                                    <span className="sball"></span>
                                                    <span>Approved</span>
                                                </p>
                                            </SongList6>
                                            <SongList6 txt_class="txt" time="03:50" title="Album.title" artist="Stray Kids">
                                                <p className="txt txt_approve">
                                                    <span className="sball"></span>
                                                    <span>Approved</span>
                                                </p>
                                            </SongList6>
                                            <SongList6 txt_class="txt" time="03:50" title="Album.title" artist="Stray Kids">
                                                <p className="txt txt_approve">
                                                    <span className="sball"></span>
                                                    <span>Approved</span>
                                                </p>
                                            </SongList6>
                                            <SongList6 txt_class="txt" time="03:50" title="Album.title" artist="Stray Kids">
                                                <p className="txt txt_approve">
                                                    <span className="sball"></span>
                                                    <span>Approved</span>
                                                </p>
                                            </SongList6>
                                            <SongList6 txt_class="txt" time="03:50" title="Album.title" artist="Stray Kids">
                                                <p className="txt txt_register">
                                                    <span className="sball"></span>
                                                    <span>Registering</span>
                                                </p>
                                            </SongList6>
                                            <SongList6 txt_class="txt" time="03:50" title="Album.title" artist="Stray Kids">
                                                <p className="txt txt_register">
                                                    <span className="sball"></span>
                                                    <span>Registering</span>
                                                </p>
                                            </SongList6>
                                            <SongList6 txt_class="txt" time="03:50" title="Album.title" artist="Stray Kids">
                                                <p className="txt txt_register">
                                                    <span className="sball"></span>
                                                    <span>Registering</span>
                                                </p>
                                            </SongList6>
                                            <SongList6 txt_class="txt" time="03:50" title="Album.title" artist="Stray Kids">
                                                <p className="txt txt_cut">
                                                    <span className="sball"></span>
                                                    <span>Cut</span>
                                                </p>
                                            </SongList6>
                                            <SongList6 txt_class="txt" time="03:50" title="Album.title" artist="Stray Kids">
                                                <p className="txt txt_cut">
                                                    <span className="sball"></span>
                                                    <span>Cut</span>
                                                </p>
                                            </SongList6>
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
