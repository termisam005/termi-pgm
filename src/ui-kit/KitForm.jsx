import React from "react";
import ImgComponent from "../components/common/ImgComponent";
import InputComponent from "../components/common/InputComponent";
import SearchComponent from "../components/common/SearchComponent";

export default function KitForm() {
    return (
        <div className="wrap_grad">
            <div className="container">

                <section className="demo_title">
                    <h1>Form</h1>
                </section>

                <section className="dpflx">
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title">Label</p>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="text" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title inner">Label</p>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput rad" placeholder="text" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title">Label</p>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput trans" placeholder="text" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title">Label</p>
                            <div className="putt_box error">
                                <InputComponent type="text" class="wrput" value="Value" placeholder="text" />
                                <div className="put_mess">
                                    <span className="sp_error">Error Message</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title inner">Label</p>
                            <div className="putt_box error">
                                <InputComponent type="text" class="wrput rad" value="Value" placeholder="text" />
                                <div className="put_mess inner">
                                    <span className="sp_error">Error Message</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title">Label</p>
                            <div className="putt_box error">
                                <InputComponent type="text" class="wrput trans" value="Value" placeholder="Text" />
                                <div className="put_mess">
                                    <span className="sp_error">Error Message</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title">Label</p>
                            <div className="putt_box see">
                                <span className="put_mark">
                                    <img src="../resources/images/eye_gray.png" alt="see" />
                                </span>
                                <InputComponent type="password" class="wrput" placeholder="password" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title inner">Label</p>
                            <div className="putt_box see">
                                <span className="put_mark">
                                    <img src="../resources/images/eye_gray.png" alt="see" />
                                </span>
                                <InputComponent type="password" class="wrput rad" placeholder="password" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title">Label</p>
                            <div className="putt_box see">
                                <span className="put_mark">
                                    <img src="../resources/images/eye_gray.png" alt="see" />
                                </span>
                                <InputComponent type="password" class="wrput trans" placeholder="password" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="text" />
                                <div className="put_mess">
                                    <span>Enter your mobile phone number</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput rad" placeholder="text" />
                                <div className="put_mess inner">
                                    <span>Enter your mobile phone number</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput trans" placeholder="Text" />
                                <div className="put_mess">
                                    <span>Enter your mobile phone number</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <div className="putt_box time">
                                <span className="put_timer">3:00</span>
                                <InputComponent type="text" class="wrput" placeholder="text" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <div className="putt_box time">
                                <span className="put_timer">3:00</span>
                                <InputComponent type="text" class="wrput rad" placeholder="text" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <div className="putt_box time">
                                <span className="put_timer">3:00</span>
                                <InputComponent type="text" class="wrput trans" placeholder="text" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="text" />
                                <div className="put_mess">
                                    <span></span>
                                    <span>0/300</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput rad" placeholder="text" />
                                <div className="put_mess inner">
                                    <span></span>
                                    <span>0/300</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput trans" placeholder="Text" />
                                <div className="put_mess">
                                    <span></span>
                                    <span>0/300</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title">
                                <span>Label</span>
                                <div className="put_tip">
                                    <img src="../resources/images/feel_wh.png" alt="feel" />
                                    <div className="tip_cont">
                                        <span className="tip_hand"></span>
                                        <span className="tip_text">Please enter …</span>
                                    </div>
                                </div>
                            </p>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="text" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title">
                                <span>Label</span>
                                <div className="put_tip">
                                    <img src="../resources/images/feel_wh.png" alt="feel" />
                                    <div className="tip_cont">
                                        <span className="tip_hand"></span>
                                        <span className="tip_text">Please enter …</span>
                                    </div>
                                </div>
                            </p>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput rad" placeholder="text" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title">
                                <span>Label</span>
                                <div className="put_tip">
                                    <img src="../resources/images/feel_wh.png" alt="feel" />
                                    <div className="tip_cont">
                                        <span className="tip_hand"></span>
                                        <span className="tip_text">Please enter …</span>
                                    </div>
                                </div>
                            </p>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput trans" placeholder="text" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title">Label</p>
                            <div className="putt_box">
                                <input type="text" class="wrput disable" placeholder="text" disabled />
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title inner">Label</p>
                            <div className="putt_box">
                                <input type="text" class="wrput rad disable" placeholder="text" disabled />
                            </div>
                        </div>
                    </div>
                    <div className="p-20 w350">
                        <div className="put_cont">
                            <p className="put_title">Label</p>
                            <div className="putt_box">
                                <input type="text" class="wrput trans disable" placeholder="text" disabled />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="dpflx m-t-50">
                    <div className="p-20 w-50">
                        <textarea className="text_area" cols="30" rows="7" placeholder="Please enter a message to send">
                        </textarea>
                    </div>
                    <div className="p-20 w-30">
                        <textarea className="text_area bord" cols="30" rows="7" placeholder="Please enter the artist's bio.">
                        </textarea>
                    </div>
                </div>

                <div className="dpflx">
                    <section className="m-t-30 w-50">
                        <h1 className="demo_mini_title">Checkbox</h1>
                        <div className="dpflx">
                            <div className="p-20 w350">
                                <div className="check_line">
                                    <p className="checkbox">
                                        <img src="../resources/images/sv_check_cor.svg" alt="check" />
                                    </p>
                                </div>
                                <p className="p-10"></p>
                                <div className="check_line on">
                                    <p className="checkbox">
                                        <img src="../resources/images/sv_check_cor.svg" alt="check" />
                                    </p>
                                </div>
                            </div>
                            <div className="p-20 w350">
                                <div className="check_line">
                                    <p className="checkbox wh">
                                        <img src="../resources/images/sv_check_wh.svg" alt="check" />
                                    </p>
                                    <span className="check_word">Private</span>
                                </div>
                                <p className="p-10"></p>
                                <div className="check_line on">
                                    <p className="checkbox wh">
                                        <img src="../resources/images/sv_check_wh.svg" alt="check" />
                                    </p>
                                    <span className="check_word">Private</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="m-t-30 w-50">
                        <h1 className="demo_mini_title">Radio Buttons</h1>
                        <div className="dpflx">
                            <div className="p-20 w350">
                                <div className="check_line">
                                    <p className="checkbox circ">
                                        <span className="circle"></span>
                                    </p>
                                    <span className="check_word">Select A</span>
                                </div>
                                <p className="p-10"></p>
                                <div className="check_line on">
                                    <p className="checkbox circ">
                                        <span className="circle"></span>
                                    </p>
                                    <span className="check_word">Select B</span>
                                </div>
                            </div>
                            <div className="p-20 w350">
                                <div className="check_line">
                                    <p className="checkbox circ_norm">
                                        <span className="circle"></span>
                                    </p>
                                    <span className="check_word">Select A</span>
                                </div>
                                <p className="p-10"></p>
                                <div className="check_line on">
                                    <p className="checkbox circ_norm">
                                        <span className="circle"></span>
                                    </p>
                                    <span className="check_word">Select B</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="dpflx">
                    <section className="m-t-30">
                        <h1 className="demo_mini_title">Search</h1>
                        <div className="dpflx">
                            <div className="p-20">
                                <article className="hd_search">
                                    <button type="button" className="btn_srch"></button>
                                    <input type="text" className="hd_input" placeholder="Search" />
                                </article>
                            </div>
                            <div className="p-20">
                                <SearchComponent srch_class="hd_search roles_search" btn_type="button"
                                    btn_class="btn_srch" input_class="hd_input" placeholder="Music Label, Creator, Artist name" />
                            </div>
                            <div className="p-20">
                                <article className="search_trans">
                                    <button type="button" className="btn_srch"></button>
                                    <input type="text" className="hd_input" placeholder="Search" />
                                </article>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    )
}
