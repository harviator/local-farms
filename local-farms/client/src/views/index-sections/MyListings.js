import React from "react";

    // reactstrap components
    import{
        Card,
        CardImg,
        CardBody,
        CardText,
        CardTitle,
        Button,
          
      } from "reactstrap";

      const products = [
        {
          name: "Small Produce Box",
          description: "Vegetables we are growing this year include: carrots, leeks, onions, beets, broccoli, corn, cabbage, cucumbers, tomatoes, peppers, squash, radish, potatoes, eggplant, zucchini, swiss chard, kale, mixed greens, spinach, beans and more.",
          image:"https://cdn.shopify.com/s/files/1/0048/0018/4369/products/Boxes-04_2d483513-a112-40ae-9363-51f239c34a82.png?v=1616601030",
          price: "44",
          quantity: "10",
          farm: "Niagara Farm Share",     
        },
       
      ];

function MyListings() {
    return (
        <>
        {products.map((products) => (
  <Card style={{ width: "20rem" }}>
  <CardImg alt="..." src={products.image} top></CardImg>
  <CardBody>
     <CardTitle tag="h4">{products.name}</CardTitle>
       <CardText>
         {products.description}
         <p className="text-sm">{products.price} | {products.farm}</p>
       </CardText>
       <Button
         color="primary"
         href="#pablo"
         onClick={e => e.preventDefault()}
       >
         Add to Cart
       </Button>
  </CardBody>
  </Card>
   ))}
  </>
      );
}


export default MyListings;