import React from "react";

const Body = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-center items-center md:mb-10">
        <img src="/src/assets/iron.png" alt="img" />
      </div>
      <div>
        <h1 className="text-5xl/tight font-bold font-playfair md:text-6xl mb-4">
          Host your website in less than 5 minutes
        </h1>
        <p className="font-lato text-gray-400 text-2xl mb-10">
          WIth Hoster , get your website up and running in less than 5 minutes
          with the most competitive pricing packages available online
        </p>
        <form action="" className="flex flex-col gap-4 m-1 md:flex-row mb-4">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter email address"
            className="rounded-md px-4 py-3 placeholder:text-gray-400 md:placeholder:text-2xl md:w-9/12"
          />
          <button className="bg-blue-700 px-6 py-1 text-white rounded-md hover:bg-gradient-to-tr from-blue-700 to-blue-300">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2 md:ml-2">
          <input type="checkbox" name="" id="" className="bg-green-500 w-4" />
          <p className="font-lato text-gray-400 md:text-xl">
            No span ,ever .Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
