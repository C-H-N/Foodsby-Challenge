import React from 'react';

export default function Image({ logoUrl, restaurantName }) {
    return <img src={logoUrl} alt={`${restaurantName || 'Restaurant'} logo`} />;
}