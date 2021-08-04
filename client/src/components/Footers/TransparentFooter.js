/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
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
            the Mandem
          </a>
          . Coded by{" "}
          <a
            href="https://www.youtube.com/watch?v=AyOqGRjVtls&ab_channel=GeekHeavy"
            target="_blank"
          >
            the same Mandem
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
