import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import ImgComponent from "./ImgComponent";
import EtcCont from "./EtcCont";


const PopAddrefer = (props) => {

    const { open, close } = props;

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
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent referPop mx_h800 scroll scroll-y">
                <div className="pop_top p-l-20">
                    <div className="ptop_txt">
                        <h1 className="ptop_title f-s-20">
                            Add Reference
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <div className="pf_txt p-l-20">
                    <div className="put_tip">
                        <img src="../resources/images/feel_wh.png" alt="feel" />
                    </div>
                    <p>All information about the project should be registered here to help other members understand what they need.</p>
                </div>
                <div className="pop_conts">
                    <div className="upload_mid">
                        <div className="putt_box m-b-30">
                            <select className="selector add_selector" onChange={addSelector}>
                                <option value="file">Upload File</option>
                                <option value="url">Add Youtube Video URL</option>
                            </select>
                            <div className="drop_box">
                                <div className="drop_zone">
                                    <div onClick={onUpload} className={upload ? "file_col hidd" : "file_col"}>
                                        <p className="m-b-10">
                                            Reference File (txt, doc, pdf, xlxs, pptx)
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
                        </article>
                        <div className="dflx_ac_jend p-t-5 p-b-10">
                            <ButtonComponent onClick={close} class="btn_sm1 m-r-12 w100" txt="Cancel" />
                            <ButtonComponent class="btn_sm1 cor w100" txt="Save" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default PopAddrefer;

