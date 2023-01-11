import React from "react";
import ImgComponent from "../common/ImgComponent";
import ProfComponent from "../common/ProfComponent";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";


export default class Aside extends React.Component {

    render() {
        return (
            <aside className="the_aside">
                <div className="prof_zone">
                    <ProfComponent wrap_class="prof_wrap" prof_class="prof in c120 prof_shadow"
                        line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                    <p className="prof_name_big">Jin Suk Choi</p>
                </div>
                <p className="line1">
                    <span className="cenbar">
                        Not Verified
                    </span>
                </p>
                <div className="roll_zone">
                    <article className="roll_contain">
                        <div className="roll_cont">
                            <a className="tell">Tell us about your self</a>
                        </div>
                    </article>
                </div>
                <p className="line1"></p>
                <div className="calen_zone">
                    <a className="view_go">
                        <span>View more</span>
                        <ImgComponent src="../resources/images/sv_arr_view.svg" />
                    </a>
                    <section className="the_calendar">
                        <article className="calendar_top">
                            <p className="name">Calendar</p>
                            <span className="rlbt on">
                                <img src="../resources/images/sv_line_mid.svg" alt="line" />
                            </span>
                        </article>
                        <p className="line1"></p>
                        <article className="calendar_box">

                            <FullCalendar
                                plugins={[dayGridPlugin]}
                                initialView="dayGridMonth"
                                weekends={true}
                                plugins={[dayGridPlugin, interactionPlugin]}
                                dateClick={this.handleDateClick} />

                            <div className="calen_end">
                                <a className="view_go">
                                    <span>View more</span>
                                    <ImgComponent src="../resources/images/sv_arr_view.svg" />
                                </a>
                            </div>
                        </article>
                    </section>
                </div>
            </aside>
        );
    }

    // handleDateClick = (arg) => {
    //     alert(arg.dateStr)
    // }

}



