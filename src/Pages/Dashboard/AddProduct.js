import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgKey = 'dd6aa9e917ed30c4f9f495bf1f8866ee';

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
                    if (+minimumQuantity > 0 && +availableQuantity > 0 && +price > 0) {
                        if (+minimumQuantity < +availableQuantity) {
                            fetch('http://localhost:5000/addProduct', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(productDetail)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                    if (data) {
                                        toast.success('Product Add SuccessFully!')
                                        event.target.reset()
                                    }
                                })
                        } else {
                            toast.error('Increase Your Available Quantity!')
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
                    <div class="form-control w-full max-w-xs mt-2">
                        <label class="label">
                            <span class="label-text">Product Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Product Name" class="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div class="form-control w-full max-w-xs mt-2">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <input type="text" {...register("description", { required: true })} placeholder="Description" class="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div class="form-control w-full max-w-xs mt-2">
                        <label class="label">
                            <span class="label-text">MinimumQuantity</span>
                        </label>
                        <input type="text" {...register("minimumQuantity", { required: true })} placeholder="MinimumQuantity" class="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div class="form-control w-full max-w-xs mt-2">
                        <label class="label">
                            <span class="label-text">AvailableQuantity</span>
                        </label>
                        <input type="text" {...register("availableQuantity", { required: true })} placeholder="AvailableQuantity" class="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div class="form-control w-full max-w-xs mt-2">
                        <label class="label">
                            <span class="label-text">Price Per Piece </span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" class="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div class="form-control w-full max-w-xs mt-2">
                        <label class="label">
                            <span class="label-text">Image</span>
                        </label>
                        <input type="file" {...register("img", { required: true })} class=" input input-bordered w-full max-w-xs" required />
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