import React from "react";
import "./style.css";
import "@fontsource/open-sans";
const Passenger = () => {
  return (
  <>
    <div className="Passenger">
      <h2 className="passDetails">Passenger Details</h2>
      
      <div class="column3">
        <div class="form-group">
          <label for="InputName">Name</label>
          <input type="text" class="form-control" id="InputName" />
        </div>
        <div class="form-group">
          <label for="inputEmail4">Journey Date</label>
          <input type="text" class="form-control" id="inputEmail4" />
        </div>
        <div class="form-group">
          <label htmlFor="inputMobileNumber">Source Location</label>
          <input type="text" class="form-control" id="inputMobileNumber" />
        </div>
      </div>
      <div class="column4">
        <div class="form-group ">
          <label for="inputJourney">Email</label>
          <input type="text" class="form-control" id="inputAddress" />
        </div>

        <div class="form-group ">
          <label for="inputTime">Pickup Time</label>
          <input type="text" class="form-control" id="inputTime" />
        </div>
        <div class="form-group ">
          <label for="inputAddress2">Destination Location</label>
          <input type="text" class="form-control" id="inputAddress2" />
        </div>
      </div>
      <div class="column5">
        <div class="form-group ">
          <label for="inputState">Mobile Number</label>
          <input type="text" class="form-control" id="inputState" />
        </div>
        <div class="form-group">
          <label for="inputDestination">Pickup Address</label>
          <input type="text" class="form-control" id="inputDestination" />
        </div>
        {/* <div class="form-group">
              <label for="inputDest"></label>
              <input type="hidden" class="form-control" />
              
            </div> */}
      </div>
      
      {/* <div class="column6"> */}
      <div className="column9">
        <button type="submit" class="btn1 bg-dark text-white">
          Submit
        </button>
        </div>
    
        </div>
      {/* </div> */}
    
    </>
  );
};

export default Passenger;
