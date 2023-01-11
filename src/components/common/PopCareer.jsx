import ButtonComponent from "./ButtonComponent";
import ToggleCheck from "./ToggleCheck";
import InputComponent from "./InputComponent"
import ButtonWith from "./ButtonWith";
import DateTrans from "./DateTrans";


const PopCareer = (props) => {

    const { open, close } = props;

    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_ab_cent selectPop mx_h800 scroll scroll-y">
                <div className="pop_top">
                    <div className="ptop_txt">
                        <h1 className="ptop_title f-s-20">
                            Register Career
                        </h1>
                    </div>
                    <p onClick={close} className="ptop_x"></p>
                </div>
                <p className="line1"></p>

                <div className="pop_conts">

                    <article className="outer_contain">
                        <section className="contain_body">
                            <div className="regis_top">
                                <div className="regis_title">
                                    <h3>Career 1</h3>
                                </div>
                                <ToggleCheck word="Present" box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                            </div>
                            <div className="regis_cont">
                                <table className="table table_skill table_regist">
                                    <tbody>
                                        <tr>
                                            <td className="box_td" rowSpan={4}>
                                                <div className="regis_phbox">
                                                    <img className="img_norm" src="../resources/images/trans_sparwk40.png" alt="image" />
                                                    <div className="photo_cont">
                                                        <div className="photo_wrap">
                                                            <input type="file" className="file_put" />
                                                            <img className="img_thumb" src="../resources/images/photo_plus38.png" alt="plus" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="rgname_td">
                                                Organization
                                            </td>
                                            <td className="form_td">
                                                <div className="putt_box">
                                                    <InputComponent class="wrput trans mid" placeholder="Enter Organization Name" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="rgname_td">
                                                Position
                                            </td>
                                            <td className="form_td">
                                                <div className="putt_box">
                                                    <InputComponent class="wrput trans mid" placeholder="Enter Education Name" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="rgname_td">
                                                Location
                                            </td>
                                            <td className="form_td">
                                                <div className="dflx_ac_jbet">
                                                    <div className="putt_box w-48">
                                                        <InputComponent class="wrput trans mid" placeholder="Enter city" />
                                                    </div>
                                                    <div className="putt_box see w-48">
                                                        <InputComponent class="wrput trans mid" placeholder="Select Country" />
                                                        <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="rgname_td">
                                                Period
                                            </td>
                                            <td className="form_td">
                                                <article className="dflx_ac_jbet">
                                                    <div className="wrbg trans calen w-48">
                                                        <section className="calen_set">
                                                            <p>
                                                                <img src="../resources/images/calendar_vol20.png" alt="calendar" />
                                                            </p>
                                                            <DateTrans class="dflx_ac" />
                                                        </section>
                                                    </div>
                                                    <div className="dflx_ac_jend">
                                                        <p className="regist_del m-t-4">
                                                            <img className="m-r-5" src="../resources/images/trash_vl20.png" alt="trash" />
                                                            <span>Del</span>
                                                        </p>
                                                    </div>
                                                </article>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </article>

                    <article className="outer_contain">
                        <section className="contain_body">
                            <div className="regis_top">
                                <div className="regis_title">
                                    <h3>Career 2</h3>
                                </div>
                                <ToggleCheck word="Present" box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                            </div>
                            <div className="regis_cont">
                                <table className="table table_skill table_regist">
                                    <tbody>
                                        <tr>
                                            <td className="box_td" rowSpan={4}>
                                                <div className="regis_phbox">
                                                    <img className="img_norm" src="../resources/images/trans_sparwk40.png" alt="image" />
                                                    <div className="photo_cont">
                                                        <div className="photo_wrap">
                                                            <input type="file" className="file_put" />
                                                            <img className="img_thumb" src="../resources/images/photo_plus38.png" alt="plus" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="rgname_td">
                                                Organization
                                            </td>
                                            <td className="form_td">
                                                <div className="putt_box">
                                                    <InputComponent class="wrput trans mid" placeholder="Enter Organization Name" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="rgname_td">
                                                Position
                                            </td>
                                            <td className="form_td">
                                                <div className="putt_box">
                                                    <InputComponent class="wrput trans mid" placeholder="Enter Education Name" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="rgname_td">
                                                Location
                                            </td>
                                            <td className="form_td">
                                                <div className="dflx_ac_jbet">
                                                    <div className="putt_box w-48">
                                                        <InputComponent class="wrput trans mid" placeholder="Enter city" />
                                                    </div>
                                                    <div className="putt_box see w-48">
                                                        <InputComponent class="wrput trans mid" placeholder="Select Country" />
                                                        <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="rgname_td">
                                                Period
                                            </td>
                                            <td className="form_td">
                                                <article className="dflx_ac_jbet">
                                                    <div className="wrbg trans calen w-48">
                                                        <section className="calen_set">
                                                            <p>
                                                                <img src="../resources/images/calendar_vol20.png" alt="calendar" />
                                                            </p>
                                                            <DateTrans class="dflx_ac" />
                                                        </section>
                                                    </div>
                                                    <div className="dflx_ac_jend">
                                                        <p className="regist_del m-t-4">
                                                            <img className="m-r-5" src="../resources/images/trash_vl20.png" alt="trash" />
                                                            <span>Del</span>
                                                        </p>
                                                    </div>
                                                </article>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </article>

                    <article className="outer_contain">
                        <section className="contain_body">
                            <div className="regis_top">
                                <div className="regis_title">
                                    <h3>Career 3</h3>
                                </div>
                                <ToggleCheck word="Present" box_class="checkbox" src="../resources/images/sv_check_cor.svg" />
                            </div>
                            <div className="regis_cont">
                                <table className="table table_skill table_regist">
                                    <tbody>
                                        <tr>
                                            <td className="box_td" rowSpan={4}>
                                                <div className="regis_phbox">
                                                    <img className="img_norm" src="../resources/images/trans_sparwk40.png" alt="image" />
                                                    <div className="photo_cont">
                                                        <div className="photo_wrap">
                                                            <input type="file" className="file_put" />
                                                            <img className="img_thumb" src="../resources/images/photo_plus38.png" alt="plus" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="rgname_td">
                                                Organization
                                            </td>
                                            <td className="form_td">
                                                <div className="putt_box">
                                                    <InputComponent class="wrput trans mid" placeholder="Enter Organization Name" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="rgname_td">
                                                Position
                                            </td>
                                            <td className="form_td">
                                                <div className="putt_box">
                                                    <InputComponent class="wrput trans mid" placeholder="Enter Education Name" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="rgname_td">
                                                Location
                                            </td>
                                            <td className="form_td">
                                                <div className="dflx_ac_jbet">
                                                    <div className="putt_box w-48">
                                                        <InputComponent class="wrput trans mid" placeholder="Enter city" />
                                                    </div>
                                                    <div className="putt_box see w-48">
                                                        <InputComponent class="wrput trans mid" placeholder="Select Country" />
                                                        <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="rgname_td">
                                                Period
                                            </td>
                                            <td className="form_td">
                                                <article className="dflx_ac_jbet">
                                                    <div className="wrbg trans calen w-48">
                                                        <section className="calen_set">
                                                            <p>
                                                                <img src="../resources/images/calendar_vol20.png" alt="calendar" />
                                                            </p>
                                                            <DateTrans class="dflx_ac" />
                                                        </section>
                                                    </div>
                                                    <div className="dflx_ac_jend">
                                                        <p className="regist_del m-t-4">
                                                            <img className="m-r-5" src="../resources/images/trash_vl20.png" alt="trash" />
                                                            <span>Del</span>
                                                        </p>
                                                    </div>
                                                </article>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </article>

                    <div className="dflx_jcent p-b-10">
                        <button className="btsq bt36">
                            <img className="bticon" src="../resources/images/arr36_plus_wh.png" alt="image" />
                            <img className="bticon_on" src="../resources/images/arr36_plus_cor.png" alt="image" />
                        </button>
                    </div>

                </div>

                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md2" txt="Cancel" />
                    <ButtonComponent onClick={close} class="btn_md2 cor" txt="Select" />
                </div>
            </div>
        </section >
    )
}

export default PopCareer;

