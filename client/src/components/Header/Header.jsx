import React from "react";
import { Button, Navbar, Dropdown } from "flowbite-react";
import { FaArrowRightArrowLeft, FaBitcoin, FaCodeBranch, FaCodepen, FaFileInvoice, FaGift, FaGlobe, FaPhone, FaStackExchange } from "react-icons/fa6";
import paysparqLogo from "../../../assets/image/paysparq-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <Navbar className="fixed rounded-3xl right-10 left-10 top-4 sm:px-12 sm:py-2 mt-30 z-10  bor">
      <Navbar.Brand href="/">
        <img src={paysparqLogo} className="w-36" alt="paysparq-logo" />
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link className="menu-link" href="/" active>
          Home
        </Navbar.Link>
        <Dropdown className="drop mt-4 rounded-2xl" label="Products" inline>
          <div className="pro-container flex flex-wrap  gap-6 p-5">
            <div className="sub-menu">
              <h6 className=" sub-titl mb-4">Payments</h6>
              <ul className="flex flex-col gap-5">
              <a href="#">
              <li class="flex justify-start items-center">
                  <span class="icoin mr-4 rounded-3xl">
                  <FaArrowRightArrowLeft />
                  </span>
                  <div class="">
                    <h5 className="menu-text">Send & Receive Cash</h5>
                    <p className=" menu-subtext">Cash Transfer in Few Taps</p>
                  </div>
                </li>
              </a>
              <a href="#">
              <li class="flex justify-start items-center">
                  <span class="icoin mr-4 rounded-3xl">
                  <FaGlobe />
                  </span>
                  <div class="">
                    <h5 className="menu-text">International Payment</h5>
                    <p className="menu-subtext">Send and receive funds globally</p>
                  </div>
                </li>
              </a>
              </ul>
            </div>
            <div className="sub-menu">
              <h6 className=" sub-titl mb-4">Trade</h6>
              <ul className="flex flex-col gap-5">
               <a href="#">
               <li class="flex justify-start items-center">
                  <span class="icoin mr-4 rounded-3xl">
                  <FaGift />
                  </span>
                  <div class="">
                    <h5 className="menu-text">Giftcards</h5>
                    <p className=" menu-subtext">Exchange gift cards for cash</p>
                  </div>
                </li>
               </a>
               <a href="#">
               <li class="flex justify-start items-center">
                  <span class="icoin mr-4 rounded-3xl">
                  <FaBitcoin />
                  </span>
                  <div class="">
                    <h5 className="menu-text">Crypto</h5>
                    <p className="menu-subtext">Buy, sell, send & receive</p>
                  </div>
                </li>
               </a>
              </ul>
            </div>
            <div className="sub-menu">
              <h6 className=" sub-titl mb-4">Business/api</h6>
              <ul className="flex flex-col gap-5">
               <a href="#">
               <li class="flex justify-start items-center">
                  <span class="icoin mr-4 rounded-3xl">
                  <FaCodeBranch />
                  </span>
                  <div class="">
                    <h5 className="menu-text">Paysparq API</h5>
                    <p className=" menu-subtext">Streamlined payments, scalable</p>
                  </div>
                </li>
               </a>
              <a href="#">
              <li class="flex justify-start items-center">
                  <span class="icoin mr-4 rounded-3xl">
                  <FaCodepen />
                  </span>
                  <div class="">
                    <h5 className="menu-text">Aitime Gateway</h5>
                    <p className="menu-subtext">Integrate Airtime API, receive online payments</p>
                  </div>
                </li>
              </a>
              </ul>
            </div>
            <div className="sub-menu mt-10">
              <h6 className=" sub-titl mb-4">Features</h6>
              <ul className="flex flex-col gap-5">
               <a href="#">
               <li class="flex justify-start items-center">
                  <span class="icoin mr-4 rounded-3xl">
                  <FaPhone/>
                  </span>
                  <div class="">
                    <h5 className="menu-text">Airtime</h5>
                    <p className=" menu-subtext">Airtime instantly, at a discount</p>
                  </div>
                </li>
               </a>
                <a href="#">
                <li class="flex justify-start items-center">
                  <span class="icoin mr-4 rounded-3xl">
                  <FaFileInvoice />
                  </span>
                  <div class="">
                    <h5 className="menu-text">Bill Pay</h5>
                    <p className="menu-subtext">Scale your payments effortlessly</p>
                  </div>
                </li>
                </a>
             <a href="#">
             <li class="flex justify-start items-center">
                  <span class="icoin mr-4 rounded-3xl">
                  <FaStackExchange />
                  </span>
                  <div class="">
                    <h5 className="menu-text">Airtime To Cash</h5>
                    <p className="menu-subtext">Instantly convert airtime to cash</p>
                  </div>
                </li>
             </a>
              </ul>
            </div>
          </div>
        </Dropdown>
        <Navbar.Link className="menu-link" href="/about">
          About Us
        </Navbar.Link>
        <Navbar.Link className="menu-link" href="/contact">
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
      <Button className="px-4">Get started</Button>
    </Navbar>
  );
}
