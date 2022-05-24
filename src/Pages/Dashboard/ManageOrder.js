import React from 'react';
import { toast } from 'react-toastify';

const ManageOrder = ({ order, index, refetch }) => {
    const { toolName, newPrice,email, paid, img, _id, shipped } = order;
    const shippedPaid = (id) => {
        console.log(id)
        fetch(`https://mighty-ridge-59560.herokuapp.com/updatePaid/${id}`, {
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
            <th><small>{email}</small></th>

            <td> <div className="avatar">
                <div className="w-14 rounded-full ring ">
                    <img alt='toolImage' src={img} />
                </div>
            </div></td>
            <td>{toolName}</td>
            <td>{newPrice}</td>
            <td>{paid ? <span className='text-green-600 font-bold '>{shipped ? shipped : 'Pending'}</span> : <span className='text-red-400 font-semibold'>UnPaid</span>}</td>
            <td className=''><button disabled={!paid} onClick={() => shippedPaid(_id)} className='btn btn-outline'>Shipped Now</button></td>
        </tr>
    );
};

export default ManageOrder;