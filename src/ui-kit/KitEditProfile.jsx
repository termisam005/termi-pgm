import { useState } from "react";
import ButtonComponent from "../components/common/ButtonComponent";
import ButtonWith from "../components/common/ButtonWith";
import ImgComponent from "../components/common/ImgComponent";
import BordComp from "../components/common/BordComp";
import ProfComponent from "../components/common/ProfComponent";
import PopPublisher from "../components/common/PopPublisher";
import PopGenres from "../components/common/PopGenres";


export default function KitEditProfile() {

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
    }
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
                        <div className="m-b-20">
                            <h1 className="f-s-22">
                                Copyright Control off
                            </h1>
                        </div>
                        <div className="pop_body middlePop">
                            <article className="set_top">
                                <div className="dflx_jbet">
                                    <dl className="message_dl connect_dl w-75">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        </dt>
                                        <dd className="conn_dd set">
                                            <div className="mess_who">
                                                <span className="who f-s-16">Nermin Harambasic</span>
                                            </div>
                                            <select className="selector wh mini vl w180">
                                                <option value="Role">+ Add Role</option>
                                            </select>
                                        </dd>
                                    </dl>
                                    <div className="p-t-10">
                                        <div className="check_line">
                                            <p className="checkbox wh">
                                                <img src="../resources/images/sv_check_wh.svg" alt="check" />
                                            </p>
                                            <span className="check_word f-s-13">CopyrightControl</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <p className="line1"></p>
                            <div className="pop_conts">
                                <article className="set_wrap">
                                    <div className="set_info">
                                        <div className="info_line">
                                            <select className="selector wh mini vl w240">
                                                <option value="Role">IPI Name# 00281075767</option>
                                            </select>
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
                                                        <img src="../resources/images/simb_sm40.png" alt="image" />
                                                    </p>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">EKKO Music Right Europe</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Original publisher</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                            <div className="nro_set w-50">
                                                <p className="nro_tlt">IPI Base Number</p>
                                                <input className="nro_put" type="text" />
                                            </div>
                                        </article>
                                        <article className="society_line">
                                            <dl className="message_dl connect_dl disble">
                                                <dt>
                                                    <div className="hover_prof">
                                                        <div className="co_plus">
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
                                        </article>
                                        <article className="society_line">
                                            <dl className="message_dl connect_dl">
                                                <dt>
                                                    <p className="simbol50">
                                                        <img src="../resources/images/simb_tono40.png" alt="image" />
                                                    </p>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">TONO</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                            <dl className="message_dl connect_dl disble">
                                                <dt>
                                                    <div className="hover_prof">
                                                        <div className="co_plus">
                                                            <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                        </div>
                                                    </div>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">Empty</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
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
                        <div className="m-b-20">
                            <h1 className="f-s-22">
                                Copyright Control On
                            </h1>
                        </div>
                        <div className="pop_body middlePop">
                            <article className="set_top">
                                <div className="dflx_jbet">
                                    <dl className="message_dl connect_dl w-75">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        </dt>
                                        <dd className="conn_dd set">
                                            <div className="mess_who">
                                                <span className="who f-s-16">Nermin Harambasic</span>
                                            </div>
                                            <select className="selector wh mini vl w180">
                                                <option value="Role">+ Add Role</option>
                                            </select>
                                        </dd>
                                    </dl>
                                    <div className="p-t-10">
                                        <div className="check_line on">
                                            <p className="checkbox wh">
                                                <img src="../resources/images/sv_check_wh.svg" alt="check" />
                                            </p>
                                            <span className="check_word f-s-13">CopyrightControl</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <p className="line1"></p>
                            <div className="pop_conts">
                                <article className="set_wrap">
                                    <div className="set_info">
                                        <div className="info_line">
                                            <select className="selector wh mini vl w240">
                                                <option value="Role">IPI Name# 00281075767</option>
                                            </select>
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
                                            <dl className="message_dl connect_dl disble">
                                                <dt>
                                                    <p className="simbol50">
                                                        <img src="../resources/images/simb_tono40.png" alt="image" />
                                                    </p>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">TONO</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                        </article>
                                        <article className="society_line">
                                            <dl className="message_dl connect_dl disble">
                                                <dt>
                                                    <p className="simbol50">
                                                        <img src="../resources/images/simb_tono40.png" alt="image" />
                                                    </p>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">TONO</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                        </article>
                                        <article className="society_line">
                                            <dl className="message_dl connect_dl">
                                                <dt>
                                                    <p className="simbol50">
                                                        <img src="../resources/images/simb_tono40.png" alt="image" />
                                                    </p>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">TONO</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                            <dl className="message_dl connect_dl disble">
                                                <dt>
                                                    <div className="hover_prof">
                                                        <div className="co_plus">
                                                            <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                        </div>
                                                    </div>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">Empty</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
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
                </section>

                <section className="dflx_jcent">
                    <div className="p-20">
                        <div className="pop_body middlePop">
                            <article className="set_top">
                                <div className="dflx_jbet">
                                    <dl className="message_dl connect_dl w-75">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        </dt>
                                        <dd className="conn_dd set">
                                            <div className="mess_who">
                                                <span className="who f-s-16">Nermin Harambasic</span>
                                            </div>
                                            <select className="selector wh mini vl w180">
                                                <option value="Role">+ Add Role</option>
                                            </select>
                                        </dd>
                                    </dl>
                                    <div className="p-t-10">
                                        <div className="check_line">
                                            <p className="checkbox wh">
                                                <img src="../resources/images/sv_check_wh.svg" alt="check" />
                                            </p>
                                            <span className="check_word f-s-13">CopyrightControl</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <p className="line1"></p>
                            <div className="pop_conts">
                                <article className="set_wrap">
                                    <div className="set_info">
                                        <div className="info_line">
                                            <select className="selector wh mini vl w240">
                                                <option value="Role">IPI Name# 00281075767</option>
                                                <option value="Role" selected>CAE# 123456789</option>
                                            </select>
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
                                                        <img src="../resources/images/simb_tono40.png" alt="image" />
                                                    </p>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">TONO</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                            <div className="nro_set w-50">
                                                <p className="nro_tlt">IPI Base Number</p>
                                                <input className="nro_put" type="text" />
                                            </div>
                                        </article>
                                        <article className="society_line">
                                            <dl className="message_dl connect_dl">
                                                <dt>
                                                    <p className="simbol50">
                                                        <img src="../resources/images/simb_tono40.png" alt="image" />
                                                    </p>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">TONO</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                            <dl className="message_dl connect_dl disble">
                                                <dt>
                                                    <div className="hover_prof">
                                                        <div className="co_plus">
                                                            <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                        </div>
                                                    </div>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">Empty</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                        </article>
                                        <article className="society_line">
                                            <dl className="message_dl connect_dl">
                                                <dt>
                                                    <p className="simbol50">
                                                        <img src="../resources/images/simb_tono40.png" alt="image" />
                                                    </p>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">TONO</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                            <dl className="message_dl connect_dl disble">
                                                <dt>
                                                    <div className="hover_prof">
                                                        <div className="co_plus">
                                                            <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                        </div>
                                                    </div>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">Empty</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
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
                                <div className="dflx_jbet">
                                    <dl className="message_dl connect_dl w-75">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        </dt>
                                        <dd className="conn_dd set">
                                            <div className="mess_who">
                                                <span className="who f-s-16">Nermin Harambasic</span>
                                            </div>
                                            <select className="selector wh mini vl w180">
                                                <option value="Role">CA - Composer, Author</option>
                                            </select>
                                        </dd>
                                    </dl>
                                    <div className="p-t-10">
                                        <div className="check_line on">
                                            <p className="checkbox wh">
                                                <img src="../resources/images/sv_check_wh.svg" alt="check" />
                                            </p>
                                            <span className="check_word f-s-13">CopyrightControl</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <p className="line1"></p>
                            <div className="pop_conts">
                                <article className="set_wrap">
                                    <div className="set_info">
                                        <div className="info_line">
                                            <select className="selector wh mini vl w240">
                                                <option value="Role">IPI Name# 00281075767</option>
                                                <option value="Role" selected>CAE# 123456789</option>
                                            </select>
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
                                            <dl className="message_dl connect_dl disble">
                                                <dt>
                                                    <p className="simbol50">
                                                        <img src="../resources/images/simb_tono40.png" alt="image" />
                                                    </p>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">TONO</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                        </article>
                                        <article className="society_line">
                                            <dl className="message_dl connect_dl disble">
                                                <dt>
                                                    <p className="simbol50">
                                                        <img src="../resources/images/simb_tono40.png" alt="image" />
                                                    </p>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">TONO</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                        </article>
                                        <article className="society_line">
                                            <dl className="message_dl connect_dl">
                                                <dt>
                                                    <p className="simbol50">
                                                        <img src="../resources/images/simb_tono40.png" alt="image" />
                                                    </p>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">TONO</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                            <dl className="message_dl connect_dl">
                                                <dt>
                                                    <p className="simbol50">
                                                        <img src="../resources/images/simb_sm40.png" alt="image" />
                                                    </p>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">EKKO Music Right</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
                                        </article>
                                        <article className="society_line">
                                            <dl className="message_dl connect_dl disble">
                                                <dt>
                                                    <div className="hover_prof">
                                                        <div className="co_plus">
                                                            <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                        </div>
                                                    </div>
                                                </dt>
                                                <dd className="conn_dd set">
                                                    <div className="mess_who">
                                                        <span className="who">Empty</span>
                                                    </div>
                                                    <p className="tip_word">
                                                        <span className="word">Performance rights Society</span>
                                                    </p>
                                                </dd>
                                            </dl>
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
                </section>

            </div>

            <PopPublisher open={popNro} close={closeNro} popname={'Select Society'} />
            <PopGenres open={genPop} close={closeGenpop} />
        </div>
    );
}