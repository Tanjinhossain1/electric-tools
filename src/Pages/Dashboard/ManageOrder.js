import React from 'react';
import { toast } from 'react-toastify';

const ManageOrder = ({ order, index, refetch }) => {
    const { toolName, newPrice, paid, img, _id,shipped } = order;
    const shippedPaid = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/updatePaid/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                toast.success('Shipped success Full!!')
            })
    }
    // console.log(shift)
    return (
        <tr>
            <th>{index}</th>

            <td> <div class="avatar">
                <div class="w-14 rounded-full ring ">
                    <img alt='toolImage' src={img} />
                </div>
            </div></td>
            <td>{toolName}</td>
            <td>{newPrice}</td>
            <td>{paid ? <span className='text-green-600 font-bold '>{shipped? shipped: 'Pending'}</span> : <span className='text-red-400 font-semibold'>UnPaid</span>}</td>
            <td className=''><button disabled={!paid} onClick={() => shippedPaid(_id)} className='btn btn-outline'>Shipped Now</button></td>
        </tr>
    );
};

export default ManageOrder;