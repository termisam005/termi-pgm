import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ImgComponent from "../../components/common/ImgComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWith from "../../components/common/ButtonWith";
import InputComponent from "../../components/common/InputComponent";
import ProfComponent from "../../components/common/ProfComponent";
import Footer from "../../components/layout/Footer";
import AsideCompany2 from "../../components/layout/AsideCompany2";
import TheList2 from "../list/TheList2";
import ToggleCheck from "../../components/common/ToggleCheck";
import PopPublisher from "../../components/common/PopPublisher";
import PopLocation from "../../components/common/PopLocation";


export default function CompanyPart() {

    //Pop Add Partner
    const [partPop, setPartPop] = useState(false);
    const addPart = () => {
        setPartPop(true);
    };
    const closePart = () => {
        setPartPop(false);
    }

    //Pop Add Music Studio
    const [studioPop, setStudioPop] = useState(false);
    const addStudio = () => {
        setStudioPop(true);
    };
    const closeStudio = () => {
        setStudioPop(false);
    }

    return (
        <div className="wrap">
            <Header />

            <div className="banner_bg">
                <ImgComponent class="banner_img" src="../resources/images/banner_ex1.jpg" />
                <section className="banner_center">
                    <Blueline />
                </section>
            </div>

            <div className="container bann_container">

                <div className="contents">

                    <section className="aside_line">
                        <AsideCompany2 />
                    </section>

                    <main className="the_main">

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <div className="tab_line maint_line">
                                        <p className="art">
                                            <a href="/CompanyHome">Home</a>
                                        </p>
                                        <p className="art">
                                            <a href="/CompanyRos">Roster</a>
                                        </p>
                                        <p className="art on">
                                            <a href="/CompanyPart">Partner</a>
                                        </p>
                                        <p className="art">
                                            <a href="/CompanyPost">Post</a>
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <p className="line1"></p>

                            <section className="contain_body">

                                <article className="the_feed">
                                    <div className="mini_top p-t-20">
                                        <div className="dflx_ac_jbet m-b-5">
                                            <div className="cttop_left">
                                                <h1 className="top_title semib">
                                                    Partner
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="line1"></p>
                                    <div className="feed_conts">
                                        <article className="contact_line">
                                            <div className="contact_sel">
                                                <div className="tab_line">
                                                    <p className="go on">All</p>
                                                    <p className="go">Music Publisher</p>
                                                    <p className="go">Record Label</p>
                                                    <p className="go">Studio</p>
                                                    <p className="go">Society</p>
                                                    <p className="go">Organization</p>
                                                    <p className="go">Bank</p>
                                                    <p className="go">Others</p>
                                                </div>
                                                <select className="selector wh mini w220">
                                                    <option value="">Recently Added</option>
                                                    <option value="">A to Z</option>
                                                    <option value="">Z to A</option>
                                                </select>
                                            </div>
                                        </article>
                                        <article className="list_body">
                                            <section className="the_list add">
                                                <div onClick={addPart} className="add_script">
                                                    <p className="plus">+</p>
                                                    <span className="word">Add Partner company</span>
                                                </div>
                                                <div onClick={addStudio} className="add_script">
                                                    <p className="plus">+</p>
                                                    <span className="word">Add Music Studio</span>
                                                </div>
                                            </section>
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                            <TheList2 />
                                        </article>
                                    </div>
                                </article>

                            </section>

                        </article>

                    </main >

                </div >

                <PopAddMore open={partPop} close={closePart} />
                <PopMuStudio open={studioPop} close={closeStudio} />

            </div >

            <Footer />

        </div >
    )
}


const PopAddMore = (props) => {

    const { open, close } = props;

    //Pop Owner Company
    const [compPop, setSetCompPop] = useState(false);
    const openComp = () => {
        setSetCompPop(true);
    };
    const closeComp = () => {
        setSetCompPop(false);
    }

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent addPop mx_h800 scroll scroll-y">
                <div className="pop_top p-l-20">
                    <div className="ptop_txt">
                        <h1 className="ptop_title f-s-20">
                            Add More
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts p-20">
                    <div className="tab_line">
                        <p className="go on">Partner company</p>
                        <p className="go">Parent company</p>
                        <p className="go">Subsidiary Company</p>
                    </div>
                    <section className="add_sheet">
                        <article className="dflx_ac">
                            <div className="add_box">
                                <div onClick={openComp}>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                                        line_class="line_over" imgclass="imgauto" src="../resources/images/plus_wh17.png" />
                                </div>
                            </div>
                            <div className="add_sh_txt">
                                <dl className="add_dl">
                                    <dt>Select Partner company</dt>
                                    <dd>
                                        <div className="pf_txt">
                                            <div className="put_tip">
                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                            </div>
                                            <p>Choose Partner company</p>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </article>
                    </section>
                    <div className="dflx_ac_jend">
                        <ButtonComponent onClick={close} class="btn_sm1 cor w150" txt="Add Company" />
                    </div>
                </div>
            </div>
            <PopPublisher open={compPop} close={closeComp} popname="Select Owner Company" />
        </section >
    )
}


const PopMuStudio = (props) => {

    const { open, close } = props;

    const [popLoct, setPopLoct] = useState(false);
    const openLoct = () => {
        setPopLoct(true);
    }
    const closeLoct = () => {
        setPopLoct(false);
    }

    //Pop Owner Company
    const [compPop, setSetCompPop] = useState(false);
    const openComp = () => {
        setSetCompPop(true);
    };
    const closeComp = () => {
        setSetCompPop(false);
    }

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent middlePop mx_h800 scroll scroll-y">
                <div className="pop_top p-l-20">
                    <div className="ptop_txt">
                        <h1 className="ptop_title f-s-20">
                            Add Music Studio
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts p-20">
                    <div className="pf_txt m-b-17">
                        <p>Studio information</p>
                    </div>
                    <section className="add_sheet">
                        <article className="dflx_ac">
                            <div className="add_box">
                                <div onClick={openComp}>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                                        line_class="line_over" imgclass="imgauto" src="../resources/images/plus_wh17.png" />
                                </div>
                            </div>
                            <div className="add_sh_txt">
                                <dl className="add_dl">
                                    <dt>Owned Company</dt>
                                    <dd>
                                        <div className="pf_txt">
                                            <div className="put_tip">
                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                            </div>
                                            <p>Choose a studio run by the company</p>
                                        </div>
                                    </dd>
                                </dl>
                                <ToggleCheck box_class="checkbox" word="Skip" src="../resources/images/sv_check_cor.svg" />
                            </div>
                        </article>
                    </section>
                    <section className="locatoin_cont">
                        <div className="half_putt m-b-5">
                            <div className="putt_box w-100">
                                <InputComponent type="text" class="wrput" placeholder="Studio name" />
                            </div>
                            <div className="dflx_ac_jbet">
                                <div className="putt_box see">
                                    <ButtonWith onClick={openLoct} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                    <InputComponent type="text" class="wrput" placeholder="Business Location" />
                                </div>
                                <div className="putt_box">
                                    <InputComponent type="text" class="wrput" placeholder="Zip/Potal code" />
                                </div>
                            </div>
                            <div className="dflx_ac_jbet">
                                <div className="putt_box">
                                    <InputComponent type="text" class="wrput" placeholder="Password" />
                                </div>
                                <div className="putt_box">
                                    <InputComponent type="text" class="wrput" placeholder="City/Town" />
                                </div>
                            </div>
                            <div className="putt_box w-100">
                                <InputComponent type="text" class="wrput" placeholder="Address Line1" />
                            </div>
                            <div className="putt_box w-100">
                                <InputComponent type="text" class="wrput" placeholder="Address Line2" />
                            </div>
                        </div>
                    </section>
                    <div className="dflx_ac_jend p-t-10">
                        <ButtonComponent onClick={close} class="btn_sm1 m-r-12 w100" txt="Cancel" />
                        <ButtonComponent class="btn_sm1 cor w100" txt="Create" />
                    </div>
                </div>
            </div>
            <PopLocation open={popLoct} close={closeLoct} />
            <PopPublisher open={compPop} close={closeComp} popname="Select Owner Company" />
        </section >
    )
}














