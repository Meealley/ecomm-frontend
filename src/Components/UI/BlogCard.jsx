import React from "react";
import blogData from "../../Pages/blogData";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      {blogData.map((blog) => (
        <div className="col-3">
          <div className="blog-card">
            <div className="card-image">
              <img src={blog.image} className="img-fluid" alt={blog.title} />
            </div>
            <div className="blog-content">
              <p className="date">{blog.date}</p>
              <h5 className="title">{blog.title}</h5>
              <p className="desc">{blog.desc}</p>
              <Link to={blog.link} className="button">Read More</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
