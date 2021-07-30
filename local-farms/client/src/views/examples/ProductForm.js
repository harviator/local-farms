import React from "react";
// reactstrap components
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";
// core components

function ProductForm(){
  return (
    <>
      <Form>
      
        <FormGroup>
          <label htmlFor="inputProduct">Product Name</label>
          <Input
            id="inputProduct"
            placeholder="Carrots"
            type="text"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="inputDescription">Product Description</label>
          <Input
            id="inputDescription"
            placeholder="Fresh orange Carrots, hand-picked"
            type="text"
            rows="8" //NOT WORKING
            cols="50" 
          ></Input>
        </FormGroup>
        <FormGroup>
            <label htmlFor="inputCategory">Category</label>
            <Input id="inputCategory" type="select">
              <option selected="">Choose...</option>
              <option>Fruits</option>
              <option>Vegetables</option>
              <option>Grain</option>
              <option>Protein/Produce</option>
              <option>Dairy</option>
              <option>Honey</option>
            </Input>
          </FormGroup>
        <div className="form-row">
          <FormGroup className="col-md-4">
            <label htmlFor="inputPrice">Price</label>
            <Input id="inputPrice" type="text"></Input>
          </FormGroup>
          <FormGroup className="col-md-4">
            <label htmlFor="inputQuantity">Quantity</label>
            <Input id="inputQuantity" type="text"></Input>
          </FormGroup>
          <FormGroup className="col-md-4">
            <label htmlFor="inputFarm">Farm</label>
            <Input id="inputFarm"  placeholder="Ontario YYZ" type="text"></Input>
          </FormGroup>
        </div>
        <FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox"></Input>
              All information I have provided is correct{" "}
              <span className="form-check-sign">
                <span className="check"></span>
              </span>
            </Label>
          </FormGroup>
        </FormGroup>
        <Button color="primary" type="submit">
          Submit Product
        </Button>
      </Form>
    </>
  );
}

export default ProductForm;