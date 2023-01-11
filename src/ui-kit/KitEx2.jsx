import { useMemo } from "react";
import { useTable } from 'react-table';

import Slider from '@material-ui/core/Slider';
import { withStyles } from "@material-ui/core";


export default function KitEx2() {
    const PrettoSlider = withStyles({
        root: {
            color: 'transparent',
        },
        thumb: {
            height: 20,
            width: 20,
            backgroundColor: '#fff',
            boxShadow: '0 0 6px 0 #00000033',
            '&:focus, &:hover, &$active': {
                boxShadow: '0 0 6px 0 #00000033',
            },
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 4px)',
        },
        track: {
            height: 11,
            borderRadius: 10,
            background: 'transparent'
        },
        rail: {
            height: 11,
            borderRadius: 10,
            background: 'linear-gradient(90deg, #ffd061 0%, #ff7a00 100%)',
            opacity: 1
            //boxShadow : '1px 1px 6px #2d2a2a inset'
        },
    })(Slider);

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
            {
                Header: 'Status',
                accessor: 'col5',
            },
            {
                Header: 'Evaluation',
                accessor: 'col6',
            },
        ],
        []
    );

    const data = useMemo(
        () => [
            {
                col1: '1',
                col2: 'Lost stars',
                col3: 'Jules Massenet',
                col4: '08.20.2021',
                col5: '',
                col6: '',
            },
            {
                col1: '2',
                col2: 'Lost stars',
                col3: 'Jules Massenet',
                col4: '08.20.2021',
                col5: '',
                col6: '',
            },
            {
                col1: '3',
                col2: 'Lost stars',
                col3: 'Jules Massenet',
                col4: '08.20.2021',
                col5: 'Reserved version',
                col6: '',
            },
            {
                col1: '4',
                col2: 'Lost stars',
                col3: 'Jules Massenet',
                col4: '08.20.2021',
                col5: '',
                col6: '',
            },
            {
                col1: '5',
                col2: 'Lost stars',
                col3: 'Jules Massenet',
                col4: '08.20.2021',
                col5: 'abcd',
                col6: '',
            },
            {
                col1: '6',
                col2: 'Lost stars',
                col3: 'Jules Massenet',
                col4: '08.20.2021',
                col5: '',
                col6: '',
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
        <div className="wrap_grad dark">
            <div className="container">

                <section className="demo_title">
                    <h1>EX 2</h1>
                </section>

                <section className="dflx_ac_jcent">
                    <div className="w-80">

                        <table {...getTableProps()} className="table">
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

                <section className="dflx_ac_jcent m-t-70">
                    <main className="the_main">

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">Feed</h1>
                                </div>
                            </section>
                            <p className="line1"></p>
                            <section className="contain_body">

                                <table {...getTableProps()} className="table">
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

                            </section>
                        </article>

                    </main>
                </section>

                <section className="dflx_ac_jcent m-t-30 m-b-70">

                    <article className="progress_wrap">
                        <PrettoSlider aria-labelledby="discrete-slider" aria-label="pretto slider" min={0} max={100} />
                    </article>

                </section>

            </div>
        </div>
    )
}


