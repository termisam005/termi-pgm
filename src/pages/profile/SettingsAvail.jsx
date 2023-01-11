import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWith from "../../components/common/ButtonWith";
import BordComp from "../../components/common/BordComp";
import BordAdd from "../../components/common/BordAdd";
import PopRoles from "../../components/common/PopRoles";

export default function SettingsAvail() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [rolesPop, setRolesPop] = useState(false);
    const openRolpop = () => {
        setRolesPop(true);
    };
    const closeRolpop = () => {
        setRolesPop(false);
    }


    return (
        <div className="wrap dark">

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
                                    <h1 className="p-l-10">Settings</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <article className="sub_link">
                                        <div className="add_line">
                                            <Link className="link" to="/SettingsAccount">Account</Link>
                                        </div>
                                        <div className="add_line">
                                            <Link className="link on" to="/SettingsAvail">Available & Privacy</Link>
                                        </div>
                                        <div className="add_line">
                                            <Link className="link" to="/SettingsProfile">Profile</Link>
                                        </div>
                                        <div className="add_line">
                                            <Link className="link" to="/SettingsID">Person ID</Link>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

                        <section className="rolse_box official_box set">
                            <div className="rolse_in">

                                <article className="roles_title">
                                    <h1>
                                        <span className="big">Available & Privacy</span>
                                        <span className="mini cor913">Get notified about opportunities</span>
                                    </h1>
                                </article>

                                <article className="profile_contain">
                                    <section className="the_feed pf_feed">
                                        <article className="feed_top">
                                            <dl className="pf_dl">
                                                <dt>
                                                    <img className="m-r-5" src="../resources/images/thunder_big.png" alt="image" />
                                                    <span className="title">Find a Project</span>
                                                    <span className="ess">*</span>
                                                </dt>
                                                <dd>
                                                    <div className="pf_txt">
                                                        <div className="put_tip">
                                                            <img src="../resources/images/feel_wh.png" alt="feel" />
                                                        </div>
                                                        <p>Setting the availability to participate in the project</p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </article>
                                        <article className="feed_conts">
                                            <p className="line1"></p>
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Roles</span>
                                                    <span className="ess">*</span>
                                                </dt>
                                                <dd>
                                                    <BordComp word="Lyricist" />
                                                    <BordComp word="Composer" />
                                                    <BordComp word="Arranger" />
                                                    <BordComp word="Author" />
                                                    <BordComp word="Performer" />
                                                    <BordComp word="Producer" />
                                                    <BordComp word="Engineer" />
                                                    <BordComp word="Artist" />
                                                    <BordComp word="DJ" />
                                                    <BordAdd onClick={openRolpop} word="Add" />
                                                </dd>
                                            </dl>
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Territories</span>
                                                </dt>
                                                <dd>
                                                    <BordAdd onClick={openRolpop} word="Add" />
                                                </dd>
                                            </dl>
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Software</span>
                                                </dt>
                                                <dd>
                                                    <BordComp word="Cubase" />
                                                    <BordComp word="Nuendo" />
                                                    <BordAdd onClick={openRolpop} word="Add" />
                                                </dd>
                                            </dl>
                                        </article>
                                    </section>

                                    <section className="the_feed pf_feed">
                                        <article className="feed_top">
                                            <dl className="pf_dl">
                                                <dt>
                                                    <img className="m-r-5" src="../resources/images/thunder_big.png" alt="image" />
                                                    <span className="title">Find a Pitch List</span>
                                                    <span className="ess">*</span>
                                                </dt>
                                                <dd>
                                                    <div className="pf_txt">
                                                        <div className="put_tip">
                                                            <img src="../resources/images/feel_wh.png" alt="feel" />
                                                        </div>
                                                        <p>Setting the availability to participate in the project</p>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </article>
                                        <article className="feed_conts">
                                            <p className="line1"></p>
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Genres</span>
                                                    <span className="ess">*</span>
                                                </dt>
                                                <dd>
                                                    <BordComp word="POP" />
                                                    <BordComp word="HipHop" />
                                                    <BordAdd onClick={openRolpop} word="Add" />
                                                </dd>
                                            </dl>
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Sub-Genres</span>
                                                </dt>
                                                <dd>
                                                    <BordComp word="DeepHouse" />
                                                    <BordComp word="Topliner" />
                                                    <BordComp word="Lyicist" />
                                                    <BordComp word="Musician" />
                                                    <BordAdd onClick={openRolpop} word="Add" />
                                                </dd>
                                            </dl>
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Moods</span>
                                                </dt>
                                                <dd>
                                                    <BordComp word="Producer" />
                                                    <BordComp word="Topliner" />
                                                    <BordComp word="Lyicist" />
                                                    <BordComp word="Musician" />
                                                    <BordAdd onClick={openRolpop} word="Add" />
                                                </dd>
                                            </dl>
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Themes</span>
                                                </dt>
                                                <dd>
                                                    <BordComp word="Producer" />
                                                    <BordAdd onClick={openRolpop} word="Add" />
                                                </dd>
                                            </dl>
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Vocal</span>
                                                </dt>
                                                <dd>
                                                    <BordAdd onClick={openRolpop} word="Add" />
                                                </dd>
                                            </dl>
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Era</span>
                                                </dt>
                                                <dd>
                                                    <BordAdd onClick={openRolpop} word="Add" />
                                                </dd>
                                            </dl>
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Instruments</span>
                                                </dt>
                                                <dd>
                                                    <BordComp word="Producer" />
                                                    <BordComp word="Topliner" />
                                                    <BordComp word="Lyicist" />
                                                    <BordAdd onClick={openRolpop} word="Add" />
                                                </dd>
                                            </dl>
                                            <dl className="pinfo_dl">
                                                <dt>
                                                    <span>Tempo</span>
                                                </dt>
                                                <dd>
                                                    <BordComp word="Producer" />
                                                    <BordComp word="Topliner" />
                                                    <BordComp word="Lyicist" />
                                                    <BordAdd onClick={openRolpop} word="Add" />
                                                </dd>
                                            </dl>
                                        </article>
                                    </section>
                                </article>

                                <article className="create_bottom">
                                    <div></div>
                                    <div>
                                        <ButtonComponent class="btn_sm1 m-r-12" txt="Cancel" />
                                        <ButtonComponent class="btn_sm1 cor" txt="Save" />
                                    </div>
                                </article>

                            </div>
                        </section>

                    </main>

                </div>

            </div>

            <PopRoles open={rolesPop} close={closeRolpop} />
        </div>
    )
}

