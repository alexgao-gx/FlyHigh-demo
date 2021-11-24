import React, { useState } from "react";
import JobSeekerDataService from "../services/JobSeekerService";

const AddSeekerInfo = () => {
  const initialSeekerState = {
    name: "",
    dob: "",
    phoneNumber: "",
    email: "",
    address: "",
  };
  const [seekerInfo, setSeekerInfo] = useState(initialSeekerState);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSeekerInfo({ ...seekerInfo, [name]: value });
  };

  const saveSeekerInfo = () => {
    var data = {
      name: seekerInfo.name,
      dob: seekerInfo.dob,
      phoneNumber: seekerInfo.phoneNumber,
      email: seekerInfo.email,
      address: seekerInfo.address,
    };

    JobSeekerDataService.create(data)
      .then(() => {
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newSeekerInfo = () => {
    setSeekerInfo(initialSeekerState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {isSubmitted ? (
        <div>
          <h4>You isSubmitted successfully!</h4>
          <button className="btn btn-success" onClick={newSeekerInfo}>
            Add Another One
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={seekerInfo.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="dob"
              required
              value={seekerInfo.dob}
              onChange={handleInputChange}
              name="dob"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">PhoneNumber</label>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              required
              value={seekerInfo.phoneNumber}
              onChange={handleInputChange}
              name="phoneNumber"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={seekerInfo.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              required
              value={seekerInfo.address}
              onChange={handleInputChange}
              name="address"
            />
          </div>

          <button onClick={saveSeekerInfo} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddSeekerInfo;
