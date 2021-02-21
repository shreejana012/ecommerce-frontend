import React from 'react';
import { Link } from "react-router-dom";
import Products from './data.json'

function Home() {
  const products = Products

  return (
    <div className="container">
      <h3 style={{textAlign: 'center', marginTop: '30px'}}>Online Shopping Site</h3>
      <div className="row">
        { products.map((product, i) => (
        <div key = {i} className="col-md-4 card-container">
          <div className="card text-center product">
            <img className="img-fluid d-block mx-auto" src={product.image} alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
            </div>
            <p className="btn">
            <Link to={{ pathname: `/checkout/${product.id}` }}>
              <button type="button" className="btn btn-dark">
                Buy Now
              </button>
            </Link>
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  )

}

export default Home;