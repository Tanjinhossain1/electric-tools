import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    const addReview = (event) => {
        event.preventDefault();
        const rate = event.target.rate.value;
        const description = event.target.description.value;
        const review = { rate, description }
        fetch('',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast('Review Add SuccessFully')
            event.target.reset();
        })

    }
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <form onSubmit={addReview} class="hero-content ">
                    <div class="card flex-shrink-0   shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Add Ratings</span>
                                </label>
                                <select name='rate' class="select select-bordered w-full max-w-xs" required>
                                    <option disabled selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Description</span>
                                </label>
                                <textarea type="text" name='description' placeholder="Description" class="input input-bordered" required />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Add Review</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;