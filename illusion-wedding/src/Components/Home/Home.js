import React from 'react';
import weddingphoto1 from '../../Images/banner/weddingphoto1.jpg'

const Home = () => {
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
                        <img className='mx-auto object-cover h-90 w-90' src={weddingphoto1} alt=''></img>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;