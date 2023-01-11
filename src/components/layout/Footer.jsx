import { Link } from "react-router-dom";
import ImgComponent from "../common/ImgComponent";

export default function Footer() {
    return (
        <section className="footer show">
            <article className="footer_text">
                <div className="footer_terms">
                    <Link to="/">
                        <p>Privacy policy</p>
                    </Link>
                    <Link to="/">
                        <p>Privacy policy</p>
                    </Link>
                </div>
                <div className="footer_copy">
                    sparwk.com ⓒ 2022 all rights reserved
                </div>
                <div className="footer_society">
                    <span className="m-r-35">Contact us</span>
                    <div className="society_iconts">
                        <Link to="/">
                            <ImgComponent src="../resources/images/foot_facebook.png" />
                        </Link>
                        <Link to="/">
                            <ImgComponent src="../resources/images/foot_youtube.png" />
                        </Link>
                        <Link to="/">
                            <ImgComponent src="../resources/images/foot_instagram.png" />
                        </Link>
                        <Link to="/">
                            <ImgComponent src="../resources/images/foot_twitter.png" />
                        </Link>
                    </div>
                </div>
            </article>
        </section>
    )
}