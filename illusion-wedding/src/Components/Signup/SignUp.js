import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../Firebase/Firebase.init';
import Loading from '../Loading/Loading';
import Social from '../Social/Social';

const SignUp = () => {
    const navigate = useNavigate();
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if(user){
      console.log(user);
    }
    if(loading){
      return <Loading/>
    }
    // const submitAlert =() =>{
    //   Swal.fire({
    //     position: 'top-end',
    //     icon: 'success',
    //     title: 'User Created',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    // }
    const handleSignup = event =>{
      event.preventDefault();
      // const name = event.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
     createUserWithEmailAndPassword(email, password);
      
    }
    const navigateLogin = () =>{
        navigate('/login');
    }
    return (
        <section className='mb-20'>
        <div className='flex justify-center pt-20 pb-20'>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form>
            <div className='mb-6'>
              <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-500'>Name</label>
              <input type='text' name='name' className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none p-2.5' />
            </div>
            <div className='mb-6'>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-500'>Email</label>
              <input type='email' name='email' className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none w-full p-2.5' placeholder='abcd@gmail.com' required/>
            </div>
            <div className='mb-6'>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-500'>Password</label>
              <input type='password' name='password' className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5' required/>
            </div>
            <input type='submit' className='text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center'/>
          </form>
          </div>
      </div>
      </section>
    );
};

export default SignUp;