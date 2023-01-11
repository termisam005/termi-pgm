import React from "react";
import ProfComponent from "../common/ProfComponent";
import ImgComponent from "../common/ImgComponent";

export default function Grmessage() {
    return (
        <div className="message_wrap">
            <article className="message_top">
                <div className="mess_top_line">
                    <h1 className="top_title">Message</h1>
                    <p className="pen">
                        <img src="../resources/images/sv_note_pen.svg" alt="memo" />
                    </p>
                </div>
            </article>
            <p className="line2"></p>
            <article className="message_body">
                <div className="message_cont">
                    <h3>Friend request</h3>
                    <section className="message_team">
                        <div className="message_box">
                            <p className="line1"></p>
                            <dl className="message_dl">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof norm c40"
                                        imgclass="m-t-12" src="../resources/images/prof_none_40.png" />
                                </dt>
                                <dd>
                                    <div className="mess_who">
                                        <span className="who">Christoph Willbaldard</span>
                                        <span className="time">05:20</span>
                                    </div>
                                    <div className="mess_tip">
                                        <span className="word">requested a friend.</span>
                                        <span className="bagde">1</span>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </section>
                </div>
                <div className="message_cont">
                    <h3>Message</h3>
                    <section className="message_team">
                        <div className="message_box">
                            <p className="line1"></p>
                            <dl className="message_dl">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                        line_class="line_over" src="../resources/images/prof_ex1.png" />
                                </dt>
                                <dd>
                                    <div className="mess_who">
                                        <span className="who">Issac Alberiz</span>
                                        <span className="time">Now</span>
                                    </div>
                                    <div className="mess_tip">
                                        <span className="word">Even where the road to artist</span>
                                        <span className="bagde">22</span>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="message_box">
                            <p className="line1"></p>
                            <dl className="message_dl">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                        line_class="line_over" src="../resources/images/prof_ex1.png" />
                                </dt>
                                <dd>
                                    <div className="mess_who">
                                        <span className="who">Issac Alberiz</span>
                                        <span className="time">Now</span>
                                    </div>
                                    <div className="mess_tip">
                                        <span className="word">Even where the road to artist</span>
                                        <span className="bagde">22</span>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </section>
                </div>
                <div className="message_cont">
                    <h3>recommended friend</h3>
                    <section className="message_team">
                        <div className="message_box">
                            <p className="line1"></p>
                            <dl className="message_dl">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm c40"
                                        line_class="line_over" src="../resources/images/prof_ex2.png" />
                                </dt>
                                <dd>
                                    <div className="mess_who">
                                        <span className="who">Jay.Park</span>
                                        <span className="time">Now</span>
                                    </div>
                                    <div className="mess_tip bord">
                                        <span className="bord_tip">Producer</span>
                                        <span className="bord_tip">Top liner</span>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    );
}