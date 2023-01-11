import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import InputComponent from "../../components/common/InputComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import "../../components/modal/modal.css";

export default function CreateOff1() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div className="wrap_login">

            <HeaderTrans logo_class="logo_none" src="../resources/images/logo.png" />

            <section className="log_box">
                <div className="logbox_in">
                    <article className="form_group">
                        <div className="login_title">
                            <h1>
                                <span onClick={goBack} className="go_back">
                                    <img src="../resources/images/arr_back_wh.png" alt="link back" />
                                </span>
                                <span>Create a Official Page</span>
                            </h1>
                            <p className="logtlt_p">
                                Already have an account?<Link to="/Login1" className="m-l-5">Next</Link>
                            </p>
                        </div>
                        <div className="signup_zone official">
                            <div className="putt_box">
                                <InputComponent type="text" class="wrput" placeholder="E-mail" />
                            </div>
                            <div className="putt_box see">
                                <span className="put_mark">
                                    <img src="../resources/images/eye_gray.png" alt="see" />
                                </span>
                                <InputComponent type="password" class="wrput" placeholder="Password" />
                            </div>
                            <div className="putt_box see">
                                <span className="put_mark">
                                    <img src="../resources/images/eye_gray.png" alt="see" />
                                </span>
                                <InputComponent type="password" class="wrput" placeholder="Re-enter Password" />
                            </div>
                            <div className="log_button_conts">
                                <ButtonComponent onClick={openModal} type="submit" class="btn_lg1 cor" txt="Sign up" />
                            </div>
                            <Modal open={modalOpen} close={closeModal} />
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )

}

const Modal = (props) => {
    const { open, close } = props;

    const checkClick = () => {
        window.location.href = "/CreateOff2"
    };

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            <div onClick={close} className={"modal_bg"}></div>
            <div className={"pop_body pop_dial"}>
                <div className={"pop_top"}>
                    <div className={"ptop_txt"}>
                        <h1>Verify your email address</h1>
                    </div>
                </div>
                <p className={"line1"}></p>
                <div className={"pop_conts"}>
                    <div className={"pop_conts_dial"}>
                        <p className={"pop_txt"}>
                            Please confirm that your information below is correct and verify your email address
                            to access your account. If you can't find your verification email in your inbox,
                            please check your spam folder in case it's been sent there by mistake.
                        </p>
                        <p className={"pop_inner_txt m-t-20"}>
                            <span className="call">
                                Isaac.Albeniz@gmail.com
                            </span>
                            <Link to="/Login1">
                                <span className="email">
                                    Change email
                                </span>
                            </Link>
                        </p>
                        <p className={"pop_cent p-b-0"}>
                            <Link>
                                <span className={"terms"}>Term Of Use, Privacy Policy, and Cookie Policy.</span>
                            </Link>
                        </p>
                    </div>
                </div>
                <p className={"line1"}></p>
                <div className={"pop_foot"}>
                    <ButtonComponent class="btn_md3 w-48" txt="Recend verification" />
                    <ButtonComponent onClick={checkClick} class="btn_md3 cor w-48" txt="Checked my Email" />
                </div>
            </div>
        </div>
    )
}