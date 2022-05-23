import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useFindAdmin from '../hooks/useFindAdmin';

const Dashboard = () => {
    const { admin } = useFindAdmin();
    console.log(admin)
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


                        {admin.admin ?
                            <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li> :
                            <div>
                                <li><Link to='/dashboard'>My Orders</Link></li>
                                <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                                <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                            </div>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;