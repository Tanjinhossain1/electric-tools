import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
    const navigate = useNavigate()
    const { newPrice, toolName, quantity, _id, paid } = order;
    return (
        <tr>
            <th>{toolName}</th>
            <td>{newPrice}</td>
            <td>{quantity}</td>
            {paid?<td className='text-green-500'>paid</td>:<td> <button onClick={() => navigate(`/dashboard/payment/${_id}`)} class="btn btn-outline bg-green-600 border-0 text-white">Order</button></td>}
            
        </tr>
    );
};

export default Order;