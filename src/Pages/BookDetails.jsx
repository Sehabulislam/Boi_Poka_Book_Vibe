import { ArrowLeft } from "lucide-react";
import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { addToStoredDB } from "../Utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);

  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);

  const {
    image,
    bookName,
    publisher,
    tags,
    review,
    totalPages,
    yearOfPublishing,
    author,
    category,
    rating,
  } = singleBook;

  const handleMarkAsRead = (id) =>{
    //store with id 
    //where to store 
    // array or collection 
    // if book already exist the show a alart
    // if book not exist then push in the collection in array
    addToStoredDB(id)
  }
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="border  bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white rounded-full mt-4"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <div className="hero-content flex-col lg:flex-row-reverse md:gap-20">
        <div className="body-font text-center lg:text-left max-w-lg">
          <h1 className="playfair-font text-4xl font-bold">{bookName}</h1>

          <div className="border-b-1 border-gray-300">
            <h2 className="text-gray-500 m-3">By : {author}</h2>
          </div>

          <div className="border-b-1 border-gray-300">
            <h2 className="text-gray-500 m-3">{category}</h2>
          </div>

          <p className="py-6 font-bold">
            Review : <span className="text-gray-500 text-sm">{review}</span>
          </p>
          <div className="flex items-center gap-2 mb-3">
            <h2>Tags : </h2>
            <div className="flex items-center gap-2">
              {tags.map((tag, ind) => (
                <h2
                  key={ind}
                  className="bg-green-100 font-semibold text-green-500 px-2 rounded-full"
                >
                  #{tag}
                </h2>
              ))}
            </div>
          </div>
          <div className="text-sm space-y-2 border-t-1 border-gray-300">
            <div className="flex gap-10 mt-2">
              <h2>Number of Pages : </h2>
              <h2 className="text-gray-500">{totalPages}</h2>
            </div>
            <div className="flex gap-23">
              <h2>Publisher : </h2>
              <h2 className="text-gray-500">{publisher}</h2>
            </div>
            <div className="flex gap-9">
              <h2>Year of Publishing : </h2>
              <h2 className="text-gray-500">{yearOfPublishing}</h2>
            </div>
            <div className="flex gap-29">
              <h2>Rating : </h2>
              <h2 className="text-gray-500">{rating}</h2>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white mt-3">
            <a onClick={() => handleMarkAsRead(id)} className="btn btn-neutral btn-outline">Read</a>
            <a className="btn bg-[#59C6D2] text-white">Wishlist </a>
          </div>
        </div>
        <div className="card w-full max-w-[400px] bg-gray-100 p-2">
          <div className="card-body">
            <img src={image} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
