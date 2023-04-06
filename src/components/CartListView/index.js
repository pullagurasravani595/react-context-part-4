import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalPrice = cartList.map(item => item.price)
      const amount = totalPrice.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      )

      return (
        <>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          <div>
            <p>Total: {amount}</p>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
