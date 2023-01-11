import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateSet = (props) => {

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
            {isOpen && (
                <DatePicker selected={startDate} onChange={handleChange} inline />
            )}
            <div className="date_result" onClick={handleClick}>
                {startDate.toDateString("dd-MM-yyyy")}
            </div>
        </article>
    )
}

export default DateSet;