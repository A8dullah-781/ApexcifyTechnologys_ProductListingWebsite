import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import Navtwo from "./Navtwo";

const Home = () => {
  return (
   <div>
    <Navtwo/>
     <div id="home" className="mt-[14vh]">
      <div className="bg-[#EAEFEE] justify-between px-15 flex items-center  w-[97vw] h-[83vh] rounded-4xl   m-4">
        <div className="left flex justify-start   items-center h-full w-1/3">
          <div className=" flex gap-10 flex-col">
            <div className="heading text-6xl  font-black">
              The Most <br /> 
              Inspiring
            </div>
            <div className="detail flex justify-center items-center gap-3">
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
            <button className="bg-[#DCFF75] hover:scale-105 group flex  transition-all items-center  font-medium w-[18vw] h-[8vh] rounded-4xl">
              <div className="px-5">View all products</div>
              <div className= " ml-3 bg-black group-hover:p-3 transition-all rounded-full p-2">
                <MdArrowOutward  className="text-white w-4 h-4" />
              </div>
            </button>
            </Link>
          </div>
        </div>
        <div className=" justify-center flex items-center h-full w-1/3">
        <img src="/images/home.png" alt="" />
        </div>
        <div className=" flex flex-col justify-center gap-10 items-center h-full w-1/3 ">
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
