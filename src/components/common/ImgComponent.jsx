function ImgComponent(props) {
    return (
        <img className={props.class} src={process.env.PUBLIC_URL + props.src} alt={'image'} />
    );
}

export default ImgComponent;