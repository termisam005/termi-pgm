
const BoardBox = (props) => {

    return (
        <article className="board_box" onClick={props.onClick}>
            <div className="board_photo">
                <img className={props.imgclass} src={process.env.PUBLIC_URL + props.src} alt={'image'} />
            </div>
            <div className="board_record">
                <p className="sort"># Music Industry</p>
                <span>15 May 2022</span>
            </div>
            <h1 className="board_title">
                {props.title}
            </h1>
            <div className="board_exp">
                {props.children}
            </div>
        </article>
    )
}

export default BoardBox;