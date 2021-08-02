import React from "react";
import { Container } from "reactstrap";
import ProductItem from "reference/ProductItem";
import '../../assets/scss/productCard.scss';

function Productcard({ product }) {
  return (

    <div class="card">
      <div class="card__title">
        <div class="icon">
          <a href="#"><i class="fa fa-arrow-left"></i></a>
        </div>
        <h3>New products</h3>
      </div>
      <div class="card__body">
        <div class="half">
          <div class="featured_text">
            <h1>Nurton</h1>
            <p class="sub">Office Chair</p>
            <p class="price">$210.00</p>
          </div>
          <div class="image">
            <img src="https://images-na.ssl-images-amazon.com/images/I/613A7vcgJ4L._SL1500_.jpg" alt="" />
          </div>
        </div>
        <div class="half">
          <div class="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.</p>
          </div>
          <span class="stock"><i class="fa fa-pen"></i> In stock</span>
          <div class="reviews">
            <ul class="stars">
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star-o"></i></li>
            </ul>
            <span>(64 reviews)</span>
          </div>
        </div>
      </div>
      <div class="card__footer">
        <div class="recommend">
          <p>Recommended by</p>
          <h3>Andrew Palmer</h3>
        </div>
        <div class="action">
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>

  );
}

export default Productcard;

/*
<html>

<body>
  <main>
    <div class="card">
      <div class="card__title">
        <div class="icon">
          <a href="#"><i class="fa fa-arrow-left"></i></a>
        </div>
        <h3>New products</h3>
      </div>
      <div class="card__body">
        <div class="half">
          <div class="featured_text">
            <h1>Nurton</h1>
            <p class="sub">Office Chair</p>
            <p class="price">$210.00</p>
          </div>
          <div class="image">
            <img src="https://images-na.ssl-images-amazon.com/images/I/613A7vcgJ4L._SL1500_.jpg" alt="">
          </div>
        </div>
        <div class="half">
          <div class="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.</p>
          </div>
          <span class="stock"><i class="fa fa-pen"></i> In stock</span>
          <div class="reviews">
            <ul class="stars">
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star-o"></i></li>
            </ul>
            <span>(64 reviews)</span>
          </div>
        </div>
      </div>
      <div class="card__footer">
        <div class="recommend">
          <p>Recommended by</p>
          <h3>Andrew Palmer</h3>
        </div>
        <div class="action">
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>
  </main>
</body>

</html>

*/

/*

<div class="product-wrapper">
  <div class="product-container">
    <div class="product-top"></div>
    <div class="product-bottom">
      <div class="product-left">
        <div class="product-details">
          <h1>{product.name}</h1>
          <p>Description: {product.description}</p>
          <p>{product.price}</p>
        </div>
        <div class="product-buy"><i class="product-material-icons">add_shopping_cart</i></div>
      </div>
      <div class="product-right">
        <div class="product-done"><i class="product-material-icons">done</i></div>
        <div class="product-details">
          <h1>{product.name}</h1>
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

*/