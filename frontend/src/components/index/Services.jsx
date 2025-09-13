import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, Monitor, Headphones,Truck, ShoppingCart } from "lucide-react";

const ArrowUpIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

import Image1 from "../../assets/images/image.jpg";
import Image2 from "../../assets/images/image5.jpg";
import Image3 from "../../assets/images/image7.jpg";
import Image4 from "../../assets/images/azuz.jpg";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ SvgIcon, num, Img, title, par }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#47B2E4] to-[#293751] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

      {/* Header */}
      <div className="relative p-4 pb-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-[#47B2E4] to-[#293751] shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <SvgIcon className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#47B2E4] to-[#293751] shadow-md">
            <span className="text-white font-bold text-sm">{num}</span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative px-4 pb-3">
        <div className="relative overflow-hidden rounded-xl group-hover:rounded-2xl transition-all duration-500">
          <img
            src={Img}
            alt={title}
            className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#47B2E4] group-hover:to-[#293751] transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3">
          {par}
        </p>

<a
  href="https://wa.me/250786136396"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#47B2E4] to-[#293751] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
>
  <span className="mr-2 text-sm">Contact Kalinga at contact Above</span>
  <ArrowUpIcon className="w-3 h-3 transform rotate-45 transition-transform duration-300" />
</a>
       
      </div>
    </motion.div>
  );
};

const Services = () => {
  const Services = [
      {
    num: "01",
    icon: Monitor,
    img: Image1,
    title: "Computer Sales (New & Used)",
    des: "We sell both brand new and second-hand computers, along with all essential accessories."
  },
  {
    num: "02",
    icon: ShoppingCart,
    img: Image2,
    title: "Computer Buying (New & Used)",
    des: "Looking to sell your computer? We buy both brand new and second-hand computers and offer fair, instant cash returns.",
  },
  {
    num: "03",
    icon: Gamepad2,
    img: Image3,
    title: "PlayStation Sales & Purchase",
    des: "Buy and sell second-hand PlayStation consoles and accessories. Explore the latest devices for an immersive gaming experience.",
  },
{
  num: "04",
  icon:  Truck, // you can replace with a Truck icon if you want 🚚
  img: Image4,
  title: "Shipping Service",
  des: "We provide reliable and fast shipping services for your devices, ensuring safe delivery right to your doorstep.",
},

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 mt-8">
      <div className="max-w-9xl mx-auto -mb-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#47B2E4] to-[#293751] mb-2 -mt-12">
            Services
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2 mt-2">
            Discover Our Electronics Solutions
          </h3>
          <p className="text-gray-600 max-w-2xl -mb-6 mx-auto text-lg leading-relaxed">
            Computers, PlayStations, second-hand buying, top-up, and accessories – everything you need in one place.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <ServiceCard
                SvgIcon={service.icon}
                num={service.num}
                Img={service.img}
                title={service.title}
                par={service.des}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
