import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import ButtonComponent from "../../components/common/ButtonComponent";
import BoardBox from "./BoardBox";


export default function BoardNews() {

    const goBoard = () => {
        window.location.href = "/BoardNewsDetail"
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
                                            News & Post
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <p className="line1"></p>

                            <div className="contain_body">
                                <div className="cttop_left">
                                    <div className="tab_line maint_line">
                                        <p className="art on">
                                            All
                                        </p>
                                        <p className="art">
                                            Music Industry
                                        </p>
                                        <p className="art">
                                            Artist Interviews
                                        </p>
                                        <p className="art">
                                            Best Music
                                        </p>
                                        <p className="art">
                                            Case Studies
                                        </p>
                                        <p className="art">
                                            How To
                                        </p>
                                        <p className="art">
                                            Music Opportunities
                                        </p>
                                    </div>
                                </div>

                                <section className="board_srline">
                                    <div className="dflx_ac">
                                        <article className="hd_search w360">
                                            <button type="button" className="btn_srch"></button>
                                            <input type="text" className="hd_input" placeholder="Here you can search our knowledge base" />
                                        </article>
                                        <ButtonComponent class="btn_sm1 m-l-12" txt="Search" />
                                    </div>
                                    <div className="board_result">
                                        <span className="m-r-3">About</span>
                                        <span>1,234</span>
                                        <span className="m-l-3">results</span>
                                    </div>
                                </section>

                                <section className="board_list">
                                    <BoardBox onClick={goBoard} title="What Is Tone In Music? Everything You Need To Know!" imgclass="img_norm" src="../resources/images/photo_norm300.png">
                                        <p>Musicians are often heard to be commenting on the tone of someone’s guitar or voice,
                                            but what is it? Tone can elicit an emotional response in the...</p>
                                    </BoardBox>
                                    <BoardBox onClick={goBoard} title="What Is Tone In Music? Everything You Need To Know!" imgclass="img_norm" src="../resources/images/photo_norm300.png">
                                        <p>Musicians are often heard to be commenting on the tone of someone’s guitar or voice</p>
                                    </BoardBox>
                                    <BoardBox onClick={goBoard} title="What Is Tone In Music?" imgclass="img_norm" src="../resources/images/photo_norm300.png">
                                        <p>Musicians are often heard to be commenting on the tone</p>
                                    </BoardBox>
                                    <BoardBox onClick={goBoard} title="What Is Tone In Music? Everything You Need To Know!" imgclass="img_norm" src="../resources/images/photo_norm300.png">
                                        <p>Musicians are often heard to be commenting on the tone of someone’s guitar or voice,
                                            but what is it? Tone can elicit an emotional response in the...</p>
                                    </BoardBox>
                                    <BoardBox onClick={goBoard} title="What Is Tone In Music? Everything You Need To Know!" imgclass="img_norm" src="../resources/images/photo_norm300.png">
                                        <p>Musicians are often heard to be commenting on the tone of someone’s guitar or voice</p>
                                    </BoardBox>
                                    <BoardBox onClick={goBoard} title="What Is Tone In Music?" imgclass="img_norm" src="../resources/images/photo_norm300.png">
                                        <p>Musicians are often heard to be commenting on the tone</p>
                                    </BoardBox>
                                    <BoardBox onClick={goBoard} title="What Is Tone In Music? Everything You Need To Know!" imgclass="img_norm" src="../resources/images/photo_norm300.png">
                                        <p>Musicians are often heard to be commenting on the tone of someone’s guitar or voice,
                                            but what is it? Tone can elicit an emotional response in the...</p>
                                    </BoardBox>
                                    <BoardBox onClick={goBoard} title="What Is Tone In Music? Everything You Need To Know!" imgclass="img_norm" src="../resources/images/photo_norm300.png">
                                        <p>Musicians are often heard to be commenting on the tone of someone’s guitar or voice</p>
                                    </BoardBox>
                                    <BoardBox onClick={goBoard} title="What Is Tone In Music?" imgclass="img_norm" src="../resources/images/photo_norm300.png">
                                        <p>Musicians are often heard to be commenting on the tone</p>
                                    </BoardBox>
                                </section>
                            </div>

                        </article>
                    </main>

                </div >

            </div >

        </div >
    )
}









