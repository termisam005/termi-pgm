import EtcCont from '../../components/common/EtcCont';


export default function ListSpot(props) {

    return (
        <article className="creator pitch_creator">
            <div className="ctr_wrap">
                {props.children}
            </div>
            <div className="ctr_foot">
                <p className="line1"></p>
                <div className='foot_info'>
                    <p className='status'>
                        {props.status}
                    </p>
                </div>
                <div className="foot_right">
                    <EtcCont wrap_class="wrap_etc sm m-t-7" btn_class="btn_hor_etc">
                        <li>Bookmark</li>
                        <li>Share URL</li>
                        <li>View</li>
                    </EtcCont>
                </div>
            </div>
        </article>
    );
}
