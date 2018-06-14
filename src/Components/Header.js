import React from 'react';

export default function Header({headerText}) {
    return <h1 className='header'>{headerText || 'Delivery Schedule'}</h1>;
}