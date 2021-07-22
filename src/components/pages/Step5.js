import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseName, chooseAddress, choosePhoneNo, chooseEmail } from "../../store/user";
import Button from "../common/Button";

const Step5 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const name = useSelector((state) => state.userReducer.name);
  const address = useSelector((state) => state.userReducer.address);
  const phoneNo = useSelector((state) => state.userReducer.phoneNo);
  const email = useSelector((state) => state.userReducer.email);

  const [ourName, setourName] = useState(name);
  const [ourAddress, setourAddress] = useState(address);
  const [ourPhone, setourPhone] = useState(phoneNo);
  const [ourEmail, setourEmail] = useState(email);

  const onSubmit = () => {
    dispatch(chooseName(ourName));
    dispatch(chooseAddress(ourAddress));
    dispatch(choosePhoneNo(ourPhone));
    dispatch(chooseEmail(ourEmail));
    history.push("./result");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="vib">
      <div className="mb-3 col">
        <label htmlFor="userName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="ourName"
          placeholder="Enter your name"
          onChange={(e) => setourName(e.target.value)}
          value={ourName}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="userAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="ourAddress"
          placeholder="Enter your address"
          onChange={(e) => setourAddress(e.target.value)}
          value={ourAddress}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="userPhoneNo" className="form-label">
          Phone No
        </label>
        <input
          type="tel"
          className="form-control"
          id="ourPhoneNo"
          maxLength={10}
          minLength={10}
          placeholder="Enter your phone no."
          onChange={(e) => setourPhone(e.target.value)}
          value={ourPhone}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="userEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="ourEmail"
          placeholder="Enter your email"
          onChange={(e) => setourEmail(e.target.value)}
          value={ourEmail}
        />
      </div>
      </div>
      <br></br>
      <Button onSubmit={onSubmit}>Next</Button>
    </form>
  );
};

export default Step5;