import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import InputComponent from "../../components/common/InputComponent";
import BordComp from "../../components/common/BordComp";
import ToggleCheck from "../../components/common/ToggleCheck";
import PopCompany from "../../components/common/PopCompany";


export default function CreateProject1() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };

    const [comyPop, setComyPop] = useState(false);
    const openComy = () => {
        setComyPop(true);
    };
    const closeComy = () => {
        setComyPop(false);
    }


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
                                <dt>STEP 1</dt>
                                <dd>Start inviting professionals to your project</dd>
                            </dl>
                            <div className="form_verify">
                                <article className="form_sel">
                                    <div className={radioState === 1 ? "check_line on" : "check_line"} onClick={() => radioTab(1)}>
                                        <p className="checkbox circ">
                                            <span className="circle"></span>
                                        </p>
                                        <span className="check_word">Individual</span>
                                    </div>
                                    <p className="p-10"></p>
                                    <div className={radioState === 2 ? "check_line on" : "check_line"} onClick={() => radioTab(2)}>
                                        <p className="checkbox circ">
                                            <span className="circle"></span>
                                        </p>
                                        <span className="check_word">Company</span>
                                    </div>
                                </article>
                                <article className="form_bord">
                                    <div className="top">
                                        <p>Search Company</p>
                                    </div>
                                    <div className="cont">
                                        <div className="bord_wrap">
                                            <BordComp word="Ekko music right" />
                                            <BordComp word="Dsign Music" />
                                        </div>
                                        <button onClick={openComy} className="btsq bt20 norm">
                                            <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                            <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                        </button>
                                    </div>
                                </article>
                                <article className="form_sel m-t-25">
                                    <ToggleCheck box_class="checkbox" word="Private Project" src="../resources/images/sv_check_cor.svg" />

                                    <div className="p-l-30">
                                        <p className="p-t-10 f-s-12 op05">
                                            Private Project will not be shown from SPARWK<br />project / recommendation list.
                                        </p>
                                        <div className="putt_box mini_putt">
                                            <p className="p-b-5">Password Protection</p>
                                            <InputComponent type="password" class="wrput w300" placeholder="Password" />
                                        </div>
                                    </div>
                                </article>
                                <dl className="dl_title">
                                    <dd>Enter Description</dd>
                                </dl>
                                <div className="putt_box">
                                    <InputComponent type="text" class="wrput" placeholder="Invitaion title" />
                                </div>
                                <div className="putt_box">
                                    <InputComponent type="text" class="wrput" placeholder="Please describe your project" />
                                </div>
                                <div className="putt_box">
                                    <textarea className="text_area project_area" placeholder="Please specify what your project is for.">
                                    </textarea>
                                </div>
                            </div>
                        </section>
                    </article>

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            {/* <ButtonComponent onClick={goBack} class="btn_sm1 m-r-12" txt="Back" /> */}
                            <Link to="/CreateProject2">
                                <ButtonComponent class="btn_sm1 cor" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <PopCompany open={comyPop} close={closeComy} />
        </div>
    )
}

