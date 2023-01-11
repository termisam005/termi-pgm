import { Link, useHistory } from "react-router-dom";
import HeaderTrans from "../../components/header/HeaderTrans";
import ButtonComponent from "../../components/common/ButtonComponent";
import InputComponent from "../../components/common/InputComponent";
import BordComp from "../../components/common/BordComp";
import ToggleCheck from "../../components/common/ToggleCheck";


export default function NewPitch2() {
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
                            <span className="big">New Pitch list</span>
                            <span className="mini cor913">Build your Pitch list</span>
                        </h1>
                    </article>
                    <article className="roles_step h80">
                        <div className="step_term">
                            <p className="step_circle on">1</p>
                            <span className="step_word">Pitch list info</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle">2</p>
                            <span className="step_word">Contect info</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle">3</p>
                            <span className="step_word">Finalize</span>
                        </div>
                    </article>

                    <article className="off_contain50">
                        <dl className="dl_title">
                            <dt>STEP 2</dt>
                            <dd>Help us find you A&R</dd>
                        </dl>
                        <div className="form_verify">
                            <article className="form_bord">
                                <div className="top">
                                    <p>Genre</p>
                                </div>
                                <div className="cont">
                                    <div className="bord_wrap">
                                        <BordComp word="Author" />
                                        <BordComp word="Arranger" />
                                        <BordComp word="Arranger" />
                                    </div>
                                    <button className="btsq bt20 norm">
                                        <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                        <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                    </button>
                                </div>
                            </article>
                            <article className="form_bord">
                                <div className="top">
                                    <p>Mood</p>
                                </div>
                                <div className="cont">
                                    <div className="bord_wrap">
                                        <BordComp word="Dance" />
                                        <BordComp word="K-POP" />
                                        <BordComp word="K-POP" />
                                        <BordComp word="Dance" />
                                        <BordComp word="K-POP" />
                                    </div>
                                    <button className="btsq bt20 norm">
                                        <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                        <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                    </button>
                                </div>
                            </article>
                            <article className="form_bord">
                                <div className="top">
                                    <p>Theme</p>
                                </div>
                                <div className="cont">
                                    <div className="bord_wrap">
                                        <BordComp word="Dance" />
                                        <BordComp word="K-POP" />
                                        <BordComp word="K-POP" />
                                        <BordComp word="Dance" />
                                        <BordComp word="K-POP" />
                                    </div>
                                    <button className="btsq bt20 norm">
                                        <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                        <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                    </button>
                                </div>
                            </article>
                            <article className="form_sel m-t-50">
                                <dl className="dl_title">
                                    <dd>Pitch list Visibility</dd>
                                </dl>
                                <ToggleCheck box_class="checkbox" word="Private" src="../resources/images/sv_check_cor.svg" />
                                <div className="p-l-30">
                                    <p className="p-t-10 f-s-12 op05">
                                        Private Post will not be visible on the<br />SPARWK Recommendation list. You will receive no applicants.
                                    </p>
                                    <div className="putt_box mini_putt">
                                        <p className="p-b-5">Password</p>
                                        <InputComponent type="password" class="wrput w300" placeholder="Password" />
                                        <p className="p-t-20 p-b-5">Share URL</p>
                                        <div className="share_room w300">
                                            <div className="sync_txt">
                                                <p>
                                                    http://www.shinysearch.com/myhome.php?style=officialhomepage&ltext=OfficialHomePage
                                                </p>
                                            </div>
                                            <span className="btn_copy"></span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article >

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <ButtonComponent onClick={goBack} class="btn_sm1 w100 m-r-12" txt="Back" />
                            <Link to="/NewPitch3">
                                <ButtonComponent class="btn_sm1 cor w100" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div >
            </section >
        </div >
    )
}

