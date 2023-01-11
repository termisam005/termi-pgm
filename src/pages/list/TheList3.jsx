import { useState } from "react";
import ProfComponent from "../../components/common/ProfComponent";
import EtcCont from "../../components/common/EtcCont";
import SongList1 from "./SongList1";


export default function TheList3() {

    const [listPop, setListPop] = useState(false);
    const openList = () => {
        setListPop(true);
    }
    const closeList = () => {
        setListPop(false);
    }

    return (
        <section className="the_list">
            <div className="list_space w-22">
                <dl className="message_dl">
                    <dt>
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                    </dt>
                    <dd>
                        <div className="mess_who">
                            <span className="list_who">Jin Suk Choi</span>
                        </div>
                        <div className="mess_tip">
                            <span className="word op07">Headline</span>
                        </div>
                    </dd>
                </dl>
            </div>
            <div className="list_space w-22">
                <p className="txt comp">EKKO Music Rightst</p>
            </div>
            <div className="list_space w-20">
                <p className="txt">+1 (234)567-89-10</p>
            </div>
            <div className="list_space w-23">
                <p className="txt">info@ekkomusicrights</p>
            </div>
            <div className="list_space w-10">
                <p className="txt min">
                    <span className="m-r-5 cor994">15</span>
                    <span className="cor913">Songs</span>
                </p>
            </div>
            <div className="list_space">
                <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                    <li onClick={openList}>Songs List</li>
                    <li>Profile Page</li>
                </EtcCont>
            </div>
            <PopList open={listPop} close={closeList} />
        </section>
    );
}


const PopList = (props) => {
    const { open, close } = props;

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent selectPop">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title f-s-20">
                            Song List
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>
                <div className="pop_conts p-b-20">
                    <div className="tab_line p-b-15">
                        <p className="go on">All</p>
                        <p className="go">Co-Writing</p>
                        <p className="go">Available</p>
                        <p className="go">Pass</p>
                        <p className="go">Hold</p>
                        <p className="go">Cut</p>
                    </div>
                    <article className="list_zone">
                        <SongList1 txt_class="txt txt_avail" time="03:50" date="12 Aug 2022">
                            <p className="txt txt_avail">
                                <span className="sball"></span>
                                <span>Available</span>
                            </p>
                        </SongList1>
                        <SongList1 txt_class="txt txt_pass" time="03:50" date="12 Aug 2022">
                            <p className="txt txt_pass">
                                <span className="sball"></span>
                                <span>Pass</span>
                            </p>
                        </SongList1>
                        <SongList1 txt_class="txt txt_pitch" time="03:50" date="12 Aug 2022">
                            <p className="txt txt_pitch">
                                <span className="sball"></span>
                                <span>Pitched</span>
                            </p>
                        </SongList1>
                        <SongList1 txt_class="txt txt_cut" time="03:50" date="12 Aug 2022">
                            <p className="txt txt_cut">
                                <span className="sball"></span>
                                <span>Cut</span>
                            </p>
                        </SongList1>
                        <SongList1 txt_class="txt txt_hold" time="03:50" date="12 Aug 2022">
                            <p className="txt txt_hold">
                                <span className="sball"></span>
                                <span>Hold</span>
                            </p>
                        </SongList1>
                    </article>
                </div>
            </div>
        </section>
    )
}
