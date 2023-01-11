import EtcCont from '../../components/common/EtcCont';
import ProfComponent from '../../components/common/ProfComponent';


export default function ListPitch2(props) {

    return (
        <article className="creator pitch_creator">
            <div className="ctr_wrap">
                {props.children}
            </div>
            <div className="ctr_foot">
                <p className="line1"></p>
                <div className="multi_prof p-t-0">
                    <div className="dflx_ac">
                        <div className="dflx_ac">
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over" src="../resources/images/simb_sm40.png" />
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over" src="../resources/images/simb_tono40.png" />
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over" src="../resources/images/simb_spw40.png" />
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over" src="../resources/images/simb_tono40.png" />
                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                                line_class="line_over" src="../resources/images/simb_spw40.png" />
                        </div>
                        <p className="co_writers co_pitched">
                            <span className="cor994">5</span>
                            <span className="m-l-5">Pitched</span>
                        </p>
                    </div>
                </div>
                <div className="foot_right">
                    <EtcCont wrap_class="wrap_etc sm m-t-7" btn_class="btn_hor_etc">
                        <li>Bookmark</li>
                        <li>Recommend</li>
                    </EtcCont>
                </div>
            </div>
        </article>
    );
}
