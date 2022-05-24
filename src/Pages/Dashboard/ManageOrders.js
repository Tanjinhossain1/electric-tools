import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheared/Loading';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const { isLoading, data: manageOrders, refetch } = useQuery('manageOrders', () =>
        fetch(`http://localhost:5000/allOrders`,).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading loading={isLoading} color={'#14aac4'}></Loading>
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>

                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Favorite Color</th>
                            <th>Status</th>
                            <th>Payment</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                                manageOrders.map((order,index)=><ManageOrder index={index} key={order._id} order={order} refetch={refetch}></ManageOrder>)
                        }

                       

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;