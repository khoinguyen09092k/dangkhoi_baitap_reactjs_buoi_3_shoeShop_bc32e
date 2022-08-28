import React, { Component } from 'react'
import data from "./dattaaaaa.json"
import Detail from './Detail'
import GioHang from './GioHang'
import RenderShoe from './RenderShoe'
import style from './style.css'
export default class HomeShoeShop extends Component {

    state = {
        isLogger: false,
        shoe: {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": " 350 $",
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        shoeCarts: [
            {
                "id": 1,
                "name": "Adidas Prophere",
                "alias": "adidas-prophere",
                "price": "350 $",
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 1,
                "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
            },
        ],
    }

    handleDetail = () => {
        this.setState({ isLogger: true })
    }

    handleShoe = (value) => {
        this.setState({ shoe: value })
    }

    buyCarts = (shoe) => {
        const value = { ...shoe, quantity: 1 }
        const data = [... this.state.shoeCarts]
        const index = data.findIndex(cart => cart.id === shoe.id)
        console.log("index: ", data);

        if (index !== -1) {
            data[index].quantity += 1
        }
        else {
            data.push(value)
        }
        this.setState({
            shoeCarts: data
        })
    }
    render() {
        return (
            <div className='content'>
                <div className='background_color'>
                    
                <h2 className='text-white text-center bg-secondary p-2'>SHOE SHOP</h2>
                <div className='container '>

                    <div className='row'>
                        <div className='col-3 '>
                            <GioHang carts={this.state.shoeCarts} />
                            <h6 className='bg-warning text-center text-dark p-3 mt-3 rounded'>Detail</h6>

                            {this.state.isLogger && (
                                <Detail detail={this.state.shoe} />
                            )

                            }
                        </div>
                        <div className='col-9'>
                            <div className='row'>
                                {
                                    data.map((value) => {
                                        return <div className='col-4 mt-3 mb-2' key={value.id}>
                                            <RenderShoe products={value} handleShoe={this.handleShoe} handleDetail={this.handleDetail} buyCarts={this.buyCarts} />
                                        </div>
                                    })
                                }
                            </div>

                        </div>

                    </div>
                </div>
                </div>

            </div>
        )
    }
}
