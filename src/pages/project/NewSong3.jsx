import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";

export default function VerProfile3() {
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
                            <span className="big">New Song</span>
                            <span className="mini cor913">
                                Build your New Song
                            </span>
                        </h1>
                    </article>

                    <article className="roles_contain">
                        <h5>STEP 3</h5>
                        <p>
                            The project has been registered.
                        </p>
                        <div className="dflx_ac_jcent m-t-50">
                            <div className="roles_circle">
                                <img src="../resources/images/circle_in_people.png" alt="image" />
                            </div>
                        </div>
                    </article>
                    <article className="bottom_line">
                        <div className="bottom_txt">
                        </div>
                        <div>
                            <Link to="/SongLyrics">
                                <ButtonComponent class="btn_md2 cor" txt="Done" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

        </div>
    )
}

