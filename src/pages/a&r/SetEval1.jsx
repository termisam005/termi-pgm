import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import DateSet from "../../components/common/DateSet";


export default function SetEval1() {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
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
                            <span className="big">Set evaluation</span>
                            <span className="mini cor913">Build your Set evaluation</span>
                        </h1>
                    </article>
                    <article className="roles_step h80">
                        <div className="step_term">
                            <p className="step_circle on">1</p>
                            <span className="step_word">Set schedule</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle">2</p>
                            <span className="step_word">Evaluator</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle">3</p>
                            <span className="step_word">Finalize</span>
                        </div>
                    </article>

                    <article className="m-b-50">
                        <dl className="dl_title">
                            <dt>STEP 1</dt>
                            <dd>Set the start date and finish date</dd>
                        </dl>
                        <article className="form_sel">
                            <div className="dpflx">
                                <div className="build_list">
                                    <DateSet class="date_set" />
                                </div>
                                <div className="build_list">
                                    <DateSet class="date_set" />
                                </div>
                            </div>
                            <div className="dflx_jend m-t-30">
                                <ButtonComponent class="btn_md1" txt="Clear All" />
                            </div>
                        </article>
                    </article >

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <Link to="/SetEval2">
                                <ButtonComponent class="btn_sm1 cor w100" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div >
            </section >

        </div >
    )
}

