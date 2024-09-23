// app/page.js (Home Page)
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>

    
      <h1 className="bg-black text-white p-5 text-6xl font-bold text-center">
        Welcome to Home Page
      </h1>
      <div className="text-center mt-10">
        <Link href="/tasks">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Go to Tasks Page
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
