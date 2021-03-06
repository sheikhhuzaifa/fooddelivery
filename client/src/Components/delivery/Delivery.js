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
const productItems=[
  {
  id: "1",
  name: "Shawarma",
  price: 180,
  image: "./pics/190130-chicken-shwarma-horizontal-1551285400.png"
  },
  {
  id: "2",
  name: "Biryani",
  price: 250,
  image: "./pics/bir.jpg"
  },
  {
  id: "3",
  name: "Zinger Burger",
  price: 199,
  image: "./pics/zinger.jpg"
  },
  {
  id: "4",
  name: "Continental Pizza",
  price: 890,
  image: "./pics/pizza.jpg"
  },
  {
      id: "5",
      name: "Cream Chart",
      price: 120,
      image: "./pics/cream.jpg"
  },
  {
      id: "6",
      name: "Ice Cream",
      price: 80,
      image: "./pics/download.jpg"
  }
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