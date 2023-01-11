import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWith from "../../components/common/ButtonWith";
import ImgComponent from "../../components/common/ImgComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import InputComponent from "../../components/common/InputComponent";
import PopLocation from "../../components/common/PopLocation";


export default function VerProfile1() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [popLoct, setPopLoct] = useState(false);
    const openLoct = () => {
        setPopLoct(true);
    }
    const closeLoct = () => {
        setPopLoct(false);
    }

    const [popUpsPh, setpopUpsPh] = useState(false);
    const openPopPh = () => {
        setpopUpsPh(true);
    }
    const closePopPh = () => {
        setpopUpsPh(false);
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
                                <dt>STEP 1</dt>
                                <dd>Please enter the basic information.</dd>
                            </dl>
                            <div className="m-b-10">
                                <p className="project_call">Real name of passport</p>
                                <div className="putt_box dflx_jbet">
                                    <InputComponent type="text" class="wrput w-32" placeholder="First name" />
                                    <InputComponent type="text" class="wrput w-32" placeholder="Middle name" />
                                    <InputComponent type="text" class="wrput w-32" placeholder="Last name" />
                                </div>
                            </div>
                            <dl className="natdial_dl dflx_as">
                                <dt>
                                    <div className="putt_box see">
                                        <ButtonWith onClick={openLoct} class="btsq bt20" src="../resources/images/sv_arr20_plus_wh.png" />
                                        <InputComponent type="text" class="wrput wh m-0" value="US (+1)" />
                                    </div>
                                </dt>
                                <dd>
                                    <div className="putt_box verify">
                                        <ButtonComponent onClick={openPopPh} class="btn_add" txt="Verification" />
                                        <InputComponent type="text" class="wrput m-0" placeholder="Phone number" />
                                        <div className="put_verify">
                                            <span className="shield m-r-5"></span>
                                            <span>Verified</span>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <div className="line_cont">
                                <span className="word">Choose at least one</span>
                                <p className="line1"></p>
                            </div>

                            <div className="m-t-15">
                                <div className="m-b-16">
                                    <ButtonWith class="btn_society" spant="Login in with Google" src="../resources/images/so_facebook.png" />
                                </div>
                                <div className="m-b-16">
                                    <ButtonWith class="btn_society" spant="Login in with Facebook" src="../resources/images/so_google.png" />
                                </div>
                                <div className="m-b-16">
                                    <ButtonWith class="btn_society" spant="Sign in with Apple" src="../resources/images/so_apple.png" />
                                </div>
                                <div className="half_putt m-t-30">
                                    <div className="dflx_ac_jbet">
                                        <div className="putt_box see">
                                            <ButtonWith onClick={openLoct} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                            <InputComponent type="text" class="wrput" placeholder="Business Location" />
                                        </div>
                                        <div className="putt_box">
                                            <InputComponent type="text" class="wrput" placeholder="Zip/Postal code" />
                                        </div>
                                    </div>
                                    <div className="dflx_ac_jbet">
                                        <div className="putt_box">
                                            <InputComponent type="text" class="wrput" placeholder="State/Region" />
                                        </div>
                                        <div className="putt_box">
                                            <InputComponent type="text" class="wrput" placeholder="Business Location" />
                                        </div>
                                    </div>
                                    <div className="putt_box w-100">
                                        <InputComponent type="text" class="wrput" placeholder="Address Line1" />
                                    </div>
                                    <div className="putt_box w-100">
                                        <InputComponent type="text" class="wrput" placeholder="Address Line2" />
                                    </div>
                                </div>
                                <div className="putt_box">
                                    <select className="selector wh">
                                        <option value="">Select Time Zone</option>
                                    </select>
                                </div>
                            </div>

                        </section>
                    </article>

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <Link to="/VerProfile2">
                                <ButtonComponent class="btn_sm1 cor" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <PopLocation open={popLoct} close={closeLoct} />
            <PopPhone open={popUpsPh} close={closePopPh} />
        </div>
    )
}


const PopPhone = (props) => {
    const { open, close } = props;
    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className={"pop_bg"}></div>
            <div className={"pop_body pop_dial pop_ab_cent"}>
                <div className={"pop_top"}>
                    <div className={"ptop_txt"}>
                        <h1>Certification Number</h1>
                    </div>
                </div>
                <p className={"line1"}></p>
                <form>
                    <div className={"pop_conts"}>
                        <div className={"pop_conts_dial"}>
                            <dl className={"natdial_dl"}>
                                <dt>
                                    <select className="selector wh">
                                        <option value="">US (+1)</option>
                                    </select>
                                </dt>
                                <dd>
                                    <InputComponent type="text" class="wrput" value="+1-002328293" />
                                </dd>
                            </dl>
                            <dl className={"natdial_dl m-0"}>
                                <dt>
                                    <p className={"pop_txt"}>Certification Number</p>
                                </dt>
                                <dd>
                                    <div className="putt_box time">
                                        <span className="put_timer">3:00</span>
                                        <InputComponent type="text" class="wrput m-0" />
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <p className={"line1"}></p>
                    <div className={"pop_foot"}>
                        <ButtonComponent onClick={close} class="btn_md3 w-48" txt="Cancel" />
                        <ButtonComponent onClick={close} class="btn_md3 cor w-48" txt="Confirm" />
                    </div>
                </form>
            </div>
        </section>
    )
}
