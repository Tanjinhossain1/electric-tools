import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const User = ({ user, refetch }) => {
    const { email, role, _id } = user;
    const navigate = useNavigate()
    const makeAdmin = (id) => {
        fetch(`https://mighty-ridge-59560.herokuapp.com/makeAdmin/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    toast.error('You Are not a Valid user Login again')
                    navigate('/home')
                }
                return res.json()
            })
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Admin Add SuccessFully!')
                } else {
                    toast.error('Fail To Make Admin')
                }
                refetch()
            })
    }
    return (
        <tr>
            <th>{email}</th>
            {role === 'admin' ? <td><button className="btn bg-green-500 border-0 btn-xs">{role}</button></td> :
                <td><button onClick={() => makeAdmin(_id)} className="btn btn-xs">Make Admin</button></td>
            }

        </tr>
    );
};

export default User;