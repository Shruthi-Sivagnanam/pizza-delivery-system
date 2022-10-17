import React, { useState } from "react";
import OrderDes from "./OrderDes";

export default function Orders({ order }) {
  const [modalshow, setModalshow] = useState(false);
  return (
    <>
      <div
        className="col-md-8 orderList m-4 shadow-lg p-3 mb-5 bg-white rounded"
        data-aos="fade-up"
        onClick={() => setModalshow(true)}
        style={{ cursor: "pointer" }}
      >
        {order.isDelivered === "Delivered" && (
          <h2 style={{ color: "green" }}>Delivered</h2>
        )}
        {order.isDelivered !== "Delivered" && (
          <h2 style={{ color: "red" }}>{order.isDelivered}</h2>
        )}
        <div className="flex-container">
          <div className="w-100">
            <h1> Order Id: {order._id}</h1>
          </div>
          <div className="w-100">
            <h1>Date: {order.createdAt.substring(0, 10)}</h1>
          </div>
        </div>
      </div>
      <OrderDes
        order={order}
        show={modalshow}
        onHide={() => setModalshow(false)}
      />
    </>
  );
}
