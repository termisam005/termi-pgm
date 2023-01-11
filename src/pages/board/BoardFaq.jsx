import Header from "../../components/header/Header";
import ButtonComponent from "../../components/common/ButtonComponent";


export default function BoardFaq() {

    const goTable = () => {
        window.location.href = "/BoardFaqDetail"
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
                                <div className="cttop_left">
                                    <div className="tab_line maint_line">
                                        <p className="art on">
                                            All
                                        </p>
                                        <p className="art">
                                            Project
                                        </p>
                                        <p className="art">
                                            Song Information
                                        </p>
                                        <p className="art">
                                            Song Library
                                        </p>
                                        <p className="art">
                                            Pitching
                                        </p>
                                        <p className="art">
                                            A&R
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
                                    <article className="dflx_ac">
                                        <div className="board_result">
                                            <span className="m-r-3">About</span>
                                            <span>1,234</span>
                                            <span className="m-l-3">results</span>
                                        </div>
                                        <select className="selector wh mini w120 m-l-15">
                                            <option value="">10 Views</option>
                                            <option value="">30 Views</option>
                                            <option value="">50 Views</option>
                                        </select>
                                    </article>
                                </section>

                                <table className="table table_board">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Topic</th>
                                            <th>Class Title</th>
                                            <th>Update</th>
                                            <th>Views</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onClick={goTable}>
                                            <td className="crs_title">
                                                33
                                            </td>
                                            <td>Projects</td>
                                            <td>Class Title</td>
                                            <td>15 May 2022</td>
                                            <td>543,524</td>
                                        </tr>
                                        <tr onClick={goTable}>
                                            <td className="crs_title">
                                                32
                                            </td>
                                            <td>Song Information</td>
                                            <td>Class Title</td>
                                            <td>15 May 2022</td>
                                            <td>5,435</td>
                                        </tr>
                                        <tr onClick={goTable}>
                                            <td className="crs_title">
                                                31
                                            </td>
                                            <td>Song Information</td>
                                            <td>Class Title</td>
                                            <td>15 May 2022</td>
                                            <td>5,435</td>
                                        </tr>
                                        <tr onClick={goTable}>
                                            <td className="crs_title">
                                                30
                                            </td>
                                            <td>Song Information</td>
                                            <td>Class Title</td>
                                            <td>15 May 2022</td>
                                            <td>5,435</td>
                                        </tr>
                                        <tr onClick={goTable}>
                                            <td className="crs_title">
                                                29
                                            </td>
                                            <td>Song Information</td>
                                            <td>Class Title</td>
                                            <td>15 May 2022</td>
                                            <td>5,435</td>
                                        </tr>
                                        <tr onClick={goTable}>
                                            <td className="crs_title">
                                                28
                                            </td>
                                            <td>Song Information</td>
                                            <td>Class Title</td>
                                            <td>15 May 2022</td>
                                            <td>5,435</td>
                                        </tr>
                                        <tr onClick={goTable}>
                                            <td className="crs_title">
                                                27
                                            </td>
                                            <td>Song Information</td>
                                            <td>Class Title</td>
                                            <td>15 May 2022</td>
                                            <td>5,435</td>
                                        </tr>
                                        <tr onClick={goTable}>
                                            <td className="crs_title">
                                                26
                                            </td>
                                            <td>Song Information</td>
                                            <td>Class Title</td>
                                            <td>15 May 2022</td>
                                            <td>5,435</td>
                                        </tr>
                                        <tr onClick={goTable}>
                                            <td className="crs_title">
                                                25
                                            </td>
                                            <td>Song Information</td>
                                            <td>Class Title</td>
                                            <td>15 May 2022</td>
                                            <td>5,435</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="tb_paging">
                                    <button className="btsq bt20 m-r-12">
                                        <img className="bticon" src="../resources/images/arr20_left_wh_mr.png" alt="image" />
                                        <img className="bticon_on" src="../resources/images/arr20_left_wh_mr_cor.png" alt="image" />
                                    </button>
                                    <button className="btsq bt20">
                                        <img className="bticon" src="../resources/images/sv_arr20_left_wh.png" alt="image" />
                                        <img className="bticon_on" src="../resources/images/sv_arr20_left_cor.png" alt="image" />
                                    </button>
                                    <div className="paging">
                                        <span className="num on">1</span>
                                        <span className="num">2</span>
                                        <span className="num">3</span>
                                        <span className="num">4</span>
                                        <span className="num">5</span>
                                        <span className="num">6</span>
                                        <span className="num">7</span>
                                        <span className="num">8</span>
                                        <span className="num">9</span>
                                        <span className="num">10</span>
                                    </div>
                                    <button className="btsq bt20">
                                        <img className="bticon" src="../resources/images/sv_arr20_right_wh.png" alt="image" />
                                        <img className="bticon_on" src="../resources/images/sv_arr20_right_cor.png" alt="image" />
                                    </button>
                                    <button className="btsq bt20 m-l-12">
                                        <img className="bticon" src="../resources/images/arr20_right_wh_mr.png" alt="image" />
                                        <img className="bticon_on" src="../resources/images/arr20_right_wh_mr_cor.png" alt="image" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    </main>

                </div >

            </div >

        </div >
    )
}









