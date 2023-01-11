import { useState } from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import ProfComponent from '../../components/common/ProfComponent';
import EtcCont from '../../components/common/EtcCont';
import MarkFavorite from '../../components/common/MarkFavorite';
import ReactTooltip from 'react-tooltip';

export default function ListProducer() {
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
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
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
                                    <span>Oslo, Norway</span>
                                    <div className="mid_text">
                                        <p className="midsp">
                                            <span>http://www.ekkomusicrights.com/</span>
                                        </p>
                                        <p className="midsp">
                                            <span>contact@tono.no</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ctr_foot">
                        <p className="line2"></p>
                        <div className="foot_info">
                            <span className="circ_company">RL</span>
                            <span className="circ_company">MP</span>
                            <span className="circ_company">SC</span>
                        </div>
                    </div>
                </article>

                <div className="ctr_hidd">
                    <div className="ctr_hidd_in">
                        <div></div>
                        <div>
                            <p className="ctr_hidd_txt">
                                Distribution
                            </p>
                            <p className="ctr_hidd_txt cor994">12.5% ~ 25%</p>
                        </div>
                    </div>
                </div>
                <section className="ctr_top_ab">
                    <div className="ctr_info">
                        <MarkFavorite />
                        <div className="over">
                            <section onMouseOver={hoverRecompt} className="recomt_wrap">
                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                    line_class="line_over" src="../resources/images/simb_sm40.png" />
                                <span className="crown"></span>
                            </section>
                            <div className="ctr_name">
                                <h3 className="lst_title">Need Music producer</h3>
                                <span className="lock12 vl"></span>
                            </div>
                            <div className="ctr_text">
                                <span>
                                    Need Musician/Music Producer
                                    to create backing tracks for my
                                    original songs and record/mix
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="ctr_info">
                    <div className="over">
                    </div>
                    <div className="bottom">
                        <p className="record">Collaboration / Cowrite</p>
                        <p className="record">Ekko Music Right</p>
                        <p className="record">Oslo, Norway</p>
                    </div>
                </div>
            </div>
            <div className="ctr_foot">
                <p className="line1"></p>
                <div className="foot_info">
                    <p className="status">Applied</p>
                </div>
                <div className="foot_right">
                    <p className="appcant">
                        <span className="m-r-2">26</span>
                        <span>Applicants</span>
                    </p>
                    <EtcCont wrap_class="wrap_etc sm m-t-7" btn_class="btn_hor_etc">
                        <li>Bookmark</li>
                        <li>View</li>
                        <li>Share URL</li>
                        <li>Apply</li>
                    </EtcCont>
                </div>
            </div>
        </section>
    );
}
