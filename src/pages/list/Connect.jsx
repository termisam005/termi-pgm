import { useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonWith from "../../components/common/ButtonWith";
import BordComp from "../../components/common/BordComp";
import RangeSlider from "../../components/common/RangeSlider";
import HeaderTrans from "../../components/header/HeaderTrans";
import PopTerritor from "../../components/common/PopTerritor";
import PopRoles from "../../components/common/PopRoles";
import PopGenres from "../../components/common/PopGenres";
import ReactTooltip from 'react-tooltip';
import MarkFavorite from "../../components/common/MarkFavorite";
import ImgComponent from "../../components/common/ImgComponent";
import ProfComponent from "../../components/common/ProfComponent";


export default function Connect() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [terriPop, setTerriPop] = useState(false);
    const openTerripop = () => {
        setTerriPop(true);
    }
    const closeTerripop = () => {
        setTerriPop(false);
    }

    const [rolesPop, setRolesPop] = useState(false);
    const openRolpop = () => {
        setRolesPop(true);
    };
    const closeRolpop = () => {
        setRolesPop(false);
    }

    const [genPop, setGenPop] = useState(false);
    const openGenpop = () => {
        setGenPop(true);
    };
    const closeGenpop = () => {
        setGenPop(false);
    }

    return (
        <div className="wrap dark">
            <HeaderTrans logo_class="logo_none" />

            <div className="container posrel">

                <section className="dark_back">
                    <div className="dflx_ac_jbet h-100">
                        <h3 onClick={goBack}>
                            <span className="go_back">
                                <img src="../resources/images/arr_back_wh.png" alt="link back" />
                            </span>
                            <span className="word">Back</span>
                        </h3>
                    </div>
                </section>

                <div className="contents">

                    <section className="aside_line">
                        <aside className="the_aside">
                            <div>
                                <div className="mini_top">
                                    <h1>Search</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="m-t-5 m-b-20">
                                        <article className="hd_search">
                                            <button type="button" className="btn_srch"></button>
                                            <input type="text" className="hd_input" placeholder="Satage or full or Real name" />
                                        </article>
                                    </div>
                                    <article className="addConts">
                                        <div onClick={openTerripop} className="add_line">
                                            <p>Territories</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div onClick={openRolpop} className="add_line">
                                            <p>Roles</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div onClick={openGenpop} className="add_line">
                                            <p>Genres</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div onClick={openGenpop} className="add_line">
                                            <p>Language</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="dflx_ac_jbet">
                                        <p className="m-b-5">
                                            Recent search Filter
                                        </p>
                                    </div>
                                    <div className="aside_bord">
                                        <BordComp word="Soundtrack" />
                                        <BordComp word="Blues" />
                                        <BordComp word="Blues" />
                                        <BordComp word="Romantic" />
                                        <BordComp word="Male vocals" />
                                        <BordComp word="Strings" />
                                        <BordComp word="Hot" />
                                    </div>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_last">
                                    <h1>Match</h1>
                                    <div>
                                        <section className="range_wrap">
                                            <div className="range_sett">
                                                <div className="the_ranger">
                                                    <RangeSlider />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

                        <article className="contain">

                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">Connect</h1>
                                </div>
                                <div>
                                </div>
                            </section>
                            <p className="line1"></p>

                            <section className="contain_list">
                                <article className="contact_line">
                                    <div className="tab_line">
                                        <p className="tab on">All</p>
                                        <p className="tab">Creator</p>
                                        <p className="tab">A&R</p>
                                        <p className="tab">Artist</p>
                                        <p className="tab">Musician</p>
                                        <p className="tab">Company</p>
                                        <p className="tab">Group</p>
                                    </div>
                                </article>

                                <article className="list_body">

                                    <article className="hidd_recompt on posrel">
                                        <div className="ctr_wrap">
                                            <div className="ctr_info">
                                                <div className="over">
                                                    <div className="dflx_jbet w-100">
                                                        <section className="recomt_wrap">
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                                line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                            <span className="crown"></span>
                                                        </section>
                                                        <div className="dpflx ctr_mark">
                                                            <p data-tip data-for="Chat" className="mark_talk m-t-1 m-r-15">
                                                                <ImgComponent src="../resources/images/mark_talk.png" />
                                                            </p>
                                                            <ReactTooltip id="Chat" place="top" effect="solid">
                                                                Chat
                                                            </ReactTooltip>
                                                            <MarkFavorite />
                                                        </div>
                                                    </div>
                                                    <div className="ctr_name">
                                                        <span className="bag"></span>
                                                        <h3 className="lst_title right">Ekko Music Right</h3>
                                                    </div>
                                                    <div className="ctr_text hauto">
                                                        <span>Oslo, Norway</span>
                                                        <div className="mid_text">
                                                            <p className="midsp">
                                                                <span>http://www.ekkomusicrights.com/</span>
                                                            </p>
                                                            <p className="midsp">
                                                                <span>contact@tono.no</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctr_foot">
                                            <p className="line2"></p>
                                            <div className="foot_info">
                                                <span className="circ_company">RL</span>
                                                <span className="circ_company">MP</span>
                                                <span className="circ_company">SC</span>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="hidd_recompt on posrel">
                                        <div className="ctr_wrap">
                                            <div className="ctr_info">
                                                <div className="over">
                                                    <div className="dflx_jbet w-100">
                                                        <section className="recomt_wrap">
                                                            <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof in c50"
                                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                            <span className="crown"></span>
                                                        </section>
                                                        <div className="dpflx ctr_mark">
                                                            <span className="bord_tip cor994 posrel">A&R</span>
                                                            <p data-tip data-for="Chat" className="mark_talk m-t-1 m-r-15">
                                                                <ImgComponent src="../resources/images/mark_talk.png" />
                                                            </p>
                                                            <ReactTooltip id="Chat" place="top" effect="solid">
                                                                Chat
                                                            </ReactTooltip>
                                                            <MarkFavorite />
                                                        </div>
                                                    </div>
                                                    <div className="ctr_name">
                                                        <span className="shield"></span>
                                                        <h3 className="lst_title right">Jin Suk Choi</h3>
                                                    </div>
                                                    <div className="ctr_text hauto">
                                                        <p className="record">
                                                            Seoul, Republic of Korea
                                                        </p>
                                                        <p className="record">
                                                            English, Korean
                                                        </p>
                                                        <div className="m-t-15 m-b-5">
                                                            <p className="f-s-12">
                                                                "Multi-platinum selling producer😎✨"
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctr_foot">
                                            <p className="line2"></p>
                                            <div className="foot_set">
                                                <dl className="message_dl message_dl24">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            src="../resources/images/simb_tono40.png" />
                                                    </dt>
                                                    <dd className="conn_dd">
                                                        <div className="mess_who">
                                                            <span className="who12 cor913">Ekko Music Right</span>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <dl className="message_dl message_dl24">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd className="conn_dd">
                                                        <div className="mess_who">
                                                            <span className="who12 cor913">Dsing Music</span>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="hidd_recompt on posrel">
                                        <div className="ctr_wrap">
                                            <div className="ctr_info">
                                                <div className="over">
                                                    <div className="dflx_jbet w-100">
                                                        <section className="recomt_wrap">
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                            <span className="crown"></span>
                                                        </section>
                                                        <div className="dpflx ctr_mark">
                                                            <p data-tip data-for="Chat" className="mark_talk m-t-1 m-r-15">
                                                                <ImgComponent src="../resources/images/mark_talk.png" />
                                                            </p>
                                                            <ReactTooltip id="Chat" place="top" effect="solid">
                                                                Chat
                                                            </ReactTooltip>
                                                            <MarkFavorite />
                                                        </div>
                                                    </div>
                                                    <div className="ctr_name">
                                                        <span className="group"></span>
                                                        <h3 className="lst_title right">Aliven</h3>
                                                    </div>
                                                    <div className="ctr_text hauto">
                                                        <span>Oslo, Norway</span>
                                                        <div className="mid_text">
                                                            <p className="midsp">
                                                                <span>http://www.ekkomusicrights.com/</span>
                                                            </p>
                                                            <p className="midsp">
                                                                <span>contact@tono.no</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctr_foot">
                                            <p className="line2"></p>
                                            <div className="multi_prof p-t-0 w-100">
                                                <div className="dflx_ac_jbet p-r-10">
                                                    <div className="dflx_ac">
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                    </div>
                                                    <p className="co_writers">
                                                        <span className="cor994">5</span>
                                                        <span className="m-l-5">connections work here</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="hidd_recompt on posrel">
                                        <div className="ctr_wrap">
                                            <div className="ctr_info">
                                                <div className="over">
                                                    <div className="dflx_jbet w-100">
                                                        <section className="recomt_wrap">
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                                line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                            <span className="crown"></span>
                                                        </section>
                                                        <div className="dpflx ctr_mark">
                                                            <p data-tip data-for="Chat" className="mark_talk m-t-1 m-r-15">
                                                                <ImgComponent src="../resources/images/mark_talk.png" />
                                                            </p>
                                                            <ReactTooltip id="Chat" place="top" effect="solid">
                                                                Chat
                                                            </ReactTooltip>
                                                            <MarkFavorite />
                                                        </div>
                                                    </div>
                                                    <div className="ctr_name">
                                                        <span className="bag"></span>
                                                        <h3 className="lst_title right">Ekko Music Right</h3>
                                                    </div>
                                                    <div className="ctr_text hauto">
                                                        <span>Oslo, Norway</span>
                                                        <div className="mid_text">
                                                            <p className="midsp">
                                                                <span>http://www.ekkomusicrights.com/</span>
                                                            </p>
                                                            <p className="midsp">
                                                                <span>contact@tono.no</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctr_foot">
                                            <p className="line2"></p>
                                            <div className="foot_info">
                                                <span className="circ_company">RL</span>
                                                <span className="circ_company">MP</span>
                                                <span className="circ_company">SC</span>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="hidd_recompt on posrel">
                                        <div className="ctr_wrap">
                                            <div className="ctr_info">
                                                <div className="over">
                                                    <div className="dflx_jbet w-100">
                                                        <section className="recomt_wrap">
                                                            <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof in c50"
                                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                            <span className="crown"></span>
                                                        </section>
                                                        <div className="dpflx ctr_mark">
                                                            <span className="bord_tip cor994 posrel">Creator</span>
                                                            <p data-tip data-for="Chat" className="mark_talk m-t-1 m-r-15">
                                                                <ImgComponent src="../resources/images/mark_talk.png" />
                                                            </p>
                                                            <ReactTooltip id="Chat" place="top" effect="solid">
                                                                Chat
                                                            </ReactTooltip>
                                                            <MarkFavorite />
                                                        </div>
                                                    </div>
                                                    <div className="ctr_name">
                                                        <span className="shield"></span>
                                                        <h3 className="lst_title right">Jin Suk Choi</h3>
                                                    </div>
                                                    <div className="ctr_text hauto">
                                                        <p className="record">
                                                            Seoul, Republic of Korea
                                                        </p>
                                                        <p className="record">
                                                            English, Korean
                                                        </p>
                                                        <div className="m-t-15 m-b-5">
                                                            <p className="f-s-12">
                                                                "Multi-platinum selling producer😎✨"
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctr_foot">
                                            <p className="line2"></p>
                                            <div className="foot_set">
                                                <dl className="message_dl message_dl24">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            src="../resources/images/simb_tono40.png" />
                                                    </dt>
                                                    <dd className="conn_dd">
                                                        <div className="mess_who">
                                                            <span className="who12 cor913">Ekko Music Right</span>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <dl className="message_dl message_dl24">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd className="conn_dd">
                                                        <div className="mess_who">
                                                            <span className="who12 cor913">Dsing Music</span>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="hidd_recompt on posrel">
                                        <div className="ctr_wrap">
                                            <div className="ctr_info">
                                                <div className="over">
                                                    <div className="dflx_jbet w-100">
                                                        <section className="recomt_wrap">
                                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                            <span className="crown"></span>
                                                        </section>
                                                        <div className="dpflx ctr_mark">
                                                            <p data-tip data-for="Chat" className="mark_talk m-t-1 m-r-15">
                                                                <ImgComponent src="../resources/images/mark_talk.png" />
                                                            </p>
                                                            <ReactTooltip id="Chat" place="top" effect="solid">
                                                                Chat
                                                            </ReactTooltip>
                                                            <MarkFavorite />
                                                        </div>
                                                    </div>
                                                    <div className="ctr_name">
                                                        <span className="group"></span>
                                                        <h3 className="lst_title right">Aliven</h3>
                                                    </div>
                                                    <div className="ctr_text hauto">
                                                        <span>Oslo, Norway</span>
                                                        <div className="mid_text">
                                                            <p className="midsp">
                                                                <span>http://www.ekkomusicrights.com/</span>
                                                            </p>
                                                            <p className="midsp">
                                                                <span>contact@tono.no</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ctr_foot">
                                            <p className="line2"></p>
                                            <div className="multi_prof p-t-0 w-100">
                                                <div className="dflx_ac_jbet p-r-10">
                                                    <div className="dflx_ac">
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                    </div>
                                                    <p className="co_writers">
                                                        <span className="cor994">5</span>
                                                        <span className="m-l-5">connections work here</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                </article>

                            </section>

                        </article>

                    </main>

                </div>
            </div>

            <PopTerritor open={terriPop} close={closeTerripop} />
            <PopRoles open={rolesPop} close={closeRolpop} />
            <PopGenres open={genPop} close={closeGenpop} />
        </div >
    )
}