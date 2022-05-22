import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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
    const { name: toolName, price, minimumQuantity,img, availableQuantity } = tool;


    const onSubmit = (data,event) => {
        console.log(data)
        const email = user?.email;
        const name = user?.displayName;
        const number = data.number;
        const quantity = data.minimumQuantity;
        const address = data.address;
      
        if (data.minimumQuantity > availableQuantity) {
            toast(`We have only ${availableQuantity} tools `)
        } else {
            if (minimumQuantity < data.minimumQuantity) {

                fetch('http://localhost:5000/purchase',{
                    method: 'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify({email,name,number,quantity,address,price,toolName,img}) 
                })
                .then(res=>res.json())
                .then(result =>{
                    console.log(result)
                    if(result.acknowledged){
                        toast('Purchase Product add SuccessFully!')
                    }
                    event.target.reset()
                })

            } else {
                toast(`must be purchase ${minimumQuantity} piece tool`)
            }
        }
    };
    return (
        <div className='w-4/4 md:w-2/4 my-20 lg:w-1/4 mx-auto p-2'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label class="label">
                    <span class="label-text">Name</span>
                </label>
                <input defaultValue={user?.displayName} {...register("name")} type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs " readOnly disabled />
               
                <label class="label mt-2">
                    <span class="label-text">Email</span>
                </label>
                <input defaultValue={user?.email} {...register("email")} type="text" placeholder="Type here" class="input input-bordered  input-primary w-full max-w-xs" readOnly disabled />

                <label class="label">
                    <span class="label-text">Number</span>
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
                <label class="label mt-2">
                    <span class="label-text">Address</span>
                </label>
                <input {...register("address", {
                    required: {
                        value: true,
                        message: 'Address is Required'
                    },
                })} type="text" placeholder="Your Address" class="input input-bordered   w-full max-w-xs" />
                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                <label class="label">
                    <span class="label-text">MinimumQuantity</span>
                </label>
                <input defaultValue={minimumQuantity} {...register("minimumQuantity")} type="text" placeholder="Add Quantity" class="input input-bordered  w-full max-w-xs " />
                <input class="btn btn-outline mt-2 w-full" type="submit" />
            </form>
        </div>
    );
};

export default Purchase;