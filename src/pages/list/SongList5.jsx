import { useState } from "react";
import ProfComponent from "../../components/common/ProfComponent";
import EtcCont from "../../components/common/EtcCont";
import PopSongList from "../../components/common/PopSongList";


export default function SongList5(props) {

    const [listSett, setListSett] = useState(false);
    const openList = () => {
        setListSett(true);
    }
    const closeList = () => {
        setListSett(false);
    }

    return (
        <section className="the_list">
            <div className="list_space w-38">
                <dl className="message_dl">
                    <dt>
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                    </dt>
                    <dd>
                        <div className="mess_who">
                            <span className="list_who">Robin Jenssen</span>
                        </div>
                        <div className="tip_line">
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>General Manager</span>
                            </p>
                            <p className="tip_word">
                                <span className="jum"></span>
                                <span>Producer</span>
                            </p>
                        </div>
                    </dd>
                </dl>
            </div>
            <div className="list_space left w-27">
                <p className="txt">
                    {props.company}
                </p>
            </div>
            <div className="list_space left w-18">
                {props.children}
            </div>
            <div className="list_space w-12">
                <p className="txt min">
                    <span className="m-r-5 cor994">5</span>
                    <span>Songs</span>
                </p>
            </div>
            <div className="list_space">
                <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                    <li onClick={openList}>Songs List</li>
                    <li>Profile Page</li>
                </EtcCont>
            </div>
            <PopSongList open={listSett} close={closeList} />
        </section>
    );
}

