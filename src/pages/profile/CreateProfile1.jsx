import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWith from "../../components/common/ButtonWith";
import HeaderTrans from "../../components/header/HeaderTrans";
import BordComp from "../../components/common/BordComp";
import PopRoles from "../../components/common/PopRoles";
import InputComponent from "../../components/common/InputComponent";
import ToggleCheck from "../../components/common/ToggleCheck";
import Select from 'react-select';
import { gendOptions } from '../../pages/signup/data.ts';
import PopLocation from "../../components/common/PopLocation";

export default function CreateProfile1() {
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

    const addSelector = () => {
        let seltor = document.querySelector(".add_selector");
        let hiddPutt = document.querySelector('.hidd_putt_box');

        if (seltor.value === "Custom") {
            hiddPutt.classList.add('on');
        } else {
            hiddPutt.classList.remove('on');
        }
    }

    const [popLoct, setPopLoct] = useState(false);
    const openLoct = () => {
        setPopLoct(true);
    }
    const closeLoct = () => {
        setPopLoct(false);
    }

    const [toggleWh, setToggleWh] = useState(false);
    const toggleClickWh = () => {
        setToggleWh(!toggleWh);
    }


    return (
        <div className="wrap_prof">

            <HeaderTrans src="../resources/images/logo.png" />

            <section className="rolse_box official_box pf">
                <div className="rolse_in">

                    <article className="roles_step">
                        <p className="step_circle on">1</p>
                        <p className="step_circle">2</p>
                        <p className="step_circle">3</p>
                    </article>
                    <article className="roles_title">
                        <h1>
                            <span className="big">Create a Profile</span>
                        </h1>
                        <p className="text f-s-16">
                            we can personality your experience, go through the following steps to make the most of the platform.
                        </p>
                    </article>

                    <article className="profile_contain">
                        <section className="pf_sheet">
                            <div className="pf_wrap">
                                <div className="pf_over">
                                    <dl className="pf_dl">
                                        <dt>
                                            <span className="title">Full Name or Stage Name</span>
                                            <span className="ess">*</span>
                                        </dt>
                                        <dd>
                                            <div className="pf_txt">
                                                <div className="put_tip">
                                                    <img src="../resources/images/feel_wh.png" alt="feel" />
                                                </div>
                                                <p>Add a nickname, a birth name, Name Pronunciation
                                                    If your name is to be used as a stage name, please check the check box</p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pf_under">
                                    <article className="putt_zone">
                                        <div className="putt_box reset">
                                            <InputComponent class="wrput" placeholder="Enter your Full name" />
                                            <span className="del_x"></span>
                                        </div>
                                        <div className="pfput_right">
                                            <ToggleCheck box_class="checkbox m-l-15" word="Private Project" src="../resources/images/sv_check_cor.svg" />
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </section>
                        <section className="pf_sheet">
                            <div className="pf_wrap">
                                <div className="pf_over">
                                    <dl className="pf_dl">
                                        <dt>
                                            <span className="title">Birth Date</span>
                                            <span className="ess">*</span>
                                        </dt>
                                        <dd>
                                            <div className="pf_txt">
                                                <div className="put_tip">
                                                    <img src="../resources/images/feel_wh.png" alt="feel" />
                                                </div>
                                                <p>Select the Birth Date you use on sparwk</p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pf_under">
                                    <article className="putt_zone">
                                        <div className="putt_box selt_box">
                                            <select className="selector w-32">
                                                <option value="">Month</option>
                                            </select>
                                            <select className="selector w-32">
                                                <option value="">Day</option>
                                            </select>
                                            <select className="selector w-32">
                                                <option value="">Year</option>
                                            </select>
                                        </div>
                                        <div className="pfput_right">
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </section>
                        <section className="pf_sheet">
                            <div className="pf_wrap">
                                <div className="pf_over">
                                    <dl className="pf_dl">
                                        <dt>
                                            <span className="title">Gender</span>
                                            <span className="ess">*</span>
                                        </dt>
                                        <dd>
                                            <div className="pf_txt">
                                                <div className="put_tip">
                                                    <img src="../resources/images/feel_wh.png" alt="feel" />
                                                </div>
                                                <p>Select the Gender you use on sparwk</p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pf_under">
                                    <div className="putt_box">
                                        <select className="selector add_selector" onChange={addSelector}>
                                            <option value="SelectGn">Select Gender</option>
                                            <option value="Female">Female</option>
                                            <option value="Male">Male</option>
                                            <option value="Custom">Custom</option>
                                        </select>
                                    </div>
                                    <div className="hidd_putt_box">
                                        <Select
                                            isMulti
                                            name="genders"
                                            options={gendOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            placeholder="Gender"
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    neutral0: '#0f173d',
                                                    primary25: '#778eff',
                                                    primary: '#0f173d',
                                                },
                                            })}
                                        />
                                    </div>
                                    <div className="pfput_right">
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="pf_sheet">
                            <div className="pf_wrap">
                                <div className="pf_over">
                                    <dl className="pf_dl">
                                        <dt>
                                            <span className="title">Language</span>
                                            <span className="ess">*</span>
                                        </dt>
                                        <dd>
                                            <div className="pf_txt">
                                                <div className="put_tip">
                                                    <img src="../resources/images/feel_wh.png" alt="feel" />
                                                </div>
                                                <p>Select the language to communicate with. This information is displayed on the Sparwk recommendation menu</p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pf_under">
                                    <article className="putt_zone">
                                        <div className="putt_box">
                                            <article className="form_bord">
                                                <div className="cont">
                                                    <div className="bord_wrap">
                                                        <BordComp word="English" />
                                                        <BordComp word="Korean" />
                                                    </div>
                                                    <button onClick={openRolpop} className="btsq bt20 norm">
                                                        <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                                        <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                                    </button>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="pfput_right">
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </section>
                        <section className="pf_sheet">
                            <div className="pf_wrap">
                                <div className="pf_over">
                                    <dl className="pf_dl">
                                        <dt className="dflx_ac_jbet">
                                            <div>
                                                <span className="title">Current City</span>
                                                <span className="ess">*</span>
                                            </div>
                                            <div>
                                                <div onClick={toggleClickWh} className={toggleWh ? "check_line on" : "check_line"}>
                                                    <p className="checkbox wh">
                                                        <img src="../resources/images/sv_check_wh.svg" alt="check" />
                                                    </p>
                                                    <span className="check_word f-s-13">
                                                        Use the current location
                                                    </span>
                                                </div>
                                            </div>
                                        </dt>
                                        <dd>
                                            <div className="pf_txt">
                                                <div className="put_tip">
                                                    <img src="../resources/images/feel_wh.png" alt="feel" />
                                                </div>
                                                <p>Adding personal information to your profile can help people find me or get to know me better.
                                                    This information is displayed on the Sparwk recommendation menu</p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pf_under">
                                    <article className="putt_zone">
                                        <div className="dflx_ac_jbet half_putt">
                                            <div className="putt_box">
                                                <InputComponent class="wrput" placeholder="City" />
                                            </div>
                                            <div className="putt_box see">
                                                <ButtonWith onClick={openLoct} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                                <InputComponent class="wrput" placeholder="Country" />
                                            </div>
                                        </div>
                                        <div className="pfput_right">
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </section>
                        <section className="pf_sheet">
                            <div className="pf_wrap">
                                <div className="pf_over">
                                    <dl className="pf_dl">
                                        <dt>
                                            <span className="title">Home Town</span>
                                        </dt>
                                        <dd>
                                            <div className="pf_txt">
                                                <div className="put_tip">
                                                    <img src="../resources/images/feel_wh.png" alt="feel" />
                                                </div>
                                                <p>Select the Home town you use on sparwk</p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="pf_under">
                                    <article className="putt_zone">
                                        <div className="dflx_ac_jbet half_putt">
                                            <div className="putt_box">
                                                <InputComponent class="wrput" placeholder="City" />
                                            </div>
                                            <div className="putt_box see">
                                                <ButtonWith onClick={openLoct} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                                <InputComponent class="wrput" placeholder="Country" />
                                            </div>
                                        </div>
                                        <div className="pfput_right">
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </section>
                    </article>

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <ButtonComponent onClick={goBack} class="btn_sm1 m-r-12" txt="Cancel" />
                            <Link to="/CreateProfile2">
                                <ButtonComponent class="btn_sm1 cor" txt="Save & Next" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <PopRoles open={rolesPop} close={closeRolpop} />
            <PopLocation open={popLoct} close={closeLoct} />
        </div>
    )
}

