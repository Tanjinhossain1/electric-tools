import React from 'react';

const UserReviews = () => {
    return (
        <div className='mb-12'>
            <h1 className='text-4xl text-center text-blue-900 font-bold mb-5'>Reviews</h1>
            <div className='grid lg:grid-cols-3 w-3/4 mx-auto'>
                <div className='shadow-xl flex px-4  m-2 rounded items-center'>
                    <div class="avatar">
                        <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='user' src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title"> Kenny Koehler</h2>
                        <p>Table saws are undeniably the kings of cutting sheet goods. The concept is simple: place a solid table to spin a blade through the sawdust fly.</p>
                    </div>
                </div>
                <div className='shadow-2xl flex px-4  m-2 rounded  items-center'>
                    <div class="avatar">
                        <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='user' src="https://i.pinimg.com/originals/ea/6c/93/ea6c931c623881ecd29955db118c7742.png" />
                        </div>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title"> Josh McGaffigan</h2>
                        <p>A Storage System That Sings To a Different Tune Storage containers that hold a variety of tools and other equipment.</p>
                    </div>
                </div>
                <div className='shadow-2xl flex px-4  m-2 rounded  items-center'>
                    <div class="avatar">
                        <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='user' src="https://i.pinimg.com/236x/2d/06/d0/2d06d0861bcfb437c8d072b0fc06a648.jpg" />
                        </div>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Noelle Howe</h2>
                        <p>Give Yourself An Extra Hand When Working With Wire Striper Tools Wire Striper tools have so many uses that it's hard to keep count.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserReviews;