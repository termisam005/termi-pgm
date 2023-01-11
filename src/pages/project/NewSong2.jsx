import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import InputComponent from "../../components/common/InputComponent";
import ImgComponent from "../../components/common/ImgComponent";
import BordComp from "../../components/common/BordComp";
import ToggleCheck from "../../components/common/ToggleCheck";
import PopGenres from "../../components/common/PopGenres";


export default function NewSong2() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [rolesPop, setRolesPop] = useState(false);
    const openRolpop = () => {
        setRolesPop(true);
    };
    const closeRolpop = () => {
        setRolesPop(false);
    }


    return (
        <div className="wrap_login">

            <HeaderTrans logo_class="logo_none" src="../resources/images/logo.png" />

            <section className="rolse_box official_box create">
                <div className="rolse_in">

                    <article className="roles_title">
                        <h1>
                            <span onClick={goBack} className="go_back">
                                <img src="../resources/images/arr_back_wh.png" alt="link back" />
                            </span>
                            <span className="big">New Song</span>
                            <span className="mini cor913">Build your New Song</span>
                        </h1>
                    </article>

                    <article className="official_contain">
                        <section className="off_contain50">
                            <dl className="dl_title">
                                <dt>STEP 2</dt>
                                <dd>Next, enter Song Metadata</dd>
                            </dl>
                            <div className="form_verify">
                                <article className="form_bord">
                                    <div className="top">
                                        <p>Genres</p>
                                    </div>
                                    <div className="cont">
                                        <div className="bord_wrap">
                                            <BordComp word="Dance" />
                                            <BordComp word="K-POP" />
                                        </div>
                                        <button onClick={openRolpop} className="btsq bt20 norm">
                                            <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                            <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                        </button>
                                    </div>
                                </article>
                                <article className="form_bord">
                                    <div className="top">
                                        <p>Subgenres</p>
                                    </div>
                                    <div className="cont">
                                        <div className="bord_wrap">
                                            <BordComp word="Dance" />
                                            <BordComp word="K-POP" />
                                        </div>
                                        <button onClick={openRolpop} className="btsq bt20 norm">
                                            <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                            <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                        </button>
                                    </div>
                                </article>

                                <article className="add_writers">
                                    <dl className="dl_title dflx_ac_jbet m-b-10">
                                        <dd>Add Co-Writers</dd>
                                        <article className="search_trans">
                                            <button type="button" className="btn_srch"></button>
                                            <input type="text" className="hd_input" placeholder="Search" />
                                        </article>
                                    </dl>

                                    <article className="selpp_cont h300">
                                        <div className="selpp_contin scroll sc_y">
                                            <section className="company_group">
                                                <div className="company_line">
                                                    <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                    <dl className="company_dl">
                                                        <dt>
                                                            <p className="simbol40">
                                                                <ImgComponent src="../resources/images/prof_ex2.png" />
                                                            </p>
                                                        </dt>
                                                        <dd>
                                                            <div className="prof_from">
                                                                <p className="prof_company">
                                                                    Gabriel Brandes
                                                                </p>
                                                                <div className="tip_line">
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Singer</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Songwriter</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>guitarist</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <div className="company_line">
                                                    <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                    <dl className="company_dl">
                                                        <dt>
                                                            <p className="simbol40">
                                                                <ImgComponent src="../resources/images/prof_ex2.png" />
                                                            </p>
                                                        </dt>
                                                        <dd>
                                                            <div className="prof_from">
                                                                <p className="prof_company">
                                                                    Gabriel Brandes
                                                                </p>
                                                                <div className="tip_line">
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Singer</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Songwriter</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>guitarist</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <div className="company_line">
                                                    <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                    <dl className="company_dl">
                                                        <dt>
                                                            <p className="simbol40">
                                                                <ImgComponent src="../resources/images/prof_ex2.png" />
                                                            </p>
                                                        </dt>
                                                        <dd>
                                                            <div className="prof_from">
                                                                <p className="prof_company">
                                                                    Gabriel Brandes
                                                                </p>
                                                                <div className="tip_line">
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Singer</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Songwriter</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>guitarist</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <div className="company_line">
                                                    <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                    <dl className="company_dl">
                                                        <dt>
                                                            <p className="simbol40">
                                                                <ImgComponent src="../resources/images/prof_ex2.png" />
                                                            </p>
                                                        </dt>
                                                        <dd>
                                                            <div className="prof_from">
                                                                <p className="prof_company">
                                                                    Gabriel Brandes
                                                                </p>
                                                                <div className="tip_line">
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Singer</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Songwriter</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>guitarist</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <div className="company_line">
                                                    <ToggleCheck box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                                                    <dl className="company_dl">
                                                        <dt>
                                                            <p className="simbol40">
                                                                <ImgComponent src="../resources/images/prof_ex2.png" />
                                                            </p>
                                                        </dt>
                                                        <dd>
                                                            <div className="prof_from">
                                                                <p className="prof_company">
                                                                    Gabriel Brandes
                                                                </p>
                                                                <div className="tip_line">
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Singer</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>Songwriter</span>
                                                                    </p>
                                                                    <p className="tip_word">
                                                                        <span className="jum"></span>
                                                                        <span>guitarist</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </section>
                                        </div>
                                    </article>
                                </article>
                            </div>
                        </section>
                    </article>

                    <article className="create_bottom">
                        <div></div>
                        <div>
                            <ButtonComponent onClick={goBack} class="btn_sm1 m-r-12" txt="Back" />
                            <Link to="/NewSong3">
                                <ButtonComponent class="btn_sm1 cor" txt="Next" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <PopGenres open={rolesPop} close={closeRolpop} />
        </div>
    )
}

