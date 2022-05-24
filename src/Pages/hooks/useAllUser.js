import React, { useEffect, useState } from 'react';

const useAllUser = (user) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://mighty-ridge-59560.herokuapp.com/allUser/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('update user', data.token)
                    localStorage.setItem('accessToken', data.token)
                    setToken(data.token)
                })
        }
    }, [user])
    return [token]
};

export default useAllUser;