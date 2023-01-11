import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import BordComp from "./BordComp";
import ImgComponent from "./ImgComponent";
import SearchComponent from "./SearchComponent";
import ToggleCheck from "./ToggleCheck";

const PopCompany = (props) => {

    const { open, close } = props;


    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent selectPop">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">
                            Select Your Company
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>

                <div className="pop_conts">
                    <SearchComponent srch_class="hd_search" btn_type="button"
                        btn_class="btn_srch" input_class="hd_input" placeholder="Company" />
                    <div className="selPop_wrap">
                        <section className="selpp_content">
                            <article className="selpp_top">
                                <h3 className="dflx_ac">
                                    <span>About</span>
                                    <span className="sm">1,234</span>
                                    <span>Results</span>
                                </h3>
                                <p className="line1"></p>
                            </article>

                            <article className="selpp_cont">
                                <div className="selpp_contin scroll sc_y">

                                    <section className="company_group">

                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_sm40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            SM Entertainment
                                                        </p>
                                                        <p className="word">
                                                            Seoul, Republic of Korea
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_ui40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            UI Netwroks
                                                        </p>
                                                        <p className="word">
                                                            Seoul, Republic of Korea
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_tono40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            TONO Company
                                                        </p>
                                                        <p className="word">
                                                            New York, USA
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_spw40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            Sparwk
                                                        </p>
                                                        <p className="word">
                                                            Seoul, Republic of Korea
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>

                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_tono40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            TONO Company
                                                        </p>
                                                        <p className="word">
                                                            New York, USA
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_spw40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            Sparwk
                                                        </p>
                                                        <p className="word">
                                                            Seoul, Republic of Korea
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>


                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_spw40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            Sparwk
                                                        </p>
                                                        <p className="word">
                                                            Seoul, Republic of Korea
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_sm40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            SM Entertainment
                                                        </p>
                                                        <p className="word">
                                                            Seoul, Republic of Korea
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_ui40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            UI Netwroks
                                                        </p>
                                                        <p className="word">
                                                            Seoul, Republic of Korea
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_sm40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            SM Entertainment
                                                        </p>
                                                        <p className="word">
                                                            Seoul, Republic of Korea
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_sm40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            SM Entertainment
                                                        </p>
                                                        <p className="word">
                                                            Seoul, Republic of Korea
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_ui40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            UI Netwroks
                                                        </p>
                                                        <p className="word">
                                                            Seoul, Republic of Korea
                                                        </p>
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
                            <article className="selpp_bords">
                                <div className="selpp_vert_wrap scroll sc_y">

                                    <div className="company_line">
                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                        <dl className="company_dl">
                                            <dt>
                                                <p className="simbol40">
                                                    <ImgComponent src="../resources/images/simb_ui40.png" />
                                                </p>
                                            </dt>
                                            <dd>
                                                <div className="prof_from">
                                                    <p className="prof_company">
                                                        UI Netwroks
                                                    </p>
                                                    <p className="word">
                                                        Seoul, Republic of Korea
                                                    </p>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="company_line">
                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                        <dl className="company_dl">
                                            <dt>
                                                <p className="simbol40">
                                                    <ImgComponent src="../resources/images/simb_tono40.png" />
                                                </p>
                                            </dt>
                                            <dd>
                                                <div className="prof_from">
                                                    <p className="prof_company">
                                                        TONO Company
                                                    </p>
                                                    <p className="word">
                                                        New York, USA
                                                    </p>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="company_line">
                                        <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                        <dl className="company_dl">
                                            <dt>
                                                <p className="simbol40">
                                                    <ImgComponent src="../resources/images/simb_tono40.png" />
                                                </p>
                                            </dt>
                                            <dd>
                                                <div className="prof_from">
                                                    <p className="prof_company">
                                                        TONO Company
                                                    </p>
                                                    <p className="word">
                                                        New York, USA
                                                    </p>
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

export default PopCompany;

