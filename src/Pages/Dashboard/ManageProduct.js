import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Sheared/Loading';
import ManageTool from './ManageTool';

const ManageProduct = () => {

    const { isLoading, data: tools, refetch } = useQuery('tools', () =>
        fetch('https://mighty-ridge-59560.herokuapp.com/tools').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading color={'#1414e3'} loading={isLoading} />
    }


    return (
        <div>
            <div class="grid lg:grid-cols-2 ">

                {
                    tools.map(tool => <ManageTool key={tool._id} refetch={refetch} tool={tool}>
                    </ManageTool>)
                }

            </div>
            {/* <DeleteModal tool={tool}> <button onClick={()=>deleteProduct(tool._id)}  className="btn btn-outline bg-red-500 border-0">Confirm Delete</button></DeleteModal> */}
        </div>
    );
};

export default ManageProduct;