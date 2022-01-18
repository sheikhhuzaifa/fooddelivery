import React from "react";
import { restaurants } from "../../data/Resturants";
import ExploreSection from "../exploreSection/index";

import Filters from "../filters";

import "./Delivery.css";
import DeliveryColletions from "../PickUp/deliveryCollection/DeliveryCollection";
import TopBrands from "./topBrands/TopBrands";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantsList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryColletions />
      <TopBrands />
      <ExploreSection
        restaurants={restaurantsList}
        collectionName="Delivery Restaurants in Faislabad"
      />
    </div>
  );
};

export default Delivery;