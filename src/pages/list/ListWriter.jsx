import { useState } from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import ProfComponent from '../../components/common/ProfComponent';
import MarkFavorite from '../../components/common/MarkFavorite';
import ReactTooltip from 'react-tooltip';

export default function ListWriter() {

    return (
        <div className="hover_prof">
            <article className="hidd_recompt song">
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
            <ProfComponent wrap_class="prof_wrap" comming_class="comming ing" prof_class="prof in c50"
                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
        </div>
    );
}
