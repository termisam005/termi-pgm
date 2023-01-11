import { useState } from 'react';

// import React, { Component } from "react";
// import $ from "jquery";

// class Blueline extends Component {
//     componentDidMount() {
//         $(function () {
//             $(".nation_bar").click(function () {
//                 $(".nation_bar").removeClass("on");
//                 $(this).addClass("on");
//             });
//         });
//     }

//     render() {
//         const nationBars = [
//             { city: 'Chicago', mm: '(UTC-5)', time: 10, minutes: 24, hour: 'PM' },
//             { city: 'Tokyo', mm: '(UTC-5)', time: 5, minutes: 22, hour: 'PM' },
//             { city: 'London', mm: '(UTC-5)', time: 10, minutes: 24, hour: 'PM' },
//             { city: 'Seoul', mm: '(UTC-5)', time: 10, minutes: 24, hour: 'PM' },
//             { city: 'New york', mm: '(UTC-5)', time: 9, minutes: 22, hour: 'PM' },
//         ];

//         const renderBars = nationBars.map(nationbar => {
//             return (
//                 <article className="nation_bar" key={nationbar.city}>
//                     <p className="call">{nationbar.city}</p>
//                     <div className="time">
//                         <span className="when">
//                             {nationbar.time}:{nationbar.minutes}
//                         </span>
//                         <span>{nationbar.hour}</span>
//                         <span className="tc">{nationbar.mm}</span>
//                     </div>
//                 </article>
//             );
//         });
//         return (
//             <section className="nation_line">
//                 {renderBars}
//             </section>
//         );
//     }
// }

// export default Blueline;


export default function Blueline() {
    const [toggleCity, setToggleCity] = useState(3);

    const cityTab = (index) => {
        setToggleCity(index);
    }

    return (
        <section className="nation_line">
            <article className={toggleCity === 1 ? "nation_bar on" : "nation_bar"} onClick={() => cityTab(1)}>
                <p className="call">Chicago</p>
                <div className="time">
                    <span className="when">10:24</span>
                    <span>PM</span>
                    <span className="tc">(UTC-5)</span>
                </div>
            </article>

            <article className={toggleCity === 2 ? "nation_bar on" : "nation_bar"} onClick={() => cityTab(2)}>
                <p className="call">Tokyo</p>
                <div className="time">
                    <span className="when">10:24</span>
                    <span>PM</span>
                    <span className="tc">(GMT-5)</span>
                </div>
            </article>

            <article className={toggleCity === 3 ? "nation_bar on" : "nation_bar"} onClick={() => cityTab(3)}>
                <p className="call">Seoul</p>
                <div className="time">
                    <span className="when">10:24</span>
                    <span>PM</span>
                    <span className="tc">(UTC+9)</span>
                </div>
            </article>

            <article className={toggleCity === 4 ? "nation_bar on" : "nation_bar"} onClick={() => cityTab(4)}>
                <p className="call">London</p>
                <div className="time">
                    <span className="when">10:24</span>
                    <span>PM</span>
                    <span className="tc">(GMT-5)</span>
                </div>
            </article>

            <article className={toggleCity === 5 ? "nation_bar on" : "nation_bar"} onClick={() => cityTab(5)}>
                <p className="call">NewYork</p>
                <div className="time">
                    <span className="when">10:24</span>
                    <span>PM</span>
                    <span className="tc">(GMT-5)</span>
                </div>
            </article>
        </section>
    );
}