import React from "react";
import "./deliverycollection.css";
import DeliveryItem from "./deliveryitem/Deliveryitem";
import Slider from "react-slick";
import PrevArrow from "../../carousel/prevArrow";
import NextArrow from "../../carousel/nextArrow";

const deliveryItems = [
  {
    id: 1,
    title: "Pastri",
    cover:
      "https://media.istockphoto.com/photos/fresh-cakes-picture-id497959594?s=612x612",
  },
  {
    id: 2,
    title: "Biscuit",
    cover:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  },
  {
    id: 3,
    title: "Cakes",
    cover:
      "https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 4,
    title: "bread",
    cover:
      "https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 5,
    title: "eggs",
    cover:
      "https://media.istockphoto.com/photos/eggs-picture-id91261622?s=612x612",
  },
  {
    id: 6,
    title: "Peanuts",
    cover:
      "https://media.istockphoto.com/photos/nuts-peanuts-isolated-on-white-background-picture-id545788236?s=612x612",
  },
  {
    id: 7,
    title: "Pasta",
    cover:
      "https://media.istockphoto.com/photos/italian-lunch-spaghetti-alla-puttanesca-italian-pasta-dish-with-picture-id1309699313",
  },
  {
    id: 8,
    title: "Chips",
    cover:
      "https://media.istockphoto.com/photos/chips-spilling-out-of-an-open-bag-picture-id174634598?s=612x612",
  },
  {
    id: 9,
    title: "Juice",
    cover:
      "https://media.istockphoto.com/photos/healthy-rainbow-colored-fruits-and-vegetables-smoothies-isolated-on-picture-id1304936721?s=612x612",
  },
  {
    id: 10,
    title: "drinks",
    cover:
      "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  },
  {
    id: 11,
    title: "Pastry",
    cover:
      "https://media.istockphoto.com/photos/continental-breakfast-cinnamon-bun-danishes-rolls-muffins-fresh-fruit-picture-id491699034",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryColletions = () => {
  return (
    <div className="delivery-collections">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return <DeliveryItem item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryColletions;