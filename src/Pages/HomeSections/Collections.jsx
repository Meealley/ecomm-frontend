import React from 'react'
import ProductCard from '../../Components/UI/ProductCard'

const Collections = () => {
  return (
    <section className="home-wrapper-2 py-5 blog-wrapper">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Featured collections</h3>
        </div>
        <ProductCard />
      </div>
    </div>
  </section>
  )
}

export default Collections
