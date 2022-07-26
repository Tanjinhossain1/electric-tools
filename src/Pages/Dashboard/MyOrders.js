import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Sheared/Loading';
import Order from './Order';

const MyOrders = () => {
    const [email, setEmail] = useState('')
    const [user] = useAuthState(auth)
    // const submitEmail = (event) => {
    //     event.preventDefault();
    //     const email = event.target.name.value;
    //     setEmail(email)
    //     event.target.reset()
    // }
    const { isLoading, data: orders, refetch } = useQuery('tools', () =>
        fetch(`https://electric-tools.herokuapp.com/orders?email=${user?.email || email}`,).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading loading={isLoading} color={'#14aac4'}></Loading>
    }
  

    return (
        <div>
         
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Order key={order._id} refetch={refetch} order={order}></Order>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;