import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import BordComp from "./BordComp";
import ImgComponent from "./ImgComponent";
import SearchComponent from "./SearchComponent";
import BordTact from "./BordTact";

const PopRoles = (props) => {

    const { open, close } = props;


    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent selectPop">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">
                            Select Creative Roles
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>

                <div className="pop_conts">
                    <div className="dflx_ac_jbet">
                        <SearchComponent srch_class="hd_search" btn_type="button"
                            btn_class="btn_srch" input_class="hd_input" placeholder="Search the Creative Roles" />
                        <p className="mid_title">
                            Please select a Roles (Select at least one)
                        </p>
                    </div>

                    <div className="selPop_wrap">
                        <section className="selpp_content">
                            <article className="selpp_top">
                                <h3 className="w140">Popular</h3>
                                <h3>Alphabetical</h3>
                                <p className="line1"></p>
                            </article>

                            <article className="selpp_cont p-0">
                                <div className="selpp_contin scroll sc_y">

                                    <section className="selrole_wrap">
                                        <div className="popular">
                                            <div className="popul_kind">
                                                <BordTact txt="Producer" />
                                            </div>
                                            <div className="popul_kind">
                                                <BordTact txt="Topliner" />
                                            </div>
                                            <div className="popul_kind">
                                                <BordTact txt="Avertsing" />
                                            </div>
                                            <div className="popul_kind">
                                                <BordTact txt="Compiler" />
                                            </div>
                                            <div className="popul_kind">
                                                <BordTact txt="Lyricist" />
                                            </div>
                                            <div className="popul_kind">
                                                <BordTact txt="Translator" />
                                            </div>
                                            <div className="popul_kind">
                                                <BordTact txt="MusicPublisher" />
                                            </div>
                                            <div className="popul_kind">
                                                <BordTact txt="CopyrightHolder" />
                                            </div>
                                        </div>
                                        <div className="alphab">
                                            <div className="alphab_line">
                                                <div className="line">
                                                    <span className="alp on">#</span>
                                                    <span className="alp">A</span>
                                                    <span className="alp">B</span>
                                                    <span className="alp">C</span>
                                                    <span className="alp">D</span>
                                                    <span className="alp">E</span>
                                                    <span className="alp">F</span>
                                                    <span className="alp">G</span>
                                                    <span className="alp">H</span>
                                                    <span className="alp">I</span>
                                                </div>
                                            </div>
                                            <div className="alphab_share">
                                                <div className="share3">
                                                    <BordTact txt="3D Modeling" />
                                                </div>
                                            </div>
                                            <div className="alphab_line">
                                                <div className="line">
                                                    <span className="alp on">#</span>
                                                    <span className="alp">A</span>
                                                    <span className="alp">B</span>
                                                    <span className="alp">C</span>
                                                    <span className="alp">D</span>
                                                    <span className="alp">E</span>
                                                    <span className="alp">F</span>
                                                    <span className="alp">G</span>
                                                    <span className="alp">H</span>
                                                    <span className="alp">I</span>
                                                </div>
                                            </div>
                                            <div className="alphab_share">
                                                <div className="share3">
                                                    <BordTact txt="Adapter" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Architect" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Arranger" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Author" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Authorln Quota.." />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Architect" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Arranger" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Author" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Authorln Quota.." />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Architect" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Arranger" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Author" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Authorln Quota.." />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Architect" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Arranger" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Author" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Authorln Quota.." />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Architect" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Arranger" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Author" />
                                                </div>
                                                <div className="share3">
                                                    <BordTact txt="Authorln Quota.." />
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </article>
                        </section>
                        <section className="selpp_select">
                            <article className="selpp_top">
                                <h3 className="dflx_ac">
                                    <span>Selected</span>
                                    <span className="hc_cout">56</span>
                                </h3>
                                <p className="clear">
                                    Clear all
                                </p>
                                <p className="line1"></p>
                            </article>
                            <article className="selpp_bords">
                                <div className="selpp_vert_wrap scroll sc_y">
                                    <BordComp word="Architect" />
                                    <BordComp word="Binder" />
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md2" txt="Cancel" />
                    <ButtonComponent onClick={close} class="btn_md2 cor" txt="Select" />
                </div>
            </div>
        </section >
    )
}

export default PopRoles;

