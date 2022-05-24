import { signOut } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgKey = 'dd6aa9e917ed30c4f9f495bf1f8866ee';
    const navigate = useNavigate()

    const onSubmit = (data, event) => {
        console.log(data)
        const { name, description, availableQuantity, minimumQuantity, price } = data;
        const image = data.img[0];
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
        const formData = new FormData();
        formData.append('image', image)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const productDetail = { name, description, availableQuantity, minimumQuantity, price, img }
                    if (+minimumQuantity > 0 && +availableQuantity > 0) {
                        if (+price > 0) {
                            if (+minimumQuantity < +availableQuantity) {
                                fetch(`https://mighty-ridge-59560.herokuapp.com/addProduct`, {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json',
                                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                                    },
                                    body: JSON.stringify(productDetail)
                                })
                                    .then(res => {
                                        if (res.status === 401 || res.status === 403) {
                                            signOut(auth)
                                            navigate('/home')
                                            toast.error('You Are not a Valid user Login again')
                                        }
                                        return res.json()

                                    })
                                    .then(data => {
                                        console.log(data)
                                        if (data.insertedId) {
                                            toast.success('Product Add SuccessFully!')
                                            event.target.reset()
                                        } else {
                                            toast.error('Fail To Add Product')
                                        }
                                    })
                            } else {
                                toast.error('Increase Your Available Quantity!')
                            }
                        } else {
                            toast.error('Type valid Price')
                        }
                    } else {
                        toast.error('Type valid Quantity')
                    }
                }
            })
    };
    return (
        <div>
            <h1 className='text-center font-bold text-pink-700 text-xl'>Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid justify-center lg:grid-cols-2'>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" {...register("description", { required: true })} placeholder="Description" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">MinimumQuantity</span>
                        </label>
                        <input type="text" {...register("minimumQuantity", { required: true })} placeholder="MinimumQuantity" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">AvailableQuantity</span>
                        </label>
                        <input type="number" {...register("availableQuantity", { required: true })} placeholder="AvailableQuantity" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">Price Per Piece </span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file" {...register("img", { required: true })} className=" input input-bordered w-full max-w-xs" required />
                    </div>
                </div>
                <div className='w-1/4 mx-auto mt-8'>
                    <input className='btn btn-outline ' type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;