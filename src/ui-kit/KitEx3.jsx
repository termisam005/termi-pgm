import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import RangeSlider from "../components/common/RangeSlider";

import ProfComponent from "../components/common/ProfComponent";
import EtcCont from "../components/common/EtcCont";
import ImgComponent from "../components/common/ImgComponent";

class KitEx3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  onSliderChange = (value) => {
    this.setState({ value }, () => {
      console.log(this.state.value);
    });
  };

  render() {
    return (
      <div className="wrap_grad dark">
        <div className="container">
          <section className="demo_title">
            <h1>EX 3</h1>
          </section>

          <section className="dflx_ac_jcent">
            <div className="w-80">
              <div className="dpflx m-b-80">
                <div style={{ margin: 50 }} className="progress_bar">
                  <p>Basic Slider</p>
                  <p>{this.state.value}</p>
                  <Slider
                    min={0}
                    max={120}
                    value={this.state.value}
                    onChange={this.onSliderChange}
                    railStyle={{
                      height: 10,
                    }}
                    handleStyle={{
                      height: 18,
                      width: 18,
                      marginLeft: -9,
                      marginTop: -9,
                      backgroundColor: "#ff4f19",
                      border: 4,
                      borderStyle: "solid",
                      borderColor: "#304095",
                    }}
                    trackStyle={{
                      height: 6,
                      top: 3,
                      background: "#ff4f19",
                    }}
                  />
                </div>
                <section className="range_wrap">
                  <div className="range_text">
                    <p className="range">
                      <span className="word">MIN</span>
                      <span className="word num">0</span>
                    </p>
                    <p className="range">
                      <span className="word">MAX</span>
                      <span className="word num">500</span>
                    </p>
                  </div>
                  <div className="range_sett">
                    <div className="the_ranger">
                      <RangeSlider />
                    </div>
                  </div>
                </section>
              </div>

              <div className="w-60 m-b-50">
                <section className="player_setts m-b-20">
                  <div className="songplay_set">
                    <button className="btn_c32 cor">
                      <span className="btcor_inner p-l-5">
                        <img
                          src="../resources/images/play_wh32.png"
                          alt="images"
                        />
                      </span>
                    </button>
                    <article className="song_player m-l-25">
                      <div className="progress_bar">
                        <Slider
                          min={0}
                          max={120}
                          railStyle={{ height: 10 }}
                          handleStyle={{
                            height: 18,
                            width: 18,
                            marginLeft: -9,
                            marginTop: -9,
                            backgroundColor: "#304095",
                            border: "none",
                          }}
                          trackStyle={{
                            height: 6,
                            top: 3,
                            background: "#ff4f19",
                          }}
                        />
                      </div>
                    </article>
                  </div>
                  <div className="songtype_set">
                    <div className="pline_status">
                      <p className="stat">
                        <span className="m-r-7">01:40</span>
                        <span className="tmall">03:50</span>
                      </p>
                    </div>
                    <button type="button" className="btn_sm1 w120">
                      <img
                        className="m-r-5"
                        src="../resources/images/note_wh.png"
                        alt="note"
                      />
                      <span>Upload</span>
                    </button>
                  </div>
                </section>
              </div>

              <div className="dflx_jcent p-t-50 m-b-100">

                <article className="pers_contain">

                  <div className="pers_box pers_top">
                    <div className="mess_top_line dflx_jstart">
                      <p className="m-r-10">
                        <img src="../resources/images/bell.png" alt="bell" />
                      </p>
                      <h1 className="top_title">Notification</h1>
                    </div>
                  </div>

                  <p className="line1"></p>

                  <div className="noti_wrap">
                    <div className="noti_cont">
                      <dl className="message_dl">
                        <dt>
                          <ProfComponent wrap_class="prof_wrap" prof_class="prof in c40"
                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                        </dt>
                        <dd>
                          <div className="mess_who">
                            <span className="who">
                              Issac Alberiz
                            </span>
                            <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                              <li>View Detail</li>
                              <li>Remove</li>
                            </EtcCont>
                          </div>
                          <div className="mess_tip">
                            <span className="word">
                              Waiting for your approval.
                            </span>
                            <span className="direct">1d</span>
                          </div>
                        </dd>
                      </dl>
                    </div>

                    <div className="noti_cont">
                      <dl className="message_dl">
                        <dt>
                          <div className="nemo_prof40 nemo_hover">
                            <img src="../resources/images/nemo_prof_ex1.jpg" alt="photo" />
                          </div>
                        </dt>
                        <dd>
                          <div className="mess_who">
                            <span className="who">
                              Trondheim Song:Expo
                            </span>
                            <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                              <li>View Detail</li>
                              <li>Remove</li>
                            </EtcCont>
                          </div>
                          <div className="mess_tip">
                            <span className="word">
                              Waiting for your approval.
                            </span>
                            <span className="direct">7d</span>
                          </div>
                        </dd>
                      </dl>
                    </div>

                    <div className="noti_cont">
                      <dl className="message_dl">
                        <dt className="trans_dt">
                          <ProfComponent wrap_class="prof_wrap dt_top" prof_class="prof in c32"
                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                          <div className="nemo_prof30 nemo_hover dt_bottom">
                            <img src="../resources/images/nemo_prof_ex1.jpg" alt="photo" />
                          </div>
                        </dt>
                        <dd>
                          <div className="mess_who">
                            <span className="who">
                              Are Bergerud
                            </span>
                            <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                              <li>View Detail</li>
                              <li>Remove</li>
                            </EtcCont>
                          </div>
                          <div className="mess_tip">
                            <span className="word">
                              Edited Song & Lyrics
                            </span>
                            <span className="direct">1m</span>
                          </div>
                        </dd>
                      </dl>
                      <dl className="message_dl mini_dl">
                        <dt>
                        </dt>
                        <dd>
                          <div className="mess_tip dflx_jstart">
                            <span className="word">
                              Song
                            </span>
                          </div>
                          <div className="mess_who">
                            <span className="who">
                              Wish
                            </span>
                          </div>
                          <div className="mess_tip dflx_jstart">
                            <span className="word">
                              Song File
                            </span>
                          </div>
                          <div className="mess_who">
                            <span className="who corfff">
                              Wish.mp3
                            </span>
                          </div>
                        </dd>
                      </dl>
                    </div>

                    <div className="noti_cont">
                      <dl className="message_dl">
                        <dt className="trans_dt">
                          <ProfComponent wrap_class="prof_wrap dt_top" prof_class="prof in c32"
                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                          <div className="nemo_prof30 nemo_hover dt_bottom">
                            <img src="../resources/images/nemo_prof_ex1.jpg" alt="photo" />
                          </div>
                        </dt>
                        <dd>
                          <div className="mess_who">
                            <span className="who">
                              Are Bergerud
                            </span>
                            <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                              <li>View Detail</li>
                              <li>Remove</li>
                            </EtcCont>
                          </div>
                          <div className="mess_tip">
                            <span className="word">
                              Create a New Song
                            </span>
                            <span className="direct">2m</span>
                          </div>
                        </dd>
                      </dl>
                      <dl className="message_dl mini_dl">
                        <dt>
                        </dt>
                        <dd>
                          <div className="mess_tip dflx_jstart">
                            <span className="word">
                              Song
                            </span>
                          </div>
                          <div className="mess_who">
                            <span className="who">
                              Wish
                            </span>
                          </div>
                        </dd>
                      </dl>
                    </div>

                    <div className="noti_cont">
                      <dl className="message_dl">
                        <dt className="trans_dt">
                          <ProfComponent wrap_class="prof_wrap dt_top" prof_class="prof in c32"
                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                          <div className="nemo_prof30 nemo_hover dt_bottom">
                            <img src="../resources/images/nemo_prof_ex1.jpg" alt="photo" />
                          </div>
                        </dt>
                        <dd>
                          <div className="mess_who">
                            <span className="who">
                              Anne Judith Wik <span className="corfff">and 10 others</span>
                            </span>
                            <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                              <li>View Detail</li>
                              <li>Remove</li>
                            </EtcCont>
                          </div>
                          <div className="mess_tip">
                            <span className="word">
                              Anne Judith Wik and 10 others
                            </span>
                            <span className="direct">3m</span>
                          </div>
                        </dd>
                      </dl>
                    </div>

                    <div className="noti_cont">
                      <dl className="message_dl">
                        <dt className="trans_dt">
                          <ProfComponent wrap_class="prof_wrap dt_top" prof_class="prof in c32"
                            line_class="line_over" src="../resources/images/prof_ex1.png" />
                          <div className="nemo_prof30 nemo_hover dt_bottom">
                            <img src="../resources/images/nemo_prof_ex1.jpg" alt="photo" />
                          </div>
                        </dt>
                        <dd>
                          <div className="mess_who">
                            <span className="who">
                              Are Bergerud
                            </span>
                            <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                              <li>View Detail</li>
                              <li>Remove</li>
                            </EtcCont>
                          </div>
                          <div className="mess_tip">
                            <span className="word">
                              Create a Project
                            </span>
                            <span className="direct">3m</span>
                          </div>
                        </dd>
                      </dl>
                      <dl className="message_dl mini_dl">
                        <dt>
                        </dt>
                        <dd>
                          <div className="mess_tip dflx_jstart">
                            <span className="word">
                              Project
                            </span>
                          </div>
                          <div className="mess_who">
                            <span className="who">
                              Trondheim Song:Expo
                            </span>
                          </div>
                        </dd>
                      </dl>
                    </div>

                  </div>

                </article>
              </div>
            </div>
          </section >
        </div >

        <section className="foot_play">
          <div className="fplay_inner">
            <div className="progress_bar fplay_progress">
              <Slider
                min={0}
                max={100}
                onChange={this.onSliderChange}
                railStyle={{ height: 10 }}
                handleStyle={{
                  height: 18,
                  width: 18,
                  marginLeft: 0,
                  marginTop: -9,
                  backgroundColor: "#ff4f19",
                  border: 4,
                  borderStyle: "solid",
                  borderColor: "#304095",
                }}
                trackStyle={{
                  height: 6,
                  top: 3,
                  background: "#ff4f19",
                }}
              />
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default KitEx3;
