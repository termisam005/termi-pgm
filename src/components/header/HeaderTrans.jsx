import React from "react";
import { Link } from "react-router-dom";
import CircleNation from "../common/CircleNation";

export default function HeaderTrans(props) {
    return (
        <header className="index_header trans">
            <div className="header_line">
                <section className="header_left">
                    <h1 className="hd_logo">
                        <Link to="/">
                            <img className={props.logo_class} src={process.env.PUBLIC_URL + props.src} alt={'SPARWK'} />
                        </Link>
                    </h1>
                </section>
                <section className="header_right">
                    <article className="hd_icline">
                        <CircleNation />
                    </article>
                </section>
            </div>
        </header>
    );
}