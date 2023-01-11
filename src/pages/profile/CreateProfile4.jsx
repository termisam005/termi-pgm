import { Link } from "react-router-dom";
import HeaderTrans from "../../components/header/HeaderTrans";
import ButtonComponent from "../../components/common/ButtonComponent";


export default function CreateProfile4() {

    return (
        <div className="wrap_prof">

            <HeaderTrans src="../resources/images/logo.png" />

            <div className="dflx_ac_jcent w-100 h-100">
                <section className="rolse_box">
                    <div className="rolse_in">
                        <article className="roles_step h30">
                        </article>
                        <article className="roles_title">
                            <h1>
                                <span className="big">Jin Suk Choi,</span>
                                <span>Preaparation is completed.</span>
                            </h1>
                        </article>
                        <article className="roles_contain">
                            <h5 className="spec">Supporting independents</h5>
                            <p>
                                we don't take any rights from the members we represent in the catalogue which means they keep complete<br />
                                control and all the back-end  goes directly to the artist.<br />
                                we understand that everyone works differently, so to make the most of the creative service.
                            </p>
                            <div className="dflx_ac m-t-50">
                                <div className="roles_circle m-l-60">
                                    <img src="../resources/images/circle_in_people.png" alt="image" />
                                </div>
                                <p className="f-s-16 p-l-30 m-b-30">
                                    A review has been requested The review takes<br />1-3 business days.
                                </p>
                            </div>
                        </article>
                        <article className="bottom_line">
                            <div className="bottom_txt">
                            </div>
                            <div>
                                <Link to="/MainNotVerified">
                                    <ButtonComponent class="btn_md2 cor" txt="Move to main" />
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>
            </div>

        </div>
    )
}

