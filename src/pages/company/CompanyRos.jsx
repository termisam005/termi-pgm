import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ImgComponent from "../../components/common/ImgComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import ProfComponent from "../../components/common/ProfComponent";
import Footer from "../../components/layout/Footer";
import AsideCompany2 from "../../components/layout/AsideCompany2";
import ListRoster from "../list/ListRoster";
import PopRoster from "../../components/common/PopRoster";
import TheList1 from "../list/TheList1";


export default function CompanyRos() {

    //Edit
    const [rosEdit, setRosEdit] = useState(false);
    const onRosEdit = () => {
        setRosEdit(true);
    };
    const onRosBack = () => {
        setRosEdit(false);
    }

    //PopRoster
    const [rostPop, setRostPop] = useState(false);
    const openRost = () => {
        setRostPop(true);
    };
    const closeRost = () => {
        setRostPop(false);
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
                                        <p className="art on">
                                            <a href="/CompanyRos">Roster</a>
                                        </p>
                                        <p className="art">
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

                                <article className={rosEdit ? "the_feed hidd" : "the_feed"}>
                                    <div className="mini_top p-t-20">
                                        <div className="dflx_ac_jbet m-b-5">
                                            <div className="cttop_left">
                                                <h1 className="top_title semib">
                                                    Roster
                                                </h1>
                                            </div>
                                            <div className="dflx_ac">
                                                <p onClick={onRosEdit} className="edit_vl14 m-r-10">Edit</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="line1"></p>
                                    <div className="feed_conts">
                                        <article className="contact_line">
                                            <div className="contact_sel">
                                                <div className="tab_line">
                                                    <p className="go on">All</p>
                                                    <p className="go">Creator</p>
                                                    <p className="go">Artist</p>
                                                    <p className="go">A&R</p>
                                                    <p className="go">Group</p>
                                                </div>
                                                <select className="selector wh mini w220">
                                                    <option value="">Recently Added</option>
                                                    <option value="">A to Z</option>
                                                    <option value="">Z to A</option>
                                                </select>
                                            </div>
                                        </article>
                                        <article className="list_body">
                                            <article className="the_roster">
                                                <div className="roster_box">
                                                    <dl className="roster_confirm">
                                                        <dt>
                                                            <div className="conf_prof">
                                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                                    line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                                    line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                                    line_class="line_over" src="../resources/images/prof_ex2.png" />
                                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                            </div>
                                                        </dt>
                                                        <dd>
                                                            <ButtonComponent onClick={openRost} class="btn_md1 cor" txt="Confirm" />
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <p className="roster_name">
                                                    <span className="m-r-5">5</span>
                                                    <span>Applicants</span>
                                                </p>
                                            </article>
                                            <ListRoster />
                                            <ListRoster />
                                            <ListRoster />
                                            <ListRoster />
                                            <ListRoster />
                                        </article>
                                    </div>
                                </article>

                                <article className={rosEdit ? "the_feed" : "the_feed hidd"}>
                                    <div className="mini_top p-t-20">
                                        <div className="dflx_ac_jbet m-b-5">
                                            <div className="cttop_left">
                                                <h1 className="top_title semib">
                                                    Roster List
                                                </h1>
                                            </div>
                                            <div className="dflx_ac">
                                                <p onClick={onRosBack} className="go_delete"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="line1"></p>
                                    <div className="feed_conts">
                                        <article className="contact_line">
                                            <div className="contact_sel">
                                                <div className="tab_line">
                                                    <p className="go on">All</p>
                                                    <p className="go">Creator</p>
                                                    <p className="go">Artist</p>
                                                    <p className="go">A&R</p>
                                                    <p className="go">Group</p>
                                                </div>
                                                <select className="selector wh mini w220">
                                                    <option value="">Recently Added</option>
                                                    <option value="">A to Z</option>
                                                    <option value="">Z to A</option>
                                                </select>
                                            </div>
                                        </article>
                                        <article className="list_zone">
                                            <TheList1 />
                                            <TheList1 />
                                            <TheList1 />
                                            <TheList1 />
                                            <TheList1 />
                                            <TheList1 />
                                            <TheList1 />
                                            <TheList1 />
                                            <TheList1 />
                                            <TheList1 />
                                        </article>
                                    </div>
                                </article>

                            </section>

                        </article>

                    </main >

                </div >

                <PopRoster open={rostPop} close={closeRost} />

            </div >

            <Footer />

        </div >
    )
}














