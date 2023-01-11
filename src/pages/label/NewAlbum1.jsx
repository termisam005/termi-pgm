import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import InputComponent from "../../components/common/InputComponent";
import ImgComponent from "../../components/common/ImgComponent";
import BordComp from "../../components/common/BordComp";
import ButtonWith from "../../components/common/ButtonWith";
import DateSingleText from "../../components/common/DateSingleText";


export default function NewAlbum1() {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };


    return (
        <div className="wrap_prof">

            <HeaderTrans src="../resources/images/logo.png" />

            <section className="rolse_box official_box pf">
                <div className="rolse_in">

                    <article className="profile_contain">
                        <article className="roles_title">
                            <h1>
                                <span onClick={goBack} className="go_back">
                                    <img src="/resources/images/arr_back_wh.png" alt="image" />
                                </span>
                                <span className="big">New Album - Album Information</span>
                            </h1>
                        </article>

                        <div className="pf_group">
                            <h5 className="pf_title">
                                Upload Album Artwork
                            </h5>
                            <div className="drop_box m-t-15">
                                <div className="drop_left">
                                    <div className="drop_photo">
                                        {/* <img className="img_photo" src="../resources/images/nemo_prof_ex1.jpg" alt="photo" /> */}
                                        <img className="ic_thumb" src="../resources/images/pf_thumb.png" alt="image" />
                                        <input type="file" className="file_put" />
                                    </div>
                                    <dl className="drop_ex_dl">
                                        <dd>
                                            <ImgComponent src="../resources/images/feel_wh.png" />
                                            <p className="word">
                                                Your artwork must be TIFF, JPEG, or
                                                PNG square image file.
                                            </p>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>

                        <div className="pf_group">
                            <h5 className="pf_title">
                                Album Title
                            </h5>
                            <section className="pf_sheet">
                                <InputComponent class="wrput" placeholder="*Album Title" />
                                <div className="pf_txt m-t-10">
                                    <div className="put_tip">
                                        <img src="../resources/images/feel_wh.png" alt="feel" />
                                    </div>
                                    <p>It doesn’t matter if you arbitrarily decide the title of the Album before submitting it.</p>
                                </div>
                            </section>
                        </div>

                        <div className="pf_group">
                            <h5 className="pf_title">
                                Release date
                            </h5>
                            <section className="pf_sheet">
                                <article className="form_sel dflx_ac m-b-12">
                                    <div className={radioState === 1 ? "check_line on" : "check_line"} onClick={() => radioTab(1)}>
                                        <p className="checkbox circ">
                                            <span className="circle"></span>
                                        </p>
                                        <span className="check_word">Set date</span>
                                    </div>
                                    <p className="p-l-20"></p>
                                    <div className={radioState === 2 ? "check_line on" : "check_line"} onClick={() => radioTab(2)}>
                                        <p className="checkbox circ">
                                            <span className="circle"></span>
                                        </p>
                                        <span className="check_word">ASAP (As Soon As Possible)</span>
                                    </div>
                                </article>
                                <article className={radioState === 1 ? "rel_cont on" : "rel_cont"}>
                                    <div className="wrbg calen m-b-15">
                                        <section className="calen_set">
                                            <p>
                                                <img src="../resources/images/calendar_vol20.png" alt="calendar" />
                                            </p>
                                            <DateSingleText class="p-l-10" pltext="Set Release date" />
                                        </section>
                                    </div>
                                    <div className="wrbg calen">
                                        <section className="calen_set">
                                            <p>
                                                <img src="../resources/images/calendar_vol20.png" alt="calendar" />
                                            </p>
                                            <DateSingleText class="p-l-10" pltext="Set Pre-order date" />
                                        </section>
                                    </div>
                                </article>
                                <article className={radioState === 2 ? "rel_cont on" : "rel_cont"}>
                                </article>
                            </section>
                        </div>

                        <div className="pf_group">
                            <h5 className="pf_title">
                                <span>Genre</span>
                            </h5>
                            <section className="pf_sheet">
                                <div className="form_bord">
                                    <p className="tlt">Genre</p>
                                    <div className="cont">
                                        <div className="bord_wrap">
                                            <BordComp word="Hip-Hop" />
                                            <BordComp word="Dance" />
                                        </div>
                                        <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                    </div>
                                </div>
                                <div className="form_bord">
                                    <p className="tlt">Sub-Genre</p>
                                    <div className="cont">
                                        <div className="bord_wrap">
                                            <BordComp word="BoogieWoogie" />
                                            <BordComp word="BigBeat" />
                                        </div>
                                        <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </article>

                    <article className="create_bottom p-t-30">
                        <div></div>
                        <div className="dflx_ac_jend">
                            <ButtonComponent class="btn_md1 w150 m-r-15" txt="Cancel" />
                            <Link to="/NewAlbum2">
                                <ButtonComponent class="btn_md1 cor w150" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

        </div>
    )
}


