import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import SearchComponent from "./SearchComponent";
import ImgComponent from "./ImgComponent";
import ProfComponent from "./ProfComponent";

const PopPublisher = (props) => {

    const { open, close, popname } = props;

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent middlePop">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title">
                            {popname}
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts">
                    <div className="selPop_wrap">
                        <section className="selpp_content norm">
                            <article className="selpp_top h60">
                                <SearchComponent srch_class="hd_search m-t-10 box" btn_type="button"
                                    btn_class="btn_srch" input_class="hd_input" placeholder="Try searching for Project Member list" />
                            </article>
                            <article className="selpp_cont">
                                <div className="selpp_contin scroll sc_y">
                                    <section className="company_group">
                                        <div className="company_line">
                                            <div className={radioState === 1 ? "check_line on" : "check_line"} onClick={() => radioTab(1)}>
                                                <p className="checkbox circ_norm">
                                                    <span className="circle"></span>
                                                </p>
                                            </div>
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_sm40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            OP.Name
                                                        </p>
                                                        <div className="tip_line">
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>City</span>
                                                            </p>
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Country</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <div className={radioState === 2 ? "check_line on" : "check_line"} onClick={() => radioTab(2)}>
                                                <p className="checkbox circ_norm">
                                                    <span className="circle"></span>
                                                </p>
                                            </div>
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_sm40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            OP.Name
                                                        </p>
                                                        <div className="tip_line">
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>City</span>
                                                            </p>
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Country</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <div className={radioState === 3 ? "check_line on" : "check_line"} onClick={() => radioTab(3)}>
                                                <p className="checkbox circ_norm">
                                                    <span className="circle"></span>
                                                </p>
                                            </div>
                                            <dl className="company_dl">
                                                <dt>
                                                    <p className="simbol40">
                                                        <ImgComponent src="../resources/images/simb_tono40.png" />
                                                    </p>
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            OP.Name
                                                        </p>
                                                        <div className="tip_line">
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>City</span>
                                                            </p>
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Country</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <div className={radioState === 4 ? "check_line on" : "check_line"} onClick={() => radioTab(4)}>
                                                <p className="checkbox circ_norm">
                                                    <span className="circle"></span>
                                                </p>
                                            </div>
                                            <dl className="company_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof none c40"
                                                        src="../resources/images/prof_head_50.png" />
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            OP.Name
                                                        </p>
                                                        <div className="tip_line">
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>City</span>
                                                            </p>
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Country</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="company_line">
                                            <div className={radioState === 5 ? "check_line on" : "check_line"} onClick={() => radioTab(5)}>
                                                <p className="checkbox circ_norm">
                                                    <span className="circle"></span>
                                                </p>
                                            </div>
                                            <dl className="company_dl">
                                                <dt>
                                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof none c40"
                                                        src="../resources/images/prof_head_50.png" />
                                                </dt>
                                                <dd>
                                                    <div className="prof_from">
                                                        <p className="prof_company">
                                                            OP.Name
                                                        </p>
                                                        <div className="tip_line">
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>City</span>
                                                            </p>
                                                            <p className="tip_word">
                                                                <span className="jum"></span>
                                                                <span>Country</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </section>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md2" txt="Cancel" />
                    <ButtonComponent onClick={close} class="btn_md2 cor" txt="Select" />
                </div>
            </div>
        </section >
    )
}

export default PopPublisher;

