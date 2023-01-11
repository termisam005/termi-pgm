import React from "react";

export default function ListRoster() {

    return (
        <article className="the_roster">
            <div className="roster_box">
                <div className="mess_tip">
                    <span className="bord_tip">Co-Founder</span>
                    <span className="bord_tip">Producer</span>
                </div>
                <img className="img_roster" src="../resources/images/roster_ex1.png" alt="photo" />
                <div className="win_view">
                    <div className="win_wrap">
                        <p className="view">
                            View Profile
                        </p>
                    </div>
                </div>
            </div>
            <p className="roster_name">
                Dsign Music
            </p>
        </article>
    );
}
