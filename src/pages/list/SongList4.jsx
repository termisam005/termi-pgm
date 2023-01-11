import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWith from "../../components/common/ButtonWith";
import ProfComponent from "../../components/common/ProfComponent";


export default function SongList4(props) {

    const [songState, setSongState] = useState(false);
    const hoverSong = () => {
        setSongState(true);
    }
    const outSong = () => {
        setSongState(false);
    }

    return (
        <section onMouseOver={hoverSong} onMouseLeave={outSong} className="the_list">
            <div className="list_space w-31">
                <dl className="message_dl songlist_dl">
                    <dt>
                        <div className="nemo_prof40 nemo_hover">
                            <div className={songState ? "hidd_play on" : "hidd_play"}>
                                <div className="hidd_in">
                                    <p className="circ20">
                                        <img className="m-l-1" src="../resources/images/tri_blue7.png" alt="play" />
                                    </p>
                                </div>
                            </div>
                            <img src="../resources/images/nemo_prof_ex1.jpg" alt="photo" />
                        </div>
                    </dt>
                    <dd>
                        <div className="mess_who">
                            <span className="list_who">I Can Give You Heaven</span>
                        </div>
                        <div className="mess_tip">
                            <span className="word">Pop, Dance/Electronic</span>
                        </div>
                    </dd>
                </dl>
            </div>
            <div className="list_space left w-9">
                <p className="txt">
                    {props.time}
                </p>
            </div>
            <div className="list_space left w-11">
                <p className="txt min">
                    <span className="m-r-5 cor994">5</span>
                    <span>Pitched</span>
                </p>
            </div>
            <div className="list_space left w-33">
                <article className={songState ? "down_wrap on" : "down_wrap"}>
                    <div className="btn_zone">
                        <select className="selector mini w230">
                            <option value="">Select Pitched Result</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                </article>
                <article className={songState ? "multi_wrap hidd" : "multi_wrap"}>
                    <div className="multi_prof p-t-0 w-33">
                        <div className="dflx_ac">
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over cut" src="../resources/images/simb_sm40.png" />
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over cut" src="../resources/images/simb_tono40.png" />
                        </div>
                    </div>
                    <div className="multi_prof p-t-0 w-33">
                        <div className="dflx_ac">
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over hold" src="../resources/images/simb_tono40.png" />
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over hold" src="../resources/images/simb_sm40.png" />
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over hold" src="../resources/images/simb_tono40.png" />
                        </div>
                    </div>
                    <div className="multi_prof p-t-0 w-33">
                        <div className="dflx_ac">
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over pass" src="../resources/images/simb_sm40.png" />
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over pass" src="../resources/images/simb_tono40.png" />
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over pass" src="../resources/images/simb_sm40.png" />
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over pass" src="../resources/images/simb_sm40.png" />
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over pass" src="../resources/images/simb_tono40.png" />
                        </div>
                    </div>
                </article>
            </div>
            <div className="list_space w-16">
                <article className={songState ? "down_wrap on" : "down_wrap"}>
                    <div className="btn_zone">
                        <ButtonComponent class="btn_sm1 cor w110" txt="Confirm" />
                    </div>
                </article>
                <article className={songState ? "down_wrap" : "down_wrap on"}>
                    <div className="btn_zone">
                        <ButtonComponent class="btn_sm1 w110" txt="Confirmed" />
                    </div>
                </article>
            </div>
        </section>
    );
}
