import React from 'react';
import Header from './Header';

const AddNewCase =  () => {

  return(
    <div>
      <Header />
      <form>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Your Legal Name: </label>
          <div class="col-sm-10">
            <input type="legalname" class="form-control" id="name" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Date(the date you became involved in the case): </label>
          <div class="col-sm-10">
            <input type="date" class="form-control" id="date" />
          </div>
        </div>
        <div>
          <textarea class="new-case-description"></textarea>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNewCase;