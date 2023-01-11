import { useState } from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import ProfComponent from '../../components/common/ProfComponent';
import EtcCont from '../../components/common/EtcCont';
import MarkFavorite from '../../components/common/MarkFavorite';
import ReactTooltip from 'react-tooltip';

export default function ListCreator() {
    const [hiddState, setHiddState] = useState(false);
    const hoverRecompt = () => {
        setHiddState(true);
    }
    const outRecompt = () => {
        setHiddState(false);
    }

    return (
        <section onMouseLeave={outRecompt} className="creator">
            <div className="ctr_wrap">

                <article onMouseLeave={outRecompt} className={hiddState ? "hidd_recompt on" : "hidd_recompt"}>
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
                                    <h3 className="lst_title">Ekko Music Right</h3>
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

                <div className="ctr_hidd">
                    <div className="ctr_hidd_in">
                        <div className="p-t-75">
                            <div className="tip_line">
                                <p className="tip_word">
                                    <span className="jum op1"></span>
                                    <span className="op1">Singer</span>
                                </p>
                                <p className="tip_word">
                                    <span className="jum op1"></span>
                                    <span className="op1">Songwriter</span>
                                </p>
                                <p className="tip_word">
                                    <span className="jum op1"></span>
                                    <span className="op1">Dance</span>
                                </p>
                                <p className="tip_word">
                                    <span className="jum op1"></span>
                                    <span className="op1">Hip-Hop</span>
                                </p>
                            </div>
                            <div>
                                <p className="tip_word">
                                    <span className="op1">"BIO Description"</span>
                                </p>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <section className="ctr_top_ab">
                    <div className="ctr_info">
                        <MarkFavorite />
                        <div className="over">
                            <section onMouseOver={hoverRecompt} className="recomt_wrap">
                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                <span className="crown"></span>
                            </section>
                            <div className="ctr_name">
                                <h3 className="lst_title">Creator Name</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="ctr_info">
                    <div className="over p-t-85">
                        <p className="record">Ekko Music Rights</p>
                        <div className="tip_line">
                            <p className="tip_word">
                                <span className="jum op1"></span>
                                <span className="op1">Producer</span>
                            </p>
                            <p className="tip_word">
                                <span className="jum op1"></span>
                                <span className="op1">Topliner</span>
                            </p>
                            <p className="tip_word">
                                <span className="jum op1"></span>
                                <span className="op1">Artist</span>
                            </p>
                        </div>
                        <div className="mid_text">
                            <p className="midsp op07">
                                <span>Seoul, Republic of Korea</span>
                            </p>
                            <p className="midsp op07">
                                <span>English, Korean</span>
                            </p>
                        </div>
                    </div>
                    <div className="bottom">
                    </div>
                </div>
            </div>
            <div className="ctr_foot">
                <p className="line1"></p>
                <div className="foot_info">
                    <p className="status">Applied</p>
                </div>
                <div className="foot_right">
                    <p className="times">
                        <span className="m-r-2">3</span>
                        <span>minutes ago</span>
                    </p>
                    <EtcCont wrap_class="wrap_etc sm m-t-7" btn_class="btn_hor_etc">
                        <li>+ Connect</li>
                        <li>Confirm</li>
                    </EtcCont>
                </div>
            </div>
        </section >
    );
}
