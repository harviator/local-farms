import React from 'react';

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function SimpleLogin(props) {
    return (
        <>
            <ExamplesNavbar />
            <div className="page-header clear-filter" filter-color="blue">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage:
                            "url(" + require("../assets/img/farmers1.jpg").default + ")",
                    }}
                ></div>
                <div className="content">
                    <Container>
                        <Col className="ml-auto mr-auto" md="4">
                        <Card className="card-login card-plain">
                            <div class="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport>
                                <div class="uk-width-1-1">
                                    <div class="uk-container">
                                        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
                                            <div class="uk-width-1-1@m">
                                                <div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                                                    <h3 class="uk-card-title uk-text-center">Welcome back!</h3>
                                                    <form>
                                                        <div class="uk-margin">
                                                            <div class="uk-inline uk-width-1-1">
                                                                <span class="uk-form-icon" uk-icon="icon: mail"></span>
                                                                <input class="uk-input uk-form-large" type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="uk-margin">
                                                            <div class="uk-inline uk-width-1-1">
                                                                <span class="uk-form-icon" uk-icon="icon: lock"></span>
                                                                <input class="uk-input uk-form-large" type="password" />
                                                            </div>
                                                        </div>
                                                        <div class="uk-margin">
                                                            <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button>
                                                        </div>
                                                        <div class="uk-text-small uk-text-center">
                                                            Not registered? <a href="#">Create an account</a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Card>
                        </Col>
                    </Container>
                </div>
                <TransparentFooter />
            </div>
        </>
    );
}

export default SimpleLogin;