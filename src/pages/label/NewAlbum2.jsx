import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import HeaderTrans from "../../components/header/HeaderTrans";
import ProfComponent from "../../components/common/ProfComponent";
import BordAdd from "../../components/common/BordAdd";


export default function NewAlbum2() {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [savePop, setSavePop] = useState(false);
    const openSavePop = () => {
        setSavePop(true);
    };
    const closeSavePop = () => {
        setSavePop(false);
    }


    return (
        <div className="wrap_prof">

            <HeaderTrans src="../resources/images/logo.png" />

            <section className="rolse_box official_box pf">
                <div className="rolse_in">

                    <article className="profile_contain">
                        <article className="roles_title">
                            <h1>
                                <span onClick={goBack} className="go_back">
                                    <img src="/resources/images/arr_back_wh.png" alt="image" />
                                </span>
                                <span className="big">New Album - Lable Copy</span>
                            </h1>
                        </article>

                        <div className="pf_group">
                            <h5 className="pf_title">
                                Basic
                            </h5>
                            <article className="pf_sheet">
                                <section className="label_contents new">
                                    <article className="label_line">
                                        <div className="label_title">
                                            <p className="tlt op05">
                                                <span>Product Purpose</span>
                                            </p>
                                        </div>
                                        <div className="label_cont">
                                            <select className="selector wh small w-100">
                                                <option value="">Physical / Digital Release</option>
                                            </select>
                                        </div>
                                    </article>
                                    <article className="label_line">
                                        <div className="label_title">
                                            <p className="tlt op05">
                                                <span>Status</span>
                                            </p>
                                        </div>
                                        <div className="label_cont">
                                            <select className="selector wh small w-100">
                                                <option value="">Unrelease</option>
                                                <option value="">Release</option>
                                            </select>
                                        </div>
                                    </article>
                                </section>
                                <section className="label_share">
                                    <div className="w-50">
                                        <dl className="lab_dl">
                                            <dd>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">Created On</p>
                                                    <p className="w-55">27 Apr 2021</p>
                                                </div>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">Release</p>
                                                    <p className="w-55">27 Apr 2021</p>
                                                </div>
                                            </dd>
                                        </dl>
                                        <div className="nro_set m-t-10">
                                            <p className="nro_tlt">
                                                <span>[C]-Line</span>
                                            </p>
                                            <input type="text" className="nro_put" value={'ⓒ 2021 JYP Entertainment'} />
                                        </div>
                                    </div>
                                    <div className="w-50">
                                        <dl className="lab_dl">
                                            <dd>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">Updated On</p>
                                                    <p className="w-55">27 Apr 2021</p>
                                                </div>
                                                <div className="lab_text">
                                                    <p className="tlt w-45">Pre-Order</p>
                                                    <p className="w-55">27 Apr 2021</p>
                                                </div>
                                            </dd>
                                        </dl>
                                        <div className="nro_set m-t-10">
                                            <p className="nro_tlt">
                                                <span>[P]-Line</span>
                                            </p>
                                            <input type="text" className="nro_put" value={'ⓒ 2021 JYP Entertainment'} />
                                        </div>
                                    </div>
                                </section>
                            </article>
                        </div>

                        <div className="pf_group">
                            <h5 className="pf_title">
                                Production
                            </h5>
                            <article className="pf_sheet">
                                <div className="product_body">
                                    <article className="product_line">
                                        <dl className="message_dl connect_dl disble w-50">
                                            <dt>
                                                <div className="hover_prof">
                                                    <div className="co_plus">
                                                        <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                    </div>
                                                </div>
                                            </dt>
                                            <dd className="conn_dd set">
                                                <div className="mess_who">
                                                    <span className="who">Empty</span>
                                                </div>
                                                <p className="tip_word">
                                                    <span className="word">Client</span>
                                                </p>
                                            </dd>
                                        </dl>
                                        <div className="nro_set w-50">
                                            <p className="nro_tlt">
                                                <span>Catalog Number</span>
                                            </p>
                                            <input className="nro_put" type="text" value={'SPARWK090s'} />
                                        </div>
                                    </article>
                                    <article className="product_line">
                                        <dl className="message_dl connect_dl disble w-50">
                                            <dt>
                                                <div className="hover_prof">
                                                    <div className="co_plus">
                                                        <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                    </div>
                                                </div>
                                            </dt>
                                            <dd className="conn_dd set">
                                                <div className="mess_who">
                                                    <span className="who">Empty</span>
                                                </div>
                                                <p className="tip_word">
                                                    <span className="word">Music Publisher</span>
                                                </p>
                                            </dd>
                                        </dl>
                                        <div className="nro_set w-50">
                                            <p className="nro_tlt">
                                                <span>Original Catalog Number</span>
                                            </p>
                                            <input className="nro_put" type="text" />
                                        </div>
                                    </article>
                                    <article className="product_line">
                                        <dl className="message_dl connect_dl w-50">
                                            <dt>
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                    src="../resources/images/simb_sm40.png" />
                                            </dt>
                                            <dd className="conn_dd set">
                                                <div className="mess_who">
                                                    <span className="who">JYP Entertatinment</span>
                                                </div>
                                                <p className="tip_word">
                                                    <span className="word">Record Label</span>
                                                </p>
                                            </dd>
                                        </dl>
                                        <div className="nro_set w-50">
                                            <p className="nro_tlt">
                                                <span>UPC / Barcode</span>
                                            </p>
                                            <input className="nro_put" type="text" placeholder="Studio name" value={'4872343135338'} />
                                        </div>
                                    </article>
                                    <article className="product_line">
                                        <dl className="message_dl connect_dl disble w-50">
                                            <dt>
                                                <div className="hover_prof">
                                                    <div className="co_plus">
                                                        <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                    </div>
                                                </div>
                                            </dt>
                                            <dd className="conn_dd set">
                                                <div className="mess_who">
                                                    <span className="who">Empty</span>
                                                </div>
                                                <p className="tip_word">
                                                    <span className="word">Imprint Label</span>
                                                </p>
                                            </dd>
                                        </dl>
                                        <div className="nro_set w-50">
                                            <p className="nro_tlt">
                                                <span>EAN</span>
                                            </p>
                                            <input className="nro_put" type="text" value={'50542854496**'} />
                                        </div>
                                    </article>
                                    <article className="product_line">
                                        <dl className="message_dl connect_dl disble w-50">
                                            <dt>
                                                <div className="hover_prof">
                                                    <div className="co_plus">
                                                        <img className="bticon" src="../resources/images/plus_wh17.png" alt="image" />
                                                    </div>
                                                </div>
                                            </dt>
                                            <dd className="conn_dd set">
                                                <div className="mess_who">
                                                    <span className="who">Empty</span>
                                                </div>
                                                <p className="tip_word">
                                                    <span className="word">Producer</span>
                                                </p>
                                            </dd>
                                        </dl>
                                        <div className="nro_set w-50">
                                            <p className="nro_tlt">
                                                <span>Grid</span>
                                            </p>
                                            <input className="nro_put" type="text" />
                                        </div>
                                    </article>
                                </div>
                            </article>
                        </div>

                        <div className="pf_group">
                            <h5 className="pf_title">
                                Territory/Dist. Rights
                            </h5>
                            <article className="pf_sheet">
                                <div className="dist_top">
                                    <h5 className="tlt">Cleared for sale</h5>
                                    <p className="clear">All Clear</p>
                                </div>
                                <div className="dist_body">
                                    <BordAdd word="Add" />
                                </div>
                            </article>
                            <article className="pf_sheet">
                                <div className="dist_top">
                                    <h5 className="tlt">Not-Cleared for sale</h5>
                                    <p className="clear">All Clear</p>
                                </div>
                                <div className="dist_body">
                                    <p className="bord_comp trans add red">
                                        <span className="plus">+</span>
                                        <span className="word">Add</span>
                                    </p>
                                </div>
                            </article>
                        </div>
                    </article>

                    <article className="create_bottom p-t-30">
                        <div></div>
                        <div className="dflx_ac_jend">
                            <ButtonComponent onClick={goBack} class="btn_md1 w150 m-r-15" txt="Back" />
                            <ButtonComponent onClick={openSavePop} class="btn_md1 cor w150" txt="Save" />
                        </div>
                    </article>
                </div>
            </section>

            <PopSave open={savePop} close={closeSavePop} />
        </div>
    )
}


const PopSave = (props) => {
    const { open, close } = props;
    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent">
                <div className="pop_conts">
                    <div className="pop_cent">
                        <h2>Saved</h2>
                        <p>The Label Copy has been saved.</p>
                    </div>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md3 w-100" txt="Done" />
                </div>
            </div>
        </section >
    )
}


