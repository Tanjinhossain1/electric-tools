import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Sheared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [quantity, setQuantity] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isLoading, data: tool } = useQuery(['tool'], () =>
        fetch(`https://electric-tools.onrender.com/tools/${id}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading loading={isLoading} color={'#be03fc'}></Loading>
    }
    const { name: toolName, price, minimumQuantity, img, availableQuantity } = tool;
    console.log(quantity)
    const onSubmit = (data, event) => {
        console.log(data)
        const email = user?.email;
        const name = user?.displayName;
        const number = data.number;
        // const quantity = data.minimumQuantity;
        const address = data.address;

        if (+quantity >= availableQuantity) {
            toast(`We have only ${availableQuantity} tools `)
        }
        if (availableQuantity >= +quantity) {
            if (minimumQuantity <= data.minimumQuantity) {
                const newPrice = +data.minimumQuantity * price
                fetch(`https://electric-tools.onrender.com/purchase`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email, name, number, quantity, address, newPrice, toolName, img })
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if (result.acknowledged) {
                            toast.success('Purchase Product add SuccessFully!')
                        }
                        event.target.reset()
                    })

            } else {
                toast.error(`must be purchase ${minimumQuantity} piece tool`)
            }
        }
    };
    return (
        <div className='shadow-2xl w-4/4 pr-12 py-4 scale-110 rounded-lg lg:pr-8 border-blue-500 border sm:pr-0 w-[320px] md:w-[500px]  sm:w-[450px]  my-20 lg:w-[500px] mx-auto pl-12'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input defaultValue={user?.displayName} {...register("name")} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs " readOnly disabled />

                <label className="label mt-2">
                    <span className="label-text">Email</span>
                </label>
                <input defaultValue={user?.email} {...register("email")} type="text" placeholder="Type here" className="input input-bordered  input-primary w-full max-w-xs" readOnly disabled />

                <label className="label">
                    <span className="label-text">Number</span>
                </label>
                <input className="input input-bordered w-full max-w-xs"
                    placeholder='Your Number'
                    type='text'
                    {...register("number", {
                        required: {
                            value: true,
                            message: 'number is Required'
                        },
                        minLength: {
                            value: 9,
                            message: 'Must be 9 characters'
                        }
                    })} />
                {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                {errors.number?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                <label className="label mt-2">
                    <span className="label-text">Address</span>
                </label>
                <input {...register("address", {
                    required: {
                        value: true,
                        message: 'Address is Required'
                    },
                })} type="text" placeholder="Your Address" className="input input-bordered   w-full max-w-xs" />
                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                <label className="label">
                    <span className="label-text">Select MinimumQuantity: {+minimumQuantity + 1} </span>
                </label>
                <input onChange={(e) => setQuantity(e.target.value)} defaultValue={quantity} type="text" placeholder="Add Quantity" className="input input-bordered  w-full max-w-xs " />

                <input disabled={minimumQuantity >= +quantity || availableQuantity <= +quantity} className="btn btn-outline mt-2 block sm:w-[360px] w-[210px] md:w-3/4 lg:[500px]  2xl:w-[300px] " type="submit" value='Purchase' />
            </form>
        </div>
    );
};

export default Purchase;