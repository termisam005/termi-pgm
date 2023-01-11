import SongList1 from "../../pages/list/SongList1";


export default function PopSongList(props) {

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
                        <SongList1 txt_class="txt txt_hold" time="03:50" date="12.10.22 ~ 24.12.22">
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


