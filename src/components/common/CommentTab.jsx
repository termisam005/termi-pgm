import { useState } from 'react';
import ProfComponent from './ProfComponent';

const CommentTab = (props) => {

    const [comtState, setComtState] = useState(1);
    const comtTab = (index) => {
        setComtState(index);
    }

    return (
        <div className={props.zone_class}>
            <div className={comtState === 1 ? "comt_cont hidd on" : "comt_cont hidd"}>
                <textarea className="text_area comt_area">A&R Comment</textarea>
                <div className="save_btline posab">
                    <button className="btn_sav cancel">Cancel</button>
                    <button className="btn_sav">Save</button>
                    <p className="word_num m-l-5">0 / 200</p>
                </div>
            </div>
            <div className={comtState === 2 ? "comt_cont hidd on" : "comt_cont hidd"}>
                <div className="comt_zone">
                    <div className="h-100 scroll sc_y">
                        <p>You need to check the spelling of the lyrics 1.</p>
                    </div>
                </div>
            </div>
            <div className={comtState === 3 ? "comt_cont hidd on" : "comt_cont hidd"}>
                <div className="comt_zone">
                    <div className="h-100 scroll sc_y">
                        <p>You need to check the spelling of the lyrics 2.</p>
                    </div>
                </div>
            </div>
            <div className={comtState === 4 ? "comt_cont hidd on" : "comt_cont hidd"}>
                <div className="comt_zone">
                    <div className="h-100 scroll sc_y">
                        <p>You need to check the spelling of the lyrics 3.</p>
                    </div>
                </div>
            </div>
            <div className="comt_prof">
                <ProfComponent onClick={() => comtTab(1)} wrap_class={comtState === 1 ? "prof_wrap on" : "prof_wrap"} prof_class="prof in c32"
                    line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                <ProfComponent onClick={() => comtTab(2)} wrap_class={comtState === 2 ? "prof_wrap on" : "prof_wrap"} prof_class="prof in c32"
                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                <ProfComponent onClick={() => comtTab(3)} wrap_class={comtState === 3 ? "prof_wrap on" : "prof_wrap"} prof_class="prof in c32"
                    line_class="line_over" src="../resources/images/prof_ex2.png" />
                <ProfComponent onClick={() => comtTab(4)} wrap_class={comtState === 4 ? "prof_wrap on" : "prof_wrap"} prof_class="prof in c32"
                    line_class="line_over" src="../resources/images/prof_ex2.png" />
            </div>
        </div>
    )
}

export default CommentTab;