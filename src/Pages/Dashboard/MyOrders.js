import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Sheared/Loading";
import Order from "./Order";

const MyOrders = () => {
  const [email, setEmail] = useState("");
  const [user] = useAuthState(auth);
  // const submitEmail = (event) => {
  //     event.preventDefault();
  //     const email = event.target.name.value;
  //     setEmail(email)
  //     event.target.reset()
  // }
  const {
    isLoading,
    data: orders,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://electric-tools.onrender.com/orders`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading loading={isLoading} color={"#14aac4"}></Loading>;
  }
  if (orders) {
    console.log(orders);
  }
  if (!orders) {
    console.log("data nai bujso", orders);
  }
  return (
    // <div>

    <div className=" py-28">
      <table className="  w-full">
        <thead className="bg-[#0c082e] ">
          <tr className="py-10 text-white text-center">
            <th></th>
            <th>Name</th>
            <th className=" ">Price</th>
            <th>Quantity</th>
            <th>Payment</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <Order
              index={index}
              key={order._id}
              refetch={refetch}
              order={order}
            ></Order>
          ))}
        </tbody>
      </table>
    </div>
    // </div>
  );
};

export default MyOrders;
