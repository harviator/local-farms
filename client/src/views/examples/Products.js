import React from "react";

// reactstrap components
import{
    Card,
    CardImg,
    CardBody,
    Row,
    Container,
    CardText,
  } from "reactstrap";

// core components

const products = [
  {
    name: "Fresh Carrots",
    description: "Fresh Carrots from our local barrie Farm",
    image:"https://i.ytimg.com/vi/2R_rhpEBoww/maxresdefault.jpg",
    price: "1.73",
    quantity: "100",
    Farm: "Barrie",     
  },
  {
      name: "Fresh Lemon",
      description: "Fresh Lemons from our local Orlando Farm",
      image:"https://i.ytimg.com/vi/xieSbAmCkHc/hqdefault.jpg",
      price: "1.73",
      quantity: "100",
      Farm: "Orlando",     
    },
];

function allProducts() {
  /*DISPLAY ALL PRODUCTS Grid View- add filters (veges. meats, fruits?)? */
    return (
        <>
        <div className="section" id="products">
        <Container>
          <div className="title">
          <div className="text-center">
            <h3>Fresh Farm Products</h3>
          </div>
          </div>
          <Row className="justify-content-center">
        {products.map((products) => (
          <Card style={{ width: "20rem" }}>           
            <CardImg
              alt="..."
              src= {products.image}
              top
            ></CardImg>
            <CardBody>
              <CardText>
              <h1>{products.name}</h1>
              {products.description}
              <p className="text-sm">{products.price}</p>
              <p className="text-sm">{products.quantity}</p>
              <p className="text-sm">{products.farm}</p>
              </CardText>
            </CardBody>
          </Card>
         ))}
         </Row>
        </Container>
      </div>
        </>
      );
}

export default  allProducts;