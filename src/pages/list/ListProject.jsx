import { useState } from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import ProfComponent from '../../components/common/ProfComponent';
import EtcCont from '../../components/common/EtcCont';
import MarkFavorite from '../../components/common/MarkFavorite';
import ReactTooltip from 'react-tooltip';

export default function ListProject() {
    const [hiddState, setHiddState] = useState(false);
    const hoverRecompt = () => {
        setHiddState(true);
    }
    const outRecompt = () => {
        setHiddState(false);
    }

    const goDetail = () => {
        window.location.href = "/ProjectDetailHome"
    };

    return (
        <article onMouseLeave={outRecompt} className="creator">
            <div className="ctr_wrap">
                <div className="vl_hidd">
                    <div className="ctr_hidd_in">
                        <MarkFavorite />
                        <div className="over">
                            <dl className="message_dl message_dl32">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                        line_class="line_over" src="../resources/images/simb_tono40.png" />
                                </dt>
                                <dd className="conn_dd">
                                    <div className="mess_who mess_fav">
                                        <span className="who">Issac Alberiz</span>
                                    </div>
                                    <div className="tip_line">
                                        <p className="tip_word tip_sm">
                                            <span>Seoul, Republic of Korea </span>
                                        </p>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="bottom">
                            <div onClick={goDetail}>
                                <div className="ctr_name">
                                    <span className="lock12 vl"></span>
                                    <h3 className="lst_title">Back to the Roots</h3>
                                </div>
                                <div className="ctr_text">
                                    <p className="record">Collaboration / Cowrite</p>
                                    <p className="record">Ekko Music Right</p>
                                    <p className="record">Oslo, Norway</p>
                                </div>
                            </div>
                            <dl onMouseOver={hoverRecompt} className="message_dl message_dl24">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                        line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                </dt>
                                <dd className="conn_dd">
                                    <div className="mess_who">
                                        <span className="who12">Jin Suk Choi</span>
                                    </div>
                                </dd>

                                <article onMouseLeave={outRecompt} className={hiddState ? "hidd_recompt on" : "hidd_recompt"}>
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

                            </dl>
                        </div>
                    </div>
                </div>
                <div className="ctr_info">
                    <div className="ctr_name ctr_call">
                        <span className="lock12"></span>
                        <h3>Back to the Roots</h3>
                    </div>
                    <div className="prj_dark"></div>
                    <ImgComponent class="prj_img" src="../resources/images/project_ex1.jpg" />
                </div>
            </div>
            <div className="ctr_foot">
                <p className="line1"></p>
                <div className="foot_info">
                    <p className="status">Co-Writing</p>
                </div>
                <div className="foot_right">
                    <p className="appcant wh">
                        <span className="m-r-2">3</span>
                        <span>Days ago</span>
                    </p>
                    <EtcCont wrap_class="wrap_etc sm m-t-7" btn_class="btn_hor_etc">
                        <li>Bookmark</li>
                        <li>View</li>
                        <li>Share URL</li>
                        <li>Apply</li>
                    </EtcCont>
                </div>
            </div>
        </article>
    );
}
