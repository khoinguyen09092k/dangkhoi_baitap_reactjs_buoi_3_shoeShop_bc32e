import React, { Component } from 'react'
import data from "./dattaaaaa.json"
import Detail from './Detail'
import GioHang from './GioHang'
import RenderShoe from './RenderShoe'
import style from './style.css'
export default class HomeShoeShop extends Component {

    state = {

        isLogger: false,
        isLoggerStore: false,
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

        number: 0,
    }

    handleDetail = () => {
        this.setState({ isLogger: true })
    }

    handleStore = () => {
        this.setState({ isLoggerStore: true })
    }
    handleShoe = (value) => {
        this.setState({ shoe: value })
    }

    buyCarts = (shoe) => {
        const value = { ...shoe, quantity: 1 }
        const data = [... this.state.shoeCarts]
        const index = data.findIndex(cart => cart.id === shoe.id) // so sánh sản phẩm trong table với sp vừa nhấn có trùng nhau k nếu k trùng trả về -1


        if (index !== -1) { // là phẩn tử đã có trong mảng nên chỉ cần cộng
            data[index].quantity += 1
        }
        else {
            data.push(value) // push object mới vào table
        }
        console.log("index: ", index);
        this.setState({
            shoeCarts: data
        })
    }

    counterCartsUp = (shoe) => {
        const data1 = [... this.state.shoeCarts]
        const index1 = data1.findIndex(cart => cart.id === shoe.id) // so sánh sản phẩm trong table với sp vừa nhấn có trùng nhau k nếu k trùng trả về -1
        if (index1 !== -1) { // là phẩn tử đã có trong mảng nên chỉ cần cộng
            data1[index1].quantity += 1
        }
        this.setState({
            shoeCarts: data1
        })
    }
    counterCartsDown = (shoe) => {
        const data2 = [... this.state.shoeCarts]
        const index2 = data2.findIndex(cart => cart.id === shoe.id) // so sánh sản phẩm trong table với sp vừa nhấn có trùng nhau k nếu k trùng trả về -1
        if (index2 !== -1) { // là phẩn tử đã có trong mảng nên chỉ cần cộng
            data2[index2].quantity -= 1
        }
        if (data2[index2].quantity === 0) {
            data2.splice(index2, 1)
        }
        this.setState({
            shoeCarts: data2
        })
    }

    storeCounter = (number) => {
        this.setState({
            number: number += 1
        })
    }
    render() {
        return (
            <div className='content'>

                <div className='background__color'>
                    <h2 className='text-white text-center bg-secondary p-2'>SHOE SHOP</h2>
                    <div className='container '>

                        <div className='row'>
                            <div className='col-3 '>
                                <GioHang carts={this.state.shoeCarts} counterCartsUp={this.counterCartsUp} counterCartsDown={this.counterCartsDown} number={this.state.number} isLoggerStore={this.state.isLoggerStore} />
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
                                                <RenderShoe products={value} handleShoe={this.handleShoe} handleDetail={this.handleDetail} buyCarts={this.buyCarts} storeCounter={this.storeCounter} number1={this.state.number} handleStore={this.handleStore} />
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
