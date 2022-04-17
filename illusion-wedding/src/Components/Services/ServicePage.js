import React from 'react';
import useService from '../Hooks/useService';
import Services from './Services';

const ServicePage = ({service}) => {
    const [services] = useService()
    return (
        <div>
            <h1 className='text-center text-4xl font-sans fony-bold text-cyan-700 pb-20 pt-10'>Our Packages</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-10'>
                {
                    services.map(service => <Services service = {service}/>)
                }
            </div>
        </div>
    );
};

export default ServicePage;