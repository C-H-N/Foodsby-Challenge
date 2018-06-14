import React from 'react';
import RestaurantImage from './RestaurantImage';
import RestaurantDetails from './RestaurantDetails';

export default function Restaurant(restaurantDetailsData) {

    const restaurantImageView = <RestaurantImage {...restaurantDetailsData} />;

    const restaurantDetailsView = <RestaurantDetails {...restaurantDetailsData} />

    return (<div className="restaurant row">
            <div className="col-xs-6 restaurant-image">
                {restaurantImageView}
            </div>
            <div className="col-xs-6 restaurant-details">
                {restaurantDetailsView}
            </div>
        </div>);
}