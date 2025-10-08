import React from "react";
import CoverPage from "./CoverPage";
import Books from "./Books";
import { useLoaderData } from "react-router";

const Home = () => {

  const datas = useLoaderData();
  // console.log(datas);
  return (
    <div>
      <CoverPage></CoverPage>
      <Books datas={datas}></Books>
    </div>
  );
};

export default Home;
