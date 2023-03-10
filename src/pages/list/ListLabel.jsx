import EtcCont from '../../components/common/EtcCont';


export default function ListLabel(props) {

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
                    <p className="status">
                        {props.status}
                    </p>
                </div>
                <div className="foot_right">
                    <EtcCont wrap_class="wrap_etc sm m-t-7" btn_class="btn_hor_etc">
                        <li>Album Detail</li>
                        <li>Edit</li>
                        <li>Delete</li>
                    </EtcCont>
                </div>
            </div>
        </article>
    );
}
