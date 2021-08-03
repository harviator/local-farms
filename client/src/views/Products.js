import React from "react";
//import { products } from "local-farms/server/config/seeds.js";

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
import MyListings from "views/index-sections/MyListings.js"

//Just for DEMO
const products = [
  {
    name: "Fresh Carrots",
    description: "Fresh Carrots from our local barrie Farm",
    image:"https://i.ytimg.com/vi/2R_rhpEBoww/maxresdefault.jpg",
    price: "1.73",
    quantity: "100",
    farm: "Barrie",   
    id: "vegetable",  
  },
  {
      name: "Fresh Lemon",
      description: "Fresh Lemons from our local Orlando Farm",
      image:"https://i.ytimg.com/vi/xieSbAmCkHc/hqdefault.jpg",
      price: "1.73",
      quantity: "100",
      farm: "Orlando",
      id: "fruit",     
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


const fruits = [
  {
    name: "Fresh Strawberries",
    description: "Fresh Carrots from our local barrie Farm",
    image:"https://static.dw.com/image/38549598_303.jpg",
    price: "1.73",
    quantity: "100",
    farm: "Barrie",   
    id: "fruit",  
  },
  {
      name: "Watermelon",
      description: "Fresh Lemons from our local Orlando Farm",
      image:"https://zaszambia.files.wordpress.com/2020/01/79094063.jpg?w=450",
      price: "1.73",
      quantity: "100",
      farm: "Orlando",
      id: "fruit",     
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
  //run seed properly - Done
  //check data of the seed robo3t - Done
  //use apollo graphql playground to test the query - Coordinate with Jon
  //after succesfully testing the query use it here
  //remember to comment the products demo on the top



  // const{loading, data}=useQuery(QUERY_PRODUCTS,{
  //   variables:{farm:farmId}
  // })

  //const products=data?.products||{}

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
        <Row className="justify-content-center">    
          <TabContent
            className="text-center"
            activeTab={"iconTabs" + iconTabs}
          >
            
              
            <TabPane tabId="iconTabs1">    
            {products.map((product) => (      
             <Card style={{ width: "20rem" }}>
             <CardImg alt="..." src={product.image} top></CardImg>
             <CardBody>
                <CardTitle tag="h4">{product.name}</CardTitle>
                  <CardText>
                    {product.description}
                    <p className="text-sm">{product.price} | {product.farm}</p>
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
            </TabPane>
            
            
            <TabPane tabId="iconTabs2">  
            {fruits.map((fruits) => (
             <Card style={{ width: "20rem" }}>
             <CardImg alt="..." src={fruits.image} top></CardImg>
             <CardBody>
                <CardTitle tag="h4">{fruits.name}</CardTitle>
                  <CardText>
                    {fruits.description}
                    <p className="text-sm">{fruits.price} | {fruits.farm}</p>
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
            </TabPane>
            
            
            <TabPane tabId="iconTabs3">  
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
            </TabPane>
             
            <TabPane tabId="iconTabs4">
              <p>
               <MyListings/>
              </p>
            </TabPane>
            <TabPane tabId="iconTabs5" className="text-left">
            <ProductForm />
            </TabPane>            
          </TabContent>
          </Row>          
        </CardBody>
      </Card>
    </Container>
  </div>
        </>
      );
}


export default  AllProducts;