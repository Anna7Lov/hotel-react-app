import React from 'react';

import Button from '../../shared/Button/Button';
import Date from '../Date/Date';
import DropDownList from '../DropDownList/DropDownList';

import './BookingForm.scss';

export default function BookingForm({additionalClass}) {  

    return (
        <form className={`booking-form ${additionalClass}`}>
            <div className='booking-form__content'>
                <label className='booking-form__label'>Check in
                    <Date />
                </label>
            </div>
            <div className='booking-form__content'>
                <label className='booking-form__label'>Check out
                    <Date />
                </label>
            </div>
            <DropDownList />
            <Button title='Find room' />
        </form>
    );
}