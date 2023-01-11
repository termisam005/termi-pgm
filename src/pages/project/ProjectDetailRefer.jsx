import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ProfComponent from "../../components/common/ProfComponent";
import Footer from "../../components/layout/Footer";
import DropComponent from "../../components/common/DropComponent";
import ImgComponent from "../../components/common/ImgComponent";
import EtcCont from "../../components/common/EtcCont";
import PopAddrefer from "../../components/common/PopAddrefer";


export default function ProjectDetailRefer() {

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

    //Pop Add Reference
    const [referPop, setReferPop] = useState(false);
    const addRefer = () => {
        setReferPop(true);
    };
    const closeRefer = () => {
        setReferPop(false);
    }


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
                                        <p onClick={goSongs} className="tab">Songs</p>
                                        <p onClick={goRefer} className="tab on">Reference</p>
                                        <p onClick={goWriter} className="tab">Co-Writers</p>
                                    </div>
                                </article>

                                <article className="contain plus_contain">
                                    <section className="mini_top">
                                        <h1>Reference</h1>
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
                                                        Upload File
                                                    </p>
                                                    <p className="art">
                                                        Add Youtube Video URL
                                                    </p>
                                                    <p className="art">
                                                        Add Vimeo Video URL
                                                    </p>
                                                    <p className="art">
                                                        Add Share URL
                                                    </p>
                                                </div>
                                                <select className="selector wh mini w220">
                                                    <option value="">Recently Added</option>
                                                    <option value="">A to Z</option>
                                                    <option value="">Z to A</option>
                                                </select>
                                            </div>
                                        </article>

                                        <article className="list_body">
                                            <article className="file_container container-94">
                                                <section className="bordnemo_188">
                                                    <div className="bordnew">
                                                        <p onClick={addRefer} className="circle_add">
                                                            <img src="../resources/images/plus_wh17.png" alt="plus" />
                                                        </p>
                                                    </div>
                                                </section>
                                                <section className="bordnemo_188">
                                                    <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                                        <li>Open</li>
                                                    </EtcCont>
                                                    <div className="bordnemo_movie">
                                                        <div className="box">
                                                            <ImgComponent class="img_cover" src="../resources/images/cover_ex_butter.jpg" />
                                                        </div>
                                                    </div>
                                                </section>
                                                <section className="bordnemo_188">
                                                    <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                                        <li>Open</li>
                                                    </EtcCont>
                                                    <div className="bordnemo_movie">
                                                        <div className="box">
                                                            <ImgComponent class="img_cover" src="../resources/images/project_ex1.jpg" />
                                                        </div>
                                                    </div>
                                                </section>
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
                                                                <h3>File name.jpg</h3>
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
                                                <section className="bordnemo_188">
                                                    <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                                        <li>Open</li>
                                                    </EtcCont>
                                                    <div className="bordnemo_movie">
                                                        <div className="box">
                                                            <ImgComponent class="img_cover" src="../resources/images/cover_ex_butter.jpg" />
                                                        </div>
                                                    </div>
                                                </section>
                                            </article>

                                        </article>
                                    </section>
                                </article>

                            </section>
                        </article>

                    </main>

                </div>

                <PopAddrefer open={referPop} close={closeRefer} />
            </div>

            <Footer />

        </div >
    )
}
