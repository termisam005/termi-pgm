import { useState } from "react";
import ImgComponent from "../../components/common/ImgComponent";
import ProfComponent from "../../components/common/ProfComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWith from "../../components/common/ButtonWith";
import InputComponent from "../../components/common/InputComponent";
import SizeSlider from "../../components/common/SizeSlider";
import Switch from "../../components/common/Switch";
import ReactTooltip from 'react-tooltip';
import BordComp from "../../components/common/BordComp";
import BordAdd from "../../components/common/BordAdd";
import PopGenres from "../../components/common/PopGenres";
import EtcCont from "../../components/common/EtcCont";
import TheSheet from "./TheSheet";
import SheetCredit2 from "./SheetCredit2";
import SheetCredit3 from "./SheetCredit3";


export default function SongInfoNew() {

    const [playing, setPlaying] = useState(false);
    const clickPlay = () => {
        setPlaying(!playing);
    };

    const [deletor, setDeletor] = useState(false);
    const clickDel = () => {
        setDeletor(true);
    };


    const [toggleState, setToggleState] = useState(4);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };

    const [genPop, setGenPop] = useState(false);
    const openGenpop = () => {
        setGenPop(true);
    };
    const closeGenpop = () => {
        setGenPop(false);
    }

    const [addMeta, setAddMeta] = useState(false);
    const clickAdd = () => {
        setAddMeta(true);
    };
    const clickTrash = () => {
        setAddMeta(false);
    };


    return (
        <article className="contain">
            <section className="contain_top">
                <div className="cttop_left">
                    <h1 className="top_title mid">Song Information</h1>
                </div>
                <div>
                    <ButtonComponent class="btn_sm1 cor w150" txt="Save" />
                </div>
            </section>
            <p className="line1"></p>
            <section className="contain_body">
                <article className="contact_line">
                    <div className="contact_sel p-b-5">
                        <div className="tab_line">
                            <p className={toggleState === 1 ? "tab on" : "tab"} onClick={() => toggleTab(1)}>Song & Lyrics</p>
                            <p className={toggleState === 2 ? "tab on" : "tab"} onClick={() => toggleTab(2)}>Music metadata</p>
                            <p className={toggleState === 3 ? "tab on" : "tab"} onClick={() => toggleTab(3)}>Split sheet</p>
                            <p className={toggleState === 4 ? "tab on" : "tab"} onClick={() => toggleTab(4)}>Credit</p>
                            <p className={toggleState === 5 ? "tab on" : "tab"} onClick={() => toggleTab(5)}>Timeline</p>
                            <p className={toggleState === 6 ? "tab on" : "tab"} onClick={() => toggleTab(6)}>Label Copy</p>
                        </div>
                    </div>
                </article>

                <div className={toggleState === 1 ? "song_cont on" : "song_cont"}>
                    <article className="contain inside_contain">
                        <section className="mini_top">
                            <h1 className="top_title">Song File</h1>
                        </section>
                        <p className="line1"></p>
                        <section className="contain_body">
                            <div className="file_wrap">
                                <article className="new_drop w-50 m-0">
                                    <div className={deletor ? "drop_box hidd on" : "drop_box hidd"}>
                                        <div className="drop_zone">
                                            <div className="dflx_ac_jcent">
                                                <img className="img_note" src="../resources/images/sv_drop.svg" alt="drop" />
                                                <span className="word mini">
                                                    Drop recordings here Drag and drop files<br /> below or browse files
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={deletor ? "drop_player hidd" : "drop_player"}>
                                        <div className="dp_play_line">
                                            <section className="dp_play">
                                                <div className="song_play">
                                                    <p onClick={clickPlay} className={playing ? "btn_play stop" : "btn_play"}></p>
                                                    <p className="file_name m-0">
                                                        A_Project_guide.mp3
                                                    </p>
                                                </div>
                                            </section>
                                            <span onClick={clickDel} className="del_x"></span>
                                        </div>
                                    </div>
                                </article>
                                <article className="dflx_jcent w-50">
                                    <section className="bpm_sett">
                                        <div className="range_sett midd">
                                            <div className="the_ranger">
                                                <SizeSlider />
                                            </div>
                                        </div>
                                        <div className="btm_line">
                                            <div className="dflx_ac">
                                                <span className="f-f-15">BPM</span>
                                                <p data-tip data-for="feeling" className="m-l-10 circ_feel"></p>
                                                <ReactTooltip id="feeling" place="top" effect="solid">
                                                    Beats Per Minute (BPM) indicates<br />
                                                    the number of beats in one minute.<br />
                                                    Please ensure you enter an accurate<br />
                                                    number into this field.
                                                </ReactTooltip>
                                            </div>
                                            <InputComponent type="number" class="wrput mid w120" />
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </section>
                        <p className="line1"></p>
                        <section className="contain_body">
                            <div className="comment_wrap">
                                <section className="comment_line">
                                    <div className="comment_zone">
                                        <div className="comt_cont hidd on">
                                            <textarea className="text_area comt_area">Owner's Comment</textarea>
                                            <div className="save_btline posab">
                                                <button className="btn_sav cancel">Cancel</button>
                                                <button className="btn_sav">Save</button>
                                                <p className="word_num m-l-5">0 / 200</p>
                                            </div>
                                        </div>
                                        <div className="comt_prof">
                                            <ProfComponent wrap_class="prof_wrap on" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                        </div>
                                    </div>
                                </section>
                                <section className="comment_exp">
                                    <div className="comt_check">
                                        <span>Contains Samples</span>
                                        <Switch label_class="switch-label" />
                                    </div>
                                    <p className="sync_txt">
                                        ⓘ Generally we’d advise not to use samples if you’re looking to get maximum work
                                        from your music as it’s preferred by clients when it comes to clearing the license.
                                        However, if you have used any samples it’s important that you have cleared those and
                                        to be upfront with regards to this so as not to cause any trouble later down the line.
                                    </p>
                                </section>
                            </div>
                        </section>
                    </article>
                    <article className="contain inside_contain">
                        <section className="mini_top">
                            <h1 className="top_title">Lyrics</h1>
                        </section>
                        <p className="line1"></p>
                        <section className="contain_body">
                            <div className="comment_wrap">
                                <section className="comment_line">
                                    <dl className="comment_dl">
                                        <dd>
                                            <div className="comt_cont hidd on">
                                                <div className="comt_zone song">
                                                    <div className="h-100 scroll sc_y">
                                                        <p>
                                                            아무 말도 못 해 난<br />
                                                            그저 내 입가에 맴돌아<br />
                                                            가끔씩 난 두려워져<br />
                                                            누군가 알아챌까<br /><br />

                                                            빗소리에 더 크게 외쳐 본다<br />
                                                            내 말들이 모두 묻혀질까 봐<br />
                                                            하늘이 점점 흐려져 간다<br /><br />

                                                            축 처진 어깨 젖어버린 옷<br />
                                                            시끄럽던 음악 소리마저 작게만 들려<br />
                                                            답답했던 내 목소리를 다<br />
                                                            이 비에 흘려보내고 싶어 꺼내 본다<br /><br />

                                                            내려오는 빗물에 모든 걱정들을 담아 떨쳐내<br />
                                                            이런 내 모습 속으로 더 깊이 젖어 들지 않게<br />
                                                            Baby it's fallin' eh oh<br />
                                                            끝의 한 방울까지 eh oh<br />
                                                            웃는 얼굴로 떠나보내<br />
                                                            손끝에 맺힌 마지막까지 모두 다<br /><br />

                                                            괜찮은 척하는 게 더 외로워<br />
                                                            홀로 다른 곳을 바라보며<br />
                                                            나의 고민을 수없이 지웠다 그리는 걸<br />
                                                            반복해 봤자 달라지는 건 없어<br /><br />

                                                            뭐 언젠간 익숙해지겠지<br />
                                                            이런 느낌조차 잊은 채로 살아가겠지<br />
                                                            바쁘게 걸어가다 보면 괜찮아지겠지<br />
                                                            비 온 뒤에 땅이 굳고 다시금 꽃이 피듯이<br /><br />

                                                            축 처진 어깨 젖어버린 옷<br />
                                                            시끄럽던 음악 소리마저 작게만 들려<br />
                                                            답답했던 내 목소리를 다<br />
                                                            이 비에 흘려보내고 싶어 꺼내 본다<br /><br />

                                                            내려오는 빗물에 모든 걱정들을 담아 떨쳐내<br />
                                                            이런 내 모습 속으로 더 깊이 젖어 들지 않게<br />
                                                            Baby it's fallin' eh oh<br />
                                                            끝의 한 방울까지 eh oh<br />
                                                            웃는 얼굴로 떠나보내<br />
                                                            손끝에 맺힌 마지막까지 모두 다<br /><br />

                                                            애써 더 웃어본다 (never, ever, ever, ever)<br />
                                                            하루가 길어진다 (never, ever, ever, ever)<br />
                                                            점점 더 지쳐간다 (never, ever, ever, ever)<br />
                                                            세상에 혼자 남겨진 기분이야<br />
                                                            난 이 맘조차 속이며 잘 지낼까<br /><br />

                                                            내려오는 빗물에 모든 걱정들을 담아 떨쳐내<br />
                                                            이런 내 모습 속으로 더 깊이 젖어 들지 않게<br />
                                                            Baby it's fallin' eh oh<br />
                                                            끝의 한 방울까지 eh oh<br />
                                                            웃는 얼굴로 떠나보내<br />
                                                            손끝에 맺힌 마지막까지 모두 다<br /><br />

                                                            Never, ever, ever, ever<br />
                                                            Never, ever, ever, ever<br />
                                                            Never, ever, ever, ever<br />
                                                            손끝에 맺힌 마지막까지 모두 다
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                    <div className="comment_zone h160">
                                        <div className="comt_cont hidd on">
                                            <textarea className="text_area comt_area">Owner's Comment</textarea>
                                            <div className="save_btline posab">
                                                <button className="btn_sav cancel">Cancel</button>
                                                <button className="btn_sav">Save</button>
                                                <p className="word_num m-l-5">0 / 200</p>
                                            </div>
                                        </div>
                                        <div className="comt_prof">
                                            <ProfComponent wrap_class="prof_wrap on" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                        </div>
                                    </div>
                                </section>
                                <section className="comment_exp">
                                    <dl className="lybord_dl">
                                        <dt></dt>
                                        <dd>
                                            <BordComp word="Norwegian" />
                                            <BordComp word="English" />
                                        </dd>
                                        <dd>
                                            <BordAdd word="Add Language" />
                                        </dd>
                                    </dl>
                                    <div className="comt_check">
                                        <span>Explicit Content</span>
                                        <Switch label_class="switch-label" />
                                    </div>
                                    <p className="sync_txt">
                                        ⓘ If you’re putting in a version with explicit content, it’s good to have a clean
                                        version as well in case it’s an inquiry. The more versions, the fewer problems you’ll
                                        have with getting a license.
                                    </p>
                                </section>
                            </div>
                        </section>
                    </article>
                </div>

                <div className={toggleState === 2 ? "song_cont on" : "song_cont"}>
                    <article className="list_body">
                        <section className="meta_box">
                            <div className="meta_top">
                                <h3>
                                    <span>Genres</span>
                                    <span className="ess">*</span>
                                </h3>
                                <ButtonWith onClick={openGenpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                <p className="line1"></p>
                            </div>
                            <div class="mata_cont">
                                <div className="meta_in">
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                </div>
                            </div>
                        </section>
                        <section className="meta_box">
                            <div className="meta_top">
                                <h3>
                                    <span>Sub- Genres</span>
                                </h3>
                                <ButtonWith onClick={openGenpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                <p className="line1"></p>
                            </div>
                            <div class="mata_cont">
                                <div className="meta_in">
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                </div>
                            </div>
                        </section>
                        <section className="meta_box">
                            <div className="meta_top">
                                <h3>
                                    <span>Themes</span>
                                    <span className="ess">*</span>
                                </h3>
                                <ButtonWith onClick={openGenpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                <p className="line1"></p>
                            </div>
                            <div class="mata_cont">
                                <div className="meta_in">
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                </div>
                            </div>
                        </section>
                        <section className="meta_box">
                            <div className="meta_top">
                                <h3>
                                    <span>Moods</span>
                                    <span className="ess">*</span>
                                </h3>
                                <ButtonWith onClick={openGenpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                <p className="line1"></p>
                            </div>
                            <div class="mata_cont">
                                <div className="meta_in">
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                </div>
                            </div>
                        </section>
                        <section className="meta_box">
                            <div className="meta_top">
                                <h3>
                                    <span>Vocal</span>
                                </h3>
                                <ButtonWith onClick={openGenpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                <p className="line1"></p>
                            </div>
                            <div class="mata_cont">
                                <div className="meta_in">
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                </div>
                            </div>
                        </section>
                        <section className="meta_box">
                            <div className="meta_top">
                                <h3>
                                    <span>Era</span>
                                </h3>
                                <ButtonWith onClick={openGenpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                <p className="line1"></p>
                            </div>
                            <div class="mata_cont">
                                <div className="meta_in">
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                </div>
                            </div>
                        </section>
                        <section className="meta_box">
                            <div className="meta_top">
                                <h3>
                                    <span>Tempo</span>
                                </h3>
                                <ButtonWith onClick={openGenpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                <p className="line1"></p>
                            </div>
                            <div class="mata_cont">
                                <div className="meta_in">
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                </div>
                            </div>
                        </section>
                        <section className="meta_box">
                            <div className="meta_top">
                                <h3>
                                    <span>Instruments</span>
                                </h3>
                                <ButtonWith onClick={openGenpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                <p className="line1"></p>
                            </div>
                            <div class="mata_cont">
                                <div className="meta_in">
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                    <BordComp word="Author" />
                                    <BordComp word="Arranger" />
                                </div>
                            </div>
                        </section>
                        <section className="meta_box">
                            <div className="meta_top">
                                <h3>
                                    <span>New metadata</span>
                                </h3>
                                <p className="line1"></p>
                            </div>
                            <div class="mata_cont">
                                <div className="putt_box m-b-15">
                                    <InputComponent class="wrput mid" placeholder="Metadata Name" value="Sounds Like" />
                                </div>
                                <div className="putt_box">
                                    <InputComponent class="wrput mid" placeholder="Value" value="Real name" />
                                </div>
                            </div>
                        </section>
                        <section className={addMeta ? "meta_box" : "meta_box new"}>
                            <div className="meta_top">
                                <h3>
                                    <span>New metadata</span>
                                </h3>
                                <p onClick={clickTrash} className="trash"></p>
                                <p className="line1"></p>
                            </div>
                            <div class="mata_cont">
                                <div className="putt_box m-b-15">
                                    <InputComponent class="wrput mid" placeholder="Metadata Name" />
                                </div>
                                <div className="putt_box">
                                    <InputComponent class="wrput mid" placeholder="Value" />
                                </div>
                            </div>
                        </section>
                        <section className="meta_box">
                            <div className="meta_plus">
                                <p onClick={clickAdd} className="circle_add">
                                    <ImgComponent src="../resources/images/plus_wh17.png" />
                                </p>
                                <h5>Additional Meta Data info</h5>
                                <p className="sync_txt">
                                    ⓘ Enter any words you think are associated with your song.
                                    We’ve suggested some for you to get started or you can enter your own.
                                </p>
                            </div>
                        </section>
                    </article>
                    <PopGenres open={genPop} close={closeGenpop} />
                </div>

                <div className={toggleState === 3 ? "song_cont on" : "song_cont"}>
                    <article className="list_body dark">
                        <section className="share_space">
                            <div className="share_text">
                                <dl>
                                    <dt>Writer’s share</dt>
                                    <dd>My Split 50.000%</dd>
                                </dl>
                            </div>
                            <div className="share_chart"></div>
                        </section>
                        <TheSheet sheet_class="the_sheet vol" />
                        <TheSheet sheet_class="the_sheet blue" />
                        <TheSheet sheet_class="the_sheet green" />
                        <section className="the_sheet sky">
                            <div className="sheet_wrap">
                                <article className="sheet_over">
                                    <dl className="sheet_dl">
                                        <dt className="w50">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        </dt>
                                        <dd>
                                            <div className="mess_who sheet_who">
                                                <span className="who">
                                                    Gabriel Brandes
                                                </span>
                                                <EtcCont wrap_class="wrap_etc posab" btn_class="btn_hor_etc md">
                                                    <li>Set Profile</li>
                                                    <li>Share Split</li>
                                                </EtcCont>
                                            </div>
                                            <div className="mess_tip bord">
                                                <span className="bord_tip">
                                                    Lyricist
                                                </span>
                                            </div>
                                        </dd>
                                    </dl>
                                    <div className="sheet_text">
                                        <p className="ip">IPI# 0064397510821</p>
                                        <p>JYP Publishing</p>
                                        <p>KOMCA</p>
                                    </div>
                                </article>
                                <article className="sheet_down">
                                    <div className="result_line">
                                        <div>
                                            <p className="agreed">
                                                <span>Agreed and Accepted</span>
                                                <span className="result">Hold</span>
                                            </p>
                                        </div>
                                        <div className="result_right">
                                            <div className="result_sheet">
                                                <ImgComponent class="m-r-5" src="../resources/images/stop_yellow24.png" />
                                                <span>9.325</span>
                                                <span>%</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </section>
                        <section className="the_sheet op05">
                            <div className="sheet_wrap">
                                <article className="sheet_over">
                                    <dl className="sheet_dl">
                                        <dt className="w50">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof none c50"
                                                imgclass="m-t-12" src="../resources/images/prof_none_50.png" />
                                        </dt>
                                        <dd>
                                            <div className="mess_who sheet_who">
                                                <span className="who">
                                                    Passport.name
                                                </span>
                                            </div>
                                            <div className="mess_tip bord">
                                                <span className="bord_tip">
                                                    Roles (DDEX on based)
                                                </span>
                                            </div>
                                        </dd>
                                    </dl>
                                    <div className="sheet_text">
                                        <p className="ip">IPI# 0064397510821 ISNI# 1234567891011</p>
                                        <p>Original Publisher Name</p>
                                        <p>Sub Publisher Name</p>
                                        <p>Society Name</p>
                                    </div>
                                </article>
                                <article className="sheet_down">
                                    <div className="result_line">
                                        <p className="agreed">
                                            <span>Agreed and Accepted</span>
                                            <span className="result">13 Aug 2021</span>
                                        </p>
                                        <div className="result_sheet">
                                            <ImgComponent class="m-r-5" src="../resources/images/check_green24.png" />
                                            <span>0.000</span>
                                            <span>%</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </section>
                        <div className="attetion">
                            <p className="sync_txt">
                                ⓘ writers hereby acknowledge that each has jointly written and/or composed the above mentioned musical
                                composition and confirm the respective contribution percentages described as above.
                            </p>
                        </div>
                    </article>
                </div>

                <div className={toggleState === 4 ? "song_cont on" : "song_cont"}>
                    <article className="list_body dark">
                        <SheetCredit3 sheet_class="the_sheet credit" />
                        <SheetCredit3 sheet_class="the_sheet credit" />
                        <section className="the_sheet credit">
                            <div className="meta_plus">
                                <p className="circle_add">
                                    <ImgComponent src="../resources/images/plus_wh17.png" />
                                </p>
                                <h5>Song Credits</h5>
                            </div>
                        </section>
                    </article>
                </div>

                <div className={toggleState === 5 ? "song_cont on" : "song_cont"}>
                    <article className="time_body">
                        <div className="time_conts scroll scroll-y">
                            <section className="time_today">
                                <section className="time_line">
                                    <div className="time_left">
                                        <h3>Today</h3>
                                    </div>
                                    <div className="time_right">
                                        <div className="time_clock">
                                            <span className="time">06:02</span>
                                            <span>AM</span>
                                        </div>
                                        <div className="timebar">
                                            <dl className="message_dl">
                                                <dt>
                                                    <div className="nemo_prof40">
                                                        <img src="../resources/images/nemo_prof_ex1.jpg" alt="image" />
                                                    </div>
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="who">MAL HAL SU EOBS NEUN BI MIL</span>
                                                    </div>
                                                    <div className="mess_tip">
                                                        <span className="word on">Available</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </section>
                                <section className="time_line">
                                    <div className="time_left">
                                    </div>
                                    <div className="time_right">
                                        <div className="time_clock">
                                            <span className="time">07:02</span>
                                            <span>AM</span>
                                        </div>
                                        <div className="timebar">
                                            <dl className="message_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                                                        line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                </dt>
                                                <dd>
                                                    <div className="mess_who">
                                                        <span className="who">Gabriel Brandes</span>
                                                    </div>
                                                    <div className="mess_tip">
                                                        <span className="word">Agreed and Accepted</span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </section>
                            </section>
                            <section className="time_line">
                                <div className="time_left">
                                    <h3>21</h3>
                                    <p>Dec 2021</p>
                                </div>
                                <div className="time_right">
                                    <div className="time_clock">
                                        <span className="time">06:02</span>
                                        <span>AM</span>
                                    </div>
                                    <div className="timebar">
                                        <dl className="message_dl">
                                            <dt>
                                                <ProfComponent wrap_class="prof_wrap" comming_class="comming ing" prof_class="prof in c40"
                                                    line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                            </dt>
                                            <dd>
                                                <div className="mess_who">
                                                    <span className="who">Jin Suk Choi</span>
                                                </div>
                                                <div className="mess_tip">
                                                    <span className="word">Writing Split Sheet</span>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </section>
                            <section className="time_line">
                                <div className="time_left">
                                    <h3>20</h3>
                                    <p>Dec 2021</p>
                                </div>
                                <div className="time_right">
                                    <div className="time_clock">
                                        <span className="time">00:20</span>
                                        <span>PM</span>
                                    </div>
                                    <div className="timebar">
                                        <dl className="message_dl">
                                            <dt>
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                            </dt>
                                            <dd>
                                                <div className="mess_who">
                                                    <span className="who">Gabriel Brandes</span>
                                                </div>
                                                <div className="mess_tip">
                                                    <span className="word">Agreed and Accepted</span>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </article>
                </div>

                <div className={toggleState === 6 ? "song_cont on" : "song_cont"}>
                    <article className="contain inside_contain">
                        <section className="mini_top">
                            <h1 className="top_title">Basic</h1>
                        </section>
                        <p className="line1"></p>
                        <section className="contain_body">
                            <div className="label_body">
                                <section className="label_contents">
                                    <article className="label_line">
                                        <div className="label_title">
                                            <p className="tlt">
                                                <span>Product Purpose</span>
                                                <span className="ess">*</span>
                                            </p>
                                        </div>
                                        <div className="label_cont">
                                            <select className="selector wh small w280">
                                                <option value="">Physical / Digital Release</option>
                                            </select>
                                        </div>
                                    </article>
                                    <article className="label_line">
                                        <div className="label_title">
                                            <p className="tlt">
                                                <span>Priority</span>
                                                <span className="ess">*</span>
                                            </p>
                                        </div>
                                        <div className="label_cont">
                                            <div className="w280 dflx_ac_jbet">
                                                <select className="selector wh small w-48">
                                                    <option value="">Disk 1</option>
                                                </select>
                                                <select className="selector wh small w-48">
                                                    <option value="">Track 01</option>
                                                </select>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="label_line">
                                        <div className="label_title">
                                            <p className="tlt">
                                                <span>Title Song</span>
                                            </p>
                                        </div>
                                        <div className="label_cont">
                                            <article className="form_sel dflx_ac m-b-0">
                                                <div className={radioState === 1 ? "check_line on" : "check_line"} onClick={() => radioTab(1)}>
                                                    <p className="checkbox circ">
                                                        <span className="circle"></span>
                                                    </p>
                                                    <span className="check_word f-s-12">Exposure</span>
                                                </div>
                                                <p className="p-l-30"></p>
                                                <div className={radioState === 2 ? "check_line on" : "check_line"} onClick={() => radioTab(2)}>
                                                    <p className="checkbox circ">
                                                        <span className="circle"></span>
                                                    </p>
                                                    <span className="check_word f-s-12">Unexposed</span>
                                                </div>
                                            </article>
                                        </div>
                                    </article>
                                </section>
                                <section className="label_share">
                                    <div className="w-33">
                                        <dl className="lab_dl">
                                            <dt>Date</dt>
                                            <dd>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">Created On</p>
                                                    <p className="w-55">27 Apr 2021</p>
                                                </div>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">Updated On</p>
                                                    <p className="w-55">27 Apr 2021</p>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="w-33">
                                        <dl className="lab_dl">
                                            <dt>File Information</dt>
                                            <dd>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">Sound Type</p>
                                                    <p className="w-55">Stereo</p>
                                                </div>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">File Format</p>
                                                    <p className="w-55">MP3</p>
                                                </div>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">Bit Depth</p>
                                                    <p className="w-55">16-bit</p>
                                                </div>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">Duration</p>
                                                    <p className="w-55">05:56</p>
                                                </div>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">File Size</p>
                                                    <p className="w-55">14.5 MB</p>
                                                </div>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">Sampling Rate</p>
                                                    <p className="w-55">44100Hz</p>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="w-33">
                                        <dl className="lab_dl">
                                            <dt>Song Information</dt>
                                            <dd>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">BPM</p>
                                                    <p className="w-55">96</p>
                                                </div>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">Tempo</p>
                                                    <p className="w-55">Andante</p>
                                                </div>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">Key Signature</p>
                                                    <p className="w-55">G Minor</p>
                                                </div>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">Time Signature</p>
                                                    <p className="w-55">12/8</p>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </article>

                    <article className="contain inside_contain">
                        <section className="mini_top">
                            <h1 className="top_title">Production</h1>
                        </section>
                        <p className="line1"></p>
                        <section className="contain_body">

                            <div className="product_body">
                                <article className="product_line">
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
                                                <span className="word">Approver</span>
                                            </p>
                                        </dd>
                                    </dl>
                                    <div className="nro_set w-33">
                                        <p className="nro_tlt">
                                            <span>ISRC</span>
                                            <span className="ess">*</span>
                                        </p>
                                        <input className="nro_put" type="text" />
                                    </div>
                                </article>
                                <article className="product_line">
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
                                                <span className="word">Producer</span>
                                            </p>
                                        </dd>
                                    </dl>
                                    <div className="nro_set w-33">
                                        <p className="nro_tlt">
                                            <span>Song Code</span>
                                            <span className="ess">*</span>
                                        </p>
                                        <input className="nro_put" type="text" />
                                    </div>
                                </article>
                                <article className="product_line">
                                    <dl className="message_dl connect_dl">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        </dt>
                                        <dd className="conn_dd set">
                                            <div className="mess_who">
                                                <span className="who">John Chen</span>
                                            </div>
                                            <p className="tip_word">
                                                <span className="word">Recording Engineer</span>
                                            </p>
                                        </dd>
                                    </dl>
                                    <div className="nro_set w-33">
                                        <p className="nro_tlt">
                                            <span>Recording Studio</span>
                                        </p>
                                        <input className="nro_put" type="text" placeholder="Studio name" value={'JYPE Studio'} />
                                    </div>
                                    <div className="nro_set w-33">
                                        <p className="nro_tlt">
                                            <span>Recording Studio Country</span>
                                        </p>
                                        <input className="nro_put" type="text" placeholder="Country name" value={'Republic of Korea'} />
                                    </div>
                                </article>
                                <article className="product_line">
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
                                                <span className="word">Mixer Engineer</span>
                                            </p>
                                        </dd>
                                    </dl>
                                    <div className="nro_set w-33">
                                        <p className="nro_tlt">
                                            <span>Mix Studio</span>
                                        </p>
                                        <input className="nro_put" type="text" placeholder="Studio name" />
                                    </div>
                                    <div className="nro_set w-33">
                                        <p className="nro_tlt">
                                            <span>Mix Studio Country</span>
                                        </p>
                                        <input className="nro_put" type="text" placeholder="Country name" />
                                    </div>
                                </article>
                                <article className="product_line">
                                    <dl className="message_dl connect_dl disble">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof none c50"
                                                imgclass="m-t-12" src="../resources/images/prof_none_50.png" />
                                        </dt>
                                        <dd className="conn_dd set">
                                            <div className="mess_who">
                                                <span className="who">Engineer.name</span>
                                            </div>
                                            <p className="tip_word">
                                                <span className="word">Mastering Engineer</span>
                                            </p>
                                        </dd>
                                    </dl>
                                    <div className="nro_set w-33">
                                        <p className="nro_tlt">
                                            <span>Mix Studio</span>
                                        </p>
                                        <input className="nro_put" type="text" placeholder="Studio name" value={'JYPE Studio'} />
                                    </div>
                                    <div className="nro_set w-33">
                                        <p className="nro_tlt">
                                            <span>Mix Studio Country</span>
                                        </p>
                                        <input className="nro_put" type="text" placeholder="Country name" value={'Republic of Korea'} />
                                    </div>
                                </article>
                            </div>

                        </section>
                    </article>
                </div>

            </section>

        </article>
    );
}