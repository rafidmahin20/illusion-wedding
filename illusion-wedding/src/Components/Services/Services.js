import React from "react";
import { useNavigate } from "react-router-dom";

const Services = ({service}) => {
  const { id, name, picture, price, short_description } = service;
  const navigate = useNavigate();
  const navigateToCheckout = id =>{
      navigate(`/service/checkout/${id}`);
  }
  return (
    <div>
      <div className="flex justify-center pb-10">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              className="rounded-t-lg"
              src= {picture}
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Name: {name}
            </h5>
            <h4 className="text-gray-900 text-xl font-medium mb-2">
              Price: {price}
            </h4>
            <p className="text-gray-700 text-base mb-4">
              Details: {short_description}
            </p>
          
           <button
              onClick={() => navigateToCheckout(id)}
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Book Now
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
