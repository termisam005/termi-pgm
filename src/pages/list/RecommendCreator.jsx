import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonWith from "../../components/common/ButtonWith";
import ButtonComponent from "../../components/common/ButtonComponent";
import BordComp from "../../components/common/BordComp";
import RangeSliderView from "../../components/common/RangeSliderView";
import HeaderTrans from "../../components/header/HeaderTrans";
import ListCreator from "./ListCreator";
import PopTerritor from "../../components/common/PopTerritor";
import PopRoles from "../../components/common/PopRoles";
import PopGenres from "../../components/common/PopGenres";


export default function RecommendCreator() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const start = () => {
        window.location.href = "/CreateProject1"
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
                                            <input type="text" className="hd_input" placeholder="Search Creator or Creative Tag" />
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
                                        <p className="cor913 curpt">Clear All</p>
                                    </div>
                                    <div className="aside_bord">
                                        <BordComp word="Soundtrack" />
                                        <BordComp word="Blues" />
                                        <BordComp word="Romantic" />
                                        <BordComp word="Male vocals" />
                                        <BordComp word="Strings" />
                                        <BordComp word="Hot" />
                                        <BordComp word="Sweety" />
                                        <BordComp word="Sad" />
                                        <BordComp word="Label" />
                                    </div>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_last">
                                    <h1>Match</h1>
                                    <div>
                                        <section className="range_wrap">
                                            <div className="range_sett">
                                                <div className="the_ranger">
                                                    <RangeSliderView />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

                        <article className="contain hidd on">
                            <div className="top_ct">
                                <section className="contain_top">
                                    <div className="cttop_left none">
                                        <h1 className="top_title">Do you have a project?</h1>
                                        <p className="mid_title">
                                            Create your own project and find talented people.
                                        </p>
                                    </div>
                                </section>
                                <div className="job_wrap">
                                    <ButtonComponent onClick={start} class="btn_md1 cor" txt="Get Started" />
                                </div>
                            </div>
                        </article>

                        <article className="contain">

                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">Recommended for Creators</h1>
                                </div>
                                <select className="selector wh mini w220">
                                    <option value="">Select Project</option>
                                    <option value="">ProjectName A</option>
                                    <option value="">ProjectName B</option>
                                    <option value="">ProjectName C</option>
                                </select>
                            </section>
                            <p className="line1"></p>

                            <section className="contain_list">
                                <article className="contact_line">
                                    <div className="tab_line">
                                        <p className="tab on">All</p>
                                        <p className="tab">Applied</p>
                                        <p className="tab">Recommendation</p>
                                    </div>
                                </article>

                                <article className="list_body">
                                    <ListCreator />
                                    <ListCreator />
                                    <ListCreator />
                                    <ListCreator />
                                    <ListCreator />
                                    <ListCreator />
                                    <ListCreator />
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