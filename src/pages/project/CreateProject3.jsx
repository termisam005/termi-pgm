import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import InputComponent from "../../components/common/InputComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import ImgComponent from "../../components/common/ImgComponent";
import EtcCont from "../../components/common/EtcCont";
import HeaderTrans from "../../components/header/HeaderTrans";


export default function CreateProject3() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const addSelector = () => {
        let seltor = document.querySelector(".add_selector");
        let drBox = document.querySelector('.drop_box');
        let urBox = document.querySelector('.url_box');

        if (seltor.value === "url") {
            drBox.classList.add('hidd');
            urBox.classList.remove('hidd');
        } else {
            drBox.classList.remove('hidd');
            urBox.classList.add('hidd');
        }
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

            <section className="rolse_box official_box filer">
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
                            <p className="step_circle on">1</p>
                            <span className="step_word">Invitation</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle">2</p>
                            <span className="step_word">Create Project</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle">3</p>
                            <span className="step_word">Finalize</span>
                        </div>
                    </article>

                    <article className="official_contain">
                        <section className="off_contain50">
                            <dl className="dl_title">
                                <dt>STEP 3</dt>
                                <dd>Add Reference Files</dd>
                                <p className="sync_txt m-t-10">
                                    ⓘ All information about the project should be registered here to help other members understand what they need.
                                </p>
                            </dl>
                            <div className="form_verify">
                                <div className="putt_box m-b-30">
                                    <select className="selector add_selector" onChange={addSelector}>
                                        <option value="file">Upload File</option>
                                        <option value="url">Add Youtube Video URL</option>
                                    </select>
                                    <div className="drop_box">
                                        <div className="drop_zone">
                                            <div onClick={onUpload} className={upload ? "file_col hidd" : "file_col"}>
                                                <p className="m-b-10">
                                                    Guidelines (txt, doc, pdf, xlxs, pptx)
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
                                    <div className="putt_box url_box hidd">
                                        <InputComponent type="text" class="wrput" placeholder="Enter URL ex) youtube.com/watch?v=A1b2C3d4E5fG" />
                                    </div>
                                </div>
                                <article className="file_container">
                                    <section className="bordnemo_188">
                                        <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                            <li>Open</li>
                                        </EtcCont>
                                        <div className="bordnemo_movie">
                                            <div className="box">
                                                <ImgComponent class="img_cover" src="../resources/images/cover_ex_butter.jpg" />
                                            </div>
                                        </div>
                                    </section>
                                    <section className="bordnemo_188">
                                        <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                            <li>Open</li>
                                        </EtcCont>
                                        <div className="bordnemo_movie">
                                            <div className="box">
                                                <ImgComponent class="img_cover" src="../resources/images/project_ex1.jpg" />
                                            </div>
                                        </div>
                                    </section>
                                    <section className="bordnemo_188">
                                        <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                            <li>Open</li>
                                        </EtcCont>
                                        <div className="bordnemo_in">
                                            <article className="nemo_vertical">
                                                <div className="nemo_over">
                                                    <p className="icon">
                                                        <ImgComponent src="../resources/images/file_share.png" />
                                                    </p>
                                                    <h3>Share URL</h3>
                                                </div>
                                                <div className="nemo_under">
                                                    <p className="nemod_p">
                                                        https://www.notion.so/7454
                                                        60ec51374adaadaa4f08696
                                                        81baf?v=815ea9e56981430
                                                        5986bbebb6db0
                                                    </p>
                                                </div>
                                            </article>
                                        </div>
                                    </section>
                                    <section className="bordnemo_188">
                                        <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                            <li>Open</li>
                                        </EtcCont>
                                        <div className="bordnemo_in">
                                            <article className="nemo_vertical">
                                                <div className="nemo_over">
                                                    <p className="icon">
                                                        <ImgComponent src="../resources/images/file_polder.png" />
                                                    </p>
                                                    <h3>File name.jpg</h3>
                                                </div>
                                                <div className="nemo_under">
                                                    <p className="nemod_p">Astor Piazzola</p>
                                                    <p className="nemod_p">
                                                        <span>Validity period</span>
                                                        <span className="m-l-2 m-r-2">:</span>
                                                        <span>07.07.2021</span>
                                                    </p>
                                                    <p className="nemod_p">
                                                        <span>3.8</span>
                                                        <span className="m-l-3">MB</span>
                                                    </p>
                                                </div>
                                            </article>
                                        </div>
                                    </section>
                                    <section className="bordnemo_188">
                                        <EtcCont wrap_class="wrap_etc sm posab" btn_class="btn_hor_etc" delli="Delete">
                                            <li>Open</li>
                                        </EtcCont>
                                        <div className="bordnemo_in">
                                            <article className="nemo_vertical">
                                                <div className="nemo_over">
                                                    <p className="icon">
                                                        <ImgComponent src="../resources/images/file_polder.png" />
                                                    </p>
                                                    <h3>File name.mp4</h3>
                                                </div>
                                                <div className="nemo_under">
                                                    <p className="nemod_p">Astor Piazzola</p>
                                                    <p className="nemod_p">
                                                        <span>Validity period</span>
                                                        <span className="m-l-2 m-r-2">:</span>
                                                        <span>07.07.2021</span>
                                                    </p>
                                                    <p className="nemod_p">
                                                        <span>3.8</span>
                                                        <span className="m-l-3">MB</span>
                                                    </p>
                                                </div>
                                            </article>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </section>
                    </article>

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <ButtonComponent onClick={goBack} class="btn_sm1 m-r-12" txt="Back" />
                            <Link to="/CreateProject4">
                                <ButtonComponent class="btn_sm1 cor" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

        </div>
    )
}

