import { Component } from 'react';
import Products from './components/Products'

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}

class App extends Component {
  state = {
    products: [
      { name: 'Laptop', price: '$25 000.00', img: '/products/laptop.png' },
      { name: 'Motherboard', price: '$3 000.00', img: '/products/motherboard.png' },
      { name: 'Video card', price: '$15 000.00', img: '/products/videocard.png' },
      { name: 'Monitor', price: '$12 000.00', img: '/products/monitor.png' },
      { name: 'Power supply', price: '$4 500.00', img: '/products/power-supply.png' },
      { name: 'Router', price: '$2 500.00', img: '/products/router.png' },
      { name: 'Gabinet', price: '$3 500.00', img: '/products/gabinet.png' },
      { name: 'Keyboard', price: '$3 000.00', img: '/products/keyboard.png' },
      { name: 'Mouse', price: '$2 000.00', img: '/products/mouse.png' },
    ]
  }

  render() {
    return (
      <div style={styles.layout}>
        <Products
          addToCart = {() => console.log('No hace nada')}
          products = {this.state.products}
        />
      </div>
    );
  }
}

export default App;