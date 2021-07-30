/*

=========================================================
* Now UI Kit React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// graphql
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context'

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Products from "views/examples/Products.js";
import ProductPage from "views/examples/ProductPage.js";
import CheckoutPage from "views/examples/CheckoutPage.js";

////////////////////////////////////////////////

const httpLink = createHttpLink({uri: '/graphql'})
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

/////////////////////////////////////////////////

ReactDOM.render(
  <ApolloProvider client = {client}>
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/LandingPage" render={(props) => <LandingPage {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
         <Route
          path="/products"
          render={(props) => <Products {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/product-page"
          render={(props) => <ProductPage {...props} />}
        />
        <Route
          path="/Checkout-page"
          render={(props) => <CheckoutPage {...props} />}
        />
        <Redirect to="/LandingPage" />
        <Redirect from="/" to="/LandingPage" />
      </Switch>
    </Switch>
  </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
