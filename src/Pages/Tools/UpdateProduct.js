import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const UpdateProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        toast.success('Update Product is not impleamnet after assaignment i update it')

    }
    return (
        <div className='w-3/4 mx-auto'>
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
                    <input className='btn btn-outline ' type="submit" value="Update Product" />
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;