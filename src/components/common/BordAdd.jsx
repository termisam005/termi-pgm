function BordAdd(props) {
    return (
        <p className="bord_comp trans add" onClick={props.onClick}>
            <span className="plus">+</span>
            <span className="word">
                {props.word}
            </span>
        </p>
    )
}

export default BordAdd;