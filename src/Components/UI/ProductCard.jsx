import React from 'react'
// import productCardData from '../../Pages/productCardData'
import { Link } from 'react-router-dom'
import productCardData from '../../Pages/productCardData'

const ProductCard = () => {
  return (
   <>
   {productCardData.map((product) => (
    <div className="col-3">
    <div className="blog-card">
      <div className="card-image">
        <img src={product.image} className="img-fluid" alt={blog.title} />
      </div>
      <div className="blog-content">
        <p className="date">{}</p>
        {/* <h5 className="title">{blog.title}</h5> */}
        {/* <p className="desc fs-small">{blog.desc}</p> */}
        {/* <Link to={blog.link} className="button">Read More</Link> */}
      </div>
    </div>
  </div>
   ))}
   </>
  )
}

export default ProductCard
