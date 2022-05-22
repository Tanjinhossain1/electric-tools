import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Sheared/Loading';
import Order from './Order';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const { isLoading, data: orders, refetch } = useQuery('tools', () =>
        fetch(`http://localhost:5000/orders?email=${user?.email}`,).then(res =>
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
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>   
                        {
                            orders.map(order=><Order key={order._id} refetch={refetch} order={order}></Order>)
                        }
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;