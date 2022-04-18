import React from 'react';
import { useParams } from 'react-router-dom';


const CheckOut = () => {
   const {serviceId} = useParams();
    // const navigate = useNavigate();
    return (
        <div>
            <h2 className='text-center text-4xl font-bold text-blue-500'>Checkout Page:{serviceId} </h2>
        </div>
    );
};

export default CheckOut;