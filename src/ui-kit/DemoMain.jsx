import { Link } from "react-router-dom";
import { useState } from "react";
//import "../App.scss";
import Header from "../components/header/Header";
import Blueline from "../components/layout/Blueline";
import Aside from "../components/layout/Aside";
import Feed from "../components/layout/Feed";
import Project from "../components/layout/Project";
import Task from "../components/layout/Task";
import ButtonAction from "../components/common/ButtonAction";
import "../components/modal/modal.css";
import ButtonComponent from "../components/common/ButtonComponent";

export default function Main() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div className="wrap">
            <Header />
            <div className="container">
                <Blueline />
                <div className="contents">
                    <Aside />
                    <main className="the_main">
                        <Task />
                        <Project />
                        <Feed />
                        <div className="cont50">
                            <ButtonAction>Cancel</ButtonAction>
                            <ButtonAction>Confirm</ButtonAction>
                        </div>
                        <button onClick={openModal}>모달팝업</button>
                        <Modal open={modalOpen} close={closeModal} />
                    </main>
                </div>
            </div>
        </div>
    );
}


const Modal = (props) => {
    const { open, close } = props;

    const checkClick = () => {
        window.location.href = "/SelectRoles1"
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



