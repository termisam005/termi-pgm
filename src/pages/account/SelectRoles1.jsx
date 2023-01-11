import { Link } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import BtnSelect from "../../components/common/BtnSelect";
import HeaderTrans from "../../components/header/HeaderTrans";

export default function SelectRoles1() {

    const [btnCreate, setCreate] = useState(false);
    const btnCreator = () => {
        setCreate(true);
        let rolesBtn = document.querySelector('.btn_creator');
        rolesBtn.classList.toggle('on');
    }
    const [btnArt, setArt] = useState(false);
    const btnArtist = () => {
        setArt(true);
        let rolesBtn = document.querySelector('.btn_artist');
        rolesBtn.classList.toggle('on');
    }

    return (
        <div className="wrap_reset">

            <HeaderTrans src="../resources/images/logo.png" />

            <div className="dflx_ac_jcent w-100 h-100">
                <section className="rolse_box">
                    <div className="rolse_in">
                        <article className="roles_step">
                            <p className="step_circle on">1</p>
                            <p className="step_circle">2</p>
                            <p className="step_circle">3</p>
                        </article>
                        <article className="roles_title">
                            <h1>
                                <span className="big">Jin Suk Choi</span>
                                <span>What kind of work do you do?</span>
                            </h1>
                            <p className="text">
                                So we can personalise your experience,<br />
                                go through the following steps to make the most of the platform.
                            </p>
                        </article>
                        <article className="roles_contain">
                            <h5>Indivisual</h5>
                            <div className="role_cont">
                                <button onClick={btnCreator} className="btn_md1 box btn_creator">Creator</button>
                                <button onClick={btnArtist} className="btn_md1 box btn_artist">Artist</button>
                                <BtnSelect>Musician</BtnSelect>
                                <BtnSelect>Engineer</BtnSelect>
                                <span className={btnCreate ? "btn_hidd on" : "btn_hidd"}>
                                    <BtnSelect>Topliner</BtnSelect>
                                    <BtnSelect>Lyricist</BtnSelect>
                                    <BtnSelect>Coordinator</BtnSelect>
                                    <BtnSelect>Producer</BtnSelect>
                                </span>
                                <span className={btnArt ? "btn_hidd on" : "btn_hidd"}>
                                    <BtnSelect>Singer</BtnSelect>
                                    <BtnSelect>Rapper</BtnSelect>
                                    <BtnSelect>Dancer</BtnSelect>
                                </span>
                            </div>
                        </article>
                        <article className="bottom_line">
                            <div className="bottom_txt">
                                Are you a Business Owners? <Link>Skip & Licensing FAQ 〉</Link>
                            </div>
                            <div>
                                <Link to="/SelectRoles2">
                                    <ButtonComponent class="btn_md1 cor" txt="Next" />
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    );
}