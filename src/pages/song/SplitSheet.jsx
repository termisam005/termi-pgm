import { useState } from 'react';
import ImgComponent from "../../components/common/ImgComponent";
import ProfComponent from "../../components/common/ProfComponent";


const SplitSheet = (props) => {

    const [chBox, setChBox] = useState(false);
    const clickBox = () => {
        setChBox(!chBox);
    }

    const [isToggle, setIsToggle] = useState(false);
    const clickToggle = () => {
        setIsToggle(!isToggle);
    }


    return (
        <div className={props.class}>
            <article className="split_board">
                <div className="list_space w-55">
                    <dl className="message_dl connect_dl">
                        <dt>
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                        </dt>
                        <dd>
                            <div className="mess_who">
                                <span className="list_wh">
                                    Anne Judith Stokke Wik
                                </span>
                            </div>
                            <div className="tip_line">
                                <p className="tip_word">
                                    <span className="jum"></span>
                                    <span>CA - Composer</span>
                                </p>
                                <p className="tip_word">
                                    <span className="jum"></span>
                                    <span>Lyricist</span>
                                </p>
                                <p className="tip_word">
                                    <span className="jum"></span>
                                    <span>Lyricist</span>
                                </p>
                            </div>
                        </dd>
                    </dl>
                </div>
                <div className="list_space w-20">
                    <div className="split_count">
                        <input type="text" className="sp_put" value='10' />
                        <span className="unit">%</span>
                    </div>
                </div>
                <div className="list_space w-15">
                    <div onClick={clickBox} className={chBox ? "check_line on" : "check_line"}>
                        <p className="checkbox wh">
                            <img src="../resources/images/sv_check_wh.svg" alt="check" />
                        </p>
                    </div>
                </div>
                <div className="list_space w-10">
                    <p className={isToggle ? "up_arrow on" : "up_arrow"} onClick={clickToggle}></p>
                </div>
            </article>
            <div className={isToggle ? "split_hidd on" : "split_hidd"}>
                <article className="set_wrap">
                    <div className="set_society">
                        <article className="society_line">
                            <dl className="message_dl connect_dl">
                                <dt>
                                    <p className="simbol50">
                                        <img src="../resources/images/simb_sm40.png" alt="image" />
                                    </p>
                                </dt>
                                <dd className="conn_dd set">
                                    <div className="mess_who">
                                        <span className="who">EKKO Music Right Europe</span>
                                    </div>
                                    <p className="tip_word">
                                        <span className="word">Original publisher</span>
                                    </p>
                                </dd>
                            </dl>
                            <dl className="message_dl connect_dl">
                                <dt>
                                    <p className="simbol50">
                                        <img src="../resources/images/simb_tono40.png" alt="image" />
                                    </p>
                                </dt>
                                <dd className="conn_dd set">
                                    <div className="mess_who">
                                        <span className="who">TONO</span>
                                    </div>
                                    <p className="tip_word">
                                        <span className="word">Performance rights Society</span>
                                    </p>
                                </dd>
                            </dl>
                        </article>
                        <article className="society_line">
                            <dl className="message_dl connect_dl">
                                <dt>
                                    <p className="simbol50">
                                        <img src="../resources/images/simb_sm40.png" alt="image" />
                                    </p>
                                </dt>
                                <dd className="conn_dd set">
                                    <div className="mess_who">
                                        <span className="who">EKKO Music Right Europe</span>
                                    </div>
                                    <p className="tip_word">
                                        <span className="word">Original publisher</span>
                                    </p>
                                </dd>
                            </dl>
                            <dl className="message_dl connect_dl">
                                <dt>
                                    <p className="simbol50">
                                        <img src="../resources/images/simb_tono40.png" alt="image" />
                                    </p>
                                </dt>
                                <dd className="conn_dd set">
                                    <div className="mess_who">
                                        <span className="who">TONO</span>
                                    </div>
                                    <p className="tip_word">
                                        <span className="word">Performance rights Society</span>
                                    </p>
                                </dd>
                            </dl>
                        </article>
                    </div>
                    <div className="set_info">
                        <div className="info_line">
                            <p className="call">IPI Name #</p>
                            <p className="txt">00281075767</p>
                        </div>
                        <div className="info_line">
                            <p className="call">Location</p>
                            <p className="txt">Trondheim, Norway</p>
                        </div>
                        <div className="info_line">
                            <p className="call">Phone</p>
                            <p className="txt">+46-8336910</p>
                        </div>
                        <div className="info_line">
                            <p className="call">Email</p>
                            <p className="txt">nermin@dsignmusic.com</p>
                        </div>
                        <div className="info_line w-100">
                            <p className="call">Language</p>
                            <p className="txt">Norwegian, Swedish, Danish, English</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default SplitSheet;