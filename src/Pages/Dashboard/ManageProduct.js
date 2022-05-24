import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Sheared/Loading';
import ManageTool from './ManageTool';

const ManageProduct = () => {

    const { isLoading, data: tools, refetch } = useQuery('tools', () =>
        fetch('http://localhost:5000/tools').then(res =>
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

        </div>
    );
};

export default ManageProduct;