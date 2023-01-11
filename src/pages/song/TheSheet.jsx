import { useState } from 'react';
import ImgComponent from "../../components/common/ImgComponent";
import ProfComponent from "../../components/common/ProfComponent";
import EtcCont from "../../components/common/EtcCont";
import ButtonComponent from '../../components/common/ButtonComponent';
import ButtonWith from "../../components/common/ButtonWith";
import InputComponent from '../../components/common/InputComponent';
import BordComp from '../../components/common/BordComp';
import PopPublisher from "../../components/common/PopPublisher";
import PopRoles from "../../components/common/PopRoles";

const TheSheet = (props) => {

    const [comyPop, setComyPop] = useState(false);
    const openComy = () => {
        setComyPop(true);
    };
    const closeComy = () => {
        setComyPop(false);
    }

    const [popUpsSplit, setpopSplit] = useState(false);
    const openSplit = () => {
        setpopSplit(true);
    }
    const closeSplit = () => {
        setpopSplit(false);
    }

    const [popUpsSet1, setpopSet1] = useState(false);
    const openSet1 = () => {
        setpopSet1(true);
    }
    const closeSet1 = () => {
        setpopSet1(false);
    }

    //Pop Agree
    const [popAgree, setPopAgree] = useState(false);
    const openAgree = () => {
        setPopAgree(true);
    }
    const closeAgree = () => {
        setPopAgree(false);
    }

    return (
        <section className={props.sheet_class}>
            <div className="sheet_wrap">
                <article className="sheet_over">
                    <dl className="sheet_dl">
                        <dt className="w50">
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50" comming_class="comming ing"
                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                        </dt>
                        <dd>
                            <div className="mess_who sheet_who">
                                <span className="who">
                                    Jin-suk Choi
                                </span>
                                <span onClick={openComy} className="talking"></span>
                                <EtcCont wrap_class="wrap_etc posab" btn_class="btn_hor_etc md">
                                    <li onClick={openSet1}>Set Profile</li>
                                    <li onClick={openSplit}>Share Split</li>
                                </EtcCont>
                            </div>
                            <div className="mess_tip bord">
                                <span className="bord_tip">
                                    Composer
                                </span>
                            </div>
                        </dd>
                    </dl>
                    <div className="sheet_text">
                        <p className="ip">IPI# 0064397510821</p>
                        <p>EKKO Music Rights Europe</p>
                        <p>EKKO Music Rights HQ</p>
                        <p>KOMCA</p>
                    </div>
                </article>
                <article className="sheet_down">
                    <div className="result_line">
                        <div>
                            <p className="agreed">
                                <span>Agreed and Accepted</span>
                                <span className="result">13 Aug 2021</span>
                            </p>
                        </div>
                        <div className="result_right">
                            <div className="result_sheet">
                                <ImgComponent class="m-r-5" src="../resources/images/check_green24.png" />
                                <span>70.000</span>
                                <span>%</span>
                            </div>
                            <ButtonComponent onClick={openAgree} class="btn_sm1 cor w140 m-t-4" txt="Agree & Accept" />
                        </div>
                    </div>
                </article>
            </div>
            <PopTalk open={comyPop} close={closeComy} />
            <PopSet1 open={popUpsSet1} close={closeSet1} />
            <PopSplit open={popUpsSplit} close={closeSplit} />
            <PopAccept open={popAgree} close={closeAgree} />
        </section>
    )
}


//Pop Agree & Accept
const PopAccept = (props) => {
    const { open, close } = props;

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };

    //Pop
    const [resultPop, setResultPop] = useState(false);
    const onResult = () => {
        setResultPop(true);
    };
    const offResult = () => {
        setResultPop(false);
    };

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">Agree & Accept</h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
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
                                <h1>MAL HAL SU EOBS NEUN BI MIL</h1>
                            </div>
                            <div className="title_mini">
                                <p className="f-s-13">
                                    Secret Secret
                                </p>
                                <p className="cor994">
                                    Adapted Song Title
                                </p>
                            </div>
                        </dd>
                    </dl>
                    <article className="pop_agcont">
                        <section className="pop_split">
                            <dl className="message_dl connect_dl">
                                <dt>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50" comming_class="comming ing"
                                        line_class="line_over" src="../resources/images/prof_ex1.png" />
                                </dt>
                                <dd className="conn_dd">
                                    <div className="mess_who">
                                        <span className="who">Issac Alberiz</span>
                                    </div>
                                    <div className="dflx_ac tip_line">
                                        <p className="tip_word">
                                            <span className="jum"></span>
                                            <span>Producer</span>
                                        </p>
                                    </div>
                                </dd>
                            </dl>
                            <div className="split_right">
                                <p className="cor994 m-b-2">Your Split</p>
                                <p className="f-s-16">9.300%</p>
                            </div>
                        </section>
                        <article className="form_sel dflx_ac m-t-20">
                            <div className={radioState === 1 ? "check_line on" : "check_line"} onClick={() => radioTab(1)}>
                                <p className="checkbox circ">
                                    <span className="circle"></span>
                                </p>
                                <span className="check_word">Agree & Accept</span>
                            </div>
                            <p className="p-10"></p>
                            <div className={radioState === 2 ? "check_line on" : "check_line"} onClick={() => radioTab(2)}>
                                <p className="checkbox circ">
                                    <span className="circle"></span>
                                </p>
                                <span className="check_word">Hold</span>
                            </div>
                        </article>
                        <div className="comt_cont p-t-5">
                            <p className='tlt_mid'>
                                Comments
                            </p>
                            <div className="comt_zone song pop">
                                <div className='h-100 p-r-5 scroll sc_y'>
                                    <p>
                                        The lyrics evoke an emotional response from the listener<br />
                                        The music and melody ads to the emotional impact of the song<br />
                                        The song expresses the theme in a new or fresh way<br />
                                        The lyrics evoke an emotional response from the listener<br />
                                        The music and melody ads to the emotional impact of the song<br />
                                        The song expresses the theme in a new or fresh way<br />
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
                <div className="pop_foot">
                    <ButtonComponent onClick={onResult} class="btn_md3 cor w-100" txt="Next" />
                </div>
            </div>
            <PopResult open={resultPop} close={offResult} />
        </section >
    )
}

const PopResult = (props) => {
    const { open, close } = props;

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title"></h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <div className="pop_conts p-20 h460">
                    <dl className="title_dl title_mid">
                        <dt className="w75">
                            <div className="nemo_prof60">
                                <ImgComponent src="../resources/images/nemo_prof_ex1.jpg" />
                            </div>
                        </dt>
                        <dd>
                            <div className="title_tlt">
                                <h1>MAL HAL SU EOBS NEUN BI MIL</h1>
                            </div>
                            <div className="title_mini">
                                <p className="f-s-13">
                                    Secret Secret
                                </p>
                                <p className="cor994">
                                    Adapted Song Title
                                </p>
                            </div>
                        </dd>
                    </dl>
                    <article className="pop_agcont">
                        <section className="pop_res_board">
                            <div className='cent_mark'>
                                <ImgComponent src="../resources/images/check_green72.png" />
                                <ImgComponent src="../resources/images/stop_yellow72.png" />
                                <h5 className='result'>Accept</h5>
                            </div>
                            <p>Thank you for your Agree & Accept</p>
                        </section>
                    </article>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md3 cor w-100" txt="Confirm" />
                </div>
            </div>
        </section >
    )
}
//Pop Agree & Accept End


const PopTalk = (props) => {
    const { open, close } = props;
    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent">
                <div className="pop_conts">
                    <div className="pop_cent">
                        I'm dissatisfied with the split rate.<br />
                        I think the contribution from the beginning of the<br />
                        project tothe present is very high.
                    </div>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md3 w-48" txt="Cancel" />
                    <ButtonComponent onClick={close} class="btn_md3 cor w-48" txt="Share Split" />
                </div>
            </div>
        </section >
    )
}

const PopSplit = (props) => {
    const { open, close } = props;

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent pop_dial">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">Share split</h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts">
                    <article className="split_zone scroll sc_y">
                        <div className="split_box">
                            <dl className="sheet_dl">
                                <dt className="w50">
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                        line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                </dt>
                                <dd>
                                    <div className="mess_who sheet_who w-100">
                                        <span className="who">
                                            Jin-suk Choi
                                        </span>
                                    </div>
                                    <div className="mess_tip bord">
                                        <p className="comp_name">Company.name</p>
                                    </div>
                                    <div className="split_cont">
                                        <div className="split_txt">
                                            <span className="word">Seoul, Republic of Korea</span>
                                            <span className="word">Korean, English</span>
                                            <span className="word cor913 tell">+82 1012345678</span>
                                            <span className="word cor913">email@email.com</span>
                                        </div>
                                        <div className="split_result">
                                            <p className="top">
                                                <span>Split</span>
                                                <span className="ess">*</span>
                                            </p>
                                            <InputComponent class="wrput mid trans" value="50.000%" />
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="split_box">
                            <dl className="sheet_dl">
                                <dt className="w50">
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                        line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                </dt>
                                <dd>
                                    <div className="mess_who sheet_who w-100">
                                        <span className="who">
                                            Jin-suk Choi
                                        </span>
                                    </div>
                                    <div className="mess_tip bord">
                                        <p className="comp_name">Company.name</p>
                                    </div>
                                    <div className="split_cont">
                                        <div className="split_txt">
                                            <span className="word">Seoul, Republic of Korea</span>
                                            <span className="word">Korean, English</span>
                                            <span className="word cor913 tell">+82 1012345678</span>
                                            <span className="word cor913">email@email.com</span>
                                        </div>
                                        <div className="split_result">
                                            <p className="top">
                                                <span>Split</span>
                                                <span className="ess">*</span>
                                            </p>
                                            <InputComponent class="wrput mid trans" value="50.000%" />
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="split_box">
                            <dl className="sheet_dl">
                                <dt className="w50">
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                        line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                </dt>
                                <dd>
                                    <div className="mess_who sheet_who w-100">
                                        <span className="who">
                                            Jin-suk Choi
                                        </span>
                                    </div>
                                    <div className="mess_tip bord">
                                        <p className="comp_name">Company.name</p>
                                    </div>
                                    <div className="split_cont">
                                        <div className="split_txt">
                                            <span className="word">Seoul, Republic of Korea</span>
                                            <span className="word">Korean, English</span>
                                            <span className="word cor913 tell">+82 1012345678</span>
                                            <span className="word cor913">email@email.com</span>
                                        </div>
                                        <div className="split_result">
                                            <p className="top">
                                                <span>Split</span>
                                                <span className="ess">*</span>
                                            </p>
                                            <InputComponent class="wrput mid trans" value="50.000%" />
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="split_box">
                            <dl className="sheet_dl">
                                <dt className="w50">
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                        line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                </dt>
                                <dd>
                                    <div className="mess_who sheet_who w-100">
                                        <span className="who">
                                            Jin-suk Choi
                                        </span>
                                    </div>
                                    <div className="mess_tip bord">
                                        <p className="comp_name">Company.name</p>
                                    </div>
                                    <div className="split_cont">
                                        <div className="split_txt">
                                            <span className="word">Seoul, Republic of Korea</span>
                                            <span className="word">Korean, English</span>
                                            <span className="word cor913 tell">+82 1012345678</span>
                                            <span className="word cor913">email@email.com</span>
                                        </div>
                                        <div className="split_result">
                                            <p className="top">
                                                <span>Split</span>
                                                <span className="ess">*</span>
                                            </p>
                                            <InputComponent class="wrput mid trans" value="50.000%" />
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </article>
                </div>
                <p className="line1"></p>
                <div className="pop_foot result">
                    <div className="result_bet">
                        <p className="agreed">
                            <span>Creation Date</span>
                            <span className="m-l-5">:</span>
                            <span className="result">13 Aug 2021</span>
                        </p>
                        <p className="agreed">
                            <span>Last updated</span>
                            <span className="m-l-5">:</span>
                            <span className="result">13 Aug 2021</span>
                        </p>
                    </div>
                    <ButtonComponent onClick={close} class="btn_md3 w-100" txt="Save" />
                </div>
            </div>
        </section>
    )
}

const PopSet1 = (props) => {
    const { open, close } = props;

    const [popPub1, setPopPub1] = useState(false);
    const openPub1 = () => {
        setPopPub1(true);
    }
    const closePub1 = () => {
        setPopPub1(false);
    }

    const [popPub2, setPopPub2] = useState(false);
    const openPub2 = () => {
        setPopPub2(true);
    }
    const closePub2 = () => {
        setPopPub2(false);
    }

    const [popPub3, setPopPub3] = useState(false);
    const openPub3 = () => {
        setPopPub3(true);
    }
    const closePub3 = () => {
        setPopPub3(false);
    }

    const [rolesPop, setRolesPop] = useState(false);
    const openRolpop = () => {
        setRolesPop(true);
    };
    const closeRolpop = () => {
        setRolesPop(false);
    }

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent pop_dial">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">Set profile</h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts">
                    <div className="split_box">
                        <div className="mini_prof">
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                        </div>
                        <dl className="sheet_dl">
                            <dt className="w50">
                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                    line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                            </dt>
                            <dd>
                                <div className="mess_who sheet_who">
                                    <span className="who">
                                        Jin-suk Choi
                                    </span>
                                </div>
                                <div className="mess_tip bord">
                                    <p className="comp_name">Company.name</p>
                                </div>
                                <div className="split_cont">
                                    <div className="split_txt">
                                        <span className="word">Seoul, Republic of Korea</span>
                                        <span className="word">Korean, English</span>
                                        <span className="word cor913 tell">+82 1012345678</span>
                                        <span className="word cor913">email@email.com</span>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
                <article className="sett_form">
                    <div className="sett_line">
                        <div className="left">
                            <span>Roles</span>
                            <span className="ess">*</span>
                        </div>
                        <div className="setco_line bord">
                            <div className="cont">
                                <BordComp word="Composer" />
                                <BordComp word="Lyricist" />
                            </div>
                            <ButtonWith onClick={openRolpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                        </div>
                    </div>
                    <div className="sett_line mgmore">
                        <div className="left">
                            <span>Person ID</span>
                            <span className="ess">*</span>
                        </div>
                        <div className="setco_line">
                            <div className="cont">
                                <div className="dflx_ac_jbet">
                                    <select className="selector wh mid w90">
                                        <option value="">IPI</option>
                                    </select>
                                    <div className="putt_box reset w200">
                                        <InputComponent type="text" class="wrput trans mid" placeholder="W05*****" />
                                        <span className="del_x"></span>
                                    </div>
                                </div>
                            </div>
                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                        </div>
                    </div>
                    <div className="sett_line">
                        <div className="left">
                            <span>Publisher</span>
                        </div>
                        <div className="setco_line">
                            <div onClick={openPub1} className="cont">
                                <div className="dflx_ac_jbet">
                                    <select className="selector wh mid">
                                        <option value="">Select Original Publisher</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sett_line mgmore">
                        <div className="left"></div>
                        <div className="setco_line">
                            <div onClick={openPub2} className="cont">
                                <div className="dflx_ac_jbet">
                                    <select className="selector wh mid">
                                        <option value="">Select Sub Publisher</option>
                                    </select>
                                </div>
                            </div>
                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                        </div>
                    </div>
                    <div className="sett_line mgmore">
                        <div className="left">
                            <span>Society</span>
                        </div>
                        <div className="setco_line">
                            <div onClick={openPub3} className="cont">
                                <div className="dflx_ac_jbet">
                                    <select className="selector wh mid">
                                        <option value="">Select PRO Society</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <p className="line1"></p>
                <div className="pop_foot result">
                    <div className="result_bet">
                        <p className="agreed">
                            <span>Creation Date</span>
                            <span className="m-l-5">:</span>
                            <span className="result">13 Aug 2021</span>
                        </p>
                        <p className="agreed">
                            <span>Last updated</span>
                            <span className="m-l-5">:</span>
                            <span className="result">13 Aug 2021</span>
                        </p>
                    </div>
                    <ButtonComponent onClick={close} class="btn_md3 w-100" txt="Save" />
                </div>
            </div>
            <PopPublisher open={popPub1} close={closePub1} popname={'Select Original Publisher'} />
            <PopPublisher open={popPub2} close={closePub2} popname={'Select Sub Publisher'} />
            <PopPublisher open={popPub3} close={closePub3} popname={'Select PRO Society'} />
            <PopRoles open={rolesPop} close={closeRolpop} />
        </section>
    )
}

export default TheSheet;