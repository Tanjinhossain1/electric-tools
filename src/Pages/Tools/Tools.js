import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheared/Loading';
import Tool from './Tool';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useFindAdmin from '../hooks/useFindAdmin';
import auth from '../../firebase.init';
const Tools = () => {
    const navigate = useNavigate();
    const user = useAuthState(auth)
    const [admin] = useFindAdmin(user);
    const { isLoading, data: tools } = useQuery('tools', () =>
        fetch(`https://mighty-ridge-59560.herokuapp.com/tools`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading color={'#1414e3'} loading={isLoading} />
    }
    console.log(tools, 'tools')
    if (tools) {
        return (
            <div className='my-20 '>
                <div className='w-3/4 mx-auto '>
                    <h1 className='text-3xl font-bold text-gray-600 mb-2'>Tools:</h1>
                    <div className='grid lg:grid-cols-2 '>
                        {
                            tools.slice(0, 4).map((tool, index) => <Tool key={index} tool={tool}></Tool>)
                        }
                    </div>

                    {
                        tools.length > 3 && <div className='flex justify-end pr-6 items-center'>
                            <button onClick={() => navigate('/dashboard/allProducts')} className='text-end text-2xl font-bold text-pink-600'>See More <FontAwesomeIcon icon={faArrowRight} /> </button>
                        </div>
                    }

                </div>
            </div>
        );
    }
};

export default Tools;