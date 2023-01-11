import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";

export default function CreateProject5() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    return (
        <div className="wrap_login">

            <HeaderTrans logo_class="logo_none" src="../resources/images/logo.png" />

            <section className="rolse_box official_box">
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
                            <p className="step_circle">1</p>
                            <span className="step_word">Invitation</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle">2</p>
                            <span className="step_word">Create Project</span>
                        </div>
                        <div className="step_term">
                            <p className="step_circle on">3</p>
                            <span className="step_word">Finalize</span>
                        </div>
                    </article>

                    <article className="roles_contain">
                        <p>
                            The project has been registered.
                        </p>
                        <div className="dflx_ac_jcent m-t-30">
                            <div className="roles_circle">
                                <img src="../resources/images/circle_in_people.png" alt="image" />
                            </div>
                        </div>
                    </article>
                    <article className="bottom_line">
                        <div className="bottom_txt">
                        </div>
                        <div>
                            <Link to="/">
                                <ButtonComponent class="btn_md2 cor" txt="Done" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

        </div>
    )
}

