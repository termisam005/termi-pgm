import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import ButtonWidth from "../../components/common/ButtonWith";
import HeaderTrans from "../../components/header/HeaderTrans";
import InputComponent from "../../components/common/InputComponent";
import ToggleCheck from "../../components/common/ToggleCheck";
import ImgComponent from "../../components/common/ImgComponent";


export default function NewSong1() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [playing, setPlaying] = useState(false);
    const clickPlay = () => {
        setPlaying(!playing);
    };

    const [deletor, setDeletor] = useState(false);
    const clickDel = () => {
        setDeletor(true);
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
                            <span className="big">New Song</span>
                            <span className="mini cor913">Build your New Song</span>
                        </h1>
                    </article>

                    <article className="official_contain">
                        <section className="off_contain50">
                            <dl className="dl_title">
                                <dt>STEP 1</dt>
                                <dd>Upload your song & Avatar</dd>
                            </dl>
                            <div className="form_verify">
                                <div className="putt_box prj_box">
                                    <InputComponent type="text" class="wrput" placeholder="Song title" />
                                    <p className="sync_txt">
                                        ⓘ It doesn't matter if you arbitrarily decide the title of the song before pitching.
                                    </p>
                                </div>
                                <div className="putt_box">
                                    <InputComponent type="text" class="wrput" placeholder="Sub-Song title" />
                                </div>
                                <div className="putt_box">
                                    <textarea className="text_area project_area" placeholder="Comments">
                                    </textarea>
                                </div>

                                <article className="new_drop">
                                    <div className="drop_box">
                                        <div className="drop_zone">
                                            <div className="dflx_ac_jcent">
                                                <img className="img_note" src="../resources/images/sv_drop.svg" alt="note" />
                                                <span className="word mini">
                                                    Drop recordings here Drag and drop files<br /> below or browse files
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="drop_player">
                                        <div className="dp_play_line">
                                            <section className="dp_play">
                                                <div className="song_play">
                                                    <p onClick={clickPlay} className={playing ? "btn_play stop" : "btn_play"}></p>
                                                    <div className="stream">
                                                        <ImgComponent src="../resources/images/ex_stream.png" />
                                                    </div>
                                                </div>
                                                <p className="stat">
                                                    <span className="m-r-8">01:40</span>
                                                    <span className="tmall">03:50</span>
                                                </p>
                                            </section>
                                            <span className="del_x"></span>
                                        </div>
                                        <p className="file_name">
                                            A_Project_guide.mp3
                                        </p>
                                    </div>
                                </article>
                                <article className="upload_dl">
                                    <dt>
                                        <ButtonWidth class="btn_sm1 w120" imgclass="m-r-5" spant="Upload" src="../resources/images/sv_photo_wh.svg" />
                                    </dt>
                                    <dd>
                                        <ToggleCheck word="Use the Project Avatar image." box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                        <div className="dpflx m-t-15">
                                            <div className="nemo_prof">
                                                <ImgComponent src="../resources/images/nemo_prof_ex1.jpg" />
                                            </div>
                                            <p className="sync_txt p-l-20">
                                                Your artwork must be TIFF,JPEG,<br /> or PNG square image file.
                                            </p>
                                        </div>
                                    </dd>
                                </article>
                            </div>
                        </section>
                    </article>

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <Link to="/NewSong2">
                                <ButtonComponent class="btn_sm1 cor" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

        </div>
    )
}

