import React, { Component } from 'react'

export default class RenderShoe extends Component {
  render() {
    const {products,handleShoe,handleDetail,buyCarts} = this.props 
    return (
        <div className='card'>
        <img src={products.image} alt="" />


        <div className='card-body'>
            <h6>{products.name}</h6>
            <p>{products.price}</p>
            <button className="btn btn-dark"  onClick={()=>{buyCarts(products)}}
            >Add to carts <i className="fa-solid fa-cart-shopping"></i></button>
            <button className='btn btn-warning ml-2' onClick={() => {
            handleDetail(products)
              handleShoe(products)

            }} >Detail</button>
        </div>
    </div>
    )
  }
}
