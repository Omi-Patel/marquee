import React, { useState } from "react";
import Card from "./Card";

const MyShelf = () => {
  const index = localStorage.getItem("oldBook");
  const book = JSON.parse(index);
  console.log(book);

  return (
    <>
      <div className="text-center p-2 font-bold text-2xl sm:text-4xl mb-4">
        <h1>MY BOOK SHELF</h1>
      </div>
      <div className="grid sm:grid-cols-4 mx-auto">
        {book ? (
          book?.map((item, index) => {
            return (
              <div key={index}>
                <section className="text-gray-600 body-font">
                  <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap -m-4">
                      <div className="p-2 w-full lg:w-[85%] mx-auto ">
                        <div className="border-2 border-black h-full bg-slate-200 shadow-md bg-opacity-75 px-8 pt-4 pb-4 rounded-lg overflow-hidden  relative">
                          <h1 className="title-font sm:text-2xl text-xl mb-3">
                            <span className="text-[18px] font-mono text-gray-600">
                              Book Title :
                            </span>{" "}
                            <br />{" "}
                            <span className="text-black font-bold  text-xl">
                              {item[0]}
                            </span>
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Edition Count : {item[1]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            );
          })
        ) : (
          <h1 className="text-center font-bold text-xl p-4">Your Shelf Is Empty..!</h1>
        )}
      </div>

      <NavLink to={"/"} className="flex justify-center items-center mt-4">
        <button className="px-6 py-2 tracking-wider my-2 sm:my-0  bg-green-400 font-bold text-black rounded-xl">
          Go Back!
        </button>
      </NavLink>
    </>
  );
};

export default MyShelf;
