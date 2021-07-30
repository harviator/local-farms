


import React from "react";

// reactstrap components
import{
    Card,
    CardImg,
    CardBody,
    Row,
    Container,
    CardText,
    CardTitle,
      Button,
      NavItem,
      Form,
      FormGroup,
      Input,
      NavLink,
      Nav,
      CardHeader,
      TabContent,
      TabPane
  } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import ProductForm from "views/examples/ProductForm.js"

const products = [
  {
    name: "Fresh Carrots",
    description: "Fresh Carrots from our local barrie Farm",
    image:"https://i.ytimg.com/vi/2R_rhpEBoww/maxresdefault.jpg",
    price: "1.73",
    quantity: "100",
    farm: "Barrie",     
  },
  {
      name: "Fresh Lemon",
      description: "Fresh Lemons from our local Orlando Farm",
      image:"https://i.ytimg.com/vi/xieSbAmCkHc/hqdefault.jpg",
      price: "1.73",
      quantity: "100",
      farm: "Orlando",     
    },
    {
      name: "Fresh Carrots",
      description: "Fresh Carrots from our local barrie Farm",
      image:"https://i.ytimg.com/vi/2R_rhpEBoww/maxresdefault.jpg",
      price: "1.73",
      quantity: "100",
      farm: "Barrie",     
    },
];

function AllProducts() {
  /*DISPLAY ALL PRODUCTS Grid View- add filters (veges. meats, fruits?)? */
  const [iconTabs, setIconTabs] = React.useState("1");
    return (
        <>
        {/*NAVBAR CTION*/}
        <ExamplesNavbar />
        <div className="wrapper"></div>
        <LandingPageHeader />
        <div className="section" id="products">
        <Container>
          <div className="title">
          <div className="text-center">
            <h3>Fresh Farm Products</h3>
          </div>
          </div>          
          <Card>
        <CardHeader>
          <Nav className="justify-content-center" role="tablist" tabs>
            <NavItem>
              <NavLink
                className={iconTabs === "1" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setIconTabs("1");
                }}
              >
                <i className="now-ui-icons objects_umbrella-13"></i>
                Fruits
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={iconTabs === "2" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setIconTabs("2");
                }}
              >
                <i className="now-ui-icons shopping_shop"></i>
                Vegetables
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={iconTabs === "3" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setIconTabs("3");
                }}
              >
                <i className="now-ui-icons business_bank"></i>
                Farms
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={iconTabs === "4" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setIconTabs("4");
                }}
              >
                <i className="now-ui-icons ui-2_settings-90"></i>
                My Listings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
              // need to link a Form
                className={iconTabs === "5" ? "active" : ""}
                href="/productform"
                onClick={e => {
                  e.preventDefault();
                  setIconTabs("5");
                }}
              >
                <i className="now-ui-icons ui-1_simple-add"></i>
                ADD
              </NavLink>
            </NavItem>
            <NavItem>
            <Form className="form justify-content-center ml-auto=" data-background-color="gray">
             <FormGroup className="has-white">
               <Input placeholder="Search" type="text"></Input>
             </FormGroup>
           </Form>
           </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <TabContent
            className="text-center"
            activeTab={"iconTabs" + iconTabs}
          >
            
              {products.map((products) => (
            <TabPane tabId="iconTabs1"> 
            <Container>
            <Row className="justify-content-center">    
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
             </Row>
             </Container> 
            </TabPane>
            ))}
            {products.map((products) => (
            <TabPane tabId="iconTabs2">
            <Row className="justify-content-center">    
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
             </Row>
            </TabPane>
             ))}
            {products.map((products) => (
            <TabPane tabId="iconTabs3">
            <Row className="justify-content-center">    
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
             </Row>
            </TabPane>
             ))}
            <TabPane tabId="iconTabs4">
              <p>
                "I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility
                that I have, to push possibilities, to show people, this is
                the level that things could be at."
              </p>
            </TabPane>
            <TabPane tabId="iconTabs5" className="text-left">
            <ProductForm />
            </TabPane>
            
          </TabContent>          
        </CardBody>
      </Card>
    </Container>
  </div>
        </>
      );
}


export default  AllProducts;