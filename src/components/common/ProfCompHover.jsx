function ProfCompHover(props) {
    return (
        <div className={props.wrap_class}>
            <span className={props.comming_class}></span>
            <div className={props.prof_class}>
                <div className="photo_cont">
                    <div className="photo_wrap">
                        <input type="file" className="file_put" />
                        <img className="img_thumb" src="../resources/images/photo_photo.png" alt="photo" />
                        <p>200 x 200</p>
                        <span className="word">Pixel</span>
                    </div>
                </div>
                <span className={props.line_class}></span>
                <img className={props.imgclass} src={process.env.PUBLIC_URL + props.src} alt={'image'} />
            </div>
        </div>
    );
}

export default ProfCompHover;