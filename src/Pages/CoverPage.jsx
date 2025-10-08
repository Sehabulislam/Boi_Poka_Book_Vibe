import React from 'react';

const CoverPage = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center px-30 py-5 md:py-20 bg-gray-100 rounded-3xl my-4'>
            <div className='md:space-y-10 text-center md:text-left'>
                <h1 className='playfair-font font-bold text-4xl md:text-7xl w-90 md:w-160'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white md:p-7 text-xl'>View The List</button>
            </div>
            <div>
                <img src={'/assets/pngwing 1.png'} alt="" />
            </div>
        </div>
    );
};

export default CoverPage;