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
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://www.youtube.com/watch?v=AyOqGRjVtls&ab_channel=GeekHeavy"
              target="_blank"
            >
              the best Devs
            </a>
            . Coded by{" "}
            <a
              href="https://www.youtube.com/watch?v=AyOqGRjVtls&ab_channel=GeekHeavy"
              target="_blank"
            >
              the even better Devs
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
