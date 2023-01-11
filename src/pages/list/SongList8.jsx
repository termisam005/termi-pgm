import { useState } from "react";
import ButtonWith from "../../components/common/ButtonWith";


export default function SongList8(props) {

    const [songState, setSongState] = useState(false);
    const hoverSong = () => {
        setSongState(true);
    }
    const outSong = () => {
        setSongState(false);
    }

    return (
        <section onMouseOver={hoverSong} onMouseLeave={outSong} className="the_list p-r-0">
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
                    <dd>
                        <div className="mess_who">
                            <span className="list_who mid">
                                씩 (SSKIC) SSICK
                            </span>
                        </div>
                        <div className="mess_tip">
                            <span className="word">Pop, Dance/Electronic</span>
                        </div>
                        <div className="mess_tip">
                            <span className="word">Adaptation version</span>
                        </div>
                    </dd>
                </dl>
            </div>
            <div className="list_space left w-15">
                <p className="txt">
                    {props.time}
                </p>
            </div>
            <div className="list_space status w-20">
                {props.children}
            </div>
            <div className="list_space w-15">
                <p className="txt">
                    {props.artist}
                </p>
            </div>
            <div className="list_space w-17">
                <ButtonWith class="btn_sm1 with f-s-13" spant="Album" imgclass="m-r-5" src="../resources/images/add_wh20.png" />
            </div>
        </section>
    );
}
