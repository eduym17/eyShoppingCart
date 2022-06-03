import { Component } from "react";

const styles = {
  detailsCart: {
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: '20px',
    boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
    borderRadius: '5px 5px 0 0',
    width: '300px',
    right: '50px',
    color: '#171717',
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
}

class DetailsCart extends Component {
  render() {
    const { cart } = this.props
    console.log(cart[0])
    return (
      <div style={styles.detailsCart}>
        <ul style={styles.ul}>
          {cart.map(el =>
            <li style={styles.product} key={el.name}>
              <img alt={el.name} src={el.img} style={styles.imgCart} />
              {el.name}
              <span>{el.quantity} pcs.</span>
              <span>{el.price}</span>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default DetailsCart;
