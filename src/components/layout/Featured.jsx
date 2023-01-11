import { Link } from "react-router-dom";
import { useState } from "react";
import SlideToggle from "react-slide-toggle";
import ImgComponent from "../common/ImgComponent";
import ProfComponent from "../common/ProfComponent";

export default function Featured(props) {

    const [isToggle, setIsToggle] = useState(false);
    const clickToggle = () => {
        setIsToggle(!isToggle);
    }

    return (
        <SlideToggle duration={150}
            render={({ toggle,
                setCollapsibleElement,
                toggleState,
                isMoving,
                hasReversed,
                range,
                progress }) => (

                <div className={
                    "slide-toggle slide-toggle--special " +
                    (toggleState || "").toLowerCase()
                }>
                    <article className="slide-toggle__box the_feed m-b-20">
                        <div className="mini_top p-t-20">
                            <div className="dflx_ac_jbet m-b-5">
                                <div className="cttop_left">
                                    <h1 className="top_title semib">
                                        {props.title}
                                    </h1>
                                </div>
                                <p className={isToggle ? "up_arrow on" : "up_arrow"} onClick={clickToggle}>
                                    <span onClick={toggle} className="dpblock h-100"></span>
                                </p>
                            </div>
                        </div>
                        <p className="line1"></p>
                        <div ref={setCollapsibleElement} className="feed_conts">
                            <div className="whois_cont">
                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                    line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                <dl className="whois_dl">
                                    <dt>Jin Suk Choi</dt>
                                    <dd>
                                        <span className="word">June 10</span>
                                    </dd>
                                </dl>
                            </div>
                            <div className="text_cont">
                                <div className="text">
                                    Higher Power, out 7 May.<br />
                                    Pre-order / pre-save / CD single: https://coldplay.lnk.to/HigherPower<br />
                                    🚀🛰🛸
                                </div>
                                <a className="go_more">View more</a>
                            </div>
                            <div className="visual_cont">
                                <div className="visual_box">
                                    <ImgComponent class="visu_img" src="../resources/images/visu_ex1.jpg" />
                                </div>
                            </div>
                            <div className="comp_line m-t-20">
                                <p className="the_comp">
                                    <ImgComponent src="../resources/images/sv_talk_wh.svg" />
                                    <span className="word">
                                        <span className="cor913">12</span>
                                        <span className="m-l-7">Comments</span>
                                    </span>
                                </p>
                            </div>
                            <div className="feed_conts"></div>
                        </div>
                    </article>
                </div>

            )}
        />
    );
}