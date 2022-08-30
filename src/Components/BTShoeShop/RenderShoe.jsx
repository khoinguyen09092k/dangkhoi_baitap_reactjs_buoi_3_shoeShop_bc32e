import React, { Component } from 'react'

export default class RenderShoe extends Component {
  render() {
    const {products,handleShoe,handleDetail,buyCarts,storeCounter,number1,handleStore} = this.props 
    return (
        <div className='card'>
        <img src={products.image} alt="" />


        <div className='card-body'>
            <h6>{products.name}</h6>
            <p>{products.price}</p>
            <button className="btn btn-dark" 
             onClick={()=>{
              handleStore()
              buyCarts(products)
              storeCounter(number1)
            }}
            >Add to carts <i className="fa-solid fa-cart-shopping" ></i></button>
            
            <button className='btn btn-warning ml-2' onClick={() => {
            handleDetail()
              handleShoe(products)

            }} >Detail</button>
        </div>
    </div>
    )
  }
}
