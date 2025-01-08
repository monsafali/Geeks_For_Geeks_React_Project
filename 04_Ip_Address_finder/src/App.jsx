// https://geo.ipify.org/api/v2/country,city?apiKey=at_BkYtybnrR6o8b9MXfIXrbljLIz4c8&ipAddress=8.8.8.8
import arrow from "./images/icon-arrow.svg";
import background from "./images/pattern-bg-desktop.png";
import React from "react";

function App() {
  return (
    <>
      <section>
        <div className="absolute -z-10">
          <img src={background} alt="" className="w-full h-80 object-cover" />
        </div>
        <article className="p-8">
          <h1 className="text-2xl lg:text-3xl text-center text-white font-bold mb-8">
            IP Address Tracker
          </h1>

          <form action="" className="flex justify-center max-w-xl mx-auto">
            <input
              type="text"
              name="ipaddress"
              id="ipaddress"
              placeholder="Search for any ip address domain"
              required
              className="py-2 px-4 rounded-l-lg w-full"
            />
            <button
              type="submit"
              className="bg-black p-4 hover:opacity-60 rounded-l-lg"
            >
              <img src={arrow} />
            </button>
          </form>
        </article>
      </section>
    </>
  );
}

export default App;
