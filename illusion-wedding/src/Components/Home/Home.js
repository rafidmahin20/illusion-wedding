import React from 'react';
import weddingphoto1 from '../../Images/banner/weddingphoto1.jpg'
import useService from '../Hooks/useService';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    const [services] = useService()
    return (
        <main>
            <section className='px-4 pt-10 pb-10 mx-auto max-w-7xl md:px-24'>
                <div className='h-full grid grid-cols-1 gap-20 md:grid-cols-2'>
                    <div className='order-2 md:order-1'>
                        <h1 className='text-red-500 font-bold text-4xl'>Ready to take you</h1>
                        <h1 className='text-red-500 font-bold text-4xl'>Beyond your imagination</h1>
                        <p className='text-xl font-medium'>Your each moment your each emotion is nothing but a beautiful picture and we just want to hold on those moments with our camera and make it a piece of art.
                        </p>
                    </div>
                    <div className='flex aspect-w-3 aspect-h-2 order-1 md:order-2'>
                        <img className='mx-auto object-cover cover-img' src={weddingphoto1} alt=''></img>
                    </div>
                </div>
            </section>
            <section>
            <h1 className='text-center text-4xl font-sans font-bold text-cyan-700 pt-10 pb-10'>Services</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 pt-10 pb-10'>
                {
                    services.slice(0,3).map(
                        (service, index) => <Services key={index} service={service}/>
                    )
                }
            </div>
            </section>
            <section >
                <div className='section-fourth pb-30 mt-10'>
                    <div className='flex justify-center pt-60'>
                    <button type="button" class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Contact Us</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;