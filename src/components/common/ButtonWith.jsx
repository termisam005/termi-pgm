function ButtonWith(props) {
    return (
        <button type={props.type} id={props.id} className={props.class} onClick={props.onClick}>
            <img className={props.imgclass} src={process.env.PUBLIC_URL + props.src} alt={'image'} />
            <span>{props.spant}</span>
        </button>
    );
}

export default ButtonWith;