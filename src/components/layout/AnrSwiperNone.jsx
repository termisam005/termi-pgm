import { useState } from "react";
import ImgComponent from "../common/ImgComponent";
import ProfComponent from "../common/ProfComponent";
import ListPitch3 from "../../pages/list/ListPitch3";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function AnrSwiperNone() {

    return (
        <>
            <div className="inner_contact_line posab">
                <select className="selector wh mini w180">
                    <option value="">Recently Added</option>
                    <option value="">A to Z</option>
                    <option value="">Z to A</option>
                </select>
                <div className="tab_line p-l-20">
                    <p className="tab on">All</p>
                    <p className="tab">Pitched</p>
                    <p className="tab">Recommendation</p>
                </div>
            </div>
            <article className="card_line m-t-5">
                <Swiper slidesPerView={4} navigation={true} spaceBetween={5}>

                    <div className="none_text mid">
                        <p>There is no content to display</p>
                    </div>

                </Swiper>
            </article>
        </>
    );
}