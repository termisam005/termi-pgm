import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ImgComponent from "../../components/common/ImgComponent";
import SongInfoCopy from "../song/SongInfoCopy";
import MarkFavorite from "../../components/common/MarkFavorite";


export default function CopySongDetail() {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [recruit, setRecruit] = useState(false);
    const toggleRec = () => {
        setRecruit(!recruit);
        let switRoom = document.querySelector('.swith_room');
        switRoom.classList.toggle('on');
    };


    return (
        <div className="wrap dark">

            <div className="container p-t-20">

                <main className="detail_main">

                    <article className="contain">
                        <section className="contain_top">
                            <MarkFavorite />
                            <p onClick={goBack} className="go_delete"></p>
                            <div className="cttop_left">
                                <h1 className="top_title">Song</h1>
                            </div>
                            <div></div>
                        </section>
                        <p className="line1"></p>
                        <section className="wrap_title">
                            <div className="avail_line">
                                <div onClick={toggleRec} className={recruit ? "recru_line on" : "recru_line"}>
                                    <div className="avail_cont">
                                        <img className="ic" src="../resources/images/thunder_off.png" />
                                        <img className="ic_on" src="../resources/images/thunder.png" />
                                        <span className="m-l-2 word">Available</span>
                                    </div>
                                    <div className="switch_zone">
                                        <div className="swith_room">
                                            <input className="switch-checkbox" type="checkbox" />
                                            <label className="switch-label">
                                                <span className="swt_sun"></span>
                                                <span className="swt_moon"></span>
                                                <span className="switch-button" />
                                            </label>
                                        </div>
                                        <span className="circ_feel"></span>
                                    </div>
                                </div>
                            </div>
                            <dl className="title_dl">
                                <dt>
                                    <div className="nemo_prof60">
                                        <ImgComponent src="../resources/images/nemo_prof_ex1.jpg" />
                                    </div>
                                </dt>
                                <dd>
                                    <div className="title_tlt">
                                        <h1>Adapted.Songtitle</h1>
                                        <span className="edit">Edit</span>
                                    </div>
                                    <div className="title_mini">
                                        <p className="cor994">
                                            Sub-Songtitle
                                        </p>
                                        <p className="cor994">
                                            Version.Type
                                        </p>
                                    </div>
                                </dd>
                            </dl>
                        </section>
                    </article>

                    <SongInfoCopy />

                </main>

            </div>

        </div >
    )
}

