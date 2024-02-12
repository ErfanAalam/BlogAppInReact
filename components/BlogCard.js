import React from "react";

const BlogDisplay = ({ title, author, content, readmorelinks,slug,views }) => {
  return (
    <div className="w-auto h-auto mx-4 border-black border-2 bg-white rounded-xl overflow-hidden shadow-lg p-6 mb-6 hover:shadow-black">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">Author: {author}</p>
      <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{__html:content}}></p>
      <p className="text-gray-600 mb-4">{slug}</p>
      <p className="text-gray-700 mb-4">views: {views}</p>
      <a
        href={readmorelinks}
        className="bg-purple-500 text-white px-4 py-2 rounded-md inline-block cursor-pointer hover:bg-purple-700"
      >
        Read More
      </a>
    </div>
  );
};

export default BlogDisplay;
