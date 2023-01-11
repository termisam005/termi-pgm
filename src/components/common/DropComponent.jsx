import { useState } from 'react';
import DropCont from './DropCont';
import PopChange from './PopChange';

export function DropComponent(props) {

    const goRecom = () => {
        window.location.href = "/RecommendCreator"
    };

    //Pop Change Owner
    const [ownPop, setOwnPop] = useState(false);
    const openOwner = () => {
        setOwnPop(true);
    };
    const closeOwner = () => {
        setOwnPop(false);
    }

    //Pop Leave Project
    const [leavePop, setLeavePop] = useState(false);
    const openLeave = () => {
        setLeavePop(true);
    };
    const closeLeave = () => {
        setLeavePop(false);
    }

    return (
        <div className={props.wclass}>
            <DropCont btn_class="btn_sm1 w120 btn_drop" pos_class="posrel m-r-10" spant="Joined" >
                <li onClick={openOwner}>Owner change</li>
                <li onClick={goRecom}>Recommend</li>
                <li onClick={openLeave}>Leave</li>
            </DropCont>
            <DropCont btn_class="btn_sm1 w120 cor btn_drop" pos_class="posrel" spant="Invite" >
                <li>RSVP info</li>
                <li>Send RSVP</li>
                <li>Recommend</li>
            </DropCont>
            <PopChange open={ownPop} close={closeOwner} popname="Change Owner" />
            <PopChange open={leavePop} close={closeLeave} popname="Leave Project" />
        </div>
    )
}

export default DropComponent;