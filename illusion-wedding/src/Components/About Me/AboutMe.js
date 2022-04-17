import React from 'react';
import me from '../../Images/me.jpg'

const AboutMe = () => {
    return (
        <div className='px-4 pt-10 pb-10 mx-auto max-w-7xl md:px-24'>
            <div className='h-full grid grid-cols-1 gap-20 md:grid-cols-2'>
                <div className='order-2 md:order-1'>
                    <p className='text-xl font-medium'>
                        - I want to be a front-end developer in future. Thats my dream that's why i joined this course and gain skill so that i can apply in different companies. In next 4/5 months i want to see myself doing an internship or job at any company. & in next 2/3 yrs i want to see myself leading a project for my client. That's my goal.
                    </p>
                </div>
                <div className='flex aspect-w-3 aspect-h-2 order-1 md:order-2'>
                <img className='mx-auto object-cover h-90 w-90' src={me} alt=''></img>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;