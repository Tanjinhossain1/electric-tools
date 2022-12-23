import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Sheared/Loading';
import Tool from '../Tools/Tool';

const AllProducts = () => {
    const navigate = useNavigate();
    const [toolSearch,setToolSearch] = useState(null)
    const { isLoading, data: tools } = useQuery('tools', () =>
        fetch(`${process.env.REACT_APP_BACKEND_URL}tools`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading color={'#1414e3'} loading={isLoading} />
    }
    const searchingTool = tools.filter(t=>t.name.toLowerCase().includes(toolSearch))
    console.log(tools, 'tools')
    if (tools) {
        return (
            <div className='my-20 '>
                <div className='w-3/4 mx-auto '>
                    <div className='flex justify-between'>
                        <h1 className='text-3xl font-bold text-gray-600 mb-2'>Tools:</h1>
                        <form>
                            <input onChange={(e)=>setToolSearch(e.target.value)} placeholder='Search Tools' className='input input-bordered input-primary w-[500px] max-w-xs' type="search" name="" id="" />
                            <input className='btn btn-active btn-primary' type="submit" value="Search" />
                        </form>
                    </div>

                    <div className='grid lg:grid-cols-2 '>
                       {
                        toolSearch ?
                            searchingTool.map((tool, index) => <Tool key={index} tool={tool}></Tool>)
                        :tools.map((tool, index) => <Tool key={index} tool={tool}></Tool>)
                       }
                    </div>

                    {/* <div className='flex justify-end pr-6 items-center'>
                        <button onClick={() => navigate('/allProducts')} className='text-end text-2xl font-bold text-pink-600'>See More <FontAwesomeIcon icon={faArrowRight} /> </button>
                    </div> */}

                </div>
            </div>
        );
    }
};

export default AllProducts;