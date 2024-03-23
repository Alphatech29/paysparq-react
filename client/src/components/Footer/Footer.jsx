import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaX } from "react-icons/fa6";
import footerlogo from '../../../assets/image/footer-logo.png';
import map from '../../../assets/image/map.png';
import "./Footer.css";




export default function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <div className="footer relative overflow-hidden w-full">
      <img src={map} alt="" className=' map absolute' />
      <div className="container w-full flex justify-center items-center flex-col p-20 pr-0 pb-10">
        <div className="footer-com  flex gap-x-5 justify-between items-center ">
          <div className="footer-content w-2/4 mr-20">
            <div className="footer-logo">
              <img src={footerlogo} alt="" width={250}/>
            </div>
            <p className='footer-text'>Paysparq, Nigeria's premier Cryptocurrency and Gift Card Exchange, offers secure and efficient trading. Trade Bitcoin, Ethereum, USDT, Litecoin, and popular gift cards like Amazon and Google Play. Easily send and receive international payments on one comprehensive platform.</p>
          </div>
          <div className="footer-link flex justify-center items-center flex-col w-1/3 p-8" style={{color:'#f7f7f7'}}>
            <h3 className='text-3xl font-medium mb-4 mr-6'>Product</h3>
            <ul>
              <li><a href="/giftcards">Giftcards</a></li>
              <li><a href="/page/terms-and-condition">Buy & Sell Crypto</a></li>
              <li><a href="/page/privacy-policy">Bill Payment</a></li>
              <li><a href="/How-it-work">Airtime & Data</a></li>
              <li><a href="/faqs">Refer & Earn</a></li>
              <li><a href="/contact-us">Virtual Dollar Card</a></li>
            </ul>
          </div>
          <div className="footer-link flex justify-center items-center flex-col w-1/3 p-8" style={{color:'#f7f7f7'}}>
            <h3 className="text-3xl font-medium mb-4 mr-6">Company</h3>
            <ul>
              <li className=''><a href="/about-us">About Us</a></li>
              <li><a href="/page/terms-and-condition">Terms & Conditions</a></li>
              <li><a href="/page/privacy-policy">Privacy Policy</a></li>
              <li><a href="/How-it-work">How it works</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
          
        </div>
        <div className="copyright w-full flex justify-between items-center mt-6 pt-5">
          <div className="copy-text">
            <p> ©{currentYear} Paysparq Payment Solution™. All rights reserved.</p>
          </div>
       
        <div className=" social-icon mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <ul className='flex gap-x-5'>
              <li><FaFacebook /></li>
              <li><FaInstagram /></li>
              <li><FaTiktok /></li>
              <li><FaX/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
