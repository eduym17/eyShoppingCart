import { Component } from "react";

const styles = {
  detailsCart: {
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: '20px',
    boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
    borderRadius: '5px 5px 0 0',
    width: '400px',
    right: '50px',
    color: '#404040',
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  product: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    borderBottom: '1px solid #6D28D9',
  },
  imgCart: {
    width: '50px',
  },
  grandTotal: {
    textAlign: 'center',
    fontWeight: 600,
  },
  grandTotalPrice: {
    fontWeight: 700,
  },
  itemButton: {
    border: 'none',
    width: '20px',
    height: '20px',
  }
}

class DetailsCart extends Component {
  render() {
    const { cart, mutateCart } = this.props
    let dollarUS = Intl.NumberFormat('en-US');
    const grandTotal = dollarUS.format(cart.reduce((acc, el) => acc + el.price*el.quantity, 0))
    return (
      <div style={styles.detailsCart}>
        <ul style={styles.ul}>
          {cart.map(cartElement =>
            <li style={styles.product} key={cartElement.name}>
              <img alt={cartElement.name} src={cartElement.img} style={styles.imgCart} />
              {cartElement.name}
              <span>{cartElement.quantity} {cartElement.quantity === 1 ? 'pc.' : 'pcs.'}</span>
              <span>${dollarUS.format(cartElement.price*cartElement.quantity)}</span>
              <div>
                <button style={styles.itemButton} onClick= {() => mutateCart(cartElement, -1)}>-</button>
                <button style={styles.itemButton} onClick= {() => mutateCart(cartElement)}>+</button>
              </div>
            </li>
          )}
        </ul>
        {parseInt(grandTotal, 10) > 0 
          ? <h4 style={styles.grandTotal}>
              Grand total: $<span style={styles.grandTotalPrice}>{grandTotal}</span>
            </h4>
          : <h4 style={styles.grandTotal}>
              ☄️ Add your first <span style={styles.grandTotalPrice}>item</span>!
            </h4>
        }
      </div>
    )
  }
}

export default DetailsCart;
