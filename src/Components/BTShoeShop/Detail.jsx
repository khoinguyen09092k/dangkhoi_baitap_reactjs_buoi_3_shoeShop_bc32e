import React, { Component } from 'react'

export default class Detail extends Component {
  render() {

    const { detail } = this.props
    console.log(detail);
    return (
      <div className='card'>
        <img src={detail.image} alt="" />
        <div className='card-body'>
          <h6 className='font-weight-bold text-center text-primary' >Name: {detail.name}</h6>
          <p><span className='font-weight-bold'>ID: </span>{detail.id}</p>
          <p><span className='font-weight-bold'>Price: </span> {detail.price}</p>
          <p> <span className='font-weight-bold '> Descriptions: </span>{detail.description}</p>
          <p> <span className='font-weight-bold'>ShortDescriptions: </span> {detail.shortDescription}</p>
          <p> <span className='font-weight-bold'>Quantity: </span> {detail.quantity}</p>
        </div>

      </div>
    )
  }
}
