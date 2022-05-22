import React from 'react';

const Login = () => {
    return (
        <div>
            <div class="w-4/4 md:w-3/4 lg:w-1/4 mx-auto my-24">
                <div class=" flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <p class="label-text-alt link link-hover">Forgot password?</p>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;