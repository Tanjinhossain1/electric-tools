import React from 'react';
import { useQuery } from 'react-query';

const MyOrders = () => {
    const { isLoading, data: orders } = useQuery('tools', () =>
        fetch('http://localhost:5000/tools').then(res =>
            res.json()
        )
    )
    return (
        <div>
            <h1>hi im anm orders</h1>
        </div>
    );
};

export default MyOrders;