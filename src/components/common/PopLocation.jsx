import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import BordTact from "./BordTact";
import SearchComponent from "./SearchComponent";

const PopLocation = (props) => {

    const { open, close } = props;


    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent middlePop">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">
                            Select Business Location
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>

                <div className="pop_conts">
                    <SearchComponent srch_class="hd_search" btn_type="button"
                        btn_class="btn_srch" input_class="hd_input" placeholder="Enter Country name" />
                    <div className="selPop_wrap">
                        <section className="selpp_content">
                            <article className="selpp_top">
                                <h3 className="dflx_ac">
                                    <span>Search Mode</span>
                                </h3>
                                <p className="line1"></p>
                            </article>

                            <article className="selpp_cont">
                                <div className="selpp_contin scroll sc_y">
                                    <div className="selpp_srch">
                                        <div onClick={close} className="share4">
                                            <BordTact txt="Avertsing" />
                                        </div>
                                        <div onClick={close} className="share4">
                                            <BordTact txt="Adapter" />
                                        </div>
                                        <div onClick={close} className="share4">
                                            <BordTact txt="Architect" />
                                        </div>
                                        <div onClick={close} className="share4">
                                            <BordTact txt="Arranger" />
                                        </div>
                                        <div onClick={close} className="share4">
                                            <BordTact txt="Author" />
                                        </div>
                                        <div onClick={close} className="share4">
                                            <BordTact txt="AuthorinQuotatitor" />
                                        </div>
                                        <div onClick={close} className="share4">
                                            <BordTact txt="AuthorOfAfterworld" />
                                        </div>
                                        <div onClick={close} className="share4">
                                            <BordTact txt="App design" />
                                        </div>
                                        <div onClick={close} className="share4">
                                            <BordTact txt="Art Direction" />
                                        </div>
                                        <div onClick={close} className="share4">
                                            <BordTact txt="Antigua andBarfjfk" />
                                        </div>
                                        <div onClick={close} className="share4">
                                            <BordTact txt="Advertising" />
                                        </div>
                                        <div onClick={close} className="share4">
                                            <BordTact txt="Automotive Design" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </section>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default PopLocation;

