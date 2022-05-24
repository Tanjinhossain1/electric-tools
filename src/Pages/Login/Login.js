import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAllUser from '../hooks/useAllUser';
import Loading from '../Sheared/Loading';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    
    const [signInWithGoogle, googleUser, GoogleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    if(user||googleUser){
        navigate(from, { replace: true });
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [token] = useAllUser(googleUser || user)
    console.log(token)
    if (loading || GoogleLoading || sending) {
        return <Loading loading={loading || GoogleLoading || sending} color={'#081663'}></Loading>
    }
    const onSubmit = (data) => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
        setEmail(data.email)
    };

    return (
        <div>
            <div className="w-3/4 md:w-3/4 lg:w-2/4 xl:w-1/4 mx-auto my-24">
                <div className=" flex-col lg:flex-row-reverse">
                    <div className="card p-2 flex-shrink-0 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input className="input input-bordered w-full max-w-xs"
                                    placeholder='Email'
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
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input className="input input-bordered w-full max-w-xs"
                                    placeholder='Password'
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
                                    <p onClick={async () => {
                                        await sendPasswordResetEmail(email)
                                        toast('send reset password on your email')
                                    }} className="label-text-alt link link-hover">Forgot password?</p>
                                </label>
                                <label label className="label" >
                                    <p className="label-text-alt link link-hover">{error && <span className='text-red-600'>{error?.message}</span>}</p>
                                </label>
                                <label label className="label" >
                                    <p className="label-text-alt link link-hover">{googleError && <span className='text-red-600'>{googleError?.message}</span>}</p>
                                </label>
                            </div>
                            <div className="form-control  ">
                                <button className="btn btn-primary sm:w-2/4 w-3/4 md:w-2/4  lg:w-2/4 xl:w-4/4 mx-auto">Login</button>
                            </div>
                            <p><small>Don't Have an Account? <Link className='text-purple-600 font-bold' to='/signUp'>Create Account</Link></small></p>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Login;