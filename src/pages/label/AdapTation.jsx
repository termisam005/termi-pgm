import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import InputComponent from "../../components/common/InputComponent";
import ImgComponent from "../../components/common/ImgComponent";
import SearchComponent from "../../components/common/SearchComponent";
import ToggleCheck from "../../components/common/ToggleCheck";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function AdapTation() {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };

    const [crdPop, setCrdPop] = useState(false);
    const openCrdPop = () => {
        setCrdPop(true);
    };
    const closeCrdPop = () => {
        setCrdPop(false);
    }


    return (
        <div className="wrap_prof">

            <HeaderTrans src="../resources/images/logo.png" />

            <section className="rolse_box official_box pf">
                <div className="rolse_in">

                    <article className="profile_contain">
                        <article className="roles_title">
                            <h1>
                                <span onClick={goBack} className="go_back">
                                    <img src="/resources/images/arr_back_wh.png" alt="image" />
                                </span>
                                <span className="big">Add Adaptation Version</span>
                            </h1>
                        </article>

                        <div className="pf_group">
                            <h5 className="pf_title">
                                Adapted Song Title
                            </h5>
                            <section className="pf_sheet">
                                <InputComponent class="wrput" placeholder="Wish" />
                                <div className="pf_txt m-t-10">
                                    <div className="put_tip">
                                        <img src="../resources/images/feel_wh.png" alt="feel" />
                                    </div>
                                    <p>It doesn’t matter if you arbitrarily decide the title of the song before submitting it.</p>
                                </div>
                                <InputComponent class="wrput m-t-15" placeholder="Sub-Song Title" />
                            </section>
                        </div>

                        <div className="pf_group">
                            <h5 className="pf_title">
                                Add Version
                            </h5>
                            <section className="pf_sheet">
                                <article className="form_sel dflx_ac m-b-12">
                                    <div className={radioState === 1 ? "check_line on" : "check_line"} onClick={() => radioTab(1)}>
                                        <p className="checkbox circ">
                                            <span className="circle"></span>
                                        </p>
                                        <span className="check_word">Version Type</span>
                                    </div>
                                    <p className="p-l-20"></p>
                                    <div className={radioState === 2 ? "check_line on" : "check_line"} onClick={() => radioTab(2)}>
                                        <p className="checkbox circ">
                                            <span className="circle"></span>
                                        </p>
                                        <span className="check_word">User Defined</span>
                                    </div>
                                </article>
                                <article className={radioState === 1 ? "fmsel_cont on" : "fmsel_cont"}>
                                    <select className="selector">
                                        <option value="">Select Version Type</option>
                                    </select>
                                </article>
                                <article className={radioState === 2 ? "fmsel_cont on" : "fmsel_cont"}>
                                    <InputComponent type="text" class="wrput" />
                                </article>
                            </section>
                        </div>

                        <div className="pf_group">
                            <h5 className="pf_title">
                                <span>Primary Artist</span>
                                <span className="m-l-5">(0)</span>
                            </h5>
                            <section className="pf_sheet">
                                <article className="add_sw_line">
                                    <Swiper slidesPerView={6} navigation={true} spaceBetween={0}>
                                        <SwiperSlide>
                                            <div onClick={openCrdPop} className="hover_prof">
                                                <div className="co_plus">
                                                    <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </article>
                            </section>
                        </div>
                        <div className="pf_group">
                            <h5 className="pf_title">
                                <span>Featured Artist</span>
                                <span className="m-l-5">(0)</span>
                            </h5>
                            <section className="pf_sheet">
                                <article className="add_sw_line">
                                    <Swiper slidesPerView={6} navigation={true} spaceBetween={0}>
                                        <SwiperSlide>
                                            <div onClick={openCrdPop} className="hover_prof">
                                                <div className="co_plus">
                                                    <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </article>
                            </section>
                        </div>
                        <div className="pf_group">
                            <h5 className="pf_title">
                                <span>Lyrics Adaptations by</span>
                                <span className="m-l-5">(0)</span>
                            </h5>
                            <section className="pf_sheet">
                                <article className="add_sw_line">
                                    <Swiper slidesPerView={6} navigation={true} spaceBetween={0}>
                                        <SwiperSlide>
                                            <div onClick={openCrdPop} className="hover_prof">
                                                <div className="co_plus">
                                                    <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </article>
                            </section>
                        </div>
                    </article>

                    <article className="create_bottom p-t-40">
                        <div></div>
                        <div>
                            <Link to="/">
                                <ButtonComponent class="btn_md1 cor w150" txt="Confirm" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <PopCredits open={crdPop} close={closeCrdPop} popname="Search Song Credit" />
        </div>
    )
}


const PopCredits = (props) => {

    const { open, close, popname } = props;

    const [soloState, setSoloState] = useState(1);
    const soloTab = (index) => {
        setSoloState(index);
    };

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent selectPop">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title f-s-22">
                            {popname}
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts">
                    <article className="form_sel dflx_ac">
                        <h5 className="m-r-40 f-s-16">Selected Item  (Select at least one)</h5>
                        <div className={soloState === 1 ? "check_line on" : "check_line"} onClick={() => soloTab(1)}>
                            <p className="checkbox circ">
                                <span className="circle"></span>
                            </p>
                            <span className="check_word">Solo</span>
                        </div>
                        <p className="p-l-30"></p>
                        <div className={soloState === 2 ? "check_line on" : "check_line"} onClick={() => soloTab(2)}>
                            <p className="checkbox circ">
                                <span className="circle"></span>
                            </p>
                            <span className="check_word">Group</span>
                        </div>
                    </article>
                    <div className="selPop_wrap">
                        <section className="selpp_content norm">
                            <article className="selpp_top h60">
                                <SearchComponent srch_class="hd_search m-t-10 box" btn_type="button"
                                    btn_class="btn_srch" input_class="hd_input" placeholder="Enter Collaborator name" />
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
                                                        Artist
                                                        <span className="m-l-3 cor994">(Group)</span>
                                                    </p>
                                                    <div className="tip_line">
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>Vocal</span>
                                                        </p>
                                                        <p className="tip_word">
                                                            <span className="jum"></span>
                                                            <span>BG Vocal</span>
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

