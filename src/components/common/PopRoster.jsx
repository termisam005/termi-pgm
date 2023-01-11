import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import SearchComponent from "./SearchComponent";
import ImgComponent from "./ImgComponent";
import ProfComponent from "./ProfComponent";
import ToggleCheck from "./ToggleCheck";

const PopRoster = (props) => {

    const { open, close } = props;

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent selectPop">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">
                            Roster applicant
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts">
                    <div className="tab_line p-0">
                        <p className="go on">
                            <span className="hc_cout">99</span>
                            Creator
                        </p>
                        <p className="go">
                            <span className="hc_cout">99</span>
                            Artist
                        </p>
                        <p className="go">
                            <span className="hc_cout">99</span>
                            A&R
                        </p>
                        <p className="go">
                            <span className="hc_cout">99</span>
                            Group
                        </p>
                    </div>
                    <div className="selPop_wrap">
                        <section className="selpp_content norm">
                            <article className="selpp_top h60">
                                <SearchComponent srch_class="hd_search m-t-10 box" btn_type="button"
                                    btn_class="btn_srch" input_class="hd_input" placeholder="Try searching for Connect list" />
                            </article>
                            <article className="selpp_cont">
                                <div className="selpp_contin scroll sc_y">

                                    <section className="company_group">
                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/prof_ex2.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            Musician.FullName
                                                        </p>
                                                        <div className="tip_line">
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Piano</span>
                                                            </p>
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Guitar</span>
                                                            </p>
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Engineer</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/prof_ex1.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            Musician.FullName
                                                        </p>
                                                        <div className="tip_line">
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>A&R</span>
                                                            </p>
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Manager</span>
                                                            </p>
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Role 1</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/prof_ex2.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            Musician.FullName
                                                        </p>
                                                        <div className="tip_line">
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Piano</span>
                                                            </p>
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Guitar</span>
                                                            </p>
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Engineer</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/prof_ex1.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            Musician.FullName
                                                        </p>
                                                        <div className="tip_line">
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>A&R</span>
                                                            </p>
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Manager</span>
                                                            </p>
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Role 1</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </section>

                                </div>
                            </article>
                        </section>
                        <section className="selpp_select">
                            <article className="selpp_top">
                                <h3 className="dflx_ac">
                                    <span>Selected</span>
                                    <span className="hc_cout">2</span>
                                </h3>
                                <p className="clear">
                                    Clear all
                                </p>
                                <p className="line1"></p>
                            </article>
                            <article className="selpp_bords norm">
                                <div className="selpp_vert_wrap scroll sc_y">

                                    <div className="company_line norm">
                                        <span className="del_x"></span>
                                        <dl className="company_dl">
                                            <dt>
                                                <p className="simbol40">
                                                    <ImgComponent src="../resources/images/prof_ex2.png" />
                                                </p>
                                            </dt>
                                            <dd>
                                                <div className="prof_from">
                                                    <p className="prof_company">
                                                        A&R.FullName
                                                    </p>
                                                    <div className="tip_line">
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>A&R</span>
                                                        </p>
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>Manager</span>
                                                        </p>
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>Role 1</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="company_line norm">
                                        <span className="del_x"></span>
                                        <dl className="company_dl">
                                            <dt>
                                                <p className="simbol40">
                                                    <ImgComponent src="../resources/images/prof_ex2.png" />
                                                </p>
                                            </dt>
                                            <dd>
                                                <div className="prof_from">
                                                    <p className="prof_company">
                                                        A&R.FullName
                                                    </p>
                                                    <div className="tip_line">
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>A&R</span>
                                                        </p>
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>Manager</span>
                                                        </p>
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>Roles1</span>
                                                        </p>
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>Engineer</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
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

export default PopRoster;

