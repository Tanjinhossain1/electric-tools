import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, refetch }) => {
    const { email, role,_id } = user;
    const makeAdmin = (id) => {
        fetch(`http://localhost:5000/makeAdmin/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
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
                <td><button onClick={()=>makeAdmin(_id)} class="btn btn-xs">Make Admin</button></td>
            }
            <td><button class="btn hover:bg-red-600 hover:border-0 btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>
        </tr>
    );
};

export default User;