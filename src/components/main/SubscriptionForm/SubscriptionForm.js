import React from "react";
import Button from '../../shared/Button/Button';

import './SubscriptionForm.scss';

export default function SubscriptionForm() {

    return (
        <form className='subscription-form'>
            <div className='subscription-form__items'>
                <input placeholder="Enter your email address" type="email" name="userEmail" className="subscription-form__input-email" />
                <Button title='Subscribe' />
            </div>
        </form>
    )
}