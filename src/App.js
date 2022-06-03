import { Component } from 'react';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Title from './components/Title';

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
      <div>
        <Navbar />
        <Layout style={styles.layout}>
          <Title />
          <Products
            addToCart = {() => console.log('No hace nada')}
            products = {this.state.products}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
