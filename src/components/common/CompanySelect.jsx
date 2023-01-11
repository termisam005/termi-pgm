import { useState } from 'react';


const CompanySelect = (props) => {

    const [selector, setSelector] = useState(false);
    const toggleSelt = () => {
        setSelector(!selector);
    }

    return (
        <dl onClick={toggleSelt} className={selector ? "dl_company aside select on" : "dl_company aside select"}>
            {props.children}
        </dl>
    )
}

export default CompanySelect;