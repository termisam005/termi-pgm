function ButtonComponent(props) {
    return (
        <button type={props.type} id={props.id} className={props.class} onClick={props.onClick}>{props.txt}</button>
    );
}

export default ButtonComponent;