import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Sheared/Loading';
import Tool from '../Tools/Tool';
import DeleteModal from './DeleteModal';

const ManageProduct = () => {
    const [open, setOpen] = useState(false)
    const { isLoading, data: tools,refetch } = useQuery('tools', () =>
        fetch('http://localhost:5000/tools').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading color={'#1414e3'} loading={isLoading} />
    }
    const deleteProduct = (id) => {
        // console.log('clicked',id)
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
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

    return (
        <div>
            <div class="grid lg:grid-cols-2 ">

                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}> <label for="deleteModal" onClick={() => setOpen(!open)} className="btn mt-2 btn-outline w-full ease-in-out duration-500">Delete</label>
                         {open && <DeleteModal> <button onClick={()=>deleteProduct(tool._id)}  className="btn btn-outline bg-red-500 border-0">Confirm Delete</button></DeleteModal>}
                    </Tool>)
                }

            </div>
       
        </div>
    );
};

export default ManageProduct;