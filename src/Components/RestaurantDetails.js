import React from 'react';

export default function Details({ restaurantName, cutoff, dropoff, soldOut, sellingOut, isPastCutoff, isOrderPlaced }) {
    const restaurantTitle = <h2 className="restaurant-title">{restaurantName}</h2>

    if(soldOut) {
        return (<div className="restaurant-sold-out">
                {restaurantTitle}
                <h2 className="sold-out-label">Sold Out!</h2>
                <p>This restaurant has hit maximum order capacity which is established in order to ensure quality.</p>
            </div>);
    }

    const orderByView = <div className="time-display-wrapper col-xs-11">
        <span className="order-by time-label">Order By:</span>
        <span className="order-by time-display">{formatTime(cutoff)}</span>
        </div>;

    const deliveryTimeView = <div className="time-display-wrapper col-xs-11">
        <span className="delivery-time time-label">Delivery Time:</span>
        <span className="delivery-time time-display">{formatTime(dropoff)}</span>
        </div>;

    const orderButton = isPastCutoff ? <button type="button" >Cut-Off Time Passed</button> : <button type="button" onClick={handleClick}>Select Restaurant</button>;

    const sellingOutWarning = sellingOut ? <span>Hurry! Only 5 meals left.</span> : null;


     return (<React.Fragment>
            {restaurantTitle}
            {orderByView}
            {deliveryTimeView}
            {orderButton}
            {sellingOutWarning}
        </React.Fragment>);

}

function formatTime(time) {
    if(time && typeof time === 'string') {
        let timeArr = time.split(':');
        if(timeArr[0] < 12) {
            return `${timeArr[0]}:${timeArr[1]} AM`;
        } else if (timeArr[0] == 12) {
            return `${timeArr[0]}:${timeArr[1]} PM`;
        } else {
            return `${timeArr[0] - 12}:${timeArr[1]} PM`;
        }
    }
}

function handleClick() {
    alert('Order Placed!');
}