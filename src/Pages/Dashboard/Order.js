import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import DeleteModal from './DeleteModal';

const Order = ({ order, refetch }) => {
    const navigate = useNavigate()
    const { newPrice, toolName, quantity, _id, paid, transactionId } = order;
    const [open, setOpen] = useState(false)
    const deleteOrder = (id) => {
        if (!paid) {
            fetch(`http://localhost:5000/deletePurchaseTool/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    refetch()
                    setOpen(false)
                })
        } else {
            toast.error('You Already Paid for it so Dont Delete it.')
            setOpen(false)
        }

    }
    return (
        <tr>
            <th>{toolName}</th>
            <td>{newPrice}</td>
            <td>{quantity}</td>
            {paid ? <td className='text-green-500'>paid <br /> <small>transactionId: <br /> {transactionId}</small></td> : <td> <button onClick={() => navigate(`/dashboard/payment/${_id}`)} className="btn btn-outline bg-green-600 border-0 text-white">Order</button></td>}
            {
            !paid&&
            <td><label for="deleteModal" onClick={() => setOpen(!open)} className="btn bg-red-600 border-0 btn-circle btn-outline">
                {/* <label >open modal</label> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </label></td>}
            {open && <DeleteModal deleteOrder={deleteOrder} order={order} />}
        </tr>
    );
};

export default Order;