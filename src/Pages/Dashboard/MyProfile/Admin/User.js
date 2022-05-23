import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, refetch }) => {
    const { email, role, _id } = user;
    const makeAdmin = (id) => {
        fetch(`https://mighty-ridge-59560.herokuapp.com/makeAdmin/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Admin Add SuccessFully!')
                refetch()
            })
    }
    return (
        <tr>
            <th>{email}</th>
            {role === 'admin' ? <td><button class="btn bg-green-500 border-0 btn-xs">{role}</button></td> :
                <td><button onClick={() => makeAdmin(_id)} class="btn btn-xs">Make Admin</button></td>
            }

        </tr>
    );
};

export default User;