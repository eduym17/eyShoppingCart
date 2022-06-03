import { Component } from 'react';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Title from './components/Title';

const styles = {
  main: {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
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
    ],
    cart: [],
    isCartVisible: false,
  }

  addToCart = (product) => {
    const { cart } = this.state
    if (cart.find(el => el.name === product.name)) {
      const newCart = cart.map(el => el.name === product.name
        ? ({
          ...el,
          quantity: el.quantity + 1
        })
        : el
        )
      return this.setState({ cart: newCart })
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      })
    })
  }

  showCart = () => {
    if (!this.state.cart.length) {
      return
    }
    this.setState({ isCartVisible: !this.state.isCartVisible })
  }

  render() {
    const { isCartVisible } = this.state
    return (
      <div style={styles.main}>
        <Navbar
          cart={this.state.cart}
          isCartVisible={isCartVisible}
          showCart={this.showCart}
        />
        <Layout style={styles.layout}>
          <Title />
          <Products
            addToCart = {this.addToCart}
            products = {this.state.products}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
