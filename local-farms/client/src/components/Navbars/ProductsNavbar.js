import React from "react";
// reactstrap components
import {
  NavItem,
  Form,
  FormGroup,
  Input,
  NavLink,
  Nav,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardText,
  TabContent,
  TabPane
} from "reactstrap";
// core components

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
        name: "{products.image}",
        description: "",
        image:"",
        price: "",
        quantity: "",
        farm: "",     
      },

  ];
  

function Example(){
  const [iconTabs, setIconTabs] = React.useState("1");
  return (
    <>
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
                className={iconTabs === "4" ? "active" : ""}
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  setIconTabs("4");
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
            </TabPane>
            ))}
            <TabPane tabId="iconTabs2">
            <CardText>
              <h1>{products.name}</h1>
              {products.description}
              <p className="text-sm">{products.price}</p>
              <p className="text-sm">{products.quantity}</p>
              <p className="text-sm">{products.farm}</p>
              </CardText>
            </TabPane>
            <TabPane tabId="iconTabs3">
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name Kanye
                West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </p>
            </TabPane>
            <TabPane tabId="iconTabs4">
              <p>
                "I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility
                that I have, to push possibilities, to show people, this is
                the level that things could be at."
              </p>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </>
  );
}

export default Example;


// import React from "react";
// // reactstrap components
// import {
//   UncontrolledCollapse,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   FormGroup,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   NavLink,
//   Nav,
//   Container
// } from "reactstrap";
// // core components

// function Example(){
//   return (
//     <>
//       <Navbar className="bg-dark" expand="lg">
//         <Container>
//           <button
//             className="navbar-toggler"
//             id="navbarTogglerDemo01"
//             type="button"
//           >
//             <span className="navbar-toggler-bar bar1"></span>
//             <span className="navbar-toggler-bar bar2"></span>
//             <span className="navbar-toggler-bar bar3"></span>
//           </button>
//           <UncontrolledCollapse navbar toggler="#navbarTogglerDemo01">
//             <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              
//             </NavbarBrand>
//             <Nav className="mr-auto mt-2 mt-lg-0" navbar>
//               <NavItem className="active">
//                 <NavLink href="#pablo" onClick={e => e.preventDefault()}>
//                   Fruits <span className="sr-only">(current)</span>
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#pablo" onClick={e => e.preventDefault()}>
//                   Vegetables
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#pablo" onClick={e => e.preventDefault()}>
//                   Meats
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#pablo" onClick={e => e.preventDefault()}>
//                   Farms
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink
//                 // only SHOW WHEN LOGGED IN STILL NEED TO BUILD THAT
//                   className="mylist"
//                   href="#pablo"
//                   onClick={e => e.preventDefault()}
//                 >
//                   My Listing
//                 </NavLink>
//               </NavItem>
//             </Nav>
//             <Form className="form-inline ml-auto" data-background-color="">
//               <FormGroup className="has-white">
//                 <Input placeholder="Search" type="text"></Input>
//               </FormGroup>
//             </Form>
//           </UncontrolledCollapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Example;