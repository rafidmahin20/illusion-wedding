import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import Loading from "../Loading/Loading";
import Social from "../Social/Social";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passRef = useRef("");
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

//   let from = location.state?.from?.pathname || "/";
//   let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigateRegister = () => {
    navigate("/signup");
  };
  if (user) {
    navigate(from, {replace: true});
  }
//   if (error) {
//     errorElement = <p className="text-red-400">Error: {error?.message}</p>;
//   }
  if (loading) {
    return <Loading />;
  }
  const handleLogin = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email,password);
    signInWithEmailAndPassword(email, password);
  };
  return (
    <section className="mb-20">
      <div className="flex justify-center pt-20 pb-20 login-container">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Email
              </label>
              <input
              ref={emailRef}
                type="email"
                name="email"
                className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none w-full p-2.5"
                placeholder="abcd@gmail.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Password
              </label>
              <input
              ref={passRef}
                type="password"
                name="password"
                className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5"
                required
              />
            </div>
            <input
              type="submit"
              className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3 disabled:bg-blue-400 cursor-pointer disabled:cursor-not-allowed disabled:text-white"
              value="Login"
            />
            <p className="text-gray-800 mt-6 text-center">Already a member? <a onClick={ navigateRegister} href="#!"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Please Register</a></p>
            <Social />
            {/* {errorElement} */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
