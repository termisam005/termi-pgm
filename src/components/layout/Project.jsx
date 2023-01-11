import { useState } from "react";

export default function Project() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <article className="contain">
            <section className="contain_top">
                <div className="cttop_left">
                    <h1 className="top_title">Project</h1>
                    <a className="go_detail">
                        <img src="../resources/images/sv_drop.svg" alt="go detail" />
                    </a>
                </div>
            </section>
            <p className="line1"></p>
            <section className="contain_body">
                <article className="contact_line">
                    <div className="tab_line">
                        <p className={toggleState === 1 ? "art on" : "art"} onClick={() => toggleTab(1)}>
                            Song
                        </p>
                        <p className={toggleState === 2 ? "art on" : "art"} onClick={() => toggleTab(2)}>
                            Video
                        </p>
                        <p className={toggleState === 3 ? "art on" : "art"} onClick={() => toggleTab(3)}>
                            Playlist
                        </p>
                        <p className={toggleState === 4 ? "art on" : "art"} onClick={() => toggleTab(4)}>
                            Project
                        </p>
                        <p className={toggleState === 5 ? "art on" : "art"} onClick={() => toggleTab(5)}>
                            Piched
                        </p>
                    </div>
                </article>

                <article className={toggleState === 1 ? "tab_content on" : "tab_content"}>
                    <div className="drop_box">
                        <div className="drop_zone">
                            <img src="../resources/images/sv_drop.svg" alt="drop" />
                            <span className="word">
                                Drag and Drop New Songs Here
                            </span>
                        </div>
                    </div>
                </article>
                <article className={toggleState === 2 ? "tab_content on" : "tab_content"}>
                    <div className="drop_box">
                        <div className="drop_zone">
                            <img src="../resources/images/sv_drop.svg" alt="drop" />
                            <span className="word">
                                Drag and Drop New Video Here
                            </span>
                        </div>
                    </div>
                </article>
                <article className={toggleState === 3 ? "tab_content on" : "tab_content"}>
                    <div className="drop_box">
                        <div className="drop_zone">
                            <img src="../resources/images/sv_drop.svg" alt="drop" />
                            <span className="word">
                                Drag and Drop New Playlist Here
                            </span>
                        </div>
                    </div>
                </article>
                <article className={toggleState === 4 ? "tab_content on" : "tab_content"}>
                    <div className="drop_box">
                        <div className="drop_zone">
                            <img src="../resources/images/sv_drop.svg" alt="drop" />
                            <span className="word">
                                Drag and Drop New Project Here
                            </span>
                        </div>
                    </div>
                </article>
                <article className={toggleState === 5 ? "tab_content on" : "tab_content"}>
                    <div className="drop_box">
                        <div className="drop_zone">
                            <img src="../resources/images/sv_drop.svg" alt="drop" />
                            <span className="word">
                                Drag and Drop New Piched Here
                            </span>
                        </div>
                    </div>
                </article>

            </section>
        </article>
    );
}