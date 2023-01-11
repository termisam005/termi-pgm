import { useHistory } from "react-router";
import ImgComponent from "../../components/common/ImgComponent";
import HeaderTrans from "../../components/header/HeaderTrans";

export default function CreateOff2() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const offClick = () => {
        window.location.href = "CreateOff3"
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

                    <article className="official_contain">
                        <div className="official_options">
                            <section onClick={offClick} className="off_box">
                                <div className="simbol">
                                    <ImgComponent src="../resources/images/simbol_comp.png" />
                                </div>
                                <div className="off_name">
                                    <p className="line1"></p>
                                    <p>Company</p>
                                </div>
                            </section>
                            <section onClick={offClick} className="off_box">
                                <div className="simbol">
                                    <ImgComponent src="../resources/images/simbol_gr.png" />
                                </div>
                                <div className="off_name">
                                    <p className="line1"></p>
                                    <p>Group</p>
                                </div>
                            </section>
                        </div>
                    </article>
                </div>
            </section>

        </div>
    )

}
