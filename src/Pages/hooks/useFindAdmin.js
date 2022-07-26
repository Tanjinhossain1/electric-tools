import React, { useEffect, useState } from 'react';

const useFindAdmin = (user) => {
    const [admin, setAdmin] = useState({});
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://electric-tools.herokuapp.com/findAdmin/${user?.email}`, {
                method: 'GET',
                headers: {
                    'content-Type': 'application/json'
                },

            }).then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setAdminLoading(false)
                })
        }
    }, [user?.email]);
    return [admin, adminLoading]

};

export default useFindAdmin;