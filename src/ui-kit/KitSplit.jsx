import { useState } from "react";
import ButtonComponent from "../components/common/ButtonComponent";
import ImgComponent from "../components/common/ImgComponent";
import ProfComponent from "../components/common/ProfComponent";
import SplitSheet from "../pages/song/SplitSheet";


export default function KitSplit() {

    return (
        <div className="wrap_grad">
            <div className="container">

                <section className="demo_title">
                    <h1>Share Split</h1>
                </section>

                <section className="dflx_jcent">

                    <div className="p-20">
                        <div className="pop_body middlePop">
                            <div className="pop_top">
                                <div className="ptop_txt">
                                    <h1 className="ptop_title">Share Split</h1>
                                </div>
                                <p className="ptop_x"></p>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_conts p-20">
                                <section className="split_space scroll sc_y">
                                    <div className="trans_top">
                                        <div className="top_space left w-55">
                                            <span className="word">WRITER</span>
                                        </div>
                                        <div className="top_space w-20">
                                            <span className="word">SHARE</span>
                                        </div>
                                        <div className="top_space w-15">
                                            <span className="word tac f-s-12">Copyright<br />Control</span>
                                        </div>
                                        <div className="top_space w-10">
                                            <span className="word"></span>
                                        </div>
                                    </div>
                                    <SplitSheet class="split_sheet vol" />
                                    <SplitSheet class="split_sheet blue" />
                                    <SplitSheet class="split_sheet sky" />
                                    <SplitSheet class="split_sheet sky" />
                                    <SplitSheet class="split_sheet sky" />
                                    <SplitSheet class="split_sheet vol" />
                                </section>
                            </div>
                            <p className="line1"></p>
                            <div className="pop_foot">
                                <div className="p-l-60">
                                    <div className="co_period p-0 m-t-5">
                                        <span className="m-r-5">Creation Date :</span>
                                        <span className="cor994">13 Aug 2021</span>
                                    </div>
                                    <div className="co_period p-0 m-t-5">
                                        <span className="m-r-5">Last updated :</span>
                                        <span className="cor994">13 Aug 2021</span>
                                    </div>
                                </div>
                                <div className="dflx_ac m-l-20">
                                    <ButtonComponent class="btn_md1 w130 m-r-10" txt="Cancel" />
                                    <ButtonComponent class="btn_md1 cor w130" txt="Save" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    );
}