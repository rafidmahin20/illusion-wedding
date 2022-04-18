import React from 'react';
import { useParams } from 'react-router-dom';


const CheckOut = () => {
   const {serviceId} = useParams();
    // const navigate = useNavigate();
    return (
        <main>
        <div>
            <h2 className='text-center text-4xl font-bold text-blue-500'>Checkout Page:{serviceId} </h2>
        </div>
        <section className='mb-20'>
        <div className='flex justify-center pt-20 pb-20'>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form >
            <div className='mb-6'>
              <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-500'>Name</label>
              <input type='text' name='name' className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none p-2.5' />
            </div>
            <div className='mb-6'>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-500'>Email</label>
              <input type='email' name='email' className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none w-full p-2.5' placeholder='abcd@gmail.com' required/>
            </div>
            <div className='mb-6'>
              <label htmlFor='text' className='block mb-2 text-sm font-medium text-gray-500'>Address</label>
              <input type='text' name='password' className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5' required/>
            </div>
            <input type='submit' className='text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3 disabled:bg-blue-400 cursor-pointer disabled:cursor-not-allowed disabled:text-white' value='Proceed' />
            
            
          </form>
        </div>
      </div>
      </section>
      </main>
    );
};

export default CheckOut;