import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import InputComponent from "../../components/common/InputComponent";
import ImgComponent from "../../components/common/ImgComponent";
import ButtonWith from "../../components/common/ButtonWith";
import ListPitch1 from "../list/ListPitch1";


export default function NewPitch1() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [radioState, setRadioState] = useState(1);
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
                        <div className="m-b-30">
                            <dl className="dl_title">
                                <dt>STEP 1</dt>
                                <dd>Enter Title and detail</dd>
                            </dl>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="*Pitch list title" />
                            </div>
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="Short Description" />
                            </div>
                            <div className="putt_box">
                                <textarea className="text_area project_area" placeholder="Full Pitch list Description">
                                </textarea>
                            </div>
                        </div>
                        <div>
                            <dl className="dl_title">
                                <dt>STEP 2</dt>
                                <dd>Select Pitch list Style of Avatar image</dd>
                            </dl>
                            <article className="form_sel">
                                <div className="dpflx">
                                    <div className="build_list">
                                        <ListPitch1>
                                            <div className="pitch_call">
                                                <h4 className="down_vol">
                                                    Pitched playlist
                                                </h4>
                                                <p className="pitch_note">
                                                    <span className="note20"></span>
                                                    <span className="cor913">5</span>
                                                </p>
                                            </div>
                                            <div className="prj_dark"></div>
                                            <div className="img_cover">
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover2.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                                </div>
                                            </div>
                                        </ListPitch1>
                                        <div className={radioState === 1 ? "check_line on" : "check_line"} onClick={() => radioTab(1)}>
                                            <p className="checkbox circ">
                                                <span className="circle"></span>
                                            </p>
                                            <span className="check_word">Basic Style</span>
                                        </div>
                                        <p className="sync_txt m-t-20">
                                            ⓘ A total of 4 songs of <br />Song Avatar images will be <br />exposed.
                                        </p>
                                    </div>
                                    <div className="build_list">
                                        <ListPitch1>
                                            <div className="pitch_opt">
                                                <dl className="opt_setdl">
                                                    <dt>
                                                        <ButtonWith class="btn_sm1" spant="Upload" imgclass="m-r-5" src="../resources/images/sv_photo_wh.svg" />

                                                    </dt>
                                                    <dd>
                                                        Optimal dimensions<br />
                                                        166 x 166px
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="pitch_call">
                                                <h4 className="down_vol">
                                                    MY Playlist vol 1
                                                </h4>
                                                <p className="pitch_note">
                                                    <span className="note20"></span>
                                                    <span className="cor913">1</span>
                                                </p>
                                            </div>
                                            <div className="prj_dark"></div>
                                        </ListPitch1>
                                        <div className={radioState === 2 ? "check_line on" : "check_line"} onClick={() => radioTab(2)}>
                                            <p className="checkbox circ">
                                                <span className="circle"></span>
                                            </p>
                                            <span className="check_word">Custom Style</span>
                                        </div>
                                        <p className="sync_txt m-t-20">
                                            ⓘ Set a total of one<br /> representative pitch list <br />avatar image.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article >

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <Link to="/NewPitch2">
                                <ButtonComponent class="btn_sm1 cor w100" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div >
            </section >

        </div >
    )
}

