import { useState } from "react";
import ButtonWith from "../../components/common/ButtonWith";


export default function SongList1(props) {

    const [songState, setSongState] = useState(false);
    const hoverSong = () => {
        setSongState(true);
    }
    const outSong = () => {
        setSongState(false);
    }

    return (
        <section onMouseOver={hoverSong} onMouseLeave={outSong} className="the_list">
            <div className="list_space w-45">
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
                        <div className="mess_tip">
                            <span className="word">(Instrumental)</span>
                        </div>
                    </dd>
                </dl>
            </div>
            <div className="list_space left w-15">
                <p className="txt">
                    {props.time}
                </p>
            </div>
            <div className="list_space left w-18">
                {props.children}
            </div>
            <div className="list_space w-22">
                <article className={songState ? "down_wrap on" : "down_wrap"}>
                    <div className="btn_zone">
                        <ButtonWith class="btn_sm1 with" spant="MP3" imgclass="sv2020" src="../resources/images/sv_down_wh.svg" />
                    </div>
                    <p className={props.txt_class}>
                        {props.date}
                    </p>
                </article>
            </div>
        </section>
    );
}

