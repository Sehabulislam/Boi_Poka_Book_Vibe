import { Layers, MapPin, ShieldUser, Users } from "lucide-react";
import React from "react";

const ShowReadList = ({book}) => {
      const {
    image,
    bookName,
    publisher,
    tags,
    totalPages,
    yearOfPublishing,
    author,
    category,
    rating,
  } = book;
  return (
      <div class="w-full mx-auto p-6">
            <div class="p-6 bg-white shadow-sm border border-gray-300 rounded-md">
              <div class="flex flex-col md:flex-row items-center gap-6">
                <div class="w-52 h-52 shrink-0">
                  <img
                    src={image}
                    class="w-full h-full object-contain"
                  />
                </div>
                <div class="sm:border-l sm:pl-4 sm:border-gray-300 w-full space-y-2 md:space-y-3">
                  <h3 class="playfair-font text-2xl font-semibold text-slate-900">{bookName}</h3>
                  <h2>By : {author}</h2>
                   <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
                    <div className="flex items-center">
                        <h2 className="mr-3">Tags : </h2>
                    <div className="flex items-center gap-3">
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
                    <h2 className="flex gap-1"><MapPin className="w-4"/>Year of Publishing : {yearOfPublishing}</h2>
                    </div>
                    <div className="flex items-center gap-5 md:gap-10">
                        <h2 className="flex gap-1"><Users className="w-4"/>Publisher : {publisher}</h2>
                        <h2 className="flex gap-1"><Layers className="w-4" />Page : {totalPages}</h2>
                    </div>
                    <div className="border-t-1 border-gray-200 m-3"></div>
                    <div className="flex items-center md:gap-5">
                        <h2 className="bg-blue-100 font-semibold text-blue-500 md:px-2 md:py-1 rounded-full">Category : {category}</h2>
                        <h2 className="bg-orange-100 font-semibold text-orange-500 px-2 py-1 rounded-full">Rating : {rating}</h2>
                        <h2 className="bg-green-700 font-semibold text-white px-2 py-1 rounded-full">View Details</h2>
                    </div>
                </div>
              </div>
            </div>
        </div>
  );
};

export default ShowReadList;
