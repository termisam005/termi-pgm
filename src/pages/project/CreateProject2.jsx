import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import BordComp from "../../components/common/BordComp";
import PopRoles from "../../components/common/PopRoles";

export default function CreateProject2() {
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

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };


    return (
        <div className="wrap_login">

            <HeaderTrans logo_class="logo_none" src="../resources/images/logo.png" />

            <section className="rolse_box official_box create">
                <div className="rolse_in">

                    <article className="roles_title">
                        <h1>
                            <span onClick={goBack} className="go_back">
                                <img src="../resources/images/arr_back_wh.png" alt="link back" />
                            </span>
                            <span className="big">Create Project</span>
                            <span className="mini cor913">Build your Song camp</span>
                        </h1>
                    </article>
                    <article className="roles_step h80">
                        <div className="step_term">
                            <p className="step_circle on">1</p>
                            <span className="step_word">Invitation</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle">2</p>
                            <span className="step_word">Create Project</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle">3</p>
                            <span className="step_word">Finalize</span>
                        </div>
                    </article>

                    <article className="official_contain">
                        <section className="off_contain50">
                            <dl className="dl_title">
                                <dt>STEP 2</dt>
                                <dd>Help us find you candidates</dd>
                            </dl>
                            <div className="form_verify">
                                <article className="form_bord">
                                    <div className="top">
                                        <p>Creative Roles</p>
                                    </div>
                                    <div className="cont">
                                        <div className="bord_wrap">
                                            <BordComp word="Author" />
                                            <BordComp word="Arranger" />
                                            <BordComp word="Arranger" />
                                        </div>
                                        <button onClick={openRolpop} className="btsq bt20 norm">
                                            <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                            <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                        </button>
                                    </div>
                                </article>
                                <article className="form_bord">
                                    <div className="top">
                                        <p>Music Genres</p>
                                    </div>
                                    <div className="cont">
                                        <div className="bord_wrap">
                                            <BordComp word="Dance" />
                                            <BordComp word="K-POP" />
                                            <BordComp word="K-POP" />
                                            <BordComp word="Dance" />
                                            <BordComp word="K-POP" />
                                        </div>
                                        <button onClick={openRolpop} className="btsq bt20 norm">
                                            <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                            <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                        </button>
                                    </div>
                                </article>
                                <article className="form_bord">
                                    <div className="top">
                                        <p>Music Moods</p>
                                    </div>
                                    <div className="cont">
                                        <div className="bord_wrap">
                                            <BordComp word="Dance" />
                                            <BordComp word="K-POP" />
                                            <BordComp word="K-POP" />
                                            <BordComp word="Dance" />
                                            <BordComp word="K-POP" />
                                        </div>
                                        <button onClick={openRolpop} className="btsq bt20 norm">
                                            <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                            <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                        </button>
                                    </div>
                                </article>
                                <article className="form_bord">
                                    <div className="top">
                                        <p>Music Themes</p>
                                    </div>
                                    <div className="cont">
                                        <div className="bord_wrap">
                                            <BordComp word="Dance" />
                                            <BordComp word="K-POP" />
                                            <BordComp word="K-POP" />
                                            <BordComp word="Dance" />
                                            <BordComp word="K-POP" />
                                        </div>
                                        <button onClick={openRolpop} className="btsq bt20 norm">
                                            <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                            <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                        </button>
                                    </div>
                                </article>
                                <article className="form_bord">
                                    <div className="top">
                                        <p>Location</p>
                                    </div>
                                    <select className="selector">
                                        <option value="">Physical</option>
                                        <option value="">Digital</option>
                                    </select>
                                </article>
                                <dl className="dl_title">
                                    <dd>Should we recommed candidates globally?</dd>
                                </dl>
                                <article className="form_sel m-b-15">
                                    <div className={radioState === 1 ? "check_line on" : "check_line"} onClick={() => radioTab(1)}>
                                        <p className="checkbox circ">
                                            <span className="circle"></span>
                                        </p>
                                        <span className="check_word">Yes</span>
                                    </div>
                                    <p className="p-10"></p>
                                    <div className={radioState === 2 ? "check_line on" : "check_line"} onClick={() => radioTab(2)}>
                                        <p className="checkbox circ">
                                            <span className="circle"></span>
                                        </p>
                                        <span className="check_word">No (Add Territory)</span>
                                    </div>
                                </article>
                                <article className="form_bord">
                                    <div className="cont">
                                        <div className="bord_wrap">
                                            <BordComp word="Dominica" />
                                            <BordComp word="Cuba" />
                                            <BordComp word="Jamaica" />
                                            <BordComp word="Dominica" />
                                            <BordComp word="Cuba" />
                                            <BordComp word="Jamaica" />
                                            <BordComp word="Pueto Rico" />
                                            <BordComp word="Africa +52" />
                                        </div>
                                        <button onClick={openRolpop} className="btsq bt20 norm">
                                            <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                            <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                        </button>
                                    </div>
                                </article>
                            </div>
                        </section>
                    </article>

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <ButtonComponent onClick={goBack} class="btn_sm1 m-r-12" txt="Back" />
                            <Link to="/CreateProject3">
                                <ButtonComponent class="btn_sm1 cor" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <PopRoles open={rolesPop} close={closeRolpop} />
        </div>
    )
}

