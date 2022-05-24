import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    const addReview = (event) => {
        event.preventDefault();
        const rate = event.target.rate.value;
        const description = event.target.description.value;
        const review = { rate, description }
        fetch(`https://mighty-ridge-59560.herokuapp.com/addReview`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('Review Add SuccessFully')
                event.target.reset();
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <form onSubmit={addReview} className="hero-content ">
                    <div className="card flex-shrink-0   shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Add Ratings</span>
                                </label>
                                <select name='rate' className="select select-bordered w-full max-w-xs" required>
                                    <option disabled selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea type="text" name='description' placeholder="Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Review</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;