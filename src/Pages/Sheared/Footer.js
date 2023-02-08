import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
   
    return  (
       <div className='bg-[#1e2442] '> 
         {/* <div className="xl:h-[200px] mt-[-100px] mx:0 ml:0 xl:w-[1200px] mx-auto none lg:block bg-black bg-gradient-to-r from-[#9907ed] via-[#326efa] to-[#6f97f2] text-white" >
             <h1>
                ooo
             </h1>
        </div>   */}
         <footer className='bg-[#1e2442]  '>

            <div className="footer py-32 px-32  text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/contactUs' className="link link-hover">About us</Link>
                    <Link to='/contactUs' className="link link-hover">Contact</Link>
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
                    <h3 className='footer-title text-white mx-32 mb-12'>FEATURE THIS SITE</h3>
                <div className='footer mb-20 px-32 text-neutral-content' >
                    <div> 
                    <Link to='/allProducts' className="link link-hover">PRODUCTS</Link>
                    <Link to='/dashboard' className="link link-hover">DASHBOARD</Link>
                    <Link to='/addProduct' className="link link-hover">ADD PRODUCT</Link>
                    <Link to='/manageProducts' className="link link-hover">MANAGE PRODUCTS</Link>
                    <Link to='/myProfile' className="link link-hover">MY PROFILE</Link> 
                    </div>
                    <div>  
                    <Link to='/loign' className="link link-hover">LOIGN</Link>
                    <Link to='/signUp' className="link link-hover">SINGUP</Link>
                    <Link to='/addReview' className="link link-hover">ADD REVIEW</Link>
                    <Link to='/blog' className="link link-hover">BLOG</Link>
                    <Link to='/myPortfolio' className="link link-hover">MY PORTFOLIO</Link> 
                    </div>
                    <div>  
                    <Link to='/myOrders' className="link link-hover">MY ORDERS</Link>
                    <Link to='/home' className="link link-hover">HOME</Link>
                    <a target="_blank" href='https://www.linkedin.com/in/tanjin-hossain-56765123b/' className="link link-hover">LINKEDIN</a>
                    <a target="_blank" href='https://github.com/Tanjinhossain1' className="link link-hover">GITHUB</a> 
                    <a target="_blank" href='https://www.facebook.com/iloveyou.tanjin/' className="link link-hover">FACEBOOK</a>  
                    </div>
                    <div>  
                    <a target="_blank" href='https://furnitures.vercel.app/' className="link link-hover">FURNITURE</a>   
                    <a target="_blank" href='https://review-bike.netlify.app/' className="link link-hover">BIKE REVIEW</a>   
                    <a target="_blank" href='https://gym-trainer-a4e7b.web.app/' className="link link-hover">GYM TRAINER</a>   
                    <a target="_blank" href='https://doctor-portal-1de28.web.app/' className="link link-hover">DOCTOR PORTAL</a>   
                    <a target="_blank" href='https://books-warehouse-edfd7.web.app/' className="link link-hover">BOOK WAREHOUSE</a>    
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
       </div>
    );
};

export default Footer;