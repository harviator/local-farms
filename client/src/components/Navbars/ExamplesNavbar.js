import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import Auth from '../../utils/auth'

const logout = (event) => {
  event.preventDefault()
  Auth.logout()
}

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <NavItem>

            <NavLink to="/landing-page"
                outline
                tag={Link}>

              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/checkout-page" tag={Link}>
            <i class="fas fa-shopping-cart"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/checkout-page" tag={Link}>
            <i class="fas fa-shopping-cart"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <a href='/' onClick={logout}>
              Log out
            </a>
          </NavItem>
        </>
      )
    } else {
      return (
        <>
          <NavItem>
            <NavLink to="/login-page" tag={Link}>
              Log in
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="signup">
              Sign up
            </NavLink>
          </NavItem>
        </>
      )
    }
  }

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              {/* <DropdownItem header tag="a">
                Main Menu
              </DropdownItem> Note: Got rid of "Main Menu" link to no where */}
              <DropdownItem href="/product-page">
                Shop
              </DropdownItem>
              {/* <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Farms
              </DropdownItem> Note: Not being used */}
              <DropdownItem href="/LandingPage#team">
                Our Team
              </DropdownItem>
              {/* <DropdownItem divider></DropdownItem> */}
              {/* <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Our Story
              </DropdownItem> */}
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Contact us
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              href=""
              target="_blank"
              id="navbar-brand"
            >
              Menu
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Main Menu
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            
            {showNavigation()}

              <NavItem>
                <NavLink
                  href="https://twitter.com/"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink

                 href="/products"
                href="https://www.instagram.com/"

                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;