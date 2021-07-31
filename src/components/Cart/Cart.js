import './Cart.css'
import React from 'react'
import CartElement from '../Cart Element/CartElement'


function Cart(props) {

    return (
        <div className="cart-container">
            <div className="cart">
                <div style={{fontWeight: 'bold', fontSize: '28px', textShadow: '0 0 6px gray'}}>CART</div>
                <div className="cart-product">
                    <CartElement />
                </div>
            </div>
        </div>
    )
}

export default Cart
