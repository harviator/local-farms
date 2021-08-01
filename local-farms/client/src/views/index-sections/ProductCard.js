import React from "react";
import { Container } from "reactstrap";

function Productcard() {    
  return (
<div class="product-wrapper">
  <div class="product-container">
    <div class="product-top"></div>
    <div class="product-bottom">
      <div class="product-left">
        <div class="product-details">
          <h1>Chair</h1>
          <p>£250</p>
        </div>
        <div class="product-buy"><i class="product-material-icons">add_shopping_cart</i></div>
      </div>
      <div class="product-right">
        <div class="product-done"><i class="product-material-icons">done</i></div>
        <div class="product-details">
          <h1>Chair</h1>
          <p>Added to your cart</p>
        </div>
        <div class="product-remove"><i class="product-material-icons">clear</i></div>
      </div>
    </div>
  </div>
  <div class="product-inside">
    <div class="product-icon"><i class="product-material-icons">info_outline</i></div>
    <div class="product-contents">
      <table>
        <tr>
          <th>Width</th>
          <th>Height</th>
        </tr>
        <tr>
          <td>3000mm</td>
          <td>4000mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
      </table>
    </div>
  </div>
</div>
    );
}

export default Productcard;