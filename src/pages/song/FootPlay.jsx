import { useState } from "react";
import FootSongLine from "./FootSongLine";


export default function FootPlay() {

    const [goplay, setGoplay] = useState(false);
    const onPlay = () => {
        setGoplay(true);
    };
    const onStop = () => {
        setGoplay(false);
    };

    const [goloof, setGoloof] = useState(false);
    const loofGo = () => {
        setGoloof(true);
    };
    const loofStop = () => {
        setGoloof(false);
    };

    const [volumer, setVolumer] = useState(false);
    const clickVol = () => {
        setVolumer(!volumer);
    };


    return (
        <section className="foot_play">
            <div className="fplay_inner">
                <FootSongLine />

                <article className="fplay_left">
                    <dl className="fsong_dl">
                        <dt>
                            <div className="prof_wrap">
                                <p className="prof in c50">
                                    <img src="../resources/images/alcove_60.png" alt="cover" />
                                </p>
                            </div>
                        </dt>
                        <dd>
                            <h3 className="fsong_title">Serendipity (Full Length Edition)</h3>
                            <p className="fsong_who">BTS</p>
                        </dd>
                    </dl>
                </article>

                <article className="play_set_cent w180">
                    <button className="btn_c32">
                        <img src="../resources/images/sv_playprev_cor.svg" alt="image" />
                    </button>
                    <button onClick={onPlay} className={goplay ? "btn_c44 cor hidd" : "btn_c44 cor"}>
                        <span className="btcor_inner p-l-5">
                            <img src="../resources/images/play_wh44.png" alt="image" />
                        </span>
                    </button>
                    <button onClick={onStop} className="btn_c44 cor" className={goplay ? "btn_c44 cor" : "btn_c44 cor hidd"}>
                        <span className="btcor_inner">
                            <img src="../resources/images/stop_wh44.png" alt="image" />
                        </span>
                    </button>
                    <button onClick={loofGo} className={goloof ? "btn_c32 hidd" : "btn_c32"}>
                        <img className="m-t-2" src="../resources/images/loof_cor.png" alt="image" />
                    </button>
                    <button onClick={loofStop} className={goloof ? "btn_c32" : "btn_c32 hidd"}>
                        <img className="m-t-2" src="../resources/images/loof_off_cor.png" alt="image" />
                    </button>
                </article>

                <article className="fplay_right">
                    <div className="fsong_time">
                        <span>01:40</span>
                        <span className="op06">03:50</span>
                    </div>
                    <div className="fsong_media">
                        <div className={volumer ? "fsong_speaker on" : "fsong_speaker"}>
                            <section className="volume_cont">
                                <div className="dflx_ac_jbet h-100">
                                    <p className="volm20">
                                        <span className="sp_vol minus">-</span>
                                    </p>
                                    <div className="volm60">
                                        <p className="volm_line">
                                            <span className="much"></span>
                                        </p>
                                    </div>
                                    <p className="volm20">
                                        <span className="sp_vol">+</span>
                                    </p>
                                </div>
                            </section>
                            <span onClick={clickVol} className={volumer ? "speaker32 off" : "speaker32"}></span>
                        </div>
                        <p className="go_delete"></p>
                    </div>
                </article>

            </div>
        </section>
    );
}