import React from 'react';

const AddProduct = () => {

    const addProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const minimumQuantity = event.target.minimumQuantity.value;
        const availableQuantity = event.target.availableQuantity.value;
        const price = event.target.price.value;
        const productDetail = { name, description, minimumQuantity, availableQuantity, price };
        console.log(productDetail)
        if (minimumQuantity > 0) {
            fetch('',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(productDetail) 
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }
    return (
        <div>
            <h1 className='text-center font-bold text-pink-700 text-xl'>Add Product</h1>
            <form onSubmit={addProduct}>
                <div className='grid justify-center lg:grid-cols-2'>
                    <div class="form-control w-full max-w-xs mt-2">
                        <label class="label">
                            <span class="label-text">Product Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Product Name" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs mt-2">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <input type="text" name='description' placeholder="Description" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs mt-2">
                        <label class="label">
                            <span class="label-text">MinimumQuantity</span>
                        </label>
                        <input type="text" name='minimumQuantity' placeholder="MinimumQuantity" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs mt-2">
                        <label class="label">
                            <span class="label-text">AvailableQuantity</span>
                        </label>
                        <input type="text" name='availableQuantity' placeholder="AvailableQuantity" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs mt-2">
                        <label class="label">
                            <span class="label-text">Price Per Piece </span>
                        </label>
                        <input type="text" name='price' placeholder="Price" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs mt-2">
                        <label class="label">
                            <span class="label-text">Image</span>
                        </label>
                        <input type="file" name='image' class=" input input-bordered w-full max-w-xs" />
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