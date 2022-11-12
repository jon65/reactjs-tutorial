
import React from 'react';
import classes from './card.module.css';
//wrap prop in card class
const Card = props => {

    return <div className={`${ classes.card } ${props.className}`}>
        {props.children}
    </div>
}

export default Card;