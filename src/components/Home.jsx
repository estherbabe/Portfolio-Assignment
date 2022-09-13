import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 "
    >
      <div>
        <div>
          <h2>I'm a Frontend Developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            et tortor vulputate, venenatis diam et, rutrum dui. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>

          <div>
            <button>
              Porfolio
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
