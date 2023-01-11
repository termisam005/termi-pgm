import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import BordTact from "./BordTact";
import BordComp from "./BordComp";

const PopTerritor = (props) => {

    const { open, close } = props;

    const [selpLine1, setSelpLine1] = useState(false);
    const selpOn1 = () => {
        setSelpLine1(!selpLine1);
    }
    const [selpLine2, setSelpLine2] = useState(false);
    const selpOn2 = () => {
        setSelpLine2(!selpLine2);
    }
    const [selpLine3, setSelpLine3] = useState(false);
    const selpOn3 = () => {
        setSelpLine3(!selpLine3);
    }
    const [selpLine4, setSelpLine4] = useState(false);
    const selpOn4 = () => {
        setSelpLine4(!selpLine4);
    }
    const [selpLine02, setSelpLine02] = useState(false);
    const selpOn02 = () => {
        setSelpLine02(!selpLine02);
    }


    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent selectPop">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">
                            Select Territories
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>

                <div className="pop_conts">
                    <div className="dflx_ac_jbet">
                        <p></p>
                        <p className="mid_title">
                            Selected Territories  (Choose at least one)
                        </p>
                    </div>

                    <div className="selPop_wrap">
                        <section className="selpp_content">
                            <article className="selpp_top">
                                <h3 className="w140">Continental</h3>
                                <h3>Countries</h3>
                                <p className="line1"></p>
                            </article>

                            <article className="selpp_cont">
                                <div className="selpp_contin scroll sc_y">

                                    <div className="selpp_group">
                                        <dl onClick={selpOn1} className="selpp_dl">
                                            <dt>
                                                <span className={selpLine1 ? "trg on" : "trg"}></span>
                                            </dt>
                                            <dd>
                                                <div className="selpp_tact">
                                                    <BordTact txt="Worldwide" />
                                                    <span className="word">
                                                        +279(countries)
                                                    </span>
                                                </div>
                                            </dd>
                                        </dl>

                                        <div className={selpLine1 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                            <dl onClick={selpOn02} className="selpp_dl">
                                                <dt>
                                                    <span className={selpLine02 ? "trg on" : "trg"}></span>
                                                </dt>
                                                <dd>
                                                    <div className="selpp_tact">
                                                        <BordTact txt="Africa" />
                                                        <span className="word">
                                                            +52(countries)
                                                        </span>
                                                        <span className="selpp_sign">
                                                            25
                                                        </span>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>

                                        <div className={selpLine1 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                            <dl onClick={selpOn2} className="selpp_dl">
                                                <dt>
                                                    <span className={selpLine2 ? "trg on" : "trg"}></span>
                                                </dt>
                                                <dd>
                                                    <div className="selpp_tact">
                                                        <BordTact txt="America" />
                                                        <span className="word">
                                                            +52(countries)
                                                        </span>
                                                        <span className="selpp_sign">
                                                            50
                                                        </span>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <div className={selpLine2 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                                <dl onClick={selpOn3} className="selpp_dl">
                                                    <dt>
                                                        <span className={selpLine3 ? "trg on" : "trg"}></span>
                                                    </dt>
                                                    <dd>
                                                        <div className="selpp_tact">
                                                            <BordTact txt="America Countinent" />
                                                            <span className="word">
                                                                +43(countries)
                                                            </span>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <div className={selpLine3 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                                    <dl onClick={selpOn4} className="selpp_dl">
                                                        <dt>
                                                            <span className={selpLine4 ? "trg on" : "trg"}></span>
                                                        </dt>
                                                        <dd>
                                                            <div className="selpp_tact">
                                                                <BordTact txt="Antilles" />
                                                                <span className="word">
                                                                    +13(countries)
                                                                </span>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                    <div className={selpLine4 ? "selpp_group hidd on" : "selpp_group hidd"}>
                                                        <article className="selpp_share">
                                                            <div className="share3">
                                                                <BordTact txt="Antigua and Bar…" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Barbados" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Cuba" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Dominica" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Dominica Rep..." />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Grenada" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="haiti" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Jamaica" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Puerto Rico" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Sain Kitts and…" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Saint Lucia" />
                                                            </div>
                                                            <div className="share3">
                                                                <BordTact txt="Saint Vincent..." />
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </article>
                        </section>

                        <section className="selpp_select">
                            <article className="selpp_top">
                                <h3>Selected</h3>
                                <p className="clear">
                                    Clear all
                                </p>
                                <p className="line1"></p>
                            </article>
                            <article className="selpp_bords">
                                <div className="selpp_vert_wrap scroll sc_y">
                                    <BordComp word="Dominica" />
                                    <BordComp word="Cuba" />
                                    <BordComp word="Jamaica" />
                                    <BordComp word="Puerto Rico" />
                                    <BordComp word="Barbados" />
                                    <BordComp word="Africa  +52" />
                                </div>
                            </article>
                        </section>
                    </div>

                </div>

                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md2" txt="Cancel" />
                    <ButtonComponent onClick={close} class="btn_md2 cor" txt="Save" />
                </div>
            </div>
        </section >
    )
}

export default PopTerritor;

