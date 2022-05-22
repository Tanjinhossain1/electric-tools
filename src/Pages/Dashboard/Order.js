import React from 'react';

const Order = ({ order }) => {

    const {price,toolName,quantity} = order;
    return (
        <tr>

            <th>{toolName}</th>
            <td>{price}</td>
            <td>{quantity}</td>
           <td> <button class="btn btn-outline bg-green-600 border-0 text-white">Pay</button></td>
        </tr>
    );
};

export default Order;