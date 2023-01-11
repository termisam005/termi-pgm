function SearchComponent(props) {
    return (
        <article className={props.srch_class}>
            <button type={props.btn_type} className={props.btn_class}></button>
            <input type={props.input_type} className={props.input_class} placeholder={props.placeholder} />
        </article>
    );
}

export default SearchComponent;