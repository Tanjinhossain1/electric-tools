import React, { useState } from 'react';
import { toast } from 'react-toastify';
import DeleteModal from './DeleteModal';

const ManageTool = ({ tool, refetch }) => {
    const [open, setOpen] = useState(false)
    const deleteProduct = (id) => {
        // console.log('clicked',id)
        fetch(`https://mighty-ridge-59560.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                setOpen(false)
                toast.warn('Product Delete Success Fully!!')
            })
    }

    const { name, description, price, img, minimumQuantity, availableQuantity, _id } = tool;
    return (
        <div className='rounded-lg border ease-in duration-700 hover:text-white hover:shadow-2xl hover:bg-black shadow-lg p-4 m-6'>
            <img className='w-full rounded-lg' src={img} alt="" />
            <div>
                <h1 className='text-xl'>Name: {name}</h1>
                <h1>Price: <span className='text-pink-500 font-bold'>{price}$</span></h1>
                <div className='flex justify-between'>
                    <h1>MinimumQuantity: <span className='text-pink-600 font-bold'>{minimumQuantity}</span></h1>
                    <h1>availableQuantity: <span className='text-pink-600 font-bold'>{availableQuantity}</span></h1>

                </div>
                <h1><small>Description: {description}</small></h1>
                <label htmlFor="deleteModal" onClick={() => setOpen(!open)} className="btn mt-2 btn-outline w-full ease-in-out duration-500">Delete</label>
                {open && <DeleteModal > <button onClick={() => deleteProduct(_id)} className="btn btn-outline bg-red-500 border-0">Confirm Delete</button></DeleteModal>}

            </div>
        </div>
    );
};

export default ManageTool;