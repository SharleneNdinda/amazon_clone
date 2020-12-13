import { Button } from "@material-ui/core";
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img alt="the-lean-startup" src={image} />
      <Button onClick={addToBasket}>Add to Basket</Button>
    </div>
  );
}

export default Product;
