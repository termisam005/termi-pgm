import { useState } from "react";


export default function SongList10(props) {

    const [songState, setSongState] = useState(false);
    const hoverSong = () => {
        setSongState(true);
    }
    const outSong = () => {
        setSongState(false);
    }

    const goDetail = () => {
        window.location.href = "/LabelCopyDetail"
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
                    <dd onClick={goDetail}>
                        <div className="mess_who">
                            <span className="list_who">
                                SomeTimes (Sorry)
                            </span>
                        </div>
                        <div className="tip_line">
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>EP</span>
                            </p>
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>5 song</span>
                            </p>
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>30:50</span>
                            </p>
                        </div>
                    </dd>
                </dl>
            </div>
            <div className="list_space left status w-15">
                {props.children}
            </div>
            <div className="list_space w-19">
                <p className={props.txt_class}>
                    {props.label}
                </p>
                <p className="txt_help">
                    {props.artist}
                </p>
            </div>
            <div className="list_space w-16">
                <p className="txt">
                    {props.genre}
                </p>
                <p className="txt_help">
                    {props.lang}
                </p>
            </div>
            <div className="list_space w-20">
                <p className="txt">
                    {props.upc}
                </p>
                <p className="txt_help">
                    {props.purpose}
                </p>
            </div>
        </section>
    );
}
