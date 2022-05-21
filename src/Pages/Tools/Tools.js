import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheared/Loading';
import Tool from './Tool';

const Tools = () => {
    const { isLoading, data: tools } = useQuery('tools', () =>
        fetch('tools.json').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading color={'#1414e3'} loading={isLoading} />
    }

    return (
        <div>
            <div  className='w-3/4 mx-auto my-12 '>
                <h1 className='text-3xl font-bold text-gray-600 mb-8'>Tools</h1>
                <div className='grid lg:grid-cols-2 '>
                    {
                        tools.map((tool, index) => <Tool key={index} tool={tool}></Tool>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tools;