function InputComponent(props) {
    return (
        <input type={props.type} id={props.id} className={props.class} value={props.value} placeholder={props.placeholder} />
    );
}

export default InputComponent;