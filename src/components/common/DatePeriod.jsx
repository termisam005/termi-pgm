import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatePeriod = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <article className={props.class}>
            <div className='calen_space'>
                <div className="calen_cont dflx_ac w90">
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                    <img src="../resources/images/calendar_vol20.png" alt="calendar" />
                </div>
            </div>
            <p>~</p>
            <div className='calen_space'>
                <div className="calen_cont dflx_ac w90">
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                    <img src="../resources/images/calendar_vol20.png" alt="calendar" />
                </div>
            </div>
        </article>
    )
}

export default DatePeriod;