import { Component } from "react";
import Product from './Product';

const styles = {
  layout: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
  },
  products: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'center',
    gap: '10px',
    margin: '15px',
    width: '100%',
    maxWidth: '1200px',
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
