import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../Utility/addToDB";
import ShowReadList from "./ShowReadList";
import { ChevronDown } from "lucide-react";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
    const [sort,setSort] = useState('')

  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const bookIdStrToNum = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      bookIdStrToNum.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  const handlesort = (type)=>{
    setSort(type)
    if(type === "pages"){
      const sortedByPages = [...readList].sort((a, b) => a.totalPages-b.totalPages);
      setReadList(sortedByPages)
    }
    if(type === "ratings"){
      const sortedByRating = [...readList].sort((a, b) => b.rating-a.rating);
      setReadList(sortedByRating)
    }
  }
  return (
    <div>
      <div className="dropdown dropdown-center flex justify-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort By : {sort ? sort : ""} <ChevronDown className="w-5"/>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li><a onClick={() => handlesort("pages")}>Pages</a></li>
          <li><a onClick={() => handlesort("ratings")}>Ratings</a></li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readList.map((book) => (
            <ShowReadList book={book}></ShowReadList>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
