import React from "react";
import ImgComponent from "../components/common/ImgComponent";
import ProfComponent from "../components/common/ProfComponent";

export default function KitProfile() {
    return (
        <div className="wrap_grad">
            <div className="container">

                <section className="demo_title">
                    <h1>Profile Thumb</h1>
                </section>

                {/* 사진프로필박스 퍼블 */}
                <section className="dflx_ac_jcent">
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof in c120 prof_shadow">
                                <span className="line_over"></span>
                                <img src="../resources/images/thumb_ex1.jpg" alt="image" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof in c32">
                                <span className="line_over"></span>
                                <img src="../resources/images/thumb_ex1.jpg" alt="image" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof in c24">
                                <span className="line_over"></span>
                                <img src="../resources/images/thumb_ex1.jpg" alt="image" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof in c50">
                                <span className="line_over"></span>
                                <img src="../resources/images/thumb_ex1.jpg" alt="image" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <span className="comming"></span>
                            <p className="prof in norm c40">
                                <span className="line_over"></span>
                                <img src="../resources/images/thumb_ex1.jpg" alt="image" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30">
                        <div className="prof_wrap">
                            <p className="prof in norm line c40">
                                <span className="line_over"></span>
                                <img src="../resources/images/thumb_ex1.jpg" alt="image" />
                            </p>
                        </div>
                    </div>
                </section>

                {/* 사진프로필박스 컴퍼넌트 */}
                <section className="dflx_ac_jcent">
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c120 prof_shadow"
                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                    </div>
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c24"
                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                    </div>
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                    </div>
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                    </div>
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof in norm c40"
                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                    </div>
                    <div className="p-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in norm line c40"
                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                    </div>
                </section>

                {/* 헤드폰 프로필박스 퍼블 */}
                <section className="dflx_ac_jcent">
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof none c120 prof_shadow">
                                <img src="../resources/images/prof_head_120.png" alt="headset" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof none c32">
                                <img src="../resources/images/prof_head_32.png" alt="headset" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof none c50">
                                <img src="../resources/images/prof_head_50.png" alt="headset" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <span className="comming"></span>
                            <p className="prof norm c40">
                                <img src="../resources/images/prof_head_40.png" alt="headset" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30">
                        <div className="prof_wrap">
                            <p className="prof norm line c40">
                                <img src="../resources/images/prof_head_40.png" alt="headset" />
                            </p>
                        </div>
                    </div>
                </section>

                {/* 헤드폰 프로필박스 컴퍼넌트 */}
                <section className="dflx_ac_jcent">
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c120 prof_shadow" src="../resources/images/prof_head_120.png" />
                    </div>
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32" src="../resources/images/prof_head_32.png" />
                    </div>
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c50" src="../resources/images/prof_head_50.png" />
                    </div>
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof norm c40" src="../resources/images/prof_head_40.png" />
                    </div>
                    <div className="p-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof norm line c40" src="../resources/images/prof_head_40.png" />
                    </div>
                </section>

                {/* none 프로필박스 퍼블 */}
                <section className="dflx_ac_jcent">
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof none c120 prof_shadow">
                                <img src="../resources/images/prof_none_120.png" alt="profile_none" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof none c32">
                                <img className="m-t-10" src="../resources/images/prof_none_32.png" alt="profile_none" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof none c50">
                                <img className="m-t-12" src="../resources/images/prof_none_50.png" alt="profile_none" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <span className="comming"></span>
                            <p className="prof norm c40">
                                <img className="m-t-12" src="../resources/images/prof_none_40.png" alt="profile_none" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30">
                        <div className="prof_wrap">
                            <p className="prof norm line c40">
                                <img className="m-t-12" src="../resources/images/prof_none_40.png" alt="profile_none" />
                            </p>
                        </div>
                    </div>
                </section>

                {/* none 프로필박스 컴퍼넌트 */}
                <section className="dflx_ac_jcent">
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c120 prof_shadow" src="../resources/images/prof_none_120.png" />
                    </div>
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32" imgclass="m-t-10" src="../resources/images/prof_none_32.png" />
                    </div>
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c50" imgclass="m-t-10" src="../resources/images/prof_none_50.png" />
                    </div>
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof norm c40" imgclass="m-t-12" src="../resources/images/prof_none_40.png" />
                    </div>
                    <div className="p-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof norm line c40" imgclass="m-t-12" src="../resources/images/prof_none_40.png" />
                    </div>
                </section>

                {/* J 이미지박스 퍼블 */}
                <section className="dflx_ac_jcent">
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof none c120 prof_shadow">
                                <img src="../resources/images/prof_j_120.png" alt="profile_j" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof none c32">
                                <img src="../resources/images/prof_j_32.png" alt="profile_none" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof none c50">
                                <img src="../resources/images/prof_j_50.png" alt="profile_none" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <span className="comming"></span>
                            <p className="prof norm c40">
                                <img src="../resources/images/prof_j_40.png" alt="profile_none" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30">
                        <div className="prof_wrap">
                            <p className="prof norm line c40">
                                <img src="../resources/images/prof_j_40.png" alt="profile_none" />
                            </p>
                        </div>
                    </div>
                </section>

                {/* J 이미지박스 컴퍼넌트 */}
                <section className="dflx_ac_jcent">
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c120 prof_shadow" src="../resources/images/prof_j_120.png" />
                    </div>
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c32" src="../resources/images/prof_j_32.png" />
                    </div>
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof none c50" src="../resources/images/prof_j_50.png" />
                    </div>
                    <div className="p-30 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof norm c40" src="../resources/images/prof_j_40.png" />
                    </div>
                    <div className="p-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof norm line c40" src="../resources/images/prof_j_40.png" />
                    </div>
                </section>

                {/* 커버박스 퍼블 & 컴퍼넌트 */}
                <section className="dflx_ac_jcent">
                    <div className="p-20 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof in c108">
                                <img src="../resources/images/alcove_108.png" alt="cover" />
                            </p>
                        </div>
                    </div>
                    <div className="p-20 m-r-30">
                        <div className="prof_wrap">
                            <p className="prof in c60">
                                <img src="../resources/images/alcove_60.png" alt="cover" />
                            </p>
                        </div>
                    </div>
                    <div className="p-20 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c108" src="../resources/images/alcove_108.png" />
                    </div>
                    <div className="p-20 m-r-30">
                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c60" src="../resources/images/alcove_60.png" />
                    </div>
                </section>

            </div>
        </div>
    );
}