import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const ProfileForm = ({ children }) => {
    const [user] = useAuthState(auth)
    const addProfile = (event) => {
        event.preventDefault();
        const name = user?.displayName;
        const email = user?.email;
        const education = event.target.education.value;
        const location = event.target.number.value;
        const number = event.target.number.value;
        const linkDin = event.target.linkDin.value;
        const profileDetail = { name, email, education, location, number, linkDin };
        fetch('http://localhost:5000/addProfile',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(profileDetail)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <form onSubmit={addProfile} className='lg:w-1/4'>

            <div className='lg:w-full sm:w-2/4 mb-2 w-3/4 mx-auto'>
                <label className="label"><span className="label-text">Education</span></label>
                <input type="text" name='education' placeholder='Your Education' className="input input-bordered input-info w-full max-w-xs" required/>
            </div>
            <div className='lg:w-full sm:w-2/4 mb-2 w-3/4 mx-auto'>
                <label className="label"><span className="label-text">Location</span></label>
                <input type="text" name='location' placeholder='Your Location' className="input  input-bordered input-info w-full max-w-xs" required/>
            </div>

            <div className='lg:w-full sm:w-2/4 mb-2 w-3/4 mx-auto'>
                <label className="label"><span className="label-text">Phone Number</span></label>
                <input type="number" name='number' placeholder='Your Phone Number' className="input input-bordered input-info w-full max-w-xs" required/>
            </div>
            <div className='lg:w-full sm:w-2/4 mb-2 w-3/4 mx-auto'>
                <label className="label"><span className="label-text">LinkDin</span></label>
                <input type="text" name='linkDin' placeholder='Your LinkDin Profile Link' className="input input-bordered input-info w-full max-w-xs" required/>
            </div>
            <div className='sm:w-2/4 md:w-2/4 w-2/4 mx-auto'>
            <input className='btn btn-outline  lg:w-full' type="submit" value={children} />
            </div>
        </form>
    );
};

export default ProfileForm;