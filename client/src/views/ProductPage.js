import React from "react";


import { useQuery } from '@apollo/client'


// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";



// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Productcard from "../components/Body/ProductCard";


import { QUERY_PRODUCTS } from '../utils/queries'

function ProductPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [] 

  React.useEffect(() => {
    console.log(data)
    console.log(products)

    document.body.classList.add("product-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("product-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);



  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="wrapper">

          {loading ? (
            <div>Loading...</div>
          ) : (
            products.map((product) => {
              return <Productcard product={product} />
            })
          )}

        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProductPage;