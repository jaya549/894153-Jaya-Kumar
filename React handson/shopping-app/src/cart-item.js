import React from 'react';
const cartItem = props => {
        let items = props.item.map(item => {
                return (
                        <tr>
                                <td>{item.itemName}</td>
                                <td>{item.price}</td>
                        </tr>
                )
        });
        return (
                <table border="1" className="item">
                        <tr>
                                <th>ItemName</th>
                                <th>Price</th>
                        </tr>
                        {items}
                </table>
        )
}
export default cartItem;