"use client";
import BlogDisplay from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from "react";

export default function Home() {
  const client = new Client();

  const [blogs, setblogs] = useState([]);

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65c9ac37ad8f3dfccf44");

  const databases = new Databases(client);

  let promise = databases.listDocuments(
    "65c9b52cc5d7823125bb",
    "65c9b57382d9701c995a",
    []
  );

  promise.then(
    function (response) {
      console.log(response);
      setblogs(response.documents);
    },
    function (error) {
      console.log(error);
    }
  );

  // const databases = new Databases(client);

  // const promise = databases.createDocument(
  //   "65c9b52cc5d7823125bb",
  //   "65c9b57382d9701c995a",
  //   ID.unique(),
  //   {}
  // );

  // promise.then(
  //   function (response) {
  //     console.log(response);
  //   },
  //   function (error) {
  //     console.log(error);
  //   }
  // );

  return (
    <>
      <Navbar />

      <div>
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-6">Latest Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {blogs.length==0 && "Loading......  Wait! a min"}
            {blogs.map((blog, index) => (
              <BlogDisplay key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
