import React from "react";
import { Redirect } from "react-router";
import { Container } from "reactstrap";
import '../../assets/scss/productCard.scss';
import Auth from "../../utils/auth"

function Productcard({ product }) {

  function addToCartHandler() {
    if (Auth.loggedIn()) {
      console.log('Adding to cart'); // cart functionality
    } else {
      window.location.replace('/login-page')
    }
  }

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
          <button type="button" onClick={addToCartHandler}>Add to cart</button>
        </div>
      </div>
    </div>

  );
}

export default Productcard;