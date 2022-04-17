import React from 'react';
import { useNavigate } from 'react-router-dom';
import Social from '../Social/Social';

const SignUp = () => {
    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login');
    }
    return (
        <section className='mb-20'>
        <div className='flex justify-center pt-20 pb-20'>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group mb-6">
                <input type="text" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                  placeholder="name"/>
                </div>
              </div>
              <div className="form-group mb-6">
                <input type="email" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                  placeholder="Email address"/>
              </div>
              <div className="form-group mb-6">
                <input type="password" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                  placeholder="Password"/>
              </div>
              <button type="submit" className="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out">Sign up</button>
                <p className="text-gray-800 mt-6 text-center">Already registered? <a onClick={ navigateLogin} href="#!"
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Please Login</a>
                </p>
                <Social/>
            </form>
          </div>
      </div>
      </section>
    );
};

export default SignUp;