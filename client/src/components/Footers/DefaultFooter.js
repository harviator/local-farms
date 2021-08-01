/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=AyOqGRjVtls&ab_channel=GeekHeavy"
                  target="_blank"
                >
                  Local Farms
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=AyOqGRjVtls&ab_channel=GeekHeavy"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://www.youtube.com/watch?v=AyOqGRjVtls&ab_channel=GeekHeavy"
              target="_blank"
            >
              the Mandem
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-default-footer"
              target="_blank"
            >
              the same Mandem
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
