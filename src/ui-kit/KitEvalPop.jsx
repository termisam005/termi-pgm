import { useState } from "react";
import ButtonComponent from "../components/common/ButtonComponent";
import ButtonWith from "../components/common/ButtonWith";
import ImgComponent from "../components/common/ImgComponent";
import ProfComponent from "../components/common/ProfComponent";
import TempCounter from "../components/common/TempCounter";
import DatePeriod from "../components/common/DatePeriod";
import DateFix1 from "../components/common/DateFix1";
import DateFix2 from "../components/common/DateFix2";


export default function KitEvalPop() {

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };

    return (
        <div className="wrap_grad">
            <div className="container">

                <section className="demo_title">
                    <h1>Evaluation Popup</h1>
                </section>

                <section className="dflx_jcent">
                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_top">
                                    <div className="ptop_txt">
                                        <h1 className="ptop_title">Evaluation</h1>
                                    </div>
                                    <p className="ptop_x"></p>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_conts p-20 h460">
                                    <dl className="title_dl title_mid">
                                        <dt className='w75'>
                                            <div className="nemo_prof60">
                                                <ImgComponent src="../resources/images/nemo_prof_ex1.jpg" />
                                            </div>
                                        </dt>
                                        <dd>
                                            <div className="title_tlt">
                                                <h1>I Can Give You Heaven</h1>
                                            </div>
                                            <div className="title_mini">
                                                <p>
                                                    Pop, Dance/Electronic
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                    <div className="temp_title">
                                        <div className="call">
                                            Evaluation Templated 1
                                        </div>
                                        <div className="rate">
                                            Rate : 0 ~  +10
                                        </div>
                                    </div>
                                    <article className="temp_conts scroll sc_y">
                                        <div className="temp_line">
                                            <dl className="temp_name">
                                                <dt>Production</dt>
                                                <dd>Helper text</dd>
                                            </dl>
                                            <TempCounter />
                                        </div>
                                        <div className="temp_line">
                                            <dl className="temp_name">
                                                <dt>Production</dt>
                                                <dd>Helper text</dd>
                                            </dl>
                                            <TempCounter />
                                        </div>
                                        <div className="temp_line">
                                            <dl className="temp_name">
                                                <dt>Production</dt>
                                                <dd>Helper text</dd>
                                            </dl>
                                            <TempCounter />
                                        </div>
                                        <div className="temp_line">
                                            <dl className="temp_name">
                                                <dt>Production</dt>
                                                <dd>Helper text</dd>
                                            </dl>
                                            <TempCounter />
                                        </div>
                                        <div className="temp_line">
                                            <dl className="temp_name">
                                                <dt>Production</dt>
                                                <dd>Helper text</dd>
                                            </dl>
                                            <TempCounter />
                                        </div>
                                    </article>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_foot dflx_ac_jend">
                                    <ButtonComponent class="btn_sm1 cor" txt="Next" />
                                </div>
                            </div>
                        </section >
                    </div>
                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_top">
                                    <div className="ptop_txt">
                                        <h1 className="ptop_title">Feedback</h1>
                                    </div>
                                    <p className="ptop_x"></p>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_conts p-20 h460">
                                    <dl className="title_dl title_mid">
                                        <dt className='w75'>
                                            <div className="nemo_prof60">
                                                <ImgComponent src="../resources/images/nemo_prof_ex1.jpg" />
                                            </div>
                                        </dt>
                                        <dd className="p-t-5">
                                            <div className="title_tlt">
                                                <h1>I Can Give You Heaven</h1>
                                            </div>
                                            <div className="title_mini">
                                                <p>
                                                    Pop, Dance/Electronic
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                    <article className="pop_agcont">
                                        <section>
                                            <dl className="message_dl connect_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50" comming_class="comming ing"
                                                        line_class="line_over" src="../resources/images/prof_ex1.png">
                                                        <div className="pr_record_wrap">
                                                            <p className="record_num">85</p>
                                                        </div>
                                                    </ProfComponent>
                                                </dt>
                                                <dd className="conn_dd">
                                                    <div className="mess_who">
                                                        <span className="who">Kristoffer Kilen Aase</span>
                                                    </div>
                                                    <div className="dflx_ac tip_line">
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>Evaluators Owner</span>
                                                        </p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </section>
                                        <article className="form_sel m-t-40">
                                            <p className="sync_txt">Selecting Evaluation Result</p>
                                            <p className="p-10"></p>
                                            <div className={radioState === 1 ? "check_line on" : "check_line"} onClick={() => radioTab(1)}>
                                                <p className="checkbox circ">
                                                    <span className="circle"></span>
                                                </p>
                                                <span className="check_word">Cut</span>
                                            </div>
                                            <p className="p-10"></p>
                                            <div className={radioState === 2 ? "check_line on" : "check_line"} onClick={() => radioTab(2)}>
                                                <p className="checkbox circ">
                                                    <span className="circle"></span>
                                                </p>
                                                <span className="check_word">Exclusive Hold</span>
                                                <span className="sync_txt p-l-10">ⓘ 3 month (Exclusive)</span>
                                            </div>
                                            <p className="p-10"></p>
                                            <div className={radioState === 3 ? "check_line on" : "check_line"} onClick={() => radioTab(3)}>
                                                <p className="checkbox circ">
                                                    <span className="circle"></span>
                                                </p>
                                                <span className="check_word">Regular Hold</span>
                                                <span className="sync_txt p-l-10">ⓘ 6 month (Unexclusive)</span>
                                            </div>
                                            <p className="p-10"></p>
                                            <div className={radioState === 4 ? "check_line on" : "check_line"} onClick={() => radioTab(4)}>
                                                <p className="checkbox circ">
                                                    <span className="circle"></span>
                                                </p>
                                                <span className="check_word">Pass</span>
                                            </div>
                                        </article>
                                    </article>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_foot dflx_ac_jend">
                                    <ButtonComponent class="btn_sm1 m-r-10" txt="Back" />
                                    <ButtonComponent class="btn_sm1 cor" txt="Next" />
                                </div>
                            </div>
                        </section >
                    </div>
                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_top">
                                    <div className="ptop_txt">
                                        <h1 className="ptop_title"></h1>
                                    </div>
                                    <p className="ptop_x"></p>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_conts p-20 h460">
                                    <dl className="title_dl title_mid">
                                        <dt className='w75'>
                                            <div className="nemo_prof60">
                                                <ImgComponent src="../resources/images/nemo_prof_ex1.jpg" />
                                            </div>
                                        </dt>
                                        <dd>
                                            <div className="title_tlt">
                                                <h1>I Can Give You Heaven</h1>
                                            </div>
                                            <div className="title_mini">
                                                <p>
                                                    Pop, Dance/Electronic
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                    <article className="pop_agcont">
                                        <div className='cent_mark m-b-30'>
                                            <ImgComponent src="../resources/images/check_green72.png" />
                                            <h5 className='result'>Cut</h5>
                                        </div>
                                        <div className="comt_cont p-t-5">
                                            <p className='tlt_mid'>
                                                Comments
                                            </p>
                                            <div className="comt_zone pop h140">
                                                <div className='h-100 p-r-5 scroll sc_y'>
                                                    <p>
                                                        The lyrics evoke an emotional response from the listener<br />
                                                        The music and melody ads to the emotional impact of the song<br />
                                                        The song expresses the theme in a new or fresh way<br />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_foot dflx_ac_jend">
                                    <ButtonComponent class="btn_sm1 m-r-10" txt="Back" />
                                    <ButtonComponent class="btn_sm1 cor" txt="Next" />
                                </div>
                            </div>
                        </section >
                    </div>
                </section>

                <section className="dflx_jcent">
                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_top">
                                    <div className="ptop_txt">
                                        <h1 className="ptop_title"></h1>
                                    </div>
                                    <p className="ptop_x"></p>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_conts p-20 h460">
                                    <dl className="title_dl title_mid">
                                        <dt className='w75'>
                                            <div className="nemo_prof60">
                                                <ImgComponent src="../resources/images/nemo_prof_ex1.jpg" />
                                            </div>
                                        </dt>
                                        <dd>
                                            <div className="title_tlt">
                                                <h1>I Can Give You Heaven</h1>
                                            </div>
                                            <div className="title_mini">
                                                <p>
                                                    Pop, Dance/Electronic
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                    <article className="pop_agcont">
                                        <div className='cent_mark m-b-30'>
                                            <ImgComponent src="../resources/images/cancel_red72.png" />
                                            <h5 className='result'>Pass</h5>
                                        </div>
                                        <div className="comt_cont p-t-5">
                                            <p className='tlt_mid'>
                                                Comments
                                            </p>
                                            <div className="comt_zone pop h140">
                                                <div className='h-100 p-r-5 scroll sc_y'>
                                                    <p>
                                                        The lyrics evoke an emotional response from the listener<br />
                                                        The music and melody ads to the emotional impact of the song<br />
                                                        The song expresses the theme in a new or fresh way<br />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_foot dflx_ac_jend">
                                    <ButtonComponent class="btn_sm1 m-r-10" txt="Back" />
                                    <ButtonComponent class="btn_sm1 cor" txt="Next" />
                                </div>
                            </div>
                        </section >
                    </div>
                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_top">
                                    <div className="ptop_txt">
                                        <h1 className="ptop_title"></h1>
                                    </div>
                                    <p className="ptop_x"></p>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_conts p-20 h460">
                                    <dl className="title_dl title_mid">
                                        <dt className='w75'>
                                            <div className="nemo_prof60">
                                                <ImgComponent src="../resources/images/nemo_prof_ex1.jpg" />
                                            </div>
                                        </dt>
                                        <dd>
                                            <div className="title_tlt">
                                                <h1>I Can Give You Heaven</h1>
                                            </div>
                                            <div className="title_mini">
                                                <p>
                                                    Pop, Dance/Electronic
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                    <article className="pop_agcont">
                                        <div className='cent_mark m-b-30'>
                                            <ImgComponent src="../resources/images/stop_yellow72.png" />
                                            <h5 className='result'>EXCLUSIVE HOLD</h5>
                                        </div>
                                        <div className="comt_cont p-t-5">
                                            <p className='tlt_mid'>
                                                Comments
                                            </p>
                                            <div className="comt_zone pop h140">
                                                <div className='h-100 p-r-5 scroll sc_y'>
                                                    <p>
                                                        The lyrics evoke an emotional response from the listener<br />
                                                        The music and melody ads to the emotional impact of the song<br />
                                                        The song expresses the theme in a new or fresh way<br />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_foot dflx_ac_jend">
                                    <ButtonComponent class="btn_sm1 m-r-10" txt="Back" />
                                    <ButtonComponent class="btn_sm1 cor" txt="Next" />
                                </div>
                            </div>
                        </section >
                    </div>
                </section>

                <section className="dflx_jcent">
                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_top">
                                    <div className="ptop_txt">
                                        <h1 className="ptop_title">Feedback</h1>
                                    </div>
                                    <p className="ptop_x"></p>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_conts p-20 h460">
                                    <section className="temp_high">
                                        <article className="temp_schedule w320">
                                            <div className="temp_title">
                                                <div className="call p-0">
                                                    Exclusive Hold Period
                                                </div>
                                                <div className="rate p-0">
                                                    Today
                                                </div>
                                            </div>
                                            <p className="sync_txt m-t-10">
                                                ⓘ 6 month (Exclusive)
                                            </p>
                                            <DateFix1 class="date_set m-t-10" />
                                        </article>
                                    </section>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_foot dflx_ac_jend">
                                    <ButtonComponent class="btn_sm1 m-r-10" txt="Back" />
                                    <ButtonComponent class="btn_sm1 cor" txt="Next" />
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_top">
                                    <div className="ptop_txt">
                                        <h1 className="ptop_title">Feedback</h1>
                                    </div>
                                    <p className="ptop_x"></p>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_conts p-20 h460">
                                    <section className="temp_high">
                                        <article className="temp_schedule">
                                            <div className="temp_title">
                                                <div className="call p-0">
                                                    Exclusive Hold Period
                                                </div>
                                                <div className="rate p-0">
                                                    Today
                                                </div>
                                            </div>
                                            <p className="sync_txt m-t-10">
                                                ⓘ 6 month (Exclusive)
                                            </p>
                                            <DateFix2 class="date_set m-t-10" />
                                        </article>
                                    </section>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_foot dflx_ac_jend">
                                    <ButtonComponent class="btn_sm1 m-r-10" txt="Back" />
                                    <ButtonComponent class="btn_sm1 cor" txt="Next" />
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="p-20">
                        <section className="pop_contents active">
                            <div className="pop_body">
                                <div className="pop_top">
                                    <div className="ptop_txt">
                                        <h1 className="ptop_title">Feedback</h1>
                                    </div>
                                    <p className="ptop_x"></p>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_conts p-20 h460">
                                    <dl className="title_dl title_mid">
                                        <dt className='w75'>
                                            <div className="nemo_prof60">
                                                <ImgComponent src="../resources/images/nemo_prof_ex1.jpg" />
                                            </div>
                                        </dt>
                                        <dd className="p-t-5">
                                            <div className="title_tlt">
                                                <h1>I Can Give You Heaven</h1>
                                            </div>
                                            <div className="title_mini">
                                                <p>
                                                    Pop, Dance/Electronic
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                    <section className="temp_high h360">
                                        <article className="temp_schedule">
                                            <div className="temp_title">
                                                <div className="call p-0">
                                                    Exclusive Hold Period
                                                </div>
                                                <div className="rate p-0">
                                                    Today
                                                </div>
                                            </div>
                                            <section className="calen_set">
                                                <DatePeriod class="dflx_ac_jbet w-100" />
                                            </section>
                                            <p className="sync_txt m-t-15">
                                                ⓘ 3 month (Exclusive)
                                            </p>
                                        </article>
                                    </section>
                                </div>
                                <p className="line1"></p>
                                <div className="pop_foot dflx_ac_jend">
                                    <ButtonComponent class="btn_sm1 m-r-10" txt="Back" />
                                    <ButtonComponent class="btn_sm1 cor" txt="Next" />
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

            </div>
        </div>
    );
}