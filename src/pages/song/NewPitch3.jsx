import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import HeaderTrans from "../../components/header/HeaderTrans";
import ButtonComponent from "../../components/common/ButtonComponent";
import InputComponent from "../../components/common/InputComponent";
import BordComp from "../../components/common/BordComp";


export default function NewPitch3() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [radioState, setRadioState] = useState(2);
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
                            <span className="big">New Pitch list</span>
                            <span className="mini cor913">Build your Pitch list</span>
                        </h1>
                    </article>
                    <article className="roles_step h80">
                        <div className="step_term">
                            <p className="step_circle">1</p>
                            <span className="step_word">Pitch list info</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle on">2</p>
                            <span className="step_word">Contect info</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle">3</p>
                            <span className="step_word">Finalize</span>
                        </div>
                    </article>

                    <article className="off_contain50">
                        <dl className="dl_title">
                            <dt>STEP 1</dt>
                            <dd>Contect Information To Display</dd>
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
                                    <p>Company</p>
                                </div>
                                <div className="cont">
                                    <div className="bord_wrap">
                                        <BordComp word="Company" />
                                        <BordComp word="Company" />
                                        <BordComp word="Company" />
                                    </div>
                                    <button className="btsq bt20 norm">
                                        <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                        <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                    </button>
                                </div>
                            </article>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="*Email Address" />
                            </div>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="*Phone Number" />
                            </div>

                            <dl className="dl_title m-t-20">
                                <dd>Enter Media info</dd>
                            </dl>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="Website URL" />
                            </div>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="Facebook official URL" />
                            </div>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="Twitter official URL" />
                            </div>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="Linked in Profiles URL" />
                            </div>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="Others URL" />
                            </div>
                            <div className="putt_box m-t-5">
                                <button type="button" className="btn_other">
                                    + Other URL
                                </button>
                            </div>
                        </div>
                    </article >

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <ButtonComponent onClick={goBack} class="btn_sm1 w100 m-r-12" txt="Back" />
                            <Link to="/NewPitch4">
                                <ButtonComponent class="btn_sm1 cor w100" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div >
            </section >
        </div >
    )
}

