import React, { Component } from 'react';
import Cart from './cart-item';
class OnlineShopping extends Component {
    render() {
        const cartInfo = [
            { itemName: "Laptop", price: 80000 },
            { itemName: "WashingMachine", price: 50000 },
            { itemName: "Mobile", price: 30000 },
            { itemName: "Fridge", price: 70000 }];
        return (
            <div className="mydiv">
                <h1>Items Ordered:</h1>
                <Cart item={cartInfo} />
            </div>
        );
    }
}
export default OnlineShopping;