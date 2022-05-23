import { async } from '@firebase/util';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sheared/Loading';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, GoogleLoading] = useSignInWithGoogle(auth);

    const [updateProfile, updating] = useUpdateProfile(auth);

    if (loading || updating) {
        return <Loading loading={loading} color={'#081663'}></Loading>
    }
    const onSubmit = async (data, event) => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        event.target.reset()
    };
    console.log(user)
    return (
        <div>
            <div className="w-4/4 md:w-3/4 lg:w-1/4 mx-auto my-24">
                <div className=" flex-col lg:flex-row-reverse">
                    <div className="card p-2 flex-shrink-0 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input className="input input-bordered w-full max-w-xs" type='text' placeholder='Your Name' {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })} />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>

                                <label className="label">
                                    <span className="label-text">Email</span>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
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



                                <label label className="label" >
                                    <p className="label-text-alt link link-hover">Forgot password?</p>
                                </label>
                                <label label className="label" >
                                    <p className="label-text-alt link link-hover text-red-500">{error && error?.message}</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p><small>Already Have an Account? <Link className='text-purple-600 font-bold' to='/login'>Login</Link></small></p>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SignUp;