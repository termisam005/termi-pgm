import { useState } from "react";
import ImgComponent from "../components/common/ImgComponent";
import ProfComponent from "../components/common/ProfComponent";
import Switch from "../components/common/Switch";
import SwitchOn from "../components/common/SwitchOn";
import ButtonWith from "../components/common/ButtonWith";
import ButtonComponent from "../components/common/ButtonComponent";
import ProfCompHover from "../components/common/ProfCompHover";


export default function ProfilePanel() {

    //회사용페이지 이동
    const goCompany = () => {
        window.location.href = "/CompanyOverview"
    }

    const [popUpsRep, setpopUpsRep] = useState(false);
    const openPopRep = () => {
        setpopUpsRep(true);
    }
    const closePopRep = () => {
        setpopUpsRep(false);
    }

    return (
        <div className="wrap_grad dark">
            <div className="container">

                <section className="demo_title">
                    <h1>Set Profile Panel</h1>
                </section>

                <section className="dflx_jcent">

                    <div className="p-20">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone norm">
                                        <p className="project_call">
                                            <span>Individual</span>
                                        </p>
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c120 prof_shadow"
                                            src="../resources/images/prof_j_120.png">
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
                                            <p className="prof_location m-t-30">
                                                <span>Seoul, Republic of Korea</span>
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="feat_content p-t-0">
                                        <div className="dflx_ac_jbet m-b-8">
                                            <p className="title">BIO</p>
                                            <p className="cor913 curpt">Save</p>
                                        </div>
                                        <section className="area_set">
                                            <textarea className="text_area" value="Multi-platinum selling producer😎✨">
                                            </textarea>
                                            <p className="word_num tar">
                                                <span>0</span><span className="m-l-3 m-r-3">/</span><span>200</span>
                                            </p>
                                        </section>
                                    </div>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_last">
                                    <p className="aslast_text">
                                        Project since : May, 28, 2022
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="p-20">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone norm">
                                        <p className="project_call">
                                            <span>Individual</span>
                                        </p>
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
                                            <p className="prof_location m-t-30">
                                                <span>Seoul, Republic of Korea</span>
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="feat_content p-t-0">
                                        <div className="dflx_ac_jbet m-b-8">
                                            <p className="title">BIO</p>
                                            <p className="cor913 curpt f-s-13">Edit</p>
                                        </div>
                                        <section className="area_set">
                                            <article className="area_result">
                                                <p className="rslt">"Multi-platinum selling producer😎✨"</p>
                                            </article>
                                        </section>
                                    </div>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_last">
                                    <p className="aslast_text">
                                        Project since : May, 28, 2022
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="p-20">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone">
                                        <p className="project_call corfff">
                                            <span>Creator</span>
                                        </p>
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
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="hire_wrap m-b-40">
                                        <article className="dflx_ac">
                                            <div className="hire_cont m-r-20">
                                                <span className="ic_thunder"></span>
                                                <span className="cor994">Hire Me</span>
                                            </div>
                                            <div className="hire_cont">
                                                <div className="switch_zone">
                                                    <SwitchOn label_class="switch-label" />
                                                    <span className="circ_feel">i</span>
                                                </div>
                                            </div>
                                        </article>
                                        <p className="cor913 curpt f-s-13">Edit</p>
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
                                        <dl onClick={goCompany} className="dl_company aside">
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
                                        <dl onClick={goCompany} className="dl_company aside">
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
                                            <p className="cor913 curpt f-s-13">Edit</p>
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
                                            <div>
                                                <span className="shield"></span>
                                                <span className="word">Account & Profile</span>
                                            </div>
                                        </div>
                                        <div className="bn_lg">
                                            <div>
                                                <span className="crown"></span>
                                                <span className="word">Accolade</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aside_last p-t-15">
                                    <p className="aslast_text">
                                        Member since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="p-20">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone">
                                        <p className="project_call corfff">
                                            <span>Creator</span>
                                        </p>
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
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="hire_wrap m-b-40">
                                        <ButtonWith class="btn_md1 with w-48" spant="Connect" src="../resources/images/plusman_wh24.png" />
                                        <ButtonWith class="btn_md1 cor with w-48" spant="RSVP" src="../resources/images/mail_wh24.png" />
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
                                        <dl onClick={goCompany} className="dl_company aside">
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
                                        <dl onClick={goCompany} className="dl_company aside">
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
                                            <p className="cor913 curpt f-s-13">Edit</p>
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
                                            <div>
                                                <span className="shield"></span>
                                                <span className="word">Account & Profile</span>
                                            </div>
                                            <p onClick={openPopRep} className="report">Report</p>
                                        </div>
                                        <div className="bn_lg">
                                            <div>
                                                <span className="crown"></span>
                                                <span className="word">Accolade</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aside_last p-t-15">
                                    <p className="aslast_text">
                                        Member since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>

                </section>

                <section className="dflx_jcent">

                    <div className="p-20">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone">
                                        <p className="project_call corfff">
                                            <span>A&R</span>
                                        </p>
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof c120 prof_shadow"
                                            line_class="line_over" imgclass="imgw100" src="../resources/images/thumb_ex2.jpg">
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
                                            <span>A&R.FullName</span>
                                        </p>
                                        <div className="prof_from">
                                            <p className="prof_location m-t-30">
                                                <span className="cor913">Seoul, Republic of Korea</span>
                                            </p>
                                        </div>
                                    </div>
                                </section>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="hire_wrap m-b-40">
                                        <article className="dflx_ac">
                                            <div className="hire_cont m-r-20">
                                                <span className="ic_thunder"></span>
                                                <span className="cor994">Pitching</span>
                                            </div>
                                            <div className="hire_cont">
                                                <div className="switch_zone">
                                                    <SwitchOn label_class="switch-label" />
                                                    <span className="circ_feel">i</span>
                                                </div>
                                            </div>
                                        </article>
                                        <p className="cor913 curpt f-s-13">Edit</p>
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
                                        <dl onClick={goCompany} className="dl_company aside">
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
                                                <span className="word">Account & Profile</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aside_last p-t-15">
                                    <p className="aslast_text">
                                        Member since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="p-20">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone">
                                        <p className="project_call corfff">
                                            <span>A&R</span>
                                        </p>
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof c120 prof_shadow"
                                            line_class="line_over" imgclass="imgw100" src="../resources/images/thumb_ex2.jpg">
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
                                            <span>Änna Marsh</span>
                                        </p>
                                        <div className="prof_from">
                                            <p className="prof_location m-t-30">
                                                <span className="cor913">Los Angeles, CA, USA</span>
                                            </p>
                                        </div>
                                    </div>
                                </section>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="hire_wrap m-b-40">
                                        <ButtonWith class="btn_md1 with w-48" spant="Connect" src="../resources/images/plusman_wh24.png" />
                                        <ButtonWith class="btn_md1 cor with w-48" spant="RSVP" src="../resources/images/mail_wh24.png" />
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
                                        <dl onClick={goCompany} className="dl_company aside">
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
                                                <span className="word">Account & Profile</span>
                                            </div>
                                            <p onClick={openPopRep} className="report">Report</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="aside_last p-t-15">
                                    <p className="aslast_text">
                                        Member since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="p-20">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone">
                                        <p className="project_call corfff">
                                            <span>Artist</span>
                                        </p>
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof c120 prof_shadow"
                                            line_class="line_over" imgclass="imgw100" src="../resources/images/project_ex1.jpg">
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
                                            <span>Artist.FullName</span>
                                        </p>
                                        <div className="prof_from">
                                            <p className="prof_location m-t-30">
                                                <span className="cor913">Seoul, Republic of Korea</span>
                                            </p>
                                        </div>
                                    </div>
                                </section>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="hire_wrap m-b-40">
                                        <article className="dflx_ac">
                                            <div className="hire_cont m-r-20">
                                                <span className="ic_thunder"></span>
                                                <span className="cor994">Available</span>
                                            </div>
                                            <div className="hire_cont">
                                                <div className="switch_zone">
                                                    <SwitchOn label_class="switch-label" />
                                                    <span className="circ_feel">i</span>
                                                </div>
                                            </div>
                                        </article>
                                        <p className="cor913 curpt f-s-13">Edit</p>
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
                                        <dl onClick={goCompany} className="dl_company aside">
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
                                                    "Main Dancer · Vocal"
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
                                                <span className="word">Account & Profile</span>
                                            </div>
                                        </div>
                                        <div className="bn_lg">
                                            <div>
                                                <span className="crown"></span>
                                                <span className="word">Accolade</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aside_last p-t-15">
                                    <p className="aslast_text">
                                        Member since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="p-20">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone">
                                        <p className="project_call corfff">
                                            <span>Artist</span>
                                        </p>
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof c120 prof_shadow"
                                            line_class="line_over" imgclass="imgw100" src="../resources/images/prof_ex1.png">
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
                                            <span>Artist.FullName</span>
                                        </p>
                                        <div className="prof_from">
                                            <p className="prof_location m-t-30">
                                                <span className="cor913">Los Angeles, CA, USA</span>
                                            </p>
                                        </div>
                                    </div>
                                </section>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="hire_wrap m-b-40">
                                        <ButtonWith class="btn_md1 with w-48" spant="Connect" src="../resources/images/plusman_wh24.png" />
                                        <ButtonWith class="btn_md1 cor with w-48" spant="RSVP" src="../resources/images/mail_wh24.png" />
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
                                        <dl onClick={goCompany} className="dl_company aside">
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
                                                <p className="rslt">
                                                    "Vocal · Lead Rapper · Lead Dance"
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
                                                <span className="word">Account & Profile</span>
                                            </div>
                                            <p onClick={openPopRep} className="report">Report</p>
                                        </div>
                                        <div className="bn_lg">
                                            <div>
                                                <span className="crown"></span>
                                                <span className="word">Accolade</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aside_last p-t-15">
                                    <p className="aslast_text">
                                        Member since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>

                </section>

                <section className="dflx_jcent">

                    <div className="p-20">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone">
                                        <p className="project_call corfff">
                                            <span>Primary Contact person</span>
                                        </p>
                                        <ProfCompHover wrap_class="prof_wrap" prof_class="prof c120 prof_shadow"
                                            line_class="line_over" imgclass="imgw100" src="../resources/images/nemo_prof_ex1.jpg" />
                                        <p className="prof_name_big">
                                            <span>First Middle Last</span>
                                        </p>
                                        <div className="prof_from">
                                            <p className="prof_location m-t-30">
                                                <span className="cor913">Seoul, Republic of Korea</span>
                                            </p>
                                        </div>
                                    </div>
                                </section>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="hire_wrap m-b-40">
                                        <article className="dflx_ac">
                                            <div className="hire_cont m-r-20">
                                                <span className="ic_thunder"></span>
                                                <span className="cor994">Recruiting</span>
                                            </div>
                                            <div className="hire_cont">
                                                <div className="switch_zone">
                                                    <Switch label_class="switch-label" />
                                                    <span className="circ_feel">i</span>
                                                </div>
                                            </div>
                                        </article>
                                        <p className="cor913 curpt f-s-13">Edit</p>
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
                                        <dl onClick={goCompany} className="dl_company aside">
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
                                                <span className="word">Account & Profile</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aside_last p-t-15">
                                    <p className="aslast_text">
                                        Member since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="p-20">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone">
                                        <p className="project_call corfff">
                                            <span>Primary Contact person</span>
                                        </p>
                                        <ProfCompHover wrap_class="prof_wrap" prof_class="prof c120 prof_shadow"
                                            line_class="line_over" imgclass="imgw100" src="../resources/images/nemo_prof_ex1.jpg" />
                                        <p className="prof_name_big">
                                            <span>First Middle Last</span>
                                        </p>
                                        <div className="prof_from">
                                            <p className="prof_location m-t-30">
                                                <span className="cor913">Seoul, Republic of Korea</span>
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
                                        <dl onClick={goCompany} className="dl_company aside">
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
                                                <span className="word">Account & Profile</span>
                                            </div>
                                            <p onClick={openPopRep} className="report">Report</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="aside_last p-t-15">
                                    <p className="aslast_text">
                                        Member since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="p-20">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone">
                                        <p className="project_call corfff">
                                            <span>Primary Contact person</span>
                                        </p>
                                        <ProfCompHover wrap_class="prof_wrap" prof_class="prof c120 prof_shadow"
                                            line_class="line_over" imgclass="imgw100" src="../resources/images/prof_ex2.png" />
                                        <p className="prof_name_big">
                                            <span>First Middle Last</span>
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
                                        <article className="dflx_ac">
                                            <div className="hire_cont m-r-20">
                                                <span className="ic_thunder"></span>
                                                <span className="cor994">Recruiting</span>
                                            </div>
                                            <div className="hire_cont">
                                                <div className="switch_zone">
                                                    <SwitchOn label_class="switch-label" />
                                                    <span className="circ_feel">i</span>
                                                </div>
                                            </div>
                                        </article>
                                        <p className="cor913 curpt f-s-13">Edit</p>
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
                                        <dl onClick={goCompany} className="dl_company aside">
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
                                                <span className="word">Account & Profile</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aside_last p-t-15">
                                    <p className="aslast_text">
                                        Member since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="p-20">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone">
                                        <p className="project_call corfff">
                                            <span>Primary Contact person</span>
                                        </p>
                                        <ProfCompHover wrap_class="prof_wrap" prof_class="prof c120 prof_shadow"
                                            line_class="line_over" imgclass="imgw100" src="../resources/images/prof_ex2.png" />
                                        <p className="prof_name_big">
                                            <span>First Middle Last</span>
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
                                        <dl onClick={goCompany} className="dl_company aside">
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
                                                <span className="word">Account & Profile</span>
                                            </div>
                                            <p onClick={openPopRep} className="report">Report</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="aside_last p-t-15">
                                    <p className="aslast_text">
                                        Member since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>

                </section>

                <PopReport open={popUpsRep} close={closePopRep} />

            </div>
        </div>
    )
}


const PopReport = (props) => {
    const { open, close } = props;

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className={"pop_bg"}></div>
            <div className="pop_body pop_ab_cent">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">Report</h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts">
                    <article className="pop_formzone">
                        <div className={radioState === 1 ? "check_line on" : "check_line"} onClick={() => radioTab(1)}>
                            <p className="checkbox circ">
                                <span className="circle"></span>
                            </p>
                            <span className="check_word">Pretending to be a specific person</span>
                        </div>
                        <p className="p-10"></p>
                        <div className={radioState === 2 ? "check_line on" : "check_line"} onClick={() => radioTab(2)}>
                            <p className="checkbox circ">
                                <span className="circle"></span>
                            </p>
                            <span className="check_word">Pornography</span>
                        </div>
                        <p className="p-10"></p>
                        <div className={radioState === 3 ? "check_line on" : "check_line"} onClick={() => radioTab(3)}>
                            <p className="checkbox circ">
                                <span className="circle"></span>
                            </p>
                            <span className="check_word">Hate speech and symbols</span>
                        </div>
                        <p className="p-10"></p>
                        <div className={radioState === 4 ? "check_line on" : "check_line"} onClick={() => radioTab(4)}>
                            <p className="checkbox circ">
                                <span className="circle"></span>
                            </p>
                            <span className="check_word">Violent or dangerous content</span>
                        </div>
                        <p className="p-10"></p>
                        <div className={radioState === 5 ? "check_line on" : "check_line"} onClick={() => radioTab(5)}>
                            <p className="checkbox circ">
                                <span className="circle"></span>
                            </p>
                            <span className="check_word">Domination, spam</span>
                        </div>
                        <p className="p-10"></p>
                        <div className={radioState === 6 ? "check_line on" : "check_line"} onClick={() => radioTab(6)}>
                            <p className="checkbox circ">
                                <span className="circle"></span>
                            </p>
                            <span className="check_word">Others</span>
                        </div>
                    </article>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md3 w-100" txt="Report it" />
                </div>
            </div>
        </section>
    )
}


