function PlayBox(props) {
    return (
        <div className={props.box_class}>
            <p className="line1"></p>
            <dl className="play_dl">
                <dt>{props.play_dt}</dt>
                <dd>{props.play_dd}</dd>
            </dl>
            <div className="play_click">
                <button className={props.btn_class}></button>
                <p className="btn_etc"></p>
            </div>
        </div>
    );
}

export default PlayBox;