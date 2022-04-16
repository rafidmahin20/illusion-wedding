import React from 'react';
import facebook from '../../Images/Footer/facebook.png'
import instagram from '../../Images/Footer/instagram.png'
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className=''>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 footer-bg'>
                <div className='text-white-500 py-5 px-5'>
                    <h3 className='footer-heading'>Illusion Wedding</h3>
                    <br/>
                    About us
                    <br/>
                    FAQs
                    <br/>
                    Terms & Conditions
                </div>
                <div className='text-white-400 py-5 px-5 mt-2 mx-auto'>
                    <h3 className='footer-info'>Follow us on</h3>
                    <div>
                        <img src={facebook} alt=""></img>
                        <img className='' src={instagram} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;