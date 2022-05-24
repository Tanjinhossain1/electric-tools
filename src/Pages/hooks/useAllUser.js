import React, { useEffect, useState } from 'react';

const useAllUser = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/allUser/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('update user', data)
                    setToken(data)
                })
        }
    }, [user])
    return [token]
};

export default useAllUser;