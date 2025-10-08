import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({ data }) => {
  // console.log(data);
  const {bookId,image,bookName,publisher,category,rating,tags} = data;
  // const books = use(booksPromise)
  // console.log(books);
  return (
    <Link to={`/bookdetails/${bookId}`} className=" card shadow-sm p-4 cursor-pointer">
      <figure className=" bg-gray-100 rounded-3xl">
        <img
          src={image}
          alt={bookName} className="h-60 p-5"/>
      </figure>
      <div className="body-font card-body">
        <div className="flex items-center gap-2">
        {
        tags.map((tag,ind) => <h2 key={ind} className="bg-green-100 font-semibold text-green-500 px-2 rounded-full">{tag}</h2>)
        }
        </div>
        <h2 className="playfair-font text-2xl font-semibold card-title">{bookName}</h2>
        <p>By : {publisher}</p>
        <div className="border-t-1 border-dashed border-gray-300">
          <div className="card-actions justify-between mt-2">
           <h2>{category}</h2>
          <h2 className="flex items-center gap-1">{rating}<Star /></h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
