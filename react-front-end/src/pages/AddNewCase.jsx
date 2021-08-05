import React from "react";
import Header from "./Header";
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
              <input type="text" class="form-control" id="name" />
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
          <div className="form-group row">
            <label class="col-sm-2 col-form-label">
            Optional Questions:
            </label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="opt1" placeholder="Are you currently invovled in a legal case?" />
            </div>
          </div>
          <div className="form-group row">
            <label class="col-sm-2 col-form-label">
            Optional Questions:
            </label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="opt2" placeholder="Are you a plaintiff or a defendant?" />
            </div>
          </div>
          <div className="form-group row">
            <label class="col-sm-2 col-form-label">
            Short Description:
            </label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="description" placeholder="Please give a short and concise description of your legal dispute:" />
            </div>
          </div>
          <div class="form-group row" id="submit-button">
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
