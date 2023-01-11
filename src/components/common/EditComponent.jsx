import { useState } from 'react';

const EditComponent = (props) => {

    const [editors, setEditors] = useState(false);
    const clickEdit = () => {
        setEditors(true);
    };
    const clickSave = () => {
        setEditors(false);
    }

    return (
        <dd>
            <div className={editors ? "comt_cont hidd" : "comt_cont"}>
                <div className={props.zone_class}>
                    <div className="h-100 scroll sc_y">
                        {props.children}
                    </div>
                </div>
                <div className="save_btline edit">
                    <button onClick={clickEdit} className="btn_sav cancel">Edit</button>
                    <p className="word_num m-l-5">0 / 200</p>
                </div>
            </div>
            <div className={editors ? "comt_cont hidd on" : "comt_cont hidd"}>
                <textarea className={props.area_class}></textarea>
                <div className="save_btline">
                    <button className="btn_sav cancel">Cancel</button>
                    <button onClick={clickSave} className="btn_sav">Save</button>
                </div>
            </div>
        </dd>
    )
}

export default EditComponent;