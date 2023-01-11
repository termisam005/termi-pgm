import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";

export default function CreateOff4() {
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
                            <span className="big">Create a Official Page</span>
                        </h1>
                        <p className="text">
                            Connect your business, yourself, or your cause to the worldwide Music of people on sparwk.<br />
                            To get started, choose a Page category
                        </p>
                    </article>

                    <article className="official_contain h420">
                        <div className="dflx_ac_jcent h-100">
                            <div className="final_text m-b-20">
                                {/* <h1>Finalize</h1> */}
                                <p>
                                    A review has been requested. The review takes<br /> 1-3 business days.
                                </p>
                                <Link to="/MainNotVerified">
                                    <ButtonComponent class="btn_md2 cor" txt="Start Now" />
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

        </div>
    )
}

