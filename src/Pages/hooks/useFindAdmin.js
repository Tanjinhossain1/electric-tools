import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const useFindAdmin = () => {
    const [user] = useAuthState(auth)
    const { data: admin } = useQuery(['users'], () =>
        fetch(`http://localhost:5000/findAdmin/${user?.email}`).then(res =>
            res.json()
        )
    )
    // if(isLoading){
    //     return <Loading loading={isLoading} color={'#fc0377'}></Loading>
    // }
    console.log(admin)
    return {admin}
};

export default useFindAdmin;