import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Sheared/Loading';
import User from './User';

const MakeAdmin = () => {
    const { isLoading, data: allUser, refetch } = useQuery('users', () =>
        fetch(`https://mighty-ridge-59560.herokuapp.com/showAllUser`,).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading loading={isLoading} color={'#10e817'}></Loading>
    }

    if (allUser) {
        return (
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>make admin</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUser && allUser.map(user => <User refetch={refetch} user={user} key={user._id}></User>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

export default MakeAdmin;