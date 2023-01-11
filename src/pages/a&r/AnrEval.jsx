import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonWith from "../../components/common/ButtonWith";
import ImgComponent from "../../components/common/ImgComponent";
import ProfComponent from "../../components/common/ProfComponent";
import BordComp from "../../components/common/BordComp";
import HeaderTrans from "../../components/header/HeaderTrans";
import RangeSliderView from "../../components/common/RangeSliderView";
import PopGenres from "../../components/common/PopGenres";
import ListPitch3 from "../list/ListPitch3";
import MarkFavorite from "../../components/common/MarkFavorite";


export default function AnrEval() {
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
                                    <select className="selector wh mini m-b-15">
                                        <option value="">Version Type</option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <div className="m-t-5 m-b-20">
                                        <article className="hd_search">
                                            <button type="button" className="btn_srch"></button>
                                            <input type="text" className="hd_input" placeholder="Search Songs" />
                                        </article>
                                    </div>
                                    <article className="addConts">
                                        <div onClick={openGenpop} className="add_line">
                                            <p>Genre</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div className="add_line">
                                            <p>Sub-Genre</p>
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
                                <p className="line1"></p>
                                <div className="aside_last">
                                    <h1>BPM</h1>
                                    <div>
                                        <section className="range_wrap">
                                            <div className="range_sett">
                                                <div className="the_ranger">
                                                    <RangeSliderView />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

                        <article className="contain">

                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">Evaluation</h1>
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
                                        <p className="tab">Waiting</p>
                                        <p className="tab">Evaluating</p>
                                        <p className="tab">Cut</p>
                                        <p className="tab">Suspended</p>
                                    </div>
                                </div>

                                <article className="list_body">

                                    <ListPitch3 status="Waiting">
                                        <div className="ctr_info">
                                            <MarkFavorite />
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call fav">
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
                                    <ListPitch3 status="Waiting">
                                        <div className="ctr_info">
                                            <MarkFavorite />
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call fav">
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
                                    <ListPitch3 status="Evaluating">
                                        <div className="ctr_info">
                                            <MarkFavorite />
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call fav">
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
                                    <ListPitch3 status="Evaluating">
                                        <div className="ctr_info">
                                            <MarkFavorite />
                                            <div className="pitch_top">
                                                <dl className="message_dl message_dl32">
                                                    <dt>
                                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                            line_class="line_over" src="../resources/images/simb_sm40.png" />
                                                    </dt>
                                                    <dd>
                                                        <p className="pit_call fav">
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

                                    <article className="creator pitch_creator disable">
                                        <div className="ctr_wrap">
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
                                        </div>
                                        <div className="ctr_foot">
                                            <p className="line1"></p>
                                            <div className='foot_info'>
                                                <p className='status'>
                                                    Suspended
                                                </p>
                                            </div>
                                            <div className="foot_right">
                                                <p className="trash"></p>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="creator pitch_creator disable">
                                        <div className="ctr_wrap">
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
                                        </div>
                                        <div className="ctr_foot">
                                            <p className="line1"></p>
                                            <div className='foot_info'>
                                                <p className='status'>
                                                    Suspended
                                                </p>
                                            </div>
                                            <div className="foot_right">
                                                <p className="trash"></p>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="creator pitch_creator disable">
                                        <div className="ctr_wrap">
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
                                        </div>
                                        <div className="ctr_foot">
                                            <p className="line1"></p>
                                            <div className='foot_info'>
                                                <p className='status'>
                                                    Cut
                                                </p>
                                            </div>
                                            <div className="foot_right">
                                            </div>
                                        </div>
                                    </article>

                                    <article className="creator pitch_creator disable">
                                        <div className="ctr_wrap">
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
                                        </div>
                                        <div className="ctr_foot">
                                            <p className="line1"></p>
                                            <div className='foot_info'>
                                                <p className='status'>
                                                    Cut
                                                </p>
                                            </div>
                                            <div className="foot_right">
                                            </div>
                                        </div>
                                    </article>

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