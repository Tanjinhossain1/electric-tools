import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
   
    return  (
        <footer className='bg-[#1e2442]'>
            <div className="footer  px-32 py-20 text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/iloveyou.tanjin/' className="link link-hover">Facebook</a>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/tanjin-hossain-56765123b/' className="link link-hover">LinkDin</a>
                </div>
                <div>
               <iframe className='w-[250px]   h-[250px]' id="gmap_canvas" src="https://maps.google.com/maps?q=bangladesh,%20narayanganj,%20Godenail&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
            <hr />
            <div className='w-3/4  mx-auto my-6 flex items-center '>
                <input type="text" placeholder="Email" class="input input-bordered input-primary w-full max-w-xs" />
                <button class="btn btn-active border-2 btn-primary">Button</button>
            </div>
            <p className='text-white text-center pb-4'>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
            <p className='text-white text-center pb-4'>Terms of Use  Privacy Policy</p>
        </footer>
    );
};

export default Footer;