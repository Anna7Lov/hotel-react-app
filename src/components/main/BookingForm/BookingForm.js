import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Button from '../../shared/Button/Button';
import DropDownList from '../DropDownList/DropDownList';

import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.scss';

export default function BookingForm({ additionalClass }) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);   

    return (
        <form className={`booking-form ${additionalClass}`}>
            <div className='booking-form__content'>
                <label className='booking-form__label'>Check in
                    <DatePicker className='booking-form__input'
                        required
                        placeholderText="DD/MM/YYYY"
                        minDate={new Date()}
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            setEndDate(null);
                        }}
                        onFocus={(e) => {
                            e.target.blur();
                        }}
                        onKeyDown={(e) => {
                            e.preventDefault();
                        }}
                        onChangeRaw={(e) => {
                            e.preventDefault();
                        }}
                    />
                </label>
            </div>
            <div className='booking-form__content'>
                <label className='booking-form__label'>Check out
                    <DatePicker className='booking-form__input'
                        required
                        placeholderText="DD/MM/YYYY"
                        minDate={startDate || new Date()}
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        onFocus={(e) => {
                            e.target.blur();
                        }}
                        onKeyDown={(e) => {
                            e.preventDefault();
                        }}
                        onChangeRaw={(e) => {
                            e.preventDefault();
                        }}
                    />
                </label>
            </div>
            <DropDownList />
            <Button title='Find room' />
        </form>
    );
}