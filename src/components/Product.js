import { Component } from "react";
import Button from './Button';

const styles = {
  product: {
    border: '1px solid #eee',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
    width: '100%',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  img: {
    height: '150px',
    padding: '10px 0',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px 0',
  },
  title: {
    color: '#404040',
    margin: '0',
  },
  price: {
    margin: '0',
  },
}

class Product extends Component {
  render () {
    const { product, addToCart } = this.props

    return (
      <div style={styles.product}>
        <img style={styles.img} alt={product.name} src={product.img}/>
        <div style={styles.info}>
          <h3 style={styles.title}>{product.name}</h3>
          <p style={styles.price}>{product.price}</p>
        </div>
        <Button onClick= {() => addToCart(product)}>
          Add to cart
        </Button>
      </div>
    )
  }
}

export default Product;