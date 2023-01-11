import { React, useState } from "react";
import ImgComponent from "../common/ImgComponent";
import ButtonWith from "../common/ButtonWith";
import ProfComponent from "../common/ProfComponent";
import PopReport from "../common/PopReport";

export default function AsideVisit() {

    const [popReport, setPopReport] = useState(false);
    const openReport = () => {
        setPopReport(true);
    }
    const closeReport = () => {
        setPopReport(false);
    }

    return (
        <aside className="the_aside norm">
            <div>
                <section className="aside_top">
                    <div className="prof_zone">
                        <div className="call_line">
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>Creator</span>
                            </p>
                        </div>
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof c120 prof_shadow"
                            line_class="line_over" imgclass="imgw100" src="../resources/images/thumb_ex1.jpg">
                            <div className="photo_cont">
                                <div className="photo_wrap">
                                    <input type="file" className="file_put" />
                                    <img className="img_thumb" src="../resources/images/photo_photo.png" alt="photo" />
                                    <p>200 x 200</p>
                                    <span className="word">Pixel</span>
                                </div>
                            </div>
                        </ProfComponent>
                        <p className="prof_name_big">
                            <span>Jin suk Choi</span>
                        </p>
                        <div className="prof_from">
                            <p className="f-s-13">
                                <a className="underl" target="_blank" href="http://officialhomepage.com">
                                    http://officialhomepage.com
                                </a>
                            </p>
                            <p className="prof_location m-t-30">
                                <span className="cor913">Seoul, Republic of Korea</span>
                            </p>
                        </div>
                    </div>
                </section>
                <div className="aside_desc">
                    <div className="hire_wrap m-b-40">
                        <ButtonWith class="btn_md1 with w-48" spant="Connect" src="../resources/images/plusman_wh20.png" />
                        <ButtonWith class="btn_md1 cor with w-48" spant="Chat" src="../resources/images/talk_wh20.png" />
                    </div>
                    <div className="company_aside">
                        <p className="top">
                            ON THE WEB
                        </p>
                        <div className="society_iconts">
                            <a>
                                <ImgComponent src="../resources/images/vl24_facebook.png" />
                            </a>
                            <a>
                                <ImgComponent src="../resources/images/vl24_youtube.png" />
                            </a>
                            <a>
                                <ImgComponent src="../resources/images/vl24_instagram.png" />
                            </a>
                            <a>
                                <ImgComponent src="../resources/images/vl24_twitter.png" />
                            </a>
                        </div>
                    </div>
                    <div className="company_aside">
                        <p className="top">
                            COMPANY & GROUP
                        </p>
                        <dl className="dl_company aside">
                            <dt>
                                <div className="prof_wrap40">
                                    <span className="comming ing"></span>
                                    <p className="simbol40">
                                        <img src="../resources/images/simb_sm40.png" alt="logo" />
                                    </p>
                                </div>
                            </dt>
                            <dd>
                                <div className="prof_from">
                                    <p className="prof_company">
                                        <span className="cor913">SM Entertainment</span>
                                    </p>
                                    <p className="word">
                                        <span>Seoul, Republic of Korea </span>
                                    </p>
                                </div>
                            </dd>
                        </dl>
                        <dl className="dl_company aside">
                            <dt>
                                <div className="prof_wrap40">
                                    <p className="simbol40">
                                        <img src="../resources/images/simb_tono40.png" alt="logo" />
                                    </p>
                                </div>
                            </dt>
                            <dd>
                                <div className="prof_from">
                                    <p className="prof_company">
                                        <span className="cor913">Dsign Music</span>
                                    </p>
                                    <p className="word">
                                        <span>Oslo, Norway</span>
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
                        </div>
                        <section className="area_set hauto">
                            <article className="area_result">
                                <p className="rslt">"Multi-platinum selling producer😎✨"</p>
                            </article>
                        </section>
                    </div>
                    <div className="feat_content m-t-30">
                        <div className="dflx_ac_jbet m-b-8">
                            <p className="title">VERIFICATION</p>
                            <p></p>
                        </div>
                        <div className="bn_lg">
                            <div className="curpt">
                                <span className="shield"></span>
                                <span className="word">Account</span>
                            </div>
                            {/* <span className="pipe">|</span> */}
                            <div className="curpt">
                                <span className="person14"></span>
                                <span className="word m-t-1">Profile</span>
                            </div>
                        </div>
                        <div className="bn_lg">
                            <div className="curpt">
                                <span className="crown"></span>
                                <span className="word">Accolade</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aside_last dflx_ac_jbet p-t-10">
                    <p className="aslast_text">
                        Member since : 13 Aug 2022
                    </p>
                    <p onClick={openReport} className="report">
                        <span>Report</span>
                    </p>
                </div>
            </div>
            <PopReport open={popReport} close={closeReport} />
        </aside>
    );
}