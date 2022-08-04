import React from "react";

import Button from '../../shared/Button/Button';
import Date from '../Date/Date';

import './BookingForm.scss';

export default function BookingForm() {
    return (
        <form className='booking-form'>
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
            <div className='booking-form__content select'>
                <label className='booking-form__label'>Person
                <select className='booking-form__select'>
                    <option value='1'>1 person</option>
                    <option value='2'>2 persons</option>
                    <option value='3'>3 persons</option>
                    <option value='4'>4 persons</option>
                    <option value='5'>5 persons</option>
                </select>
                </label>
            </div>
            <Button title='Find room' />
        </form>
    );
}