import React from "react";
import ImgComponent from "../components/common/ImgComponent";
import ButtonComponent from "../components/common/ButtonComponent";
import ButtonWith from "../components/common/ButtonWith";
import BtnSelect from "../components/common/BtnSelect";
import Switch from "../components/common/Switch";
import DropCont from "../components/common/DropCont";

export default function DemoButton() {
    return (
        <div className="wrap_grad">
            <div className="container">

                <section className="demo_title">
                    <h1>Button</h1>
                </section>

                <section className="demo_line">
                    <div className="p-20">
                        <ButtonComponent class="btn_md1" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 on" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 disable" txt="Button" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_md1 cor" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 cor on" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 cor disable" txt="Button" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_md1 trans" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 trans on" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 trans disable" txt="Button" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_md1 box" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 box on" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 box disable" txt="Button" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_md1 boxvl" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 boxvl on" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 boxvl disable" txt="Button" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_md1 norm" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 norm on" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 norm disable" txt="Button" />
                    </div>
                </section>

                <section className="demo_line">
                    <div className="p-20">
                        <ButtonComponent class="btn_lg1" txt="Create a new account" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_lg1 cor" txt="Login" />
                    </div>
                    <div className="p-20">
                        <DropCont btn_class="btn_sm1 w120 btn_drop" spant="Joined" >
                            <li>Owner change</li>
                            <li>Completed</li>
                            <li>Leave</li>
                        </DropCont>
                    </div>
                    <div className="p-20">
                        <DropCont btn_class="btn_sm1 w120 cor btn_drop" spant="Invite" >
                            <li>Invite</li>
                            <li>Recommend</li>
                        </DropCont>
                    </div>
                </section>

                <section className="demo_line">
                    <div className="p-20">
                        <ButtonComponent class="btn_sm1" txt="Invite" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_sm1 trans" txt="Invite" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_sm1 cor" txt="Invite" />
                    </div>
                </section>

                <section className="demo_line">
                    <div className="p-20">
                        <ButtonComponent class="btn_md2" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md2 on" txt="Button" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_md2 cor" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md2 cor on" txt="Button" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_md3" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md3 on" txt="Button" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_md3 cor" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md3 cor on" txt="Button" />
                    </div>
                </section>

                <section className="demo_line">
                    <div className="p-20">
                        <ButtonWith class="btn_sm1 with" spant="Review reset" imgclass="sv2020" src="../resources/images/sv_reload.svg" />
                    </div>
                    <div className="p-20">
                        <ButtonWith class="btn_sm1 with norm" spant="Download" imgclass="sv2020" src="../resources/images/sv_down_wh.svg" />
                    </div>
                    <div className="p-20">
                        <ButtonWith class="btn_c60 cor" src="../resources/images/mu_disp_wh.png" />
                    </div>
                    <div className="p-20">
                        <button className="btn_c32 cor">
                            <span className="btcor_inner p-l-5">
                                <img src="../resources/images/play_wh32.png" alt="image" />
                            </span>
                        </button>
                    </div>
                    <div className="p-20">
                        <button className="btn_c32 cor">
                            <span className="btcor_inner">
                                <img src="../resources/images/stop_wh32.png" alt="image" />
                            </span>
                        </button>
                    </div>
                    <div className="p-20">
                        <button className="btn_c44 cor">
                            <span className="btcor_inner p-l-5">
                                <img src="../resources/images/play_wh44.png" alt="image" />
                            </span>
                        </button>
                    </div>
                    <div className="p-20">
                        <button className="btn_c44 cor">
                            <span className="btcor_inner">
                                <img src="../resources/images/stop_wh44.png" alt="image" />
                            </span>
                        </button>
                    </div>
                    <div className="p-20">
                        <button className="btn_c44 cor">
                            <span className="btcor_inner">
                                <img src="../resources/images/off_wh44.png" alt="image" />
                            </span>
                        </button>
                    </div>
                    <div className="p-20">
                        <button className="btn_c44 cor">
                            <span className="btcor_inner">
                                <img src="../resources/images/mic_wh44.png" alt="image" />
                            </span>
                        </button>
                    </div>
                    <div className="p-20">
                        <button className="btn_hrt32">
                            <span className="hrt"></span>
                        </button>
                        <p className="p-5"></p>
                        <button className="btn_hrt32 cor">
                            <span className="hrt"></span>
                        </button>
                    </div>
                    <div className="p-20">
                        <button className="btn_hrt32">
                            <span className="hrt"></span>
                        </button>
                        <p className="p-5"></p>
                        <button className="btn_hrt32 on">
                            <span className="hrt"></span>
                        </button>
                    </div>
                </section>

                <section className="demo_line">
                    <div className="comp_line p-l-20">
                        <p className="the_comp">
                            <ImgComponent class="sv2424" src="../resources/images/sv_photo_wh.svg" />
                            <span className="word">Photo/Video</span>
                        </p>
                        <p className="the_comp">
                            <ImgComponent class="sv2424" src="../resources/images/sv_calendar_wh.svg" />
                            <span className="word">important event</span>
                        </p>
                        <p className="the_comp">
                            <ImgComponent class="sv2424" src="../resources/images/sv_navi_wh.svg" />
                            <span className="word">Check-in</span>
                        </p>
                        <p className="the_comp">
                            <ImgComponent class="sv2424" src="../resources/images/sv_share_wh.svg" />
                            <span className="word">Share</span>
                        </p>
                        <p className="the_comp">
                            <ImgComponent class="sv2424" src="../resources/images/sv_mail_wh.svg" />
                            <span className="word">Send</span>
                        </p>
                        <div className="p-10 p-l-50">
                            <p class="bord_comp">
                                <span class="word">Agender</span>
                                <span class="delete">X</span>
                            </p>
                        </div>
                        <div className="p-10">
                            <p class="bord_comp">
                                <span class="word">Cis</span>
                                <span class="delete">X</span>
                            </p>
                        </div>
                        <div className="p-10">
                            <p class="bord_comp">
                                <span class="word">Cis male</span>
                                <span class="delete">X</span>
                            </p>
                        </div>
                        <div className="p-10">
                            <p class="bord_comp trans">
                                <span class="del_x"></span>
                                <span class="word">Seoul</span>
                            </p>
                        </div>
                        <div className="p-10">
                            <p class="bord_comp trans">
                                <span class="del_x"></span>
                                <span class="word">Jay Kim</span>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="demo_line">
                    <div className="p-20">
                        <ButtonWith class="btn_society" spant="Login in with Google" src="../resources/images/so_facebook.png" />
                    </div>
                    <div className="p-20">
                        <ButtonWith class="btn_society" spant="Login in with Facebook" src="../resources/images/so_google.png" />
                    </div>
                    <div className="p-20">
                        <ButtonWith class="btn_society" spant="Sign in with Apple" src="../resources/images/so_apple.png" />
                    </div>
                </section>

                <section className="demo_line">
                    <div className="p-10 dpflx">
                        <div className="p-10">
                            <button className="btsq bt36">
                                <img className="bticon" src="../resources/images/arr36_down_wh.png" alt="image" />
                                <img className="bticon_on" src="../resources/images/arr36_down_cor.png" alt="image" />
                            </button>
                            <p className="p-10"></p>
                            <button className="btsq bt36">
                                <img className="bticon" src="../resources/images/arr36_up_wh.png" alt="image" />
                                <img className="bticon_on" src="../resources/images/arr36_up_cor.png" alt="image" />
                            </button>
                        </div>
                        <div className="p-10">
                            <button className="btsq bt36 left">
                                <img className="bticon" src="../resources/images/arr36_left_wh.png" alt="images" />
                                <img className="bticon_on" src="../resources/images/arr36_left_cor.png" alt="images" />
                            </button>
                            <p className="p-10"></p>
                            <button className="btsq bt36">
                                <img className="bticon" src="../resources/images/arr36_right_wh.png" alt="image" />
                                <img className="bticon_on" src="../resources/images/arr36_right_cor.png" alt="image" />
                            </button>
                        </div>
                        <div className="p-10">
                            <button className="btsq bt36">
                                <img className="bticon" src="../resources/images/arr36_plus_wh.png" alt="image" />
                                <img className="bticon_on" src="../resources/images/arr36_plus_cor.png" alt="image" />
                            </button>
                            <p className="p-10"></p>
                            <button className="btsq bt36">
                                <img className="bticon" src="../resources/images/arr36_calen_wh.png" alt="image" />
                                <img className="bticon_on" src="../resources/images/arr36_calen_cor.png" alt="image" />
                            </button>
                        </div>
                        <div className="p-10">
                            <button className="btsq bt36 norm">
                                <img className="bticon" src="../resources/images/arr36_down_wh.png" alt="image" />
                                <img className="bticon_on" src="../resources/images/arr36_down_cor.png" alt="image" />
                            </button>
                            <p className="p-10"></p>
                            <button className="btsq bt36 norm">
                                <img className="bticon" src="../resources/images/arr36_up_wh.png" alt="image" />
                                <img className="bticon_on" src="../resources/images/arr36_up_cor.png" alt="image" />
                            </button>
                        </div>
                    </div>

                    <div className="p-10 dpflx">
                        <div className="p-10">
                            <button className="btsq bt20">
                                <img className="bticon" src="../resources/images/sv_arr20_left_wh.png" alt="image" />
                                <img className="bticon_on" src="../resources/images/sv_arr20_left_cor.png" alt="image" />
                            </button>
                            <p className="p-10"></p>
                            <button className="btsq bt20">
                                <img className="bticon" src="../resources/images/sv_arr20_right_wh.png" alt="image" />
                                <img className="bticon_on" src="../resources/images/sv_arr20_right_cor.png" alt="image" />
                            </button>
                        </div>
                        <div className="p-10">
                            <button className="btsq bt20">
                                <img className="bticon" src="../resources/images/sv_arr20_down_wh.png" alt="image" />
                                <img className="bticon_on" src="../resources/images/sv_arr20_down_cor.png" alt="image" />
                            </button>
                            <p className="p-10"></p>
                            <button className="btsq bt20">
                                <img className="bticon" src="../resources/images/sv_arr20_up_wh.png" alt="image" />
                                <img className="bticon_on" src="../resources/images/sv_arr20_up_cor.png" alt="image" />
                            </button>
                        </div>
                        <div className="p-10">
                            <button className="btsq bt20">
                                <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                            </button>
                            <p className="p-10"></p>
                            <button className="btsq bt20">
                                <img className="bticon" src="../resources/images/sv_arr20_minus_wh.png" alt="image" />
                                <img className="bticon_on" src="../resources/images/sv_arr20_minus_cor.png" alt="image" />
                            </button>
                        </div>

                        <div className="p-10 p-l-30">
                            <button className="btsq bt20 norm">
                                <img src="../resources/images/sv_arr20_down_wh.png" alt="image" />
                            </button>
                            <p className="p-10"></p>
                            <button className="btsq bt20 norm">
                                <img src="../resources/images/sv_arr20_up_wh.png" alt="image" />
                            </button>
                        </div>
                        <div className="p-10">
                            <button className="btsq bt20 norm">
                                <img src="../resources/images/sv_arr20_plus_wh.png" alt="images" />
                            </button>
                            <p className="p-10"></p>
                            <button className="btsq bt20 norm">
                                <img src="../resources/images/sv_arr20_minus_wh.png" alt="images" />
                            </button>
                        </div>
                        <div className="p-10">
                            <button className="btsq bt20 norm">
                                <img src="../resources/images/sv_arr20_x_wh.png" alt="images" />
                            </button>
                        </div>
                        <div className="p-10">
                            <button className="btsq bt16">
                                <img className="bticon" src="../resources/images/sv_arr16_down_wh.svg" alt="images" />
                                <img className="bticon_on" src="../resources/images/sv_arr16_down_cor.svg" alt="images" />
                            </button>
                        </div>

                        <div className="p-10 p-l-30">
                            <button className="btn_c32">
                                <img src="../resources/images/sv_playprev_cor.svg" alt="images" />
                            </button>
                            <p className="p-10"></p>
                            <button className="btn_c32 on">
                                <img src="../resources/images/sv_playprev_cor.svg" alt="images" />
                            </button>
                        </div>
                        <div className="p-10">
                            <button className="btn_c32">
                                <img src="../resources/images/sv_playnext_cor.svg" alt="images" />
                            </button>
                            <p className="p-10"></p>
                            <button className="btn_c32 on">
                                <img src="../resources/images/sv_playnext_cor.svg" alt="images" />
                            </button>
                        </div>

                        <div className="p-10 p-l-30">
                            <button className="btn_c24">
                                <img src="../resources/images/sv_playprev_cor24.svg" alt="images" />
                            </button>
                            <p className="p-10"></p>
                            <button className="btn_c24 on">
                                <img src="../resources/images/sv_playprev_cor24.svg" alt="images" />
                            </button>
                        </div>
                        <div className="p-10">
                            <button className="btn_c24">
                                <img src="../resources/images/sv_playnext_cor24.svg" alt="images" />
                            </button>
                            <p className="p-10"></p>
                            <button className="btn_c24 on">
                                <img src="../resources/images/sv_playnext_cor24.svg" alt="images" />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="demo_line">
                    <div className="p-20">
                        <section className="self_line">
                            <div className="self_bar on">Select A</div>
                            <div className="self_bar">Select B</div>
                            <div className="self_bar">Select C</div>
                        </section>
                    </div>
                    <div className="p-20">
                        <div className="dpflx p-5">
                            <ButtonComponent class="btn_tab114 on" txt="Man" />
                            <ButtonComponent class="btn_tab114" txt="Woman" />
                            <ButtonComponent class="btn_tab114" txt="Private" />
                        </div>
                    </div>
                    <div className="p-20">
                        <Switch label_class="switch-label" />
                    </div>
                    <div className="p-20">
                        <Switch label_class="switch-label norm" />
                    </div>
                    <div className="p-20">
                        <Switch label_class="switch-label light" />
                    </div>
                </section>

                <section className="demo_line">
                    <div className="p-20 w-60">
                        <div className="dflx_ac_jbet">
                            <BtnSelect>Country</BtnSelect>
                            <BtnSelect>Dance</BtnSelect>
                            <BtnSelect>Electronic</BtnSelect>
                            <BtnSelect>Hip Hop</BtnSelect>
                        </div>
                    </div>
                </section>

                <section className="demo_line">
                    <section className="nation_line">
                        <article className="nation_bar">
                            <p className="call">Chicago</p>
                            <div className="time">
                                <span className="when">10:24</span>
                                <span>PM</span>
                                <span className="tc">(UTC-5)</span>
                            </div>
                        </article>
                        <article className="nation_bar on">
                            <p className="call">Chicago</p>
                            <div className="time">
                                <span className="when">10:24</span>
                                <span>PM</span>
                                <span className="tc">(UTC-5)</span>
                            </div>
                        </article>
                        <article className="nation_bar">
                            <p className="call">Chicago</p>
                            <div className="time">
                                <span className="when">10:24</span>
                                <span>PM</span>
                                <span className="tc">(UTC-5)</span>
                            </div>
                        </article>
                        <article className="nation_bar">
                            <p className="call">Chicago</p>
                            <div className="time">
                                <span className="when">10:24</span>
                                <span>PM</span>
                                <span className="tc">(UTC-5)</span>
                            </div>
                        </article>
                        <article className="nation_bar">
                            <p className="call">Chicago</p>
                            <div className="time">
                                <span className="when">10:24</span>
                                <span>PM</span>
                                <span className="tc">(UTC-5)</span>
                            </div>
                        </article>
                    </section>
                </section>

                <section className="demo_line"></section>

            </div>
        </div>
    );
}