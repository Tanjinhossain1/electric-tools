import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useFindAdmin from '../hooks/useFindAdmin';


const Tool = ({ tool }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const [admin] = useFindAdmin(user)
    const { name, description, price, img, minimumQuantity, availableQuantity, _id } = tool;

    return (
        <div data-aos-delay="300" data-aos="fade-right" className='rounded-lg bg-white text-[#1a2230] mt-44 border ease-in duration-700 hover:text-white hover:shadow-2xl hover:bg-black shadow-lg p-4 m-6'>
           <div className='flex justify-center '>
           <img className='w-[300px] mt-[-150px] bg-gradient-to-t  from-[#d4ccc3]  to-[#b7ada7] h-[300px] rounded-full ' src={img} alt="" />
           </div>
            <div>
                <h1 className='text-xl mt-4 '>Name: {name}</h1>
                <h1>Price: <span className='text-pink-500 font-bold'>{price}$</span></h1>
                <div className='xl:flex justify-between'>
                    <h1>MinimumQuantity: <span className='text-pink-600 font-bold'>{minimumQuantity}</span></h1>
                    <h1>availableQuantity: <span className='text-pink-600 font-bold'>{availableQuantity}</span></h1>
                </div>
                <h1><small>Description: {description}</small></h1>
               {
                user && admin ? <button onClick={()=>navigate(`/updateProduct/${_id}`)} className="btn mt-2 btn-outline w-full ease-in-out duration-500">Update</button>:
                <button onClick={() => navigate(`/purchase/${_id}`)} className="btn mt-2 btn-outline hover:bg-blue-900 hover:text-white w-full ease-in-out duration-500 text-blue-900">Purchase</button>
               }
            </div>
        </div>
    );
};

export default Tool;