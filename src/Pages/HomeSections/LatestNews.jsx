import React from "react";
import BlogCard from "../../Components/UI/BlogCard";

const LatestNews = () => {
  return (
    <section className="home-wrapper-2 py-5 blog-wrapper">
      <div className="container-xxl">
        <div className="row">
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
