import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import Footer from "../../components/layout/Footer";
import BordComp from "../../components/common/BordComp";
import ButtonWith from "../../components/common/ButtonWith";
import PopGenres from "../../components/common/PopGenres";
import RangeSliderView from "../../components/common/RangeSliderView";
import SongList2 from "../list/SongList2";
import ListWriter from "../list/ListWriter";


export default function SongPitchTest1() {

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
                                        <p className="art on">
                                            <a href="/SongPitchSong">Song</a>
                                        </p>
                                        <p className="art">
                                            <a href="/SongPitchResult">Pitched Result</a>
                                        </p>
                                        <p className="art">
                                            <a href="/SongPitchWriter">Co-Writer</a>
                                        </p>
                                    </div>
                                </article>

                                <article className="the_feed">
                                    <div className="feed_conts">
                                        <div className="inner_contact_line">
                                            <div className="tab_line">
                                                <p className="go on">All</p>
                                                <p className="go">Pitched</p>
                                                <p className="go">Pass</p>
                                                <p className="go">Hold</p>
                                                <p className="go">Cut</p>
                                            </div>
                                        </div>
                                        <article className="list_zone list_xauto">
                                            <table className="table table_skill table_auto m-b-20">
                                                <tbody>
                                                    <tr>
                                                        <td className="w350">
                                                            Studio
                                                        </td>
                                                        <td className="w70">

                                                        </td>
                                                        <td className="w80">

                                                        </td>
                                                        <td className="w100">

                                                        </td>
                                                        <td className="w100">

                                                        </td>
                                                        <td className="w100">

                                                        </td>
                                                        <td className="w140">
                                                            <ListWriter />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
