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
  },
  img: {
    height: '150px',
  }
}

class Product extends Component {
  render () {
    const { product, addToCart } = this.props

    return (
      <div style={styles.product}>
        <img style={styles.img} alt={product.name} src={product.img}/>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <Button onClick= {() => addToCart(product)}>
          Add to cart
        </Button>
      </div>
    )
  }
}

export default Product;