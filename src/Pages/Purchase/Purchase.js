import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sheared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isLoading, data: tool } = useQuery(['tool'], () =>
        fetch(`http://localhost:5000/tools/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading loading={isLoading} color={'#be03fc'}></Loading>
    }
    const { name, description, price, img, minimumQuantity, availableQuantity, _id } = tool;


    const onSubmit = data => {
        console.log(data)
    };


    return (
      <div className='w-4/4 md:w-2/4 my-20 lg:w-1/4 mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user?.displayName} {...register("name")} type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs my-2" />
            <br />
            <input defaultValue={user?.email} {...register("email")} type="text" placeholder="Type here" class="input input-bordered my-2 input-primary w-full max-w-xs" />
            <input type="submit" />
        </form>
      </div>
    );
};

export default Purchase;