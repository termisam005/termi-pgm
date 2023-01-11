import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWith from "../../components/common/ButtonWith";
import HeaderTrans from "../../components/header/HeaderTrans";
import InputComponent from "../../components/common/InputComponent";
import PopLocation from "../../components/common/PopLocation";
import Select from 'react-select';
import { compOptions } from './data.ts';

export default function CreateOff3() {
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

    //drop_box
    const [upload, setUpload] = useState(false);
    const onUpload = () => {
        setUpload(true);
    }
    const offUpload = () => {
        setUpload(false);
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
                            <span className="big">Create a Official Company Page</span>
                        </h1>
                        <p className="text">
                            To have a business account, Please upload the information of the business license document.
                        </p>
                    </article>

                    <article className="official_contain">
                        <section className="off_contain50">
                            <div>
                                <dl className="dl_title">
                                    <dt>Enter Company Account info</dt>
                                    <dd></dd>
                                </dl>
                                <div className="putt_box">
                                    <p className="put_title p-t-5">
                                        <span>Select Company Type</span>
                                        <span className="ess">*</span>
                                    </p>
                                    <div className="create_select">
                                        <Select
                                            isMulti
                                            name="genders"
                                            options={compOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            placeholder="Music Publisher"
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
                                </div>
                                <div className="putt_box">
                                    <InputComponent type="text" class="wrput" placeholder="*Company name (Certificate for Business Proprietor Registration)" />
                                </div>
                            </div>

                            <div className="drop_box">
                                <div className="drop_zone">
                                    <div onClick={onUpload} className={upload ? "file_col hidd" : "file_col"}>
                                        <p className="m-b-10">
                                            A business license document
                                        </p>
                                        <div>
                                            <ButtonComponent class="btn_sm1" txt="File upload" />
                                        </div>
                                    </div>
                                    <div className={upload ? "dp_play_line" : "dp_play_line hidd"}>
                                        <p className="file_naming">
                                            registered data.doc
                                        </p>
                                        <span onClick={offUpload} className="del_x"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="half_putt">
                                <div className="dflx_ac_jbet">
                                    <div className="putt_box see">
                                        <ButtonWith onClick={openLoct} class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        <InputComponent type="text" class="wrput" placeholder="*Business Location" />
                                    </div>
                                    <div className="putt_box">
                                        <InputComponent type="text" class="wrput" placeholder="*Zip/Postal code" />
                                    </div>
                                </div>
                                <div className="dflx_ac_jbet">
                                    <div className="putt_box">
                                        <InputComponent type="text" class="wrput" placeholder="*State/Region" />
                                    </div>
                                    <div className="putt_box">
                                        <InputComponent type="text" class="wrput" placeholder="*Business Location" />
                                    </div>
                                </div>
                                <div className="putt_box w-100">
                                    <InputComponent type="text" class="wrput" placeholder="*Address Line1" />
                                </div>
                                <div className="putt_box w-100">
                                    <InputComponent type="text" class="wrput" placeholder="Address Line2" />
                                </div>
                            </div>
                        </section>

                        <section className="off_contain50">
                            <dl className="dl_title">
                                <dt>Primary contact person input info</dt>
                                <dd></dd>
                            </dl>
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
                                        <InputComponent type="text" class="wrput m-0" placeholder="*Phone number" />
                                        <div className="put_verify">
                                            <span className="shield m-r-5"></span>
                                            <span>Verified</span>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <div className="putt_box dflx_jbet">
                                <InputComponent type="text" class="wrput w-32" placeholder="*First name" />
                                <InputComponent type="text" class="wrput w-32" placeholder="Middle name" />
                                <InputComponent type="text" class="wrput w-32" placeholder="*Last name" />
                            </div>
                            <div className="putt_box w-100">
                                <InputComponent type="text" class="wrput" placeholder="*Primary Contact person Email" />
                            </div>
                            {/* <div>
                                <article className="file_space">
                                    <input type="file" className="fileput" />
                                </article>
                            </div> */}
                        </section>
                    </article>

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <ButtonComponent onClick={goBack} class="btn_sm1 m-r-12" txt="Back" />
                            <Link to="/CreateOff4">
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
