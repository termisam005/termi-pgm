import { React, useState } from "react";
import ImgComponent from "../common/ImgComponent";
import ButtonWith from "../common/ButtonWith";
//import openPopRep from "../../components/common/openPopRep";
import ProfComponent from "../common/ProfComponent";
import ProfCompHover from "../common/ProfCompHover";

export default function AsideCompany1() {

    return (
        <aside className="the_aside norm">
            <div>
                <section className="aside_top">
                    <div className="prof_zone">
                        <div className="call_line">
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>Music Publisher</span>
                            </p>
                        </div>
                        <ProfCompHover wrap_class="prof_wrap" prof_class="prof c120 prof_shadow"
                            line_class="line_over" imgclass="imgw100" src="../resources/images/simbol_ekko.png" />
                        <p className="prof_name_big">
                            <span className="f-s-18">EKKO Music Rights Europe</span>
                        </p>
                        <div className="prof_from">
                            <p className="prof_location m-t-30">
                                <span className="cor913">Stockholm, Sweden</span>
                            </p>
                        </div>
                    </div>
                </section>
                <p className="line1"></p>
                <div className="aside_desc">
                    <div className="hire_wrap m-b-40">
                        <ButtonWith class="btn_md1 with w-48" spant="Connect" src="../resources/images/plusman_wh24.png" />
                        <ButtonWith class="btn_md1 cor with w-48" spant="Apply" src="../resources/images/plane_wh24.png" />
                    </div>
                    <div className="company_aside">
                        <p className="top">
                            Primary Contact Person
                        </p>
                        <dl className="dl_company aside">
                            <dt>
                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40" comming_class="comming ing"
                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                            </dt>
                            <dd>
                                <div className="prof_from">
                                    <p className="prof_company">
                                        <span className="cor913">Robin Jenssen</span>
                                    </p>
                                    <p className="word">
                                        <span>President & Co-founder</span>
                                    </p>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div>
                <p className="line1"></p>
                <div className="aside_desc">
                    <div className="feat_content p-t-0">
                        <div className="dflx_ac_jbet m-b-8">
                            <p className="title">BIO</p>
                            <p className="cor913 curpt f-s-13">Edit</p>
                        </div>
                        <section className="area_set hauto">
                            <article className="area_result">
                                <p className="rslt">
                                    "Managing the rights in relation to the collection of Neighbouring Rights."
                                </p>
                            </article>
                        </section>
                    </div>
                    <div className="feat_content m-t-30">
                        <div className="dflx_ac_jbet m-b-8">
                            <p className="title">VERIFICATION</p>
                            <p></p>
                        </div>
                        <div className="bn_lg">
                            <div>
                                <span className="shield"></span>
                                <span className="word">Account</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aside_last dflx_ac_jbet p-t-10">
                    <p className="aslast_text">
                        Member since : 13 Aug 2022
                    </p>
                    <p className="report">
                        Report
                    </p>
                </div>
            </div>
        </aside>
    );
}