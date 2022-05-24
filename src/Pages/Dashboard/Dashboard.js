import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useFindAdmin from '../hooks/useFindAdmin';
import Loading from '../Sheared/Loading';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin, adminLoading] = useFindAdmin(user);


    if (adminLoading) {
        return <Loading loading={adminLoading} color={'#10e8'}></Loading>
    }

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* {admin?.admin && */}
                        {admin ? <div>
                            <li><Link to='/dashboard'>My Profile</Link></li>
                            <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                            <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                            <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                            <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>
                        </div> :
                            <div>

                                <li><Link to='/dashboard'>My Profile</Link></li>
                                <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                                <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                            </div>
                        }




                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;