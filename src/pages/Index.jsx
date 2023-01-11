import { Link } from "react-router-dom";
import ButtonComponent from "../components/common/ButtonComponent";
import ImgComponent from "../components/common/ImgComponent";
import CircleNation from "../components/common/CircleNation";

export default function Index() {

    const clickX = () => {
        let footCookie = document.querySelector('.foot_cookies');
        let fooTer = document.querySelector('.footer');
        footCookie.remove();
        fooTer.classList.add("show");
    }

    return (
        <div className="wrap_login">

            <header className="index_header">
                <div className="header_line">
                    <section className="header_left">
                        <h1 className="hd_logo">
                            <Link to="/">
                                <img src="../resources/images/logo.png" alt="Sparwk" />
                            </Link>
                        </h1>
                    </section>
                    <section className="header_right">
                        <article className="hd_icline">
                            <CircleNation />
                            <div className="hcircle">
                                <Link to="/Login1">
                                    Sign in
                                </Link>
                            </div>
                            <div className="hcircle">
                                <Link to="/Signup1">
                                    <ButtonComponent class="btn_sm1 cor" txt="Sign up" />
                                </Link>
                            </div>
                        </article>
                    </section>
                </div>
            </header>

            <section className="index_conts">
                <div className="the_title">
                    <h1>
                        <span className="m-r-20">Welcome to</span>
                        <img src="../resources/images/logo_big.png" alt="spawrk" />
                    </h1>
                    <p className="m-t-10">YOUR CREATIVE UNIVERSE AND SUSTAINABLE BUSINESS ECOSYSTEM</p>
                    <span className="mini_text m-t-25">
                        SPARWK brings all the professionals together to create music quickly and efficiently.<br />
                        Music experts from all over the world are waiting for you.
                    </span>
                    <div className="m-t-60">
                        <ButtonComponent class="btn_md2 cor" txt="Start Your Project Now" />
                    </div>
                </div>
            </section>
            <section className="foot_cookies">
                <div className="cookie_text tac">
                    <div onClick={clickX} className="circle_x">
                        <ImgComponent src="../resources/images/close_wh.png" />
                    </div>
                    <p>
                        We andour <Link><span className="sp_viol">partners</span></Link>​ use cookies to personalize your experience, to show you ads based on your interests, and for measurement and analytics purposes.
                    </p>
                    <p>
                        By using our website and services, you agree to our use of cookies as described in our <Link><span className="sp_viol">Cookie Policy</span></Link>.
                    </p>
                </div>
            </section>
            <section className="footer">
                <article className="footer_text">
                    <div className="footer_terms">
                        <Link>
                            <p>Privacy policy</p>
                        </Link>
                        <Link>
                            <p>Privacy policy</p>
                        </Link>
                    </div>
                    <div className="footer_copy">
                        sparwk.com ⓒ 2022 all rights reserved
                    </div>
                    <div className="footer_society">
                        <span className="m-r-35">Contact us</span>
                        <div className="society_iconts">
                            <Link>
                                <ImgComponent src="../resources/images/foot_facebook.png" />
                            </Link>
                            <Link>
                                <ImgComponent src="../resources/images/foot_youtube.png" />
                            </Link>
                            <Link>
                                <ImgComponent src="../resources/images/foot_instagram.png" />
                            </Link>
                            <Link>
                                <ImgComponent src="../resources/images/foot_twitter.png" />
                            </Link>
                        </div>
                    </div>
                </article>
            </section>

        </div>
    )
}