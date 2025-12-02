import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import Navtwo from "./Navtwo";

const Home = () => {
  return (
   <div className="flex-col justify-center  items-center">
    <Navtwo/>
     <div id="home" className="">
      <div className="bg-[#EAEFEE] justify-between lg:px-15   flex flex-col lg:flex-row items-center  w-[97vw] 
      h-screen lg:h-[83vh] rounded-4xl   mx-auto my-2">
        <div className="left flex  lg:justify-start justify-center  items-start lg:items-center h-full lg:w-1/3">
          <div className="one flex lg:gap-10 gap-2 flex-col justify-start items-center lg:items-start">
            <div className="heading text-4xl pt-10 lg:pt-0 lg:text-6xl  font-black">
              The Most  
              Inspiring
            </div>
            <div className="two  lg:hidden  justify-center flex items-center h-full lg:w-1/3">
        <img src="/images/home.png" className="h-[40vh]" alt="" />
        </div>
            <div className="detail flex justify-center items-center gap-5">
              <div className="text-8xl hollow">01</div>
              <div>
                <div className="text-3xl font-semibold">Clear Sounds</div>
                <div>
                  Making your dream music come <br /> true with our best
                  products.
                </div>
              </div>
            </div>

            
           <Link to="/products">
            <button className="bg-[#DCFF75] my-3 hover:scale-105 group flex justify-evenly transition-all items-center  font-medium lg:w-[20vw] w-[58vw] py-5 rounded-4xl">
              <div className="px-5">View all products</div>
              <div className= " bg-black group-hover:p-3 transition-all rounded-full p-2">
                <MdArrowOutward  className="text-white w-4 h-4" />
              </div>
            </button>
            </Link>
          </div>
        </div>
        <div className="two  hidden lg:flex justify-center flex items-center h-full lg:w-1/3">
        <img src="/images/home.png" alt="" />
        </div>
        <div className="three hidden lg:flex flex-col justify-center gap-10 items-center h-full lg:w-1/3 ">
                <div>
                    <div className="text-3xl font-semibold">Most Selling</div>
                <div>
                  Making your dream music come true <br /> with our best
                  products.
                </div>
                </div>
                <div>
                    <div className="text-3xl font-semibold">Excellent Quality</div>
                <div>
                  Making your dream music come true <br /> with our best
                  products.
                </div>
                </div>
                <div>
                    <div className="text-3xl font-semibold">Affordable Prices</div>
                <div>
                  Making your dream music come true <br /> with our best
                  products.
                </div>
                </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Home;
