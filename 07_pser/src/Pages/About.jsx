import React, { useEffect } from "react";
import Typed from "typed.js";

const About = () => {
  useEffect(() => {
    const typeData = new Typed(".role", {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => {
      typeData.destroy(); // Clean up the Typed instance on component unmount
    };
  }, []);

  return (
    <div id="wrapper" className="bg-gray-100 flex  items-center justify-center">
      <div className="container mx-auto p-6 flex ">
        <header className="header-container flex   items-center justify-between">
          {/* Left Section */}
          <section className="left text-center md:text-left md:w-1/2">
            <div className="">
              <img
                src="/monsaf.jpg"
                alt="User"
                className="w-96 h-96 rounded-full object-cover"
              />
            </div>

            <div className="left-text-para space-y-4">
              <p className="text-lg font-semibold">Hi! Monsaf Ali</p>
              <p className="text-xl font-bold">
                I am a <span className="role text-blue-600"></span>
              </p>
              <p className="text-gray-700">
                I’m a software developer and i Just develop this dummy site to
                explain issues whatever we faces
              </p>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Hire me
              </button>
            </div>
          </section>
        </header>
      </div>
    </div>
  );
};

export default About;
