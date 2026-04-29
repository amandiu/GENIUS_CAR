import { FaStar } from "react-icons/fa";
import product1 from "../../../assets/product1.jpg";
import product2 from "../../../assets/product2.jpg";
import product3 from "../../../assets/product3.jpg";
import product4 from "../../../assets/product4.jpg";
import AnimatedButton from "../../../Components/AnimatedButton/AnimatedButton";
import HeadLine from "../../../Shared/HeadLine/HeadLine";

const carProducts = [
  {
    id: 1,
    name: "Car Engine Plug",
    price: "$25.99",
    image: product1,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Car Air Filter",
    price: "$45.99",
    image: product2,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Cools LED Light - Premium",
    price: "$35.49",
    image: product3,
    rating: 4.6,
  },
  {
    id: 4,
    name: "Cools LED Light - Standard",
    price: "$29.99",
    image: product4,
    rating: 3,
  },
];

const CarProductCard = ({ product }) => {
  return (
    <div className="p-6 h-[450px] rounded-2xl shadow-lg bg-gradient-to-b from-gray-800 to-black text-center transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center border border-gray-700 relative overflow-hidden group">
      <div className="w-full h-[70%] overflow-hidden rounded-lg border-2 border-gray-600 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h3 className="text-xl font-semibold text-white mt-4 uppercase tracking-wide group-hover:text-[#FF3811] transition-colors duration-300">
        {product.name}
      </h3>
      <div className="flex justify-center items-center gap-1 mt-2">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-5 h-5 ${
              index < Math.floor(product.rating) ? "text-[#FF3811]" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-lg font-extrabold text-[#FF3811] mt-5 transition-transform duration-300 transform group-hover:translate-y-2 group-hover:opacity-0">
        {product.price}
      </p>
      <button className="absolute bottom-5 bg-[#FF3811] text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-6 transition-all duration-300 shadow-md hover:bg-white hover:text-[#FF3811]">
        View Details
      </button>
    </div>
  );
};

const PopulerProducts = () => {
  return (
    <div className="py-20 md:px-16 lg:px-28 text-center bg-gradient-to-b from-white via-teal-200 to-pink-100 shadow-lg mb-20">
      <HeadLine
        title="Popular Products"
        subTitle="Browse Our Best Sellers"
        className="mt-20 px-8 md:px-32"
        paragraph="Discover our top-rated automotive accessories designed to enhance your driving experience with quality and performance."
      />
      <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {carProducts.map((product) => (
          <CarProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <AnimatedButton
          primaryColor="#FF3811"
          secondaryColor="#000000"
          className="px-8 py-3 text-lg font-bold tracking-wide border-2 border-[#FF3811] hover:bg-[#FF3811] hover:text-white transition-all duration-300 shadow-lg"
        />
      </div>
    </div>
  );
};

export default PopulerProducts;
