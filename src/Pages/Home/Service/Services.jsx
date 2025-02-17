import Card from "../../../Components/Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
// import { useState } from "react";
import image from "../../../assets/1JktzC9GrA_l4yz0cCy8a5Q.jpg";
import AnimatedButton from "../../../Components/AnimatedButton/AnimatedButton";
import HeadLine from "../../../Shared/HeadLine/HeadLine";

const Services = () => {
  // const [hovered, setHovered] = useState(false);
  return (
    <div className="bg-white pt-32">
      {/* Service Section */}
      <section>
        <div className="container mb-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <HeadLine
              className="md:mx-auto text-center lg:max-w-2xl md:mb-12"
              title="Service"
              subTitle="Our Service Area"
              paragraph=" The Majority Have Suffered Alteration In Some Form, By Injected
                Humour, Or Randomised Words Which Don't Look Even Slightly
                Believable."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              <Card title="Engine Diagnostics" image={image} price="20" />
              <Card title="Engine Diagnostics" image={image} price="30" />
              <Card title="Engine Diagnostics" image={image} price="40" />
              <Card title="Engine Diagnostics" image={image} price="10" />
              <Card title="Engine Diagnostics" image={image} price="50" />
              <Card title="Engine Diagnostics" image={image} price="30" />
              <Card title="Engine Diagnostics" image={image} price="60" />
            </div>
            <AnimatedButton primaryColor="#ff3811" secondaryColor="black" />
          </div>
        </div>
      </section>
      {/* <section className="mt-10 px-4 sm:px-6 lg:px-8">
        <p>Responsive content</p>
      </section> */}
    </div>
  );
};

export default Services;
