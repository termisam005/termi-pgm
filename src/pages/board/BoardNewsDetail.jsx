import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import ButtonComponent from "../../components/common/ButtonComponent";
import BoardBox from "./BoardBox";


export default function BoardNewsDetail() {

    const goBoard = () => {
        window.location.href = "/BoardNewsDetail"
    }

    const goList = () => {
        window.location.href = "/BoardNews"
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
                                            News Post
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <p className="line1"></p>
                            <div className="contain_body">
                                <section className="news_wrap">
                                    <div className="top">
                                        <p></p>
                                        <p className="news_record">
                                            <span>20 May 2022</span>
                                            <span>543,524 views</span>
                                        </p>
                                    </div>
                                    <article className="news_zone">
                                        <div className="news_title">
                                            <p className="imp">Music Industry</p>
                                            <h1>News Feed Title</h1>
                                        </div>
                                        <div className="news_cont">
                                            <img className="img_news" src="../resources/images/photo_norm100per.png" alt="image" />
                                            <p className="txt_news">
                                                Musicians are often heard to be commenting on the tone of someone’s guitar or voice, but what is it?
                                                Tone can elicit an emotional response in the listening process, and listeners either like it or don’t!
                                                There is so much more to discover about tone in music.
                                            </p>
                                            <img className="img_news" src="../resources/images/photo_norm100per2.png" alt="image" />
                                        </div>
                                    </article>
                                </section>
                            </div>
                            <p className="line1"></p>
                            <div className="contain_body">
                                <section className="related">
                                    <div className="top">
                                        <h3 className="post_title">Related posts</h3>
                                    </div>
                                </section>
                                <section className="board_list">
                                    <BoardBox onClick={goBoard} title="What Is Tone In Music? Everything You Need To Know!" imgclass="img_norm" src="../resources/images/photo_norm300.png">
                                        <p>Musicians are often heard to be commenting on the tone of someone’s guitar or voice,
                                            but what is it? Tone can elicit an emotional response in the...</p>
                                    </BoardBox>
                                    <BoardBox onClick={goBoard} title="What Is Tone In Music? Everything You Need To Know!" imgclass="img_norm" src="../resources/images/photo_norm300.png">
                                        <p>Musicians are often heard to be commenting on the tone of someone’s guitar or voice,
                                            but what is it? Tone can elicit an emotional response in the...</p>
                                    </BoardBox>
                                    <BoardBox onClick={goBoard} title="What Is Tone In Music? Everything You Need To Know!" imgclass="img_norm" src="../resources/images/photo_norm300.png">
                                        <p>Musicians are often heard to be commenting on the tone of someone’s guitar or voice,
                                            but what is it? Tone can elicit an emotional response in the...</p>
                                    </BoardBox>
                                    <div className="dflx_jcent m-t-10 w-100">
                                        <ButtonComponent onClick={goList} class="btn_md1" txt="List" />
                                    </div>
                                </section>
                            </div>
                        </article>
                    </main>

                </div >

            </div >

        </div >
    )
}









