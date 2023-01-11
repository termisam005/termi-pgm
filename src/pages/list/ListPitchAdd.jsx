export default function ListPitchAdd(props) {

    return (
        <article className="creator pitch_creator">
            <div className="ctr_wrap">
                {props.children}
            </div>
            <div className="ctr_foot">
                <p className="line1"></p>
                <p className="view_go">
                    <span className="cor913">
                        Add to Pitch List
                    </span>
                </p>
            </div>
        </article>
    );
}
