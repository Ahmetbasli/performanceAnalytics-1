import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchedOrigin,
  setSearchedOrigin,
  searchedWebsite,
  setSearchedWebsite,
} from "../../features/websitesSlice";
import axios from "axios";

const Search = () => {
  const dispatch = useDispatch();
  const [isUrlFound, setIsUrlFound] = useState(false);
  const searchInput = useRef("");
  const searchedOriginFromStore = useSelector(searchedOrigin);

  const sendOriginToStore = () => {
    const origin = searchInput.current.value;
    if (!origin) return;
    dispatch(setSearchedOrigin(origin));
    (async () => {
      try {
        const SearchedWebsite = await axios.get(
          !origin.includes("http")
            ? `http://localhost:3000/website/getByUrl?url=http://${origin}`
            : `http://localhost:3000/website/getByUrl?url=${origin}`
        );
        setIsUrlFound(true);
        dispatch(setSearchedWebsite(SearchedWebsite.data));
      } catch (err) {
        if (err.response.status === 404) {
          setIsUrlFound(false);
        }
      }
    })();
  };

  return (
    <div>
      <input
        class="shadow appearance-none border max-w-md rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
        type="text"
        ref={searchInput}
        placeholder="type your website url"
      />
      <button
        onClick={sendOriginToStore}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
      >
        Get Analytics
      </button>
      {!isUrlFound && <p>couln't find at this to your website script tag</p>}
    </div>
  );
};

export default Search;
