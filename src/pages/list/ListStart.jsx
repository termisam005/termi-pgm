import ImgComponent from '../../components/common/ImgComponent';


export default function ListStart(props) {

    const { create } = props;

    return (
        <article className="creator">
            <div onClick={create} className="ctr_wrap">
                <div className="ctr_hidd">
                    {props.children}
                </div>
                <div className="ctr_ready">
                    <p className="circle_add">
                        <ImgComponent src="../resources/images/plus_wh17.png" />
                    </p>
                </div>
            </div>
            <div className="ctr_foot">
                <p className="line1"></p>
                <p className="view_go">
                    <span className={props.go_class}>
                        {props.go_txt}
                    </span>
                </p>
            </div>
        </article>
    );
}
