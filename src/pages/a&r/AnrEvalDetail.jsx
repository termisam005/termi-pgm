import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import FootPlay from "../song/FootPlay"
import ProfComponent from "../../components/common/ProfComponent";
import ImgComponent from "../../components/common/ImgComponent";
import MarkFavorite from "../../components/common/MarkFavorite";
import ReactTooltip from "react-tooltip";
import SongInfoEval from "../song/SongInfoEval";
import PopCredits from "../../components/common/PopCredits";


export default function AnrEvalDetail() {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [crdPop, setCrdPop] = useState(false);
    const openCrdPop = () => {
        setCrdPop(true);
    };
    const closeCrdPop = () => {
        setCrdPop(false);
    }


    return (
        <div className="wrap dark">

            <div className="container p-t-20">

                <main className="detail_main">

                    <section className="dark_history">
                        <div className="dflx_ac_jbet">
                            <div></div>
                            <h3 onClick={goBack}>
                                <span className="go_back32">
                                    <img src="../resources/images/arr_back_wh32.png" alt="link back" />
                                </span>
                            </h3>
                        </div>
                    </section>

                    <article className="contain">
                        <section className="contain_top">
                            <div className="cttop_left">
                                <h1 className="top_title">Evaluation</h1>
                            </div>
                            <div></div>
                        </section>
                        <p className="line1"></p>
                        <section className="wrap_title">
                            <MarkFavorite />
                            <dl className="title_dl">
                                <dt>
                                    <div className="nemo_prof60">
                                        <ImgComponent src="../resources/images/nemo_prof_ex1.jpg" />
                                    </div>
                                </dt>
                                <dd>
                                    <div className="title_tlt">
                                        <h1>Wish</h1>
                                        <span className="edit">Edit</span>
                                    </div>
                                    <div className="title_mini">
                                        <p className="cor994">
                                            Demo Version
                                        </p>
                                    </div>
                                </dd>
                            </dl>
                        </section>
                        <p className="line1"></p>
                        <section className="co_wrap">
                            <div className="co_cont bordnone">
                                <div className="co_title">
                                    <h3>A&R Team</h3>
                                </div>
                                <div className="co_line">
                                    <div className="hover_prof">
                                        <ProfComponent wrap_class="prof_wrap" comming_class="comming ing" prof_class="prof in c50"
                                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                        <article className="hidd_recompt">
                                            <div className="ctr_wrap">
                                                <div className="ctr_info">
                                                    <div className="over">
                                                        <div className="dflx_jbet w-100">
                                                            <section className="recomt_wrap">
                                                                <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof in c50"
                                                                    line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                                <span className="crown"></span>
                                                            </section>
                                                            <div className="dpflx ctr_mark">
                                                                <p data-tip data-for="Chat" className="mark_talk m-t-1 m-r-15">
                                                                    <ImgComponent src="../resources/images/mark_talk.png" />
                                                                </p>
                                                                <ReactTooltip id="Chat" place="top" effect="solid">
                                                                    Chat
                                                                </ReactTooltip>
                                                                <MarkFavorite />
                                                            </div>
                                                        </div>
                                                        <div className="ctr_name">
                                                            <h3 className="lst_title">Jin Suk Choi</h3>
                                                            <span className="shield"></span>
                                                        </div>
                                                        <div className="ctr_text hauto">
                                                            <p className="record">
                                                                Seoul, Republic of Korea
                                                            </p>
                                                            <p className="record">
                                                                English, Korean
                                                            </p>
                                                            <div className="m-t-15 m-b-5">
                                                                <p className="f-s-12">
                                                                    "Multi-platinum selling producer😎✨"
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ctr_foot">
                                                <p className="line2"></p>
                                                <div className="foot_set">
                                                    <dl className="message_dl message_dl24">
                                                        <dt>
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                src="../resources/images/simb_tono40.png" />
                                                        </dt>
                                                        <dd className="conn_dd">
                                                            <div className="mess_who">
                                                                <span className="who12 cor913">Ekko Music Right</span>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                    <dl className="message_dl message_dl24">
                                                        <dt>
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                src="../resources/images/simb_sm40.png" />
                                                        </dt>
                                                        <dd className="conn_dd">
                                                            <div className="mess_who">
                                                                <span className="who12 cor913">Dsing Music</span>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="hover_prof">
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                            line_class="line_over" src="../resources/images/prof_ex2.png" />
                                        <article className="hidd_recompt">
                                            <div className="ctr_wrap">
                                                <div className="ctr_info">
                                                    <div className="over">
                                                        <div className="dflx_jbet w-100">
                                                            <section className="recomt_wrap">
                                                                <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof in c50"
                                                                    line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                                <span className="crown"></span>
                                                            </section>
                                                            <div className="dpflx ctr_mark">
                                                                <p data-tip data-for="Chat" className="mark_talk m-t-1 m-r-15">
                                                                    <ImgComponent src="../resources/images/mark_talk.png" />
                                                                </p>
                                                                <ReactTooltip id="Chat" place="top" effect="solid">
                                                                    Chat
                                                                </ReactTooltip>
                                                                <MarkFavorite />
                                                            </div>
                                                        </div>
                                                        <div className="ctr_name">
                                                            <h3 className="lst_title">Jin Suk Choi</h3>
                                                            <span className="shield"></span>
                                                        </div>
                                                        <div className="ctr_text hauto">
                                                            <p className="record">
                                                                Seoul, Republic of Korea
                                                            </p>
                                                            <p className="record">
                                                                English, Korean
                                                            </p>
                                                            <div className="m-t-15 m-b-5">
                                                                <p className="f-s-12">
                                                                    "Multi-platinum selling producer😎✨"
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ctr_foot">
                                                <p className="line2"></p>
                                                <div className="foot_set">
                                                    <dl className="message_dl message_dl24">
                                                        <dt>
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                src="../resources/images/simb_tono40.png" />
                                                        </dt>
                                                        <dd className="conn_dd">
                                                            <div className="mess_who">
                                                                <span className="who12 cor913">Ekko Music Right</span>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                    <dl className="message_dl message_dl24">
                                                        <dt>
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                src="../resources/images/simb_sm40.png" />
                                                        </dt>
                                                        <dd className="conn_dd">
                                                            <div className="mess_who">
                                                                <span className="who12 cor913">Dsing Music</span>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="hover_prof">
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        <article className="hidd_recompt">
                                            <div className="ctr_wrap">
                                                <div className="ctr_info">
                                                    <div className="over">
                                                        <div className="dflx_jbet w-100">
                                                            <section className="recomt_wrap">
                                                                <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof in c50"
                                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                                <span className="crown"></span>
                                                            </section>
                                                            <div className="dpflx ctr_mark">
                                                                <p data-tip data-for="Chat" className="mark_talk m-t-1 m-r-15">
                                                                    <ImgComponent src="../resources/images/mark_talk.png" />
                                                                </p>
                                                                <ReactTooltip id="Chat" place="top" effect="solid">
                                                                    Chat
                                                                </ReactTooltip>
                                                                <MarkFavorite />
                                                            </div>
                                                        </div>
                                                        <div className="ctr_name">
                                                            <h3 className="lst_title">Jin Suk Choi</h3>
                                                            <span className="shield"></span>
                                                        </div>
                                                        <div className="ctr_text hauto">
                                                            <p className="record">
                                                                Seoul, Republic of Korea
                                                            </p>
                                                            <p className="record">
                                                                English, Korean
                                                            </p>
                                                            <div className="m-t-15 m-b-5">
                                                                <p className="f-s-12">
                                                                    "Multi-platinum selling producer😎✨"
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ctr_foot">
                                                <p className="line2"></p>
                                                <div className="foot_set">
                                                    <dl className="message_dl message_dl24">
                                                        <dt>
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                src="../resources/images/simb_tono40.png" />
                                                        </dt>
                                                        <dd className="conn_dd">
                                                            <div className="mess_who">
                                                                <span className="who12 cor913">Ekko Music Right</span>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                    <dl className="message_dl message_dl24">
                                                        <dt>
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                                src="../resources/images/simb_sm40.png" />
                                                        </dt>
                                                        <dd className="conn_dd">
                                                            <div className="mess_who">
                                                                <span className="who12 cor913">Dsing Music</span>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="hover_prof">
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                    </div>
                                    <div onClick={openCrdPop} className="co_plus">
                                        <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                    </div>
                                </div>
                                <div className="co_period p-t-20">
                                    <span className="m-r-5">Evaluation period Definition :</span>
                                    <span className="cor994">13 Aug 2021 ~ 13 Aug 2021</span>
                                    <p className="tip_word spec">
                                        <span className="jum"></span>
                                        <span>Waiting</span>
                                    </p>
                                </div>
                            </div>
                        </section>
                        <p className="line1"></p>
                        <section className="contain_mid">
                            <div className="dflx_ac">
                                <div className="descr_profile">
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                        line_class="line_over" src="../resources/images/prof_ex1.png" />
                                    <p className="prof_name_mid">
                                        Are Bergerud
                                    </p>
                                </div>
                                <div className="desc_zone">
                                    <p className="bold">Project Owner Comment</p>
                                    <br />
                                    <p>We are very happy to welcome million selling songwriters, A&R’s and publishers from all over
                                        the world to participate in making Trondheim Song:Expo the biggest songwriting event in the world.
                                        Let’s all collaborate and bring our A-game to trigger maximum output and create future
                                        million selling #1 smash hits!</p>
                                </div>
                            </div>
                        </section>
                    </article>

                    <SongInfoEval />

                </main>

                <FootPlay />

                <PopCredits open={crdPop} close={closeCrdPop} popname="Search A&R" />
            </div>

        </div >
    )
}

