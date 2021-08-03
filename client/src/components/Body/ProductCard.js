import React from "react";
import { Container } from "reactstrap";
import '../../assets/scss/productCard.scss';

function Productcard({ product }) {
  return (

    <div class="card">
      <div class="card__title">
        <h3>Fresh Product</h3>
      </div>
      <div class="card__body">
        <div class="half">
          <div class="featured_text">
            <h1>{product.name}</h1>
            <p class="sub">Quantity: {product.quantity}</p>
            <p class="price">{product.price}</p>
          </div>
          <div class="image">
            <img src={(`/images/${product.image}`)} alt={`${product.name}`} />
          </div>
        </div>
        <div class="half">
          <div class="description">
            <p>{product.description}</p>
          </div>
          <span class="stock"><i class="fa fa-pen"></i> In stock</span>
        </div>
      </div>
      <div class="card__footer">
        <div class="action">
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>

  );
}

export default Productcard;