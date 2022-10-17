import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderUpdateAction } from "../action/orderAction";

export default function Assign({ order }) {
  const dispatch = useDispatch();
  const [dp, setDp] = useState();
  return (
    <div>
      <input
        type="text"
        value={dp || ""}
        onChange={(e) => setDp(e.target.value)}
      />
      <i
        className="fa fa-check m-2"
        style={{ color: "green" }}
        onClick={() => {
          console.log(order._id);
          dispatch(orderUpdateAction(order._id, dp));
        }}
      ></i>
    </div>
  );
}
