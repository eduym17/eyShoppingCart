import { Component } from "react";

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
    width: '200px',
  }
}

class Product extends Component {
  render () {
    const { product } = this.props

    return (
      <div style={styles.product}>
        <img style={styles.img} alt={product.name} src={product.img}/>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    )
  }
}

export default Product;