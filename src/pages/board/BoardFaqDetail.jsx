import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import ButtonComponent from "../../components/common/ButtonComponent";


export default function BoardFaqDetail() {

    const goList = () => {
        window.location.href = "/BoardFaq"
    }

    return (
        <div className="wrap">
            <Header />

            <div className="container">

                <div className="contents">

                    <main className="board_bg">
                        <article className="contain">
                            <div className="mini_top p-t-20">
                                <div className="dflx_ac_jbet">
                                    <div className="cttop_left">
                                        <h1 className="top_title semib">
                                            SPARWK class 101
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <p className="line1"></p>
                            <div className="contain_body">
                                <section className="news_wrap">
                                    <div className="top">
                                        <div className="news_title dflx_ac p-0">
                                            <p className="imp m-0">Projects</p>
                                            <h4 className="m-l-10 tlt">Class Title</h4>
                                        </div>
                                        <p className="news_record">
                                            <span>20 May 2022</span>
                                            <span>543,524 views</span>
                                        </p>
                                    </div>
                                    <article className="news_zone mini">
                                        <div className="news_texts">
                                            <div className="dpflx m-b-30">
                                                <img src="../resources/images/faq_ex1.png" alt="image" />
                                                <ul className="ul_big">
                                                    <li>
                                                        6 Basics of Music Copyright Law:
                                                    </li>
                                                    <li>
                                                        What It Protects and
                                                    </li>
                                                    <li>
                                                        How to Copyright a Song
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="m-b-10">
                                                <h3 className="news_md_tlt">
                                                    Jump to
                                                </h3>
                                                <div className="news_txt">
                                                    <span className="ball"></span>
                                                    <span className="txt">
                                                        What is music copyright?
                                                    </span>
                                                </div>
                                                <div className="news_txt">
                                                    <span className="ball"></span>
                                                    <span className="txt">
                                                        Two types of music copyright: master and composition
                                                    </span>
                                                </div>
                                                <div className="news_txt">
                                                    <span className="ball"></span>
                                                    <span className="txt">
                                                        When are copyrights created?
                                                    </span>
                                                </div>
                                                <div className="news_txt m-b-15">
                                                    <span className="ball"></span>
                                                    <span className="txt">
                                                        6 exclusive rights held by copyright owners
                                                    </span>
                                                </div>
                                                <ul className="ul_mini">
                                                    <li>
                                                        1. Reproduce the copyrighted work
                                                    </li>
                                                    <li>
                                                        2. Prepare derivative works based upon the copyrighted work
                                                    </li>
                                                    <li>
                                                        3. Distribute copies of the copyrighted work to the public
                                                    </li>
                                                    <li>
                                                        4. Perform the work publicly
                                                    </li>
                                                    <li>
                                                        5. Perform the copyrighted work publicly by means of a digital audio transmission
                                                    </li>
                                                    <li>
                                                        6. Display the work publicly
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                </section>
                            </div>
                            <p className="line1"></p>
                            <div className="contain_body">
                                <table className="table table_board list">
                                    <tbody>
                                        <tr>
                                            <td className="crs_title">
                                                33
                                            </td>
                                            <td>[Topic 1] Article Title</td>
                                            <td>Dec. 20. 2021</td>
                                            <td>543,524</td>
                                        </tr>
                                        <tr>
                                            <td className="crs_title">
                                                32
                                            </td>
                                            <td>[Topic 2] Article Title</td>
                                            <td>Dec. 20. 2021</td>
                                            <td>543,524</td>
                                        </tr>
                                        <tr>
                                            <td className="crs_title">
                                                31
                                            </td>
                                            <td>[Topic 3] Article Title</td>
                                            <td>Dec. 20. 2021</td>
                                            <td>543,524</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="dflx_jcent m-t-30 m-b-10 w-100">
                                    <ButtonComponent onClick={goList} class="btn_md1" txt="List" />
                                </div>
                            </div>
                        </article>
                    </main>

                </div >

            </div >

        </div >
    )
}









