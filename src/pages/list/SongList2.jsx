import { useState } from "react";
import ButtonWith from "../../components/common/ButtonWith";
import ProfComponent from "../../components/common/ProfComponent";
import PopAddPitch from "../../components/common/PopAddPitch";


export default function SongList2(props) {

    const [songState, setSongState] = useState(false);
    const hoverSong = () => {
        setSongState(true);
    }
    const outSong = () => {
        setSongState(false);
    }

    //PopAddPitch
    const [addPitPop, setAddPitPop] = useState(false);
    const openPit = () => {
        setAddPitPop(true);
    }
    const offPit = () => {
        setAddPitPop(false);
    }

    const goDetail = () => {
        window.location.href = "/DetailSong"
    }

    return (
        <section onMouseOver={hoverSong} onMouseLeave={outSong} className="the_list">
            <div className="list_space w-33">
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
                    <dd onClick={goDetail}>
                        <div className="mess_who">
                            <span className="list_who">I Can Give You Heaven</span>
                        </div>
                        <div className="mess_tip">
                            <span className="word">Pop, Dance/Electronic</span>
                        </div>
                    </dd>
                </dl>
            </div>
            <div className="list_space left w-10">
                <p className="txt">
                    {props.time}
                </p>
            </div>
            <div className="list_space left status w-13">
                {props.children}
            </div>
            <div className="list_space w-15">
                <article className={songState ? "down_wrap on" : "down_wrap"}>
                    <div className="btn_zone">
                        <ButtonWith class="btn_sm1 with" spant="MP3" imgclass="sv2020" src="../resources/images/sv_down_wh.svg" />
                    </div>
                    <p className={props.txt_class}>
                        {props.date}
                    </p>
                </article>
            </div>
            <div className="list_space w-13">
                <div className="multi_prof p-t-0">
                    <div className="dflx_ac">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                            line_class="line_over" src="../resources/images/prof_ex2.png" />
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                            line_class="line_over" src="../resources/images/prof_ex2.png" />
                    </div>
                </div>
            </div>
            <div className="list_space w-16">
                <p onClick={openPit} className={songState ? "txt min" : "txt min hidd"}>
                    <span className="addvl m-r-5"></span>
                    <span className="cor913">Add to list</span>
                </p>
                <p className={songState ? "txt min hidd" : "txt min"}>
                    <span className="m-r-5 cor994">5</span>
                    <span>co-writers here</span>
                </p>
            </div>
            <PopAddPitch open={addPitPop} close={offPit} />
        </section>
    );
}
