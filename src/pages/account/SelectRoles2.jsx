import { Link, useHistory } from "react-router-dom";
import ButtonComponent from "../../components/common/ButtonComponent";
import BtnSelect from "../../components/common/BtnSelect";
import HeaderTrans from "../../components/header/HeaderTrans";

export default function SelectRoles2() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    return (
        <div className="wrap_reset">

            <HeaderTrans src="../resources/images/logo.png" />

            <div className="dflx_ac_jcent w-100 h-100">
                <section className="rolse_box">

                    <div className="rolse_in">
                        <article className="roles_step">
                            <p className="step_circle on">1</p>
                            <p className="step_circle on">2</p>
                            <p className="step_circle">3</p>
                        </article>
                        <article className="roles_title">
                            <h1>
                                <span className="big">Jin Suk Choi</span>
                                <span>What genre are you interested in?</span>
                            </h1>
                        </article>
                        <article className="roles_contain scroll sc_y">
                            <h5>Genre</h5>
                            <div className="role_cont">
                                <BtnSelect>Alternative</BtnSelect>
                                <BtnSelect>Blues</BtnSelect>
                                <BtnSelect>Cabaret</BtnSelect>
                                <BtnSelect>Children’s Music</BtnSelect>
                                <BtnSelect>Christian&Gospel</BtnSelect>
                                <BtnSelect>Commercial</BtnSelect>

                                <BtnSelect>Country</BtnSelect>
                                <BtnSelect>Dance</BtnSelect>
                                <BtnSelect>Electronic</BtnSelect>
                                <BtnSelect>Hip Hop</BtnSelect>
                                <BtnSelect>Indie POP</BtnSelect>
                                <BtnSelect>Industrial</BtnSelect>

                                <BtnSelect>Instrumental</BtnSelect>
                                <BtnSelect>Jazz</BtnSelect>
                                <BtnSelect>J-POP</BtnSelect>
                                <BtnSelect>K-POP</BtnSelect>
                                <BtnSelect>Latin</BtnSelect>
                                <BtnSelect>New Age</BtnSelect>

                                <BtnSelect>Opera</BtnSelect>
                                <BtnSelect>Polka</BtnSelect>
                                <BtnSelect>R&B/Soul</BtnSelect>
                                <BtnSelect>Reggae</BtnSelect>
                                <BtnSelect>Rock</BtnSelect>
                                <BtnSelect>Singer/Songwriter</BtnSelect>

                                <BtnSelect>Soundtrack</BtnSelect>
                                <BtnSelect>Video Game</BtnSelect>
                                <BtnSelect>Animation</BtnSelect>
                                <BtnSelect>World Music</BtnSelect>
                            </div>
                        </article>
                        <article className="bottom_line">
                            <div>
                                <ButtonComponent onClick={goBack} class="btn_md1" txt="Previous Step" />
                            </div>
                            <div>
                                <Link to="/SelectRoles3">
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
