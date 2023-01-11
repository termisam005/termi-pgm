import { useState } from "react";
import ButtonWith from "../../components/common/ButtonWith";
import ProfComponent from "../../components/common/ProfComponent";
import PopAddPitch from "../../components/common/PopAddPitch";


export default function SongList6(props) {

    const [songState, setSongState] = useState(false);
    const hoverSong = () => {
        setSongState(true);
    }
    const outSong = () => {
        setSongState(false);
    }

    return (
        <section onMouseOver={hoverSong} onMouseLeave={outSong} className="the_list p-r-0">
            <div className="list_space w-30">
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
                            <span className="list_who mid">씩 (SSKIC) SSICK</span>
                        </div>
                        <div className="mess_tip">
                            <span className="word">Genre</span>
                        </div>
                        <div className="mess_tip">
                            <span className="word">Adaptation version</span>
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
                <article className="down_wrap">
                    <p className={props.txt_class}>
                        {props.title}
                    </p>
                </article>
            </div>
            <div className="list_space w-13">
                <p className="txt">
                    {props.artist}
                </p>
            </div>
            <div className="list_space w-19">
                <ButtonWith class="btn_sm1 with" spant="LabelCopy" imgclass="sv2020" src="../resources/images/sv_note_pen.svg" />
            </div>
        </section>
    );
}
