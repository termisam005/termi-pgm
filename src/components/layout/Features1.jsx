import { useMemo } from "react";
import { useTable } from 'react-table';
import { useState } from "react";
import SlideToggle from "react-slide-toggle";

export default function Features1(props) {
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
            {
                Header: 'Pitcher',
                accessor: 'col3',
            },
            {
                Header: 'Date completed / pitched',
                accessor: 'col4',
            },
        ],
        []
    );

    const data = useMemo(
        () => [
            {
                col1: 'Project Type',
                col2: 'Collaboration / Cowrite',
                col3: 'Budget',
                col4: 'Terms',
            },
            {
                col1: 'Project Owner',
                col2: 'Jin Suk Choi',
                col3: 'Music Genres',
                col4: 'Hip Hop, K-POP',
            },
            {
                col1: 'Music Moods',
                col2: 'Cool, Fun, Happy, Urgent',
                col3: 'Music Themes',
                col4: 'Party, Summer, Drama',
            },
            {
                col1: 'Project Since',
                col2: '13 Aug 2022',
                col3: '',
                col4: '',
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
                    <section className="mini_top p-r-25">
                        <div className="dflx_ac_jbet">
                            <h1>Features</h1>
                            <p className={isToggle ? "up_arrow on" : "up_arrow"} onClick={clickToggle}>
                                <span onClick={toggle} className="dpblock h-100"></span>
                            </p>
                        </div>
                    </section>
                    <p className="line1"></p>
                    <section className="contain_body">
                        <div className="bodyin" ref={setCollapsibleElement}>
                            <table {...getTableProps()} className="table table_refer">
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