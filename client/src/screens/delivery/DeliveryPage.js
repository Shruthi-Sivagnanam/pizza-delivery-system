import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deliveryPartnerLoginAction } from "../../action/deliveryPartnerAction";
import Error from "../../components/Error";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function DeliveryPage() {
  AOS.init();
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const deliveryPartnerData = useSelector(
    (state) => state.deliveryPartnerLoginReducers
  );
  const { loading, deliveryPartner, error } = deliveryPartnerData;
  const submitHandler = () => {
    if (username !== "" && password !== "") {
      const deliveryPartner = {
        username: username,
        password: password,
      };
      dispatch(deliveryPartnerLoginAction(deliveryPartner));
    }
  };
  function redirect() {
    alert("LoggedIn successfully");
    navigate("/delivery/landingpage");
  }
  return (
    <div>
      <div className="row justify-content-center register">
        <div className="col-md-5" data-aos="fade-up">
          <div className="userlogin shadow-lg p-3 mb-5 bg-white rounded">
            {loading && (
              <img
                src="https://i0.wp.com/codemyui.com/wp-content/uploads/2019/01/Rotating-Pizza-Slice-Preloader.gif?w=880&ssl=1"
                alt="loading"
                style={{ width: "100px", height: "100px" }}
              />
            )}
            {error && (
              <Error
                heading="Oops,Wrong credentials"
                content="There is some error in the credentials. Kindly go through it and Login again.."
              />
            )}
            {deliveryPartner && redirect()}
            <h1 className="mb-3">
              <i>Welcome Delivery Partner!!</i>
            </h1>
            <input
              type="text"
              placeholder="Username"
              className="form-control mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button variant="danger" onClick={submitHandler}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
