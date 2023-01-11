function Flags(props) {
    return (
        <p className={props.p_class}>
            <img src={process.env.PUBLIC_URL + props.src} alt='image' />
            <span className={props.sp_class}>{props.lang}</span>
        </p>
    );
}

export default Flags;