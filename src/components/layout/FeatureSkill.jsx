import { useMemo } from "react";
import { useTable } from 'react-table';
import { useState } from "react";
import SlideToggle from "react-slide-toggle";

export default function FeatureSkill(props) {

    const [isToggle, setIsToggle] = useState(false);
    const clickToggle = () => {
        setIsToggle(!isToggle);
    }

    const columns = useMemo(
        () => [
            {
                Header: 'No.',
                accessor: 'col1',
            },
            {
                Header: 'Title',
                accessor: 'col2',
            },
        ],
        []
    );

    const data = useMemo(
        () => [
            {
                col1: 'Studio',
                col2: 'Producer, Mixing Engineer, Mastering Engineer, Remixer',
            },
            {
                col1: 'Main Genre',
                col2: 'pop, electronic, dance',

            },
            {
                col1: 'Main instruments',
                col2: 'vocals, guitar, piano',
            },
            {
                col1: 'Software',
                col2: 'Pro Tools, Logic, Cubase',
            },
        ],
        []
    );

    const tableInstance = useTable({ columns, data });
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <SlideToggle duration={150}
            render={({ toggle, setCollapsibleElement }) => (

                <article className={props.contain_class}>
                    <section className="mini_top p-t-20">
                        <div className="dflx_ac_jbet m-b-5">
                            <div className="cttop_left">
                                <h1 className="top_title semib">
                                    {props.title}
                                </h1>
                            </div>
                            <p className={isToggle ? "up_arrow on" : "up_arrow"} onClick={clickToggle}>
                                <span onClick={toggle} className="dpblock h-100"></span>
                            </p>
                        </div>
                    </section>
                    <p className="line1"></p>
                    <section className="contain_body">
                        <div ref={setCollapsibleElement}>
                            <table {...getTableProps()} className="table table_skill">
                                <thead>

                                    {headerGroups.map(headerGroup => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map(column => (
                                                <th {...column.getHeaderProps()}>
                                                    {column.render('Header')}
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {rows.map(row => {
                                        prepareRow(row)
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map(cell => {
                                                    return (
                                                        <td {...cell.getCellProps()}>
                                                            {cell.render('Cell')}
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </article>
            )}
        />
    );
}