import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonWith from "../../components/common/ButtonWith";
import ButtonComponent from "../../components/common/ButtonComponent";
import ImgComponent from "../../components/common/ImgComponent";
import ProfComponent from "../../components/common/ProfComponent";
import BordComp from "../../components/common/BordComp";
import HeaderTrans from "../../components/header/HeaderTrans";
import ListPitch3 from "../list/ListPitch3";

import PopGenres from "../../components/common/PopGenres";


export default function AnrPitchRecomm() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [genPop, setGenPop] = useState(false);
    const openGenpop = () => {
        setGenPop(true);
    };
    const closeGenpop = () => {
        setGenPop(false);
    }

    return (
        <div className="wrap dark">
            <HeaderTrans logo_class="logo_none" />

            <div className="container posrel">

                <section className="dark_back">
                    <div className="dflx_ac_jbet h-100">
                        <h3 onClick={goBack}>
                            <span className="go_back">
                                <img src="../resources/images/arr_back_wh.png" alt="link back" />
                            </span>
                            <span className="word">Back</span>
                        </h3>
                    </div>
                </section>

                <div className="contents">

                    <section className="aside_line">
                        <aside className="the_aside">
                            <div>
                                <div className="mini_top">
                                    <h1>Search</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="m-t-5 m-b-20">
                                        <article className="hd_search">
                                            <button type="button" className="btn_srch"></button>
                                            <input type="text" className="hd_input" placeholder="Search Name of Pitch list" />
                                        </article>
                                    </div>
                                    <article className="addConts">
                                        <div onClick={openGenpop} className="add_line">
                                            <p>Genre</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div className="add_line">
                                            <p>Mood</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div className="add_line">
                                            <p>Theme</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="dflx_ac_jbet">
                                        <p className="m-b-5">
                                            Recent search Filter
                                        </p>
                                        <p className="cor913 curpt">Clear All</p>
                                    </div>
                                    <div className="aside_bord">
                                        <BordComp word="Soundtrack" />
                                        <BordComp word="Blues" />
                                        <BordComp word="Romantic" />
                                        <BordComp word="Male vocals" />
                                        <BordComp word="Strings" />
                                        <BordComp word="Hot" />
                                        <BordComp word="Sweety" />
                                        <BordComp word="Sad" />
                                        <BordComp word="Label" />
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

                        <article className="contain">

                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">Pitched list for 'Nora Mamdu'</h1>
                                </div>
                            </section>
                            <p className="line1"></p>

                            <section className="contain_list">
                                <div className="inner_contact_line">
                                    <select className="selector wh mini w180">
                                        <option value="">Recently Added</option>
                                        <option value="">A to Z</option>
                                        <option value="">Z to A</option>
                                    </select>
                                    <div className="tab_line p-l-20">
                                        <p className="tab on">All</p>
                                        <p className="tab">Pitched</p>
                                        <p className="tab">Recommendation</p>
                                    </div>
                                </div>

                                <article className="list_body">

                                    <ListPitch3 status="Pitched">
                                        <div className="ctr_info">
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call">
                                                            Ekko Music Right Eucation
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="pitch_call">
                                                <h4 className="down_vol">
                                                    Pitch list vol.10
                                                </h4>
                                                <p className="pitch_note">
                                                    <span className="note20"></span>
                                                    <span className="cor913">3</span>
                                                </p>
                                            </div>
                                            <div className="prj_dark"></div>
                                            <div className="img_cover">
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </ListPitch3>
                                    <ListPitch3 status="Recommended">
                                        <div className="ctr_info">
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call">
                                                            JYP Publishing
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="pitch_call">
                                                <h4 className="down_vol">
                                                    Pitch list vol.9
                                                </h4>
                                                <p className="pitch_note">
                                                    <span className="note20"></span>
                                                    <span className="cor913">3</span>
                                                </p>
                                            </div>
                                            <div className="prj_dark"></div>
                                            <div className="img_cover">
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </ListPitch3>
                                    <ListPitch3 status="Pitched">
                                        <div className="ctr_info">
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call">
                                                            Ekko Music Right Eucation
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="pitch_call">
                                                <h4 className="down_vol">
                                                    Pitch list vol.8
                                                </h4>
                                                <p className="pitch_note">
                                                    <span className="note20"></span>
                                                    <span className="cor913">3</span>
                                                </p>
                                            </div>
                                            <div className="prj_dark"></div>
                                            <div className="img_cover">
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </ListPitch3>
                                    <ListPitch3 status="Recommended">
                                        <div className="ctr_info">
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call">
                                                            JYP Publishing
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="pitch_call">
                                                <h4 className="down_vol">
                                                    Pitch list vol.7
                                                </h4>
                                                <p className="pitch_note">
                                                    <span className="note20"></span>
                                                    <span className="cor913">3</span>
                                                </p>
                                            </div>
                                            <div className="prj_dark"></div>
                                            <div className="img_cover">
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </ListPitch3>

                                    <ListPitch3 status="Pitched">
                                        <div className="ctr_info">
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call">
                                                            Ekko Music Right Eucation
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="pitch_call">
                                                <h4 className="down_vol">
                                                    Pitch list vol.6
                                                </h4>
                                                <p className="pitch_note">
                                                    <span className="note20"></span>
                                                    <span className="cor913">3</span>
                                                </p>
                                            </div>
                                            <div className="prj_dark"></div>
                                            <div className="img_cover">
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </ListPitch3>
                                    <ListPitch3 status="Recommended">
                                        <div className="ctr_info">
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call">
                                                            JYP Publishing
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="pitch_call">
                                                <h4 className="down_vol">
                                                    Pitch list vol.5
                                                </h4>
                                                <p className="pitch_note">
                                                    <span className="note20"></span>
                                                    <span className="cor913">3</span>
                                                </p>
                                            </div>
                                            <div className="prj_dark"></div>
                                            <div className="img_cover">
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </ListPitch3>
                                    <ListPitch3 status="Pitched">
                                        <div className="ctr_info">
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call">
                                                            Ekko Music Right Eucation
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="pitch_call">
                                                <h4 className="down_vol">
                                                    Pitch list vol.4
                                                </h4>
                                                <p className="pitch_note">
                                                    <span className="note20"></span>
                                                    <span className="cor913">3</span>
                                                </p>
                                            </div>
                                            <div className="prj_dark"></div>
                                            <div className="img_cover">
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </ListPitch3>
                                    <ListPitch3 status="Recommended">
                                        <div className="ctr_info">
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call">
                                                            JYP Publishing
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="pitch_call">
                                                <h4 className="down_vol">
                                                    Pitch list vol.3
                                                </h4>
                                                <p className="pitch_note">
                                                    <span className="note20"></span>
                                                    <span className="cor913">3</span>
                                                </p>
                                            </div>
                                            <div className="prj_dark"></div>
                                            <div className="img_cover">
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </ListPitch3>
                                    <ListPitch3 status="Pitched">
                                        <div className="ctr_info">
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call">
                                                            Ekko Music Right Eucation
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="pitch_call">
                                                <h4 className="down_vol">
                                                    Pitch list vol.2
                                                </h4>
                                                <p className="pitch_note">
                                                    <span className="note20"></span>
                                                    <span className="cor913">3</span>
                                                </p>
                                            </div>
                                            <div className="prj_dark"></div>
                                            <div className="img_cover">
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </ListPitch3>
                                    <ListPitch3 status="Recommended">
                                        <div className="ctr_info">
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call">
                                                            JYP Publishing
                                                        </p>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="pitch_call">
                                                <h4 className="down_vol">
                                                    Pitch list vol.1
                                                </h4>
                                                <p className="pitch_note">
                                                    <span className="note20"></span>
                                                    <span className="cor913">3</span>
                                                </p>
                                            </div>
                                            <div className="prj_dark"></div>
                                            <div className="img_cover">
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover1.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover3.jpg" />
                                                </div>
                                                <div className="cover50">
                                                    <ImgComponent class="prj_img" src="../resources/images/album_cover4.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </ListPitch3>

                                </article>

                            </section>

                        </article>

                    </main>

                </div>
            </div>

            <PopGenres open={genPop} close={closeGenpop} />
        </div >
    )
}