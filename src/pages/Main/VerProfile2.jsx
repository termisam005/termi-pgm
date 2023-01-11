import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import InputComponent from "../../components/common/InputComponent";
import BordComp from "../../components/common/BordComp";
import ToggleCheck from "../../components/common/ToggleCheck";
import PopCompany from "../../components/common/PopCompany";
import PopRoles from "../../components/common/PopRoles";

export default function VerProfile2() {
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

    const [rolesPop, setRolesPop] = useState(false);
    const openRolpop = () => {
        setRolesPop(true);
    };
    const closeRolpop = () => {
        setRolesPop(false);
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
                            <span className="big">Verify Your Profile</span>
                        </h1>
                    </article>

                    <article className="official_contain">
                        <section className="off_contain50">
                            <dl className="dl_title">
                                <dt>STEP 2</dt>
                                <dd>Please specify your role.</dd>
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
                                <div className="putt_box">
                                    <InputComponent type="password" class="wrput" placeholder="Password" />
                                </div>
                                <div className="putt_box">
                                    <InputComponent type="text" class="wrput" placeholder="'Ocupation' at Design Music" />
                                </div>
                                <article className="form_bord m-t-10">
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
                                <article className="form_bord m-t-20">
                                    <div className="top">
                                        <p>Business Roles</p>
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
                                <article className="form_sel m-t-25">
                                    <ToggleCheck box_class="checkbox" word="A&R Roles" src="../resources/images/sv_check_cor.svg" />
                                    <p className="p-t-5 p-l-30">
                                        If you're in the Roles of A&R, please check.<br />
                                        (Evaluator, Distributor)
                                    </p>
                                </article>
                            </div>
                        </section>
                    </article>

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <ButtonComponent onClick={goBack} class="btn_sm1 m-r-12" txt="Back" />
                            <Link to="/VerProfile3">
                                <ButtonComponent class="btn_sm1 cor" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <PopCompany open={comyPop} close={closeComy} />
            <PopRoles open={rolesPop} close={closeRolpop} />
        </div>
    )
}

