import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateFix2 = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <article className={props.class}>
            <section className='calen_set w-100'>
                <div className='dflx_ac_jbet w-100'>
                    <div className='date_result m-0 w-47'>
                        <div className="dflx_ac_jbet">
                            <span>yyyy-MM-dd</span>
                            <img src="../resources/images/calendar_vol20.png" alt="calendar" />
                        </div>
                    </div>
                    <p>~</p>
                    <div className='date_result m-0 w-47'>
                        <div className="dflx_ac_jbet">
                            <span>yyyy-MM-dd</span>
                            <img src="../resources/images/calendar_vol20.png" alt="calendar" />
                        </div>
                    </div>
                </div>
            </section>
            <div className='m-t-20'>
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    excludeDates={[(new Date(), 1), (new Date(), 5)]}
                    selectsRange
                    selectsDisabledDaysInRange
                    inline
                />
            </div>
        </article>
    )
}

export default DateFix2;