import React from "react";

import './Title.scss';

export default function Title({ additionalClass, title }) {
    return (
        <h2 className={`title ${additionalClass}`}>{title}</h2>        
    )
}