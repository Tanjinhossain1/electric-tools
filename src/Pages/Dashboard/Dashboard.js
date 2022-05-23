import React from 'react';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../Sheared/Loading';

const Dashboard = () => {
    const { isLoading, data: admin } = useQuery('users', () =>
    fetch(`http://localhost:5000/findAdmin?email=tanjinhossain2003@gmail.com`,).then(res =>
        res.json()
    )
)
if(isLoading){
    return <Loading loading={isLoading} color={'#fc0377'}></Loading>
}
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Others</label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                        <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                        
                        <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                    
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;