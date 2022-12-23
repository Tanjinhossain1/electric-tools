import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheared/Loading';
import Tool from './Tool';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useFindAdmin from '../hooks/useFindAdmin';
import auth from '../../firebase.init';
const Tools = () => {
    const navigate = useNavigate();
    const [light, setLight] = useState(false);
    const [plier, setPlier] = useState(false);
    const [wire, setWire] = useState(false);
    const [meter, setMeter] = useState(false);
    const { isLoading, data: tools } = useQuery('tools', () =>
        fetch(`${process.env.REACT_APP_BACKEND_URL}tools`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading color={'#1414e3'} loading={isLoading} />
    }
    const lightCategory = tools.filter(l => l.category === 'light');
    const pliersCategory = tools.filter(p => p.category === 'pliers');
    const wireCategory = tools.filter(w => w.category === 'wire');
    const meterCategory = tools.filter(m => m.category === 'meter');

    if (tools) {
        return (
            <div className='my-20 '>
                <div className='lg:w-3/4 mx-auto '>
                    <div className='w-3/4 lg:flex items-center justify-between '>
                        <h1 className='text-3xl font-bold text-gray-600 mb-2'>Tools:</h1>
                        <button onClick={() => {
                            setPlier(false)
                            setWire(false)
                            setMeter(false)
                            setLight(true)

                        }} className={`text-xl ml-6 lg:ml-0  border-b-4 ${light && 'text-orange-500 border-b-orange-600'}`}>Lights</button>
                        <button onClick={() => {
                            setWire(false)
                            setMeter(false)
                            setLight(false)
                            setPlier(true)

                        }} className={`text-xl border-b-4 ml-8 lg:ml-0 ${plier && 'text-orange-500 border-b-orange-600'}`}>Pliers</button>
                        <button onClick={() => {
                            setPlier(false)
                            setMeter(false)
                            setLight(false)
                            setWire(true)

                        }} className={`text-xl border-b-4  mx-6 lg:mx-0  ${wire && 'text-orange-500 border-b-orange-600'}`}>Wire Cutter</button>
                        <button onClick={() => {
                            setPlier(false)
                            setWire(false)
                            setLight(false)
                            setMeter(true)

                        }} className={`text-xl border-b-4 ${meter && 'text-orange-600 border-b-orange-500'}`}>Meter</button>
                    </div>
                    <div className='grid md:grid-cols-2 '>
                        {
                            light && lightCategory.slice(0, 6).map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                        }
                        {
                            plier && pliersCategory.slice(0, 6).map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                        }
                        {
                            wire && wireCategory.slice(0, 6).map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                        }
                        {
                            meter && meterCategory.slice(0, 6).map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                        }
                        {
                            !light& !plier& !wire &!meter &&  tools.slice(0, 6).map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                        }

                    </div>

                    {
                        tools.length > 3 && <div className='flex justify-end pr-6 items-center'>
                            <button onClick={() => navigate('/allProducts')} className='text-end text-2xl font-bold text-pink-600'>See More <FontAwesomeIcon icon={faArrowRight} /> </button>
                        </div>
                    }

                </div>
            </div>
        );
    }
};

export default Tools;