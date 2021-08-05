import React from "react";
import Header from "./Header";
import Form from "react-bootstrap/Form";
import "./AddNewCase.scss";

const AddNewCase = () => {
  return (
    <>
      <Header />
      <div className="NewCase">
        <h1 className="submit-form">Submit Your Case</h1>
        <form>
          <div className="form-group row">
            <label class="col-sm-2 col-form-label">Your Legal Name: </label>
            <div class="col-sm-10">
              <input type="legalname" class="form-control" id="name" />
            </div>
          </div>
          <div className="form-group row">
            <label class="col-sm-2 col-form-label">
              Date(the date you became involved in the case):{" "}
            </label>
            <div class="col-sm-10">
              <input type="date" class="form-control" id="date" />
            </div>
          </div>
          {/* <div>
            <textarea class="new-case-description"></textarea>
          </div> */}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control type="textarea"  placeholder="Optional Questions: Are you currently invovled in a legal case?" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
              <Form.Control type="textarea" placeholder="Optional Questions: Are you a plaintiff or a defendant?" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
              <Form.Control as="textarea" placeholder="Please give a short and concise description of your legal dispute:" />
            </Form.Group>
          </Form>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewCase;
