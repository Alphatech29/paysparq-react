import React from "react";
import { Button } from "flowbite-react";
import rocketpng from "../../../assets/image/rocket.png";
import tgbgcypsvg from "../../../assets/image/tg-bg-cyp.svg";
import tgbgcyp2svg from "../../../assets/image/tg-bg-cyp2.svg";
import coin89 from "../../../assets/image/coin89.png";
import feature4 from "../../../assets/image/feature-4.png";
import providers from "../../../assets/image/providers.png";
import "./Home.css";
import { FaCircleCheck } from "react-icons/fa6";




export default function Home() {
  return (
    <div className="section flex flex-col">
      <div
        className="hero bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url(assets/image/paysparq-bg.svg)" }}
      >
        <div className="container items-center justify-center flex">
          <div className="content items-center justify-center flex flex-col  w-3/4">
            <h1
              className="hero-title font-bold text-4xl text-center font-sans"
              style={{ color: "#ffff" }}
            >
              Your Gateway to Global Transactions, Gift Card Trading, and
              Cryptocurrency Brilliance!
            </h1>
            <p className="pStyle text-center font-sans pt-5">
              Paysparq, Nigeria's premier Cryptocurrency and Gift Card Exchange,
              offers secure and efficient trading. Trade Bitcoin, Ethereum,
              USDT, Litecoin, and popular gift cards like Amazon and Google
              Play. Easily send and receive international payments on one
              comprehensive platform.
            </p>
            <div className="content-btn pt-5 flex space-x-6">
              <Button className="cursor-pointer px-5">Getstarted</Button>
              <Button color="warning" className="cursor-pointer px-5">
                Chect Rate
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="send p-20">
        <div className="content flex justify-center items-center">
          <div className="content-img w-2/4"></div>
          <div className="content-text w-2/4 justify-center items-center flex flex-col">
            <h1
              className="text-center text-4xl font-bold"
              style={{ color: "#043d4b" }}
            >
              Send Money Directly to Bank and Mobile Money Accounts in 21+
              African Countries
            </h1>
            <p className="pt-3 font-medium" style={{ color: "#043d4b" }}>
              Effortless Money Transfers, Simplifying Sending Funds Back Home.
            </p>
            <div className="content-span pt-6 flex justify-center items-center space-x-2 ">
              <a href="" className="flex justify-center items-center space-x-2">
                {" "}
                <span></span>
                <h5>Choose Paysparq</h5>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="trade p-16">
        <div
          class="container flex space-x-3 justify-between items-center bg-cover bg-center bg-no-repeat py-5 px-10 rounded-2xl "
          style={{ backgroundImage: "url(assets/image/tg-bg.svg)" }}
        >
          <div className="content-text w-30">
            <h2
              className="font-bold"
              style={{ fontSize: "2.5rem", color: "#043d4b" }}
            >
              Enjoy Seamless Giftcard Trading
            </h2>
            <p
             className="mt-3 mb-4 font-medium"
              style={{
                fontSize: "15.5px",
                color: "#043d4b",
                marginBottom: "2rem",
              }}
            >
              Trade Giftcards from over 20 countries around the world.
            </p>
            <Button className="cursor-pointer px-5">Learn more</Button>
          </div>
          <div className="rocket-img w-2/4">
            <img src={rocketpng} alt="" />
          </div>
          <div className="trade w-2/5">
            <ul className="flex flex-col gap-y-3">
              <li className="flex justify-start items-center gap-x-3">
                <FaCircleCheck />
                Smooth payment
              </li>
              <li className="flex justify-start items-center gap-x-3">
                <FaCircleCheck />
                On-the-go solutions
              </li>
              <li className="flex justify-start items-center gap-x-3">
                <FaCircleCheck />
                Best rates
              </li>
              <li className="flex justify-start items-center gap-x-3">
                <FaCircleCheck />
                Swift transactions
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="coin bg-cover bg-no-repeat p-20" style={{backgroundImage: `url(${tgbgcypsvg})`}}>
        <div className="container flex justify-center items-center">
          <div className="content w-2/4">
            <h2 className="text-4xl font-bold pb-5" style={{color:'#024A57'}}>All-In-One Cryptocurrency Exchange for Your Trading Needs</h2>
            <p className="mb-5">
              Experience fee-free trading with our platform offering instant
              payments, secure device authorization, 24/7 customer support, an
              unmatched help center addressing all queries, and real-time price
              updates. Embrace a seamless and secure cryptocurrency journey –
              all in one place.
            </p>
            <Button className="cursor-pointer px-5">Trade your cryptocurrency with Paysparq</Button>
          </div>
          <div className="content w-2/4 justify-end flex">
          <img src={coin89} alt="coin89" width={400} />
          </div>
        </div>
      </div>

      <div className="coin bg-cover bg-no-repeat p-20" style={{backgroundImage: `url(${tgbgcyp2svg})`}}>
        <div className="container flex justify-center items-center">
          <div className="content w-2/4 justify-center flex pr-7">
          <img src={feature4} alt="feature4" width={500} />
          </div>
          <div className="content w-2/4">
            <h2 className="text-4xl font-bold pb-5" style={{color:'#024A57'}}>Exchange your unused Giftcard for value</h2>
            <p className="mb-5">
            Discover the convenience of our 24/7 service, ensuring quick and hassle-free transactions. Join us today to experience the most professional and efficient way to access your cash instantly, providing you with swift financial solutions around the clock.
            </p>
            <div className="gift mb-4">
                    <ul>
                        <li className="flex items-center justify-start gap-x-3"><FaCircleCheck />Seamless Giftcard Transactions</li>
                        <li className="flex items-center justify-start gap-x-3"><FaCircleCheck />High Exchange Rates and Price</li>
                        <li className="flex items-center justify-start gap-x-3"><FaCircleCheck />Fast Loading and Payment</li>
                        <li className="flex items-center justify-start gap-x-3"><FaCircleCheck />24/7 customer service</li>
                    </ul>
                   </div>

                   <Button className="cursor-pointer px-5">Giftcard to instant cash with Paysparq</Button>
             
          </div>
        </div>
      </div>

      <div className="data flex flex-col justify-center items-center p-20">
    <div className="container flex flex-col justify-center items-center">
        <div className="data-com flex flex-col justify-center items-center">
            <div className="data-content flex flex-col justify-center items-center">
                <h1 className="text-center  font-bold mb-10">More than <span>30+</span> service providers and brands are linked to Paysparq.
                    </h1>
            </div>
            <div className="data-image">
                <img src={providers} alt="providers" width={1100} height={700} />
            </div>
        </div>
    </div>
</div>


    </div>
  );
}
