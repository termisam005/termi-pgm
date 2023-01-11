import { useState } from "react";
import ButtonComponent from "../components/common/ButtonComponent";
import ImgComponent from "../components/common/ImgComponent";
import BordComp from "../components/common/BordComp";
import Loading from "../components/common/Loading";


export default function KitAutoPop() {

    return (
        <div className="wrap_grad">
            <div className="container">

                <section className="demo_title">
                    <h1>Auto Popup</h1>
                </section>

                <section className="dflx_jcent">
                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_conts p-20 h460">
                                    <article className="loading_space h400">
                                        <Loading />
                                        <p className="load_text">
                                            Analyzing File Information...
                                        </p>
                                    </article>
                                </div>
                                <div className="pop_footin dflx_ac_jcent">
                                    <ButtonComponent class="btn_sm1 w120 m-r-15" txt="Cancel" />
                                </div>
                            </div>
                        </section >
                    </div>

                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_conts p-20 h460">
                                    <article className="autop_top">
                                        <div className="autop_note">
                                            <img src="../resources/images/note30_whbox.png" alt="note" />
                                            <p className="file">Wish.mp3</p>
                                        </div>
                                    </article>
                                    <article className="autop_conts">
                                        <dl className="dl_autop">
                                            <dt>File information</dt>
                                            <dd>
                                                <ul className="ul_auto">
                                                    <li>
                                                        <span className="ball"></span>
                                                        <span className="word">Sound type: Stereo</span>
                                                    </li>
                                                    <li>
                                                        <span className="ball"></span>
                                                        <span className="word">Bit Depth: 16-bit</span>
                                                    </li>
                                                    <li>
                                                        <span className="ball"></span>
                                                        <span className="word">Sampling Rate: 44100Hz</span>
                                                    </li>
                                                    <li>
                                                        <span className="ball"></span>
                                                        <span className="word">Size: 14.5 MB</span>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </dl>
                                        <dl className="dl_autop">
                                            <dt>Song information</dt>
                                            <dd>
                                                <ul className="ul_auto">
                                                    <li>
                                                        <span className="ball"></span>
                                                        <span className="word">Duration: 05:56</span>
                                                    </li>
                                                    <li>
                                                        <span className="ball"></span>
                                                        <span className="word">BPM: 96</span>
                                                    </li>
                                                    <li>
                                                        <span className="ball"></span>
                                                        <span className="word">Tempo: Andante</span>
                                                    </li>
                                                    <li>
                                                        <span className="ball"></span>
                                                        <span className="word">Time Signature: 12/8</span>
                                                    </li>
                                                    <li>
                                                        <span className="ball"></span>
                                                        <span className="word">Key Signature: G Mino</span>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </dl>
                                    </article>
                                </div>
                                <div className="pop_footin dflx_ac_jcent">
                                    <ButtonComponent class="btn_sm1 w120 m-r-15" txt="Cancel" />
                                    <ButtonComponent class="btn_sm1 w120 cor" txt="Next" />
                                </div>
                            </div>
                        </section >
                    </div>

                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_conts p-20 h460">
                                    <article className="autop_top">
                                        <div className="top_step">
                                            <span className="step on"></span>
                                            <span className="step"></span>
                                            <span className="step"></span>
                                        </div>
                                        <div className="autop_note">
                                            <img src="../resources/images/note30_whbox.png" alt="note" />
                                            <p className="file">Wish.mp3</p>
                                        </div>
                                    </article>
                                    <article className="autop_conts">
                                        <h5 className="title">
                                            Genre Classifications
                                        </h5>
                                        <section className="autop_data">
                                            <div className="data_line">
                                                <div className="graph">
                                                    <p className="bord_comp trans w-75">
                                                        <span className="del_x"></span>
                                                        <span className="word">Dance</span>
                                                    </p>
                                                </div>
                                                <div className="data">
                                                    <img src="../resources/images/data_vl18.png" alt="data" />
                                                    <p className="result">
                                                        <span>75</span>
                                                        <span>%</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="data_line">
                                                <div className="graph">
                                                    <p className="bord_comp trans w-60">
                                                        <span className="del_x"></span>
                                                        <span className="word">Rap</span>
                                                    </p>
                                                </div>
                                                <div className="data">
                                                    <img src="../resources/images/data_vl18.png" alt="data" />
                                                    <p className="result">
                                                        <span>60</span>
                                                        <span>%</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="data_line">
                                                <div className="graph">
                                                    <p className="bord_comp trans w-50">
                                                        <span className="del_x"></span>
                                                        <span className="word">Pop</span>
                                                    </p>
                                                </div>
                                                <div className="data">
                                                    <img src="../resources/images/data_vl18.png" alt="data" />
                                                    <p className="result">
                                                        <span>50</span>
                                                        <span>%</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </section>
                                    </article>
                                </div>
                                <div className="pop_footin dflx_ac_jcent">
                                    <ButtonComponent class="btn_sm1 w120 m-r-15" txt="Back" />
                                    <ButtonComponent class="btn_sm1 w120 cor" txt="Next" />
                                </div>
                            </div>
                        </section >
                    </div>
                </section>

                <section className="dflx_jcent">
                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_conts p-20 h460">
                                    <article className="autop_top">
                                        <div className="top_step">
                                            <span className="step"></span>
                                            <span className="step on"></span>
                                            <span className="step"></span>
                                        </div>
                                        <div className="autop_note">
                                            <img src="../resources/images/note30_whbox.png" alt="note" />
                                            <p className="file">Wish.mp3</p>
                                        </div>
                                    </article>
                                    <article className="autop_conts">
                                        <h5 className="title">
                                            Mood Classifications
                                        </h5>
                                        <section className="autop_data">
                                            <div className="data_line">
                                                <div className="graph">
                                                    <p className="bord_comp trans w-75">
                                                        <span className="del_x"></span>
                                                        <span className="word">Happy</span>
                                                    </p>
                                                </div>
                                                <div className="data">
                                                    <img src="../resources/images/data_vl18.png" alt="data" />
                                                    <p className="result">
                                                        <span>75</span>
                                                        <span>%</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="data_line">
                                                <div className="graph">
                                                    <p className="bord_comp trans w-60">
                                                        <span className="del_x"></span>
                                                        <span className="word">Surprise</span>
                                                    </p>
                                                </div>
                                                <div className="data">
                                                    <img src="../resources/images/data_vl18.png" alt="data" />
                                                    <p className="result">
                                                        <span>60</span>
                                                        <span>%</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="data_line">
                                                <div className="graph">
                                                    <p className="bord_comp trans w-50">
                                                        <span className="del_x"></span>
                                                        <span className="word">Energized</span>
                                                    </p>
                                                </div>
                                                <div className="data">
                                                    <img src="../resources/images/data_vl18.png" alt="data" />
                                                    <p className="result">
                                                        <span>50</span>
                                                        <span>%</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </section>
                                    </article>
                                </div>
                                <div className="pop_footin dflx_ac_jcent">
                                    <ButtonComponent class="btn_sm1 w120 m-r-15" txt="Back" />
                                    <ButtonComponent class="btn_sm1 w120 cor" txt="Next" />
                                </div>
                            </div>
                        </section >
                    </div>

                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_conts p-20 h460">
                                    <article className="autop_top">
                                        <div className="top_step">
                                            <span className="step"></span>
                                            <span className="step"></span>
                                            <span className="step on"></span>
                                        </div>
                                        <div className="autop_note">
                                            <img src="../resources/images/note30_whbox.png" alt="note" />
                                            <p className="file">Wish.mp3</p>
                                        </div>
                                    </article>
                                    <article className="autop_conts">
                                        <h5 className="title">
                                            Theme Classifications
                                        </h5>
                                        <section className="autop_data">
                                            <div className="data_line">
                                                <div className="graph">
                                                    <p className="bord_comp trans w-75">
                                                        <span className="del_x"></span>
                                                        <span className="word">Fantasy</span>
                                                    </p>
                                                </div>
                                                <div className="data">
                                                    <img src="../resources/images/data_vl18.png" alt="data" />
                                                    <p className="result">
                                                        <span>75</span>
                                                        <span>%</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="data_line">
                                                <div className="graph">
                                                    <p className="bord_comp trans w-60">
                                                        <span className="del_x"></span>
                                                        <span className="word">Happiness</span>
                                                    </p>
                                                </div>
                                                <div className="data">
                                                    <img src="../resources/images/data_vl18.png" alt="data" />
                                                    <p className="result">
                                                        <span>60</span>
                                                        <span>%</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="data_line">
                                                <div className="graph">
                                                    <p className="bord_comp trans w-50">
                                                        <span className="del_x"></span>
                                                        <span className="word">Integrity</span>
                                                    </p>
                                                </div>
                                                <div className="data">
                                                    <img src="../resources/images/data_vl18.png" alt="data" />
                                                    <p className="result">
                                                        <span>50</span>
                                                        <span>%</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </section>
                                    </article>
                                </div>
                                <div className="pop_footin dflx_ac_jcent">
                                    <ButtonComponent class="btn_sm1 w120 m-r-15" txt="Back" />
                                    <ButtonComponent class="btn_sm1 w120 cor" txt="Next" />
                                </div>
                            </div>
                        </section >
                    </div>

                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_conts p-20 h460">
                                    <article className="autop_top">
                                        <div className="autop_note">
                                            <img src="../resources/images/note30_whbox.png" alt="note" />
                                            <p className="file">Wish.mp3</p>
                                        </div>
                                    </article>
                                    <article className="autop_conts">
                                        <h5 className="title">
                                            Result Classifications
                                        </h5>
                                        <div className="autop_pin">
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Genre</span>
                                                </dt>
                                                <dd>
                                                    <BordComp word="Dance" />
                                                    <BordComp word="Rap" />
                                                    <BordComp word="POP" />
                                                </dd>
                                            </dl>
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Mood</span>
                                                </dt>
                                                <dd>
                                                    <BordComp word="Happy" />
                                                    <BordComp word="Surprise" />
                                                    <BordComp word="Energized" />
                                                </dd>
                                            </dl>
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Theme</span>
                                                </dt>
                                                <dd>
                                                    <BordComp word="Fantasy" />
                                                    <BordComp word="Happiness" />
                                                    <BordComp word="Integrity" />
                                                </dd>
                                            </dl>
                                        </div>
                                    </article>
                                </div>
                                <div className="pop_footin dflx_ac_jcent">
                                    <ButtonComponent class="btn_sm1 w120 cor" txt="Confirm" />
                                </div>
                            </div>
                        </section >
                    </div>
                </section>
            </div>
        </div>
    );
}