import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Sheared/Loading';
import ProfileForm from './ProfileForm';
import ProfileUpdateForm from './ProfileUpdateForm';

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { isLoading, data: profile, refetch } = useQuery(['profile'], () =>
    fetch(`http://localhost:5000/profile?email=${user?.email}`).then(res =>
      res.json()
    )
  )
  if (isLoading) {
    return <Loading loading={isLoading} color={'#af13d6'}></Loading>
  }
  if (!profile) {
    return <Loading loading={!profile} color={'#b51b7d'}></Loading>
}
console.log(profile)
  const { education, location, number, linkDin } = profile[0];
  return (
    <div className='grid lg:grid-cols-2'>
      <div className='sm:space-y-reverse'>
        {profile.length === 0 ?
          <ProfileForm profile={profile}>Add Profile</ProfileForm> :
          <ProfileUpdateForm refetch={refetch} profile={profile}>Update Profile</ProfileUpdateForm>
        }
      </div>
      <div className='p-4 '>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Education: {education}</h2>
            <p className='text-xl'>Location: {location}</p>
            <p className='text-xl'>Number: {number}</p>
            <p className='text-xl'>LinkDin Profile: <a className='text-blue-700 font-bold' target='_blank' rel='noreferrer' href={linkDin}>{linkDin}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;