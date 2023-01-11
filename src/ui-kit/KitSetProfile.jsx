import { useState } from "react";
import ButtonComponent from "../components/common/ButtonComponent";
import ButtonWith from "../components/common/ButtonWith";
import ImgComponent from "../components/common/ImgComponent";
import BordComp from "../components/common/BordComp";
import ProfComponent from "../components/common/ProfComponent";
import PopPublisher from "../components/common/PopPublisher";
import PopGenres from "../components/common/PopGenres";


export default function KitSetProfile() {

    const [popNro, setPopNro] = useState(false);
    const openNro = () => {
        setPopNro(true);
    }
    const closeNro = () => {
        setPopNro(false);
    }

    const [genPop, setGenPop] = useState(false);
    const openGenpop = () => {
        setGenPop(true);
    };
    const closeGenpop = () => {
        setGenPop(false);
    }

    return (
        <div className="wrap_grad">
            <div className="container">

                <section className="demo_title">
                    <h1>Set Profile (Credit Person)</h1>
                </section>

                <section className="dflx_jcent">

                    <div className="p-20">
                        <div className="pop_body middlePop">
                            <article className="set_top">
                                <dl className="message_dl connect_dl">
                                    <dt>
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                    </dt>
                                    <dd className="conn_dd set">
                                        <div className="mess_who">
                                            <span className="who f-s-16">Marcus</span>
                                        </div>
                                        <select className="selector wh mini vl w180">
                                            <option value="Role">Select Performer Role</option>
                                            <option value="Ensemble">Ensemble</option>
                                            <option value="Musician">Musician</option>
                                            <option value="Vocal">Vocal</option>
                                        </select>
                                    </dd>
                                </dl>
                            </article>
                            <p className="line1"></p>
                            <div className="pop_conts">
                                <article className="set_wrap">
                                    <div className="set_info">
                                        <div className="info_line">
                                            <p className="call">IPN#</p>
                                            <p className="txt cor913">W05*****</p>
                                        </div>
                                        <div className="info_line">
                                            <p className="call">Location</p>
                                            <p className="txt">Trondheim, Norway</p>
                                        </div>
                                        <div className="info_line">
                                            <p className="call">Phone</p>
                                            <p className="txt">+46-8336910</p>
                                        </div>
                                        <div className="info_line">
                                            <p className="call">Email</p>
                                            <p className="txt">nermin@dsignmusic.com</p>
                                        </div>
                                        <div className="info_line w-100">
                                            <p className="call">Language</p>
                                            <p className="txt">Norwegian, Swedish, Danish, English</p>
                                        </div>
                                    </div>
                                    <div className="set_society">
                                        <article className="society_line">
                                            <dl className="message_dl connect_dl">
                                                <dt>
                                                    <div className="hover_prof">
                                                        <div onClick={openNro} className="co_plus">
                                                            <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                        </div>
                                                    </div>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">Empty</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Neighboring rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                            <div className="nro_set w-50">
                                                <p className="nro_tlt">NRO Number</p>
                                                <input className="nro_put" type="text" />
                                            </div>
                                        </article>
                                    </div>
                                </article>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_foot">
                                <div className="p-l-70">
                                    <div className="co_period p-0 m-t-5">
                                        <span className="m-r-5">Creation Date :</span>
                                        <span className="cor994">13 Aug 2021</span>
                                    </div>
                                    <div className="co_period p-0 m-t-5">
                                        <span className="m-r-5">Last updated :</span>
                                        <span className="cor994">13 Aug 2021</span>
                                    </div>
                                </div>
                                <ButtonComponent class="btn_md2" txt="Save" />
                            </div>
                        </div>
                    </div>

                    <div className="p-20">
                        <div className="pop_body middlePop">
                            <article className="set_top">
                                <dl className="message_dl connect_dl">
                                    <dt>
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                    </dt>
                                    <dd className="conn_dd set">
                                        <div className="mess_who">
                                            <span className="who f-s-16">Marcus</span>
                                        </div>
                                        <select className="selector wh mini vl w180">
                                            <option value="Role">Select Performer Role</option>
                                            <option value="Ensemble">Ensemble</option>
                                            <option value="Musician">Musician</option>
                                            <option value="Vocal" selected>Vocal</option>
                                        </select>
                                    </dd>
                                </dl>
                            </article>
                            <p className="line1"></p>
                            <div className="pop_conts">
                                <article className="set_wrap">
                                    <div className="set_info">
                                        <div className="info_line">
                                            <p className="call">IPN#</p>
                                            <p className="txt cor913">W05*****</p>
                                        </div>
                                        <div className="info_line">
                                            <p className="call">Location</p>
                                            <p className="txt">Trondheim, Norway</p>
                                        </div>
                                        <div className="info_line">
                                            <p className="call">Phone</p>
                                            <p className="txt">+46-8336910</p>
                                        </div>
                                        <div className="info_line">
                                            <p className="call">Email</p>
                                            <p className="txt">nermin@dsignmusic.com</p>
                                        </div>
                                        <div className="info_line w-100">
                                            <p className="call">Language</p>
                                            <p className="txt">Norwegian, Swedish, Danish, English</p>
                                        </div>
                                    </div>
                                    <div className="set_society">
                                        <article className="society_line">
                                            <dl className="message_dl connect_dl">
                                                <dt>
                                                    <p className="simbol50">
                                                        <ImgComponent src="../resources/images/simb_sm40.png" />
                                                    </p>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">GRAMO</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Neighboring rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                            <div className="nro_set w-50">
                                                <p className="nro_tlt">NRO Number</p>
                                                <input className="nro_put" type="text" />
                                            </div>
                                        </article>
                                    </div>
                                    <section className="meta_box in100">
                                        <div className="meta_top">
                                            <h3>
                                                <span>Vocal</span>
                                            </h3>
                                            <ButtonWith onClick={openGenpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div class="mata_cont">
                                            <div className="meta_in">
                                                <BordComp word="Demo Vocals" />
                                                <BordComp word="Background Vocalist" />
                                            </div>
                                        </div>
                                    </section>
                                    <section className="meta_box in100">
                                        <div className="meta_top">
                                            <h3>
                                                <span>Instrument</span>
                                            </h3>
                                            <ButtonWith onClick={openGenpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div class="mata_cont">
                                            <div className="meta_in">
                                                <BordComp word="Boy Voice" />
                                                <BordComp word="Piano" />
                                            </div>
                                        </div>
                                    </section>
                                    <section className="meta_box in100">
                                        <div className="meta_top">
                                            <h3>
                                                <span>Ensemble</span>
                                            </h3>
                                            <ButtonWith onClick={openGenpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div class="mata_cont">
                                            <div className="meta_in">
                                                <BordComp word="Accompanist" />
                                                <BordComp word="Music Group" />
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_foot">
                                <div className="p-l-70">
                                    <div className="co_period p-0 m-t-5">
                                        <span className="m-r-5">Creation Date :</span>
                                        <span className="cor994">13 Aug 2021</span>
                                    </div>
                                    <div className="co_period p-0 m-t-5">
                                        <span className="m-r-5">Last updated :</span>
                                        <span className="cor994">13 Aug 2021</span>
                                    </div>
                                </div>
                                <ButtonComponent class="btn_md2" txt="Save" />
                            </div>
                        </div>
                    </div>

                </section>

            </div>

            <PopPublisher open={popNro} close={closeNro} popname={'Select Society'} />
            <PopGenres open={genPop} close={closeGenpop} />
        </div>
    );
}