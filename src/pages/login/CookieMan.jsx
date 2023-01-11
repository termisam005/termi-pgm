import React from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import Switch from "../../components/common/Switch";

export default function CookieMan() {

    return (
        <div className="wrap_grad dark">
            <div className="container">

                <div className="demo_title m-b-50">
                    <h1>Cookie Manager</h1>
                </div>

                <div className="dflx_jcent">

                    <section className="mana_wrap">
                        <p className="go_delete"></p>

                        <article className="mana_in">
                            <div className="title">
                                <h1>Cookie Manager</h1>
                            </div>
                            <div className="mana_conts">
                                <p className="txt">
                                    Sparwk may request cookies to be set on your device.
                                    We use cookies to let us know when your visit Sparwk, to understand how you interact with us,
                                    to enrich and personalize your user experience, to enable social media functionality and to  customize your
                                    relationship with Sparwk, including providing you with more relevant advertising.
                                    Click on the different category headings to find out more. You can also change your cookie preferences at any time.
                                    Note that blocking some types of cookies may impact your experience on Sparwk and the services we are able to offer.
                                </p>
                                <p className="txt cor913">
                                    Read more about our Cookie Policy
                                </p>
                                <ButtonComponent class="btn_sm1 cor h40" txt="Accept All Cookies" />
                            </div>
                            <div className="mana_conts">
                                <h3 className="tlt">Manage Consent Preferences</h3>
                                <div className="m-b-30">
                                    <div className="comt_check">
                                        <span>Strictly Necessary Cookies</span>
                                        <span>Active</span>
                                    </div>
                                    <div className="comt_check">
                                        <span>Functional Cookies</span>
                                        <Switch label_class="switch-label" />
                                    </div>
                                    <div className="comt_check">
                                        <span>Performance Cookies</span>
                                        <Switch label_class="switch-label" />
                                    </div>
                                    <div className="comt_check">
                                        <span>Targeting Cookies</span>
                                        <Switch label_class="switch-label" />
                                    </div>
                                </div>
                                <ButtonComponent class="btn_sm1 cor h40" txt="Confirm My Choies" />
                            </div>
                        </article>
                    </section>

                </div>

            </div>
        </div>
    )
}