import { Link, useHistory } from "react-router-dom";
import ButtonComponent from "../../components/common/ButtonComponent";
import BtnSelect from "../../components/common/BtnSelect";
import SearchComponent from "../../components/common/SearchComponent";
import HeaderTrans from "../../components/header/HeaderTrans";

export default function SelectRoles3() {
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
                            <p className="step_circle on">3</p>
                        </article>
                        <article className="roles_title">
                            <h1>
                                <span className="big">Jin Suk Choi</span>
                                <span>Choose your interest label or creator</span>
                            </h1>
                        </article>
                        <SearchComponent srch_class="hd_search roles_search" btn_type="button"
                            btn_class="btn_srch" input_class="hd_input" placeholder="Music Label, Creator, Artist name" />

                        <article className="roles_contain scroll sc_y h300">
                            <h5>A</h5>
                            <div className="role_cont">
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>

                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>

                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>

                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>

                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>

                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>

                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>

                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                            </div>
                            <h5>B</h5>
                            <div className="role_cont">
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>

                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>

                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>

                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>

                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                                <BtnSelect>Label name</BtnSelect>
                                <BtnSelect>Creator name</BtnSelect>
                                <BtnSelect>Artist name</BtnSelect>
                            </div>
                        </article>
                        <article className="bottom_line">
                            <div>
                                <ButtonComponent onClick={goBack} class="btn_md1" txt="Previous Step" />
                            </div>
                            <div>
                                <Link to="/SelectRoles4">
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
