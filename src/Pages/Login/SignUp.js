import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <div class="w-4/4 md:w-3/4 lg:w-1/4 mx-auto my-24">
                <div class=" flex-col lg:flex-row-reverse">
                    <div class="card p-2 flex-shrink-0 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input className="input input-bordered w-full max-w-xs" type='text' placeholder='Your Name'   {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })} />
                                <label class="label">                                  
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>

                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input className="input input-bordered w-full max-w-xs"
                                    placeholder='Your Email'
                                    type='email'
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid email'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input className="input input-bordered w-full max-w-xs"
                                    placeholder='Your Password'
                                    type='password'
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters'
                                        }
                                    })} />
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}



                                <label label class="label" >
                                    <p class="label-text-alt link link-hover">Forgot password?</p>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div class="divider">OR</div>
                        <button class="btn btn-outline">Continue With Google</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SignUp;