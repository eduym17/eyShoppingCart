import { Component } from "react";
import Product from './Product';

const styles = {
  layout: {
    display: 'flex',
    alignItems: 'center',
  },
  products: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyItems: 'center',
    gap: '10px',
    margin: '15px',
    width: '100%',
  },
}

class Products extends Component {
  render () {
    const { products, addToCart } = this.props

    return (
      <div style={styles.layout}>
        <div style={styles.products}>
          {products.map(product =>
            <Product
              addToCart={addToCart}
              key={product.name}
              product={product}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Products;
