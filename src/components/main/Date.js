import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function SelectDate() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <DatePicker className='booking-form__input' selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    )
}