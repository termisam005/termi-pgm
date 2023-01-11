function WriteZone(props) {
    return (
        <div className="write_zone" className={props.zone_class}>
            <input type={props.type} id={props.id} className={props.class} value={props.value} placeholder={props.placeholder} />
            <button className="btn_send"></button>
        </div>
    );
}

export default WriteZone;