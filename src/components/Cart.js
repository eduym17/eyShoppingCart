import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import DetailsCart from './DetailsCart';

const styles = {
  cart: {
    backgroundColor: '#6D28D9',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
  },
  bubble: {
   position: 'relative' ,
   left: 12,
   top: 20,
  }
}

class Cart extends Component {
  render() {
    const { cart, isCartVisible, showCart, mutateCart } = this.props
    const quantity = cart.reduce((acc, el) => acc + el.quantity, 0)
    return (
      <div>
        <span style={styles.bubble}>
          { quantity !== 0
            ? <BubbleAlert value={quantity} />
            : null
          }
        </span>
        <button onClick={showCart} style={styles.cart}>
          Shopping cart
        </button>
        {isCartVisible ? <DetailsCart cart={cart}  mutateCart={mutateCart}/> : null}
      </div>
    )
  }
}

export default Cart;
