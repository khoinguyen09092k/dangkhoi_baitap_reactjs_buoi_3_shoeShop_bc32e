import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        const {carts,counterCartsUp,counterCartsDown,number,isLoggerStore} = this.props
        const renderCarts = ()=>{
          return carts.map((item)=>{
            return(
             
                    <tr key={item.id}>
                    <td>{item.id}</td> 
                    <td>{item.name}</td>
                    <td><img src={item.image} alt="" width={100} /></td>
                    <td>{item.price}</td>
                    <td>
                        <button className="btn btn-warning font-weight-bold" onClick={()=>counterCartsDown(item)} >-</button>
                        <span className='mx-3'> {item.quantity}</span>
                        <button className="btn btn-warning font-weight-bold" onClick={()=>counterCartsUp(item)}>+</button>
                    </td>
                    <td>{item.shortDescription}</td>
                </tr>
                
            )
          })

        }
        return (
            
            <div>
                <div>
                    <button type="button" className="btn btn-info btn-block mt-3 p-3 " data-toggle="modal" data-target="#exampleModal">
                       Carts <i className="fa-solid fa-cart-plus" > {isLoggerStore&&(<span className='text-danger'>+ {number} </span>)}</i>
                    </button>
                
                    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Image </th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {renderCarts()}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
