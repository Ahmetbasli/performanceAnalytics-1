import React, { useEffect } from "react";
import axios from "axios";
import Graph from "../../components/graph/Graph";
import { useDispatch, useSelector } from "react-redux";
import { allWebsites, searchedOrigin } from "../../features/websitesSlice";
import { searchedWebsite } from "../../features/websitesSlice";
import Search from "../../components/search/Search";

const Home = () => {
  const website = useSelector(searchedWebsite);
  const origin = useSelector(searchedOrigin);

  return (
    <div className="bg-gray-400 ">
      <Search />
      <h1>{origin}hello</h1>

      <Graph datas={website.analyticsDatas} />
    </div>
  );
};

export default Home;
