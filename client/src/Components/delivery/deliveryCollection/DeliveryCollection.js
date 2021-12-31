import React from "react";
import "./deliverycollection.css";
import DeliveryItem from "./deliveryitem/Deliveryitem";
import Slider from "react-slick";
import PrevArrow from "../../carousel/prevArrow";
import NextArrow from "../../carousel/nextArrow";

const deliveryItems = [
  {
    id: 1,
    title: "Pizza",
    cover:
      "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    title: "Burger",
    cover:
      "https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410",
  },
  {
    id: 3,
    title: "Rolls",
    cover:
      "https://images.unsplash.com/photo-1582454235987-1e597bafcf58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 4,
    title: "Cake",
    cover:
      "https://media.istockphoto.com/photos/image-homemade-halloween-layered-sponge-cake-on-marble-cake-stand-in-picture-id1337812284",
  },
  {
    id: 5,
    title: "Biryani",
    cover:
      "https://media.istockphoto.com/photos/chicken-biryani-with-yogurt-dip-popular-indian-pakistani-non-food-picture-id1254720533",
  },
  {
    id: 6,
    title: "Chaat",
    cover:
      "https://media.istockphoto.com/photos/goal-gappa-or-pani-puri-picture-id1314329942",
  },
  {
    id: 7,
    title: "Pasta",
    cover:
      "https://media.istockphoto.com/photos/italian-lunch-spaghetti-alla-puttanesca-italian-pasta-dish-with-picture-id1309699313",
  },
  {
    id: 8,
    title: "Paneer",
    cover:
      "https://media.istockphoto.com/photos/paneer-korma-kurma-or-quorma-is-a-popular-indian-main-course-recipe-picture-id1195395081",
  },
  {
    id: 9,
    title: "Samosa",
    cover:
      "https://media.istockphoto.com/photos/indian-baked-stuffed-pastry-samosa-picture-id1152493489",
  },
  {
    id: 10,
    title: "Paratha",
    cover:
      "https://media.istockphoto.com/photos/image-of-metal-tray-with-aloo-paratha-pile-topped-with-red-onion-and-picture-id1279134622",
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