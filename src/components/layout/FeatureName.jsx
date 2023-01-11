import { useMemo } from "react";
import { useTable } from 'react-table';
import { useState } from "react";
import SlideToggle from "react-slide-toggle";

export default function FeatureName(props) {

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
                col1: 'Birth date',
                col2: '03 May 2000',
                col3: 'Genere',
                col4: 'Male',
            },
            {
                col1: 'Email',
                col2: 'jin@sparwk.com',
                col3: 'Languages',
                col4: 'Korean, English',
            },
            {
                col1: 'Current City',
                col2: 'Seoul, Republic of Korea',
                col3: 'Home town',
                col4: 'Seoul, Republic of Korea',
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