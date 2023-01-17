import React from 'react'

export default class CartList extends React.PureComponent{
    render(){
        const {cart} = this.props;

        return(
            <ul className = 'list pl0 mt0 measure center'>
                {
                    cart.map(item => <CartItem {...item} key={item.id} />)
                }
            </ul>
        )
    }
}
