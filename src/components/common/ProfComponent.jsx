function ProfComponent(props) {
    return (
        <div className={props.wrap_class} onClick={props.onClick}>
            <span className={props.comming_class}></span>
            <div className={props.prof_class}>
                {props.children}
                <span className={props.line_class}></span>
                <img className={props.imgclass} src={process.env.PUBLIC_URL + props.src} alt={'image'} />
            </div>
        </div>
    );
}

export default ProfComponent;