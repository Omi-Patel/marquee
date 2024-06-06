import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const response = async () => {
    let data = "";
    if (!query) {
      data = await fetch(
        `https://openlibrary.org/search.json?q=query&limit=10&page=1`
      );
    } else {
      data = await fetch(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
    }
    const res = await data.json();
    console.log(res.docs);
    setBooks(res.docs);
    setLoading(false);
  };

  // console.log(books);

  useEffect(() => {
    response();
  }, [query]);

  return (
    <div>
      <div className=" flex flex-col sm:flex-row  items-center justify-between px-10">
        <div></div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className=" w-full sm:w-[40%] px-4 py-2 rounded-full border-2 border-black text-black font-medium"
          placeholder="Search Book By Name..."
        />
        <NavLink to={"/myshelf"}>
          <button className="px-6 py-2 tracking-wider my-2 sm:my-0  bg-green-400 font-bold text-black rounded-xl">
            My Bookshelf 
          </button>
        </NavLink>
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-4 mt-10">
        {!loading ? (
          books.map((book, index) => {
            return <Card key={index} books={book} index={index} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Home;
