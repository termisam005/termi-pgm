import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import BordComp from "../../components/common/BordComp";
import PopRoles from "../../components/common/PopRoles";
import InputComponent from "../../components/common/InputComponent";
import ButtonWith from "../../components/common/ButtonWith";

export default function CreateProfile3() {
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
        <div className="wrap_prof">

            <HeaderTrans src="../resources/images/logo.png" />

            <section className="rolse_box official_box pf">
                <div className="rolse_in">

                    <article className="roles_step">
                        <p className="step_circle on">1</p>
                        <p className="step_circle on">2</p>
                        <p className="step_circle on">3</p>
                    </article>
                    <article className="roles_title">
                        <h1>
                            <span className="big">Jin Suk Choi,</span>
                        </h1>
                        <p className="text f-s-16">
                            Please choose your Roles and Affinity
                        </p>
                    </article>

                    <article className="profile_contain">
                        <section className="pf_sheet">
                            <div className="pf_wrap">
                                <div className="pf_over">
                                    <dl className="pf_dl">
                                        <dt>
                                            <span className="title">Headline</span>
                                            <span className="ess">*</span>
                                        </dt>
                                        <dd>
                                            <div className="pf_txt">
                                                <div className="put_tip">
                                                    <img src="../resources/images/feel_wh.png" alt="feel" />
                                                </div>
                                                <p>When recommending a project, it is used as a headline</p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pf_under">
                                    <article className="putt_zone">
                                        <div className="putt_box reset">
                                            <InputComponent class="wrput" placeholder="Headline is a required field" />
                                            <span className="del_x"></span>
                                        </div>
                                        <div className="pfput_left">
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </section>

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
                                        <ButtonWith onClick={openRolpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                    </dd>
                                </dl>
                                <dl className="pinfo_dl">
                                    <dt>
                                        <span>Territories</span>
                                    </dt>
                                    <dd>
                                        <BordComp word="Worldwide" />
                                        <ButtonWith onClick={openRolpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                    </dd>
                                </dl>
                                <dl className="pinfo_dl">
                                    <dt>
                                        <span>Software</span>
                                    </dt>
                                    <dd>
                                        <BordComp word="Cubase" />
                                        <BordComp word="Nuendo" />
                                        <ButtonWith onClick={openRolpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
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
                                        <ButtonWith onClick={openRolpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
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
                                        <ButtonWith onClick={openRolpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
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
                                        <ButtonWith onClick={openRolpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                    </dd>
                                </dl>
                                <dl className="pinfo_dl">
                                    <dt>
                                        <span>Themes</span>
                                    </dt>
                                    <dd>
                                        <BordComp word="Producer" />
                                        <BordComp word="Topliner" />
                                        <BordComp word="Lyicist" />
                                        <ButtonWith onClick={openRolpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                    </dd>
                                </dl>
                                <dl className="pinfo_dl">
                                    <dt>
                                        <span>Vocal</span>
                                    </dt>
                                    <dd>
                                        <BordComp word="Producer" />
                                        <BordComp word="Topliner" />
                                        <BordComp word="Lyicist" />
                                        <ButtonWith onClick={openRolpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                    </dd>
                                </dl>
                                <dl className="pinfo_dl">
                                    <dt>
                                        <span>Era</span>
                                    </dt>
                                    <dd>
                                        <BordComp word="Producer" />
                                        <BordComp word="Topliner" />
                                        <BordComp word="Lyicist" />
                                        <ButtonWith onClick={openRolpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
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
                                        <ButtonWith onClick={openRolpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
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
                                        <ButtonWith onClick={openRolpop} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                    </dd>
                                </dl>
                            </article>
                        </section>
                    </article>

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <ButtonComponent onClick={goBack} class="btn_sm1 m-r-12" txt="Previous Step" />
                            <Link to="/CreateProfile4">
                                <ButtonComponent class="btn_sm1 cor" txt="Save & Next" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <PopRoles open={rolesPop} close={closeRolpop} />
        </div>
    )
}

