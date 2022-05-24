import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheared/Loading';
import ManageTool from './ManageTool';

const ManageProduct = () => {

    const { isLoading, data: tools, refetch } = useQuery('tools', () =>
        fetch(`https://mighty-ridge-59560.herokuapp.com/tools`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading color={'#1414e3'} loading={isLoading} />
    }


    return (
        <div>
            <div className="grid lg:grid-cols-2 ">

                {
                    tools.map(tool => <ManageTool key={tool._id} refetch={refetch} tool={tool}>
                    </ManageTool>)
                }

            </div>

        </div>
    );
};

export default ManageProduct;