function Broad(props) {
    return (
        <p className="broad">
            <span className="hc_cout">
                {props.hc}
            </span>
            <img className={props.imgclass} src={process.env.PUBLIC_URL + props.src} alt={'image'} />
        </p>
    );
}

export default Broad;