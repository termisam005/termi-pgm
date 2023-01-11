import SlideToggle from "react-slide-toggle";

export default function Fixmenu() {

    return (
        <SlideToggle duration={150}
            render={({ toggle, setCollapsibleElement }) => (
                <section className="gr_fixmenu">
                    <p className="btn_menu" onClick={toggle}></p>
                    <div className="fixmenu_bar" ref={setCollapsibleElement}>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_share.svg" alt="icon" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_share_on.svg" alt="icon" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>Recommend</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Projects List</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>A&R List</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Pitch List (A&R Only)</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_person.svg" alt="icon person" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_person_on.svg" alt="icon person" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>Creator</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Home</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Project</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Song Library</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_music.svg" alt="icon music" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_music_on.svg" alt="icon music" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>A&R <span className="dpinblock f-s-13 m-t-3">(A&R only)</span></h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Song library</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Home</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Pitched List</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Catalog</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Evaluation</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_data.svg" alt="icon data" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_data_on.svg" alt="icon data" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>Report</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>List</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_people.svg" alt="icon people" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_people_on.svg" alt="icon people" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>Connect</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>List</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_doctor.svg" alt="icon doctor" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_doctor_on.svg" alt="icon doctor" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>SPARWK class 101</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>List</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_card.svg" alt="icon card" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_card_on.svg" alt="icon card" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>News & Post</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>List</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_headphone.svg" alt="icon headphone" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_headphone_on.svg" alt="icon headphone" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>Help</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>1:1 Inquiry</a>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            )}
        />
    )
}
