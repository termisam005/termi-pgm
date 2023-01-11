import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateFix1 = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(true);
    const handleChange = (e) => {
        setIsOpen(true);
        setStartDate(e);
    };
    const handleClick = (e) => {
        setIsOpen(true);
        e.preventDefault();
    };

    return (
        <article className={props.class}>
            <div className='dflx_ac_jbet w-100 m-b-20'>
                <div className="date_result m-0 w-47" onClick={handleClick}>
                    {startDate.toDateString("dd-MM-yyyy")}
                    <img src="../resources/images/calendar_vol20.png" alt="calendar" />
                </div>
                <p>~</p>
                <div className="date_result m-0 w-47" onClick={handleClick}>
                    {startDate.toDateString("dd-MM-yyyy")}
                    <img src="../resources/images/calendar_vol20.png" alt="calendar" />
                </div>
            </div>
            {isOpen && (
                <DatePicker selected={startDate} onChange={handleChange} inline />
            )}
        </article>
    )
}

export default DateFix1;