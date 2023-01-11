import { useState } from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import ProfComponent from '../../components/common/ProfComponent';
import EtcCont from '../../components/common/EtcCont';
import MarkFavorite from '../../components/common/MarkFavorite';
import ReactTooltip from 'react-tooltip';

export default function ListSong1() {
    const [hiddState, setHiddState] = useState(false);
    const hoverRecompt = () => {
        setHiddState(true);
    }
    const outRecompt = () => {
        setHiddState(false);
    }

    const goDetail = () => {
        window.location.href = "/SongLyrics"
    };

    return (
        <article onMouseLeave={outRecompt} className="creator">
            <div className="ctr_wrap">

                <article onMouseLeave={outRecompt} className={hiddState ? "hidd_recompt on song" : "hidd_recompt song"}>
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

                <div className="vl_hidd dark">
                    <div className="ctr_hidd_in">
                        <MarkFavorite />
                        <div className="over">
                            <dl className="message_dl message_dl32">
                                <dt onMouseOver={hoverRecompt}>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                        line_class="line_over" src="../resources/images/simb_sm40.png" />
                                </dt>
                                <dd className="conn_dd">
                                    <div className="mess_who mess_fav">
                                        <span className="who">SM Entertainment</span>

                                    </div>
                                    <div className="tip_line">
                                        <p className="tip_word tip_sm op1">
                                            <span>Seoul, Republic of Korea</span>
                                        </p>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div onClick={goDetail} className="bottom">
                            <div className="ctr_name">
                                <h4 className="sglst_title">
                                    Sail to the Terminal Carefree
                                    (Version.name)
                                </h4>
                            </div>
                            <div className="ctr_text">
                                <p className="record">Collaboration / Cowrite</p>
                                <p className="record">Ekko Music Right</p>
                                <p className="record">Oslo, Norway</p>
                            </div>
                            <div className="multi_prof p-t-0">
                                <div className="dflx_ac">
                                    <div className="dflx_ac">
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                    </div>
                                    <p className="co_writers">
                                        <span className="cor994">5</span>
                                        <span className="m-l-5">co-writers here</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ctr_info">
                    <span className="bord_tip cor994">Pitched</span>
                    <div className="ctr_name ctr_call">
                        <h4 className="down_title">
                            Sail to the Terminal Carefree
                            (Version.name)
                        </h4>
                    </div>
                    <div className="prj_dark"></div>
                    <ImgComponent class="prj_img" src="../resources/images/project_ex1.jpg" />
                </div>
            </div>
            <div className="ctr_foot">
                <p className="line1"></p>
                <div className="foot_info">
                    <p className="status">Available</p>
                </div>
                <div className="foot_right">
                    <p className="appcant wh">
                        <span className="m-r-2">26</span>
                        <span>Pitched</span>
                    </p>
                    <EtcCont wrap_class="wrap_etc sm m-t-7" btn_class="btn_hor_etc">
                        <li>Bookmark</li>
                        <li>View</li>
                        <li>Share URL</li>
                        <li>Edit info</li>
                    </EtcCont>
                </div>
            </div>
        </article>
    );
}
