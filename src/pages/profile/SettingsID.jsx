import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWith from "../../components/common/ButtonWith";
import InputComponent from "../../components/common/InputComponent";
import ImgComponent from "../../components/common/ImgComponent";
import PopLocation from "../../components/common/PopLocation";


export default function SettingsID() {
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

    //IPI Name
    const [perId, setPerId] = useState(false);
    const openId = () => {
        setPerId(true);
    }
    const closeId = () => {
        setPerId(false);
    }
    const [resultId, setResultId] = useState(false);
    const openResId = () => {
        setResultId(true);
        let pfPort = document.querySelector('.pf_port');
        pfPort.classList.add('hidd');
    }

    //CAE Name
    const [perCae, setPerCae] = useState(false);
    const openCae = () => {
        setPerCae(true);
    }
    const closeCae = () => {
        setPerCae(false);
    }

    //ISNI Name
    const [perIsn, setPerIsn] = useState(false);
    const openIsn = () => {
        setPerIsn(true);
    }
    const closeIsn = () => {
        setPerIsn(false);
    }

    //IPN Name
    const [perIpn, setPerIpn] = useState(false);
    const openIpn = () => {
        setPerIpn(true);
    }
    const closeIpn = () => {
        setPerIpn(false);
    }

    //NRO Number
    const [perNro, setPerNro] = useState(false);
    const openNro = () => {
        setPerNro(true);
    }
    const closeNro = () => {
        setPerNro(false);
    }


    return (
        <div className="wrap dark">

            <div className="container posrel">

                <section className="dark_back">
                    <div className="dflx_ac_jbet h-100">
                        <h3 onClick={goBack}>
                            <span className="go_back">
                                <img src="../resources/images/arr_back_wh.png" alt="link back" />
                            </span>
                            <span className="word">Back</span>
                        </h3>
                    </div>
                </section>

                <div className="contents">

                    <section className="aside_line">
                        <aside className="the_aside">
                            <div>
                                <div className="mini_top">
                                    <h1 className="p-l-10">Profile</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <article className="sub_link">
                                        <div className="add_line">
                                            <Link className="link" to="/SettingsAccount">Account</Link>
                                        </div>
                                        <div className="add_line">
                                            <Link className="link" to="/SettingsAvail">Available & Privacy</Link>
                                        </div>
                                        <div className="add_line">
                                            <Link className="link" to="/SettingsProfile">Profile</Link>
                                        </div>
                                        <div className="add_line">
                                            <Link className="link on" to="/SettingsID">Person ID</Link>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

                        <section className="rolse_box official_box set">
                            <div className="rolse_in">

                                <article className="roles_title">
                                    <h1>
                                        <span className="big">Person ID</span>
                                    </h1>
                                </article>
                                <article className="profile_contain">

                                    <section className="pf_sheet">
                                        <div className="pf_wrap">
                                            <div className="pf_over">
                                                <dl className="pf_dl">
                                                    <dt>
                                                        <span className="title">IPI Name Number</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>Please enter the ipi number.<br />
                                                                The IPI Name Number is composed of 11 numeric digits.</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={perId ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name">
                                                        <h3>00045620792</h3>
                                                    </div>
                                                    <div onClick={openId} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <ImgComponent class="m-r-3" src="../resources/images/feel_994.png" />
                                                                <span>Verification needed</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={perId ? "pf_under pf_port" : "pf_under pf_port hidd"}>
                                                <article className="putt_zone dflx_ae">
                                                    <div className="putt_box reset ">
                                                        <InputComponent class="wrput" placeholder="Enter IPI Number" />
                                                        <span className="del_x"></span>
                                                    </div>
                                                    <div className="pfput_right">
                                                        <div className="dflx_ac_jend">
                                                            <ButtonComponent onClick={closeId} class="btn_sm1 m-r-12" txt="Cancel" />
                                                            <ButtonComponent onClick={openResId} class="btn_sm1 cor" txt="Verify " />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={resultId ? "pf_under" : "pf_under hidd"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name">
                                                        <p className="m-r-10">
                                                            <ImgComponent src="../resources/images/check_ligreen24.png" />
                                                        </p>
                                                        <h3>486556603</h3>
                                                    </div>
                                                    <div className="presult_right">
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
                                                        <span className="title">CAE Number</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>Please enter the CAE number.<br />
                                                                A CAE number is 9 digits long.</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={perCae ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <h3 className="elip">207000043</h3>
                                                    </div>
                                                    <div onClick={openCae} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={perCae ? "pf_under" : "pf_under hidd"}>
                                                <article className="putt_zone dflx_ae">
                                                    <div className="putt_box reset ">
                                                        <InputComponent class="wrput" placeholder="Enter CAE Number" />
                                                        <span className="del_x"></span>
                                                    </div>
                                                    <div className="pfput_right">
                                                        <div className="dflx_ac_jend">
                                                            <ButtonComponent onClick={closeCae} class="btn_sm1 m-r-12" txt="Cancel" />
                                                            <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                        </div>
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
                                                        <span className="title">ISNI Number</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>Please enter the ISNI number.<br />
                                                                Such an identifier consists of 16 digits.</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={perIsn ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <h3 className="elip">1234567890123456</h3>
                                                    </div>
                                                    <div onClick={openIsn} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={perIsn ? "pf_under" : "pf_under hidd"}>
                                                <article className="putt_zone dflx_ae">
                                                    <div className="putt_box reset ">
                                                        <InputComponent class="wrput" placeholder="Enter ISNI Number" />
                                                        <span className="del_x"></span>
                                                    </div>
                                                    <div className="pfput_right">
                                                        <div className="dflx_ac_jend">
                                                            <ButtonComponent onClick={closeIsn} class="btn_sm1 m-r-12" txt="Cancel" />
                                                            <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                        </div>
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
                                                        <span className="title">IPN Number</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p className="f-s-13">The International Performer Number (IPN) is a unique universal identifier
                                                                allocated to every single PPL-registered performer as well as performers
                                                                registered with other collective management organizations (CMOs).</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={perIpn ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <h3 className="elip">W0512345</h3>
                                                    </div>
                                                    <div onClick={openIpn} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={perIpn ? "pf_under" : "pf_under hidd"}>
                                                <article className="putt_zone dflx_ae">
                                                    <div className="putt_box reset ">
                                                        <InputComponent class="wrput" placeholder="Enter IPN Number" />
                                                        <span className="del_x"></span>
                                                    </div>
                                                    <div className="pfput_right">
                                                        <div className="dflx_ac_jend">
                                                            <ButtonComponent onClick={closeIpn} class="btn_sm1 m-r-12" txt="Cancel" />
                                                            <ButtonComponent class="btn_sm1 cor" txt="Save " />
                                                        </div>
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
                                                        <span className="title">NRO Number</span>
                                                    </dt>
                                                    <dd>
                                                        <div className="pf_txt">
                                                            <div className="put_tip">
                                                                <img src="../resources/images/feel_wh.png" alt="feel" />
                                                            </div>
                                                            <p>Please enter the NRO number.</p>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className={perNro ? "pf_under hidd" : "pf_under"}>
                                                <article className="pf_bet_line">
                                                    <div className="check_name w-85">
                                                        <h3 className="elip">
                                                            <span className="m-r-15">SAMI</span>
                                                            <span>10846979</span>
                                                        </h3>
                                                    </div>
                                                    <div onClick={openNro} className="presult_right">
                                                        <div className="dflx_ac curpt">
                                                            <p className="word dflx_ac">
                                                                <span>Change</span>
                                                            </p>
                                                            <ImgComponent class="m-l-20" src="../resources/images/arr36_right_wh.png" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className={perNro ? "pf_under" : "pf_under hidd"}>
                                                <dl className="phone_dl">
                                                    <dt>
                                                        <div className="putt_box see">
                                                            <ButtonWith onClick={openLoct} class="btsq bt20" src="../resources/images/sv_arr20_plus_wh.png" />
                                                            <InputComponent type="text" class="wrput wh m-0" value="NRO Society" />
                                                        </div>
                                                    </dt>
                                                    <dd>
                                                        <div className="putt_box">
                                                            <InputComponent type="text" class="wrput m-0" placeholder="NRO number" />
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </section>

                    </main>

                </div>

            </div>

            <PopLocation open={popLoct} close={closeLoct} />
        </div>
    )
}

