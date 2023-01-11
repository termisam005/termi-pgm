import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import Footer from "../../components/layout/Footer";
import BordComp from "../../components/common/BordComp";
import ButtonWith from "../../components/common/ButtonWith";
import PopGenres from "../../components/common/PopGenres";
import RangeSliderView from "../../components/common/RangeSliderView";
import SongList4 from "../list/SongList4";


export default function SongPitchResult() {

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
                                    <select className="selector wh mini m-b-15">
                                        <option value="">Version Type</option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <div className="m-t-5 m-b-20">
                                        <article className="hd_search">
                                            <button type="button" className="btn_srch"></button>
                                            <input type="text" className="hd_input" placeholder="Search Song Title" />
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
                                        <div className="add_line">
                                            <p>Mood</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div className="add_line">
                                            <p>Theme</p>
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
                                <p className="line1"></p>
                                <div className="aside_last">
                                    <h1>BPM</h1>
                                    <div>
                                        <section className="range_wrap">
                                            <div className="range_sett">
                                                <div className="the_ranger">
                                                    <RangeSliderView />
                                                </div>
                                            </div>
                                        </section>
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
                                        <p className="art on">
                                            <a href="/SongPitchResult">Pitched Result</a>
                                        </p>
                                        <p className="art">
                                            <a href="/SongPitchWriter">Co-Writer</a>
                                        </p>
                                    </div>
                                </article>

                                <article className="the_feed">
                                    <div className="mini_top p-t-20">
                                        <h1 className="top_title">
                                            Pitched Result
                                        </h1>
                                    </div>
                                    <p className="line1"></p>
                                    <div className="feed_conts">
                                        <article className="contact_line dflx_ae">
                                            <div className="contact_sel">
                                                <div className="tab_line">
                                                    <p className="go on">All</p>
                                                    <p className="go">Pass</p>
                                                    <p className="go">Hold</p>
                                                    <p className="go">Cut</p>
                                                </div>
                                                <select className="selector wh mini w220">
                                                    <option value="">Recently Added</option>
                                                    <option value="">A to Z</option>
                                                    <option value="">Z to A</option>
                                                </select>
                                            </div>

                                            <div className="signal_line w430">
                                                <div className="list_space left w-21">
                                                    <p className="txt txt_cut">
                                                        <span className="sball"></span>
                                                        <span>Cut</span>
                                                    </p>
                                                </div>
                                                <div className="list_space left w-21">
                                                    <p className="txt txt_hold">
                                                        <span className="sball"></span>
                                                        <span>Hold</span>
                                                    </p>
                                                </div>
                                                <div className="list_space left w-21">
                                                    <p className="txt txt_pass">
                                                        <span className="sball"></span>
                                                        <span>Pass</span>
                                                    </p>
                                                </div>
                                                <div className="list_space w-37">
                                                    <p className="txt">
                                                        <span className="cor913">Pass Clear all</span>
                                                    </p>
                                                </div>
                                            </div>

                                        </article>
                                        <article className="list_zone">
                                            <SongList4 time="03:50" date="12 Aug 2022" />
                                            <SongList4 time="03:50" date="12 Aug 2022" />
                                            <SongList4 time="03:50" date="12 Aug 2022" />
                                            <SongList4 time="03:50" date="12 Aug 2022" />
                                            <SongList4 time="03:50" date="12 Aug 2022" />
                                            <SongList4 time="03:50" date="12 Aug 2022" />
                                            <SongList4 time="03:50" date="12 Aug 2022" />
                                            <SongList4 time="03:50" date="12 Aug 2022" />
                                            <SongList4 time="03:50" date="12 Aug 2022" />
                                            <SongList4 time="03:50" date="12 Aug 2022" />
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
