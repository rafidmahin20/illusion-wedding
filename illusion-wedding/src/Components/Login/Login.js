import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../Firebase/Firebase.init';
import Loading from '../Loading/Loading';
import Social from '../Social/Social';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passRef = useRef('');
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigateRegister = () =>{
        navigate('/signup');
    }
    if(user){
        navigate(from, {replace: true});
    }
    if(error){
        errorElement = <p className='text-red-400'>Error: {error?.message}</p>
    }
    if(loading){
        return <Loading/>
    }
    const submitAlert = () =>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Completed',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const handleLogin = event =>{
        event.preventDefault();
        const email = emailRef.current.valueOf;
        const password = passRef.current.valueOf;
        signInWithEmailAndPassword(email,password);
    }
    return (
        <section className='mb-20'>
            <div className='flex justify-center pt-20 pb-20 login-container'>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-6">
                    <label  className="form-label inline-block mb-2 text-gray-700">Email address</label>
                    <input  
                    ref={emailRef}
                    type="email" className="form-control
                        block
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                        aria-describedby="emailHelp" placeholder="Enter email" required/>
                    </div>
                    <div className="form-group mb-6">
                    <label className="form-label inline-block mb-2 text-gray-700">Password</label>
                    <input 
                    ref={passRef}
                    type="password" className="form-control block
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                        placeholder="Password" required/>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                        <input type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"/>
                        <label className="form-check-label inline-block text-gray-800" >Remember me</label>
                    </div>
                    <a href="#!"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
                        password?</a>
                    </div>
                    <button
                    onClick={submitAlert}
                    type="submit" className="
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
                    ease-in-out">Sign in</button>
                    <p className="text-gray-800 mt-6 text-center">Not a member? <a onClick={ navigateRegister} href="#!"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</a>
                    </p>
                    <Social/>
                    {errorElement}
                </form>
                
            </div>
        </div>
        </section>
    );
};

export default Login;