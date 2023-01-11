import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateSingleText = (props) => {

    const [startDate, setStartDate] = useState(null);

    return (
        <article className={props.class}>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText={props.pltext}
            />
        </article>
    )
}

export default DateSingleText;