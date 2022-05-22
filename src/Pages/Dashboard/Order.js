import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
    const navigate = useNavigate()
    const {price,toolName,quantity,_id} = order;
    return (
        <tr>
            <th>{toolName}</th>
            <td>{price}</td>
            <td>{quantity}</td>
           <td> <button onClick={()=>navigate(`/dashboard/payment/${_id}`)} class="btn btn-outline bg-green-600 border-0 text-white">Pay</button></td>
        </tr>
    );
};

export default Order;