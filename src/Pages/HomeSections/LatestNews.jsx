import React from "react";
import BlogCard from "../../Components/UI/BlogCard";

const LatestNews = () => {
  return (
    <section className="home-wrapper-2 py-5 blog-wrapper">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
