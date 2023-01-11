import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import ImgComponent from "../../components/common/ImgComponent";
import PopCredits from "../../components/common/PopCredits";


export default function SetEval2() {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [arPop, setArPop] = useState(false);
    const openAR = () => {
        setArPop(true);
    };
    const closeAR = () => {
        setArPop(false);
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
                            <span className="big">Set evaluation</span>
                            <span className="mini cor913">Build your Set evaluation</span>
                        </h1>
                    </article>
                    <article className="roles_step h80">
                        <div className="step_term">
                            <p className="step_circle">1</p>
                            <span className="step_word">Set schedule</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle on">2</p>
                            <span className="step_word">Evaluator</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle">3</p>
                            <span className="step_word">Finalize</span>
                        </div>
                    </article>

                    <article className="m-b-50">
                        <dl className="dl_title">
                            <dt>STEP 2</dt>
                            <dd>Add more Evaluator</dd>
                        </dl>
                        <article className="form_sel">
                            <div className="eval_wrap">

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
                                                        <span>Role 1</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>

                                <div className="company_line norm">
                                    <dl onClick={openAR} className="company_cent">
                                        <dt>
                                            <button className="btsq bt20 norm">
                                                <img src="../resources/images/sv_arr20_plus_wh.png" alt="images" />
                                            </button>
                                        </dt>
                                        <dd>
                                            Add more
                                        </dd>
                                    </dl>
                                </div>

                            </div>
                        </article>
                    </article >

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <ButtonComponent onClick={goBack} class="btn_sm1 w100 m-r-12" txt="Back" />
                            <Link to="/SetEval3">
                                <ButtonComponent class="btn_sm1 cor w100" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div >
            </section >

            <PopCredits popname="Search A&R" open={arPop} close={closeAR} />
        </div >
    )
}

