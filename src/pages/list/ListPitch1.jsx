import { useState } from 'react';
import EtcCont from '../../components/common/EtcCont';


export default function ListPitch1(props) {

    return (
        <article className="creator pitch_creator">
            <div className="ctr_wrap">
                <div className="ctr_info">
                    {props.children}
                </div>
            </div>
            <div className="ctr_foot">
                <p className="line1"></p>
                <div className="foot_info">
                    <p className="status">Available</p>
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
