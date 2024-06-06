import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ books, index }) => {
  // localStorage.setItem("oldBook", []);

  const addToStorage = (books, index) => {
    // console.log(books);

    let book = localStorage.getItem("oldBook");

    // Parse the JSON string back into an array, or initialize an empty array if null
    book = book ? JSON.parse(book) : [];

    // Add the new book to the array
    book.push([books.title, books.edition_count]);

    // Convert the updated array back to a JSON string
    let updatedBooksJson = JSON.stringify(book);

    // Store the updated JSON string in localStorage
    localStorage.setItem("oldBook", updatedBooksJson);
    toast.success("Book Added to Your Shelf");
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-2 w-full lg:w-[85%] mx-auto ">
              <div className=" border-2 border-black h-full bg-slate-200 shadow-md bg-opacity-75 px-8 pt-4 pb-4 rounded-lg overflow-hidden  relative">
                <h1 className="title-font sm:text-2xl text-xl mb-3">
                  <span className="text-[18px] font-mono text-gray-600">
                    Book Title :
                  </span>{" "}
                  <br />{" "}
                  <span className="text-black font-bold  text-xl">
                    {books.title}
                  </span>
                </h1>
                <p className="leading-relaxed mb-3">
                  Edition Count : {books.edition_count}
                </p>
                <button
                  onClick={() => addToStorage(books, index)}
                  className="px-6 py-1 bg-green-400 font-medium text-black rounded-xl"
                >
                  Add To Bookshelf
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Card;
