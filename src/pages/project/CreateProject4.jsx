import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import InputComponent from "../../components/common/InputComponent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function CreateProject4() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };

    const [startDate, setStartDate] = useState(new Date());


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
                            <p className="step_circle">1</p>
                            <span className="step_word">Invitation</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle on">2</p>
                            <span className="step_word">Create Project</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle">3</p>
                            <span className="step_word">Finalize</span>
                        </div>
                    </article>

                    <article className="official_contain">
                        <div className="form_verify">
                            <article className="dflx_jbet">
                                <div className="w-48">
                                    <dl className="dl_title">
                                        <dd>Enter Project Title and Description</dd>
                                    </dl>
                                    <div className="putt_box prj_box">
                                        <InputComponent type="text" class="wrput" placeholder="Project Title" />
                                        <p className="sync_txt">
                                            ⓘ Your title should clearly state your overall need. For example, "Project SPARWK for 5 track album"
                                        </p>
                                    </div>
                                    <div className="putt_box prj_box">
                                        <textarea className="text_area project_area prj_area" placeholder="Full Description">
                                        </textarea>
                                        <p className="sync_txt">
                                            ⓘ Here you should state all the information about your project that will help other members understand
                                            what you need. Be as descriptive as possible!
                                        </p>
                                    </div>
                                </div>
                                <div className="w-45">
                                    <dl className="dl_title">
                                        <dd>Project Avatar</dd>
                                    </dl>
                                    <div className="putt_box prj_box">
                                        <section className="cover_cont">
                                            {/* <img className="img_cover" src="../resources/images/nemo_prof_ex1.jpg" alt="coverimg" /> */}
                                            <div className="cover_cam">
                                                <p className="p-b-5">
                                                    <img src="../resources/images/trans_sparwk70.png" alt="simbol" />
                                                </p>
                                                <span>
                                                    Optimal dimensions<br />248 x 248px
                                                </span>
                                            </div>
                                        </section>
                                        <p className="sync_txt">
                                            ⓘ Here you can set a custom image for your project. This helps set the tone for your project
                                            and attract more pitches from members.
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <div className="putt_box prj_box">
                                <div className="wrbg">
                                    <DatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                                <p className="sync_txt">
                                    ⓘ Pick a specific date for your projects<br />
                                    pitching period to close or keep it open until you want to stop new members pitching on it.
                                </p>
                            </div>
                            <section className="selform_cont">
                                <dl className="dl_title">
                                    <dd>Budgeted or Terms Only?</dd>
                                </dl>
                                <article className="form_sel dflx_ac">
                                    <div className={radioState === 1 ? "check_line on" : "check_line"} onClick={() => radioTab(1)}>
                                        <p className="checkbox circ">
                                            <span className="circle"></span>
                                        </p>
                                        <span className="check_word">Terms</span>
                                    </div>
                                    <p className="p-10"></p>
                                    <div className={radioState === 2 ? "check_line on" : "check_line"} onClick={() => radioTab(2)}>
                                        <p className="checkbox circ">
                                            <span className="circle"></span>
                                        </p>
                                        <span className="check_word">Distribution (%)</span>
                                    </div>
                                    <p className="p-10"></p>
                                    <div className={radioState === 3 ? "check_line on" : "check_line"} onClick={() => radioTab(3)}>
                                        <p className="checkbox circ">
                                            <span className="circle"></span>
                                        </p>
                                        <span className="check_word">Budget</span>
                                    </div>
                                </article>
                                <article className={radioState === 1 ? "fmsel_cont on" : "fmsel_cont"}>
                                </article>
                                <article className={radioState === 2 ? "fmsel_cont on" : "fmsel_cont"}>
                                    <div className="dpflx">
                                        <div className="w120">
                                            <p className="m-b-5">Min</p>
                                            <InputComponent type="number" class="wrput mid" />
                                        </div>
                                        <p className="p-10"></p>
                                        <div className="w120">
                                            <p className="m-b-5">Max</p>
                                            <InputComponent type="number" class="wrput mid" />
                                        </div>
                                    </div>
                                </article>
                                <article className={radioState === 3 ? "fmsel_cont on" : "fmsel_cont"}>
                                    <div className="dpflx">
                                        <div className="w120">
                                            <p className="m-b-5">Min</p>
                                            <InputComponent type="number" class="wrput mid" />
                                        </div>
                                        <p className="p-10"></p>
                                        <div className="w120">
                                            <p className="m-b-5">Max</p>
                                            <InputComponent type="number" class="wrput mid" />
                                        </div>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </article>

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <Link to="/CreateProject5">
                                <ButtonComponent class="btn_sm1 cor" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

        </div>
    )
}

