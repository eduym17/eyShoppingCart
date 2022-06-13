import { Component } from 'react';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Title from './components/Title';
import * as products from './assets/images';

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
      { name: 'Laptop', price: 25000.00, img: products.laptop },
      { name: 'Motherboard', price: 3000.00, img: products.motherboard },
      { name: 'Video card', price: 15000.00, img: products.videocard },
      { name: 'Monitor', price: 12000.00, img: products.monitor },
      { name: 'Power supply', price: 4500.00, img: products.powerSupply },
      { name: 'Router', price: 2500.00, img: products.router },
      { name: 'Gabinet', price: 3500.00, img: products.gabinet },
      { name: 'Keyboard', price: 3000.00, img: products.keyboard },
      { name: 'Mouse', price: 2000.00, img: products.mouse },
    ],
    cart: [],
    isCartVisible: false,
  }

  mutateCart = (product, integer=1) => {
    const { cart } = this.state
    if (cart.find(cartElement => cartElement.name === product.name)) {
      let newCart = cart.map(cartElement => cartElement.name === product.name
        ? ({
          ...cartElement,
          quantity: cartElement.quantity + integer
        })
        : cartElement
        )
        newCart = newCart.filter((cartElement) => cartElement.quantity > 0)
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
          mutateCart={this.mutateCart}
        />
        <Layout style={styles.layout}>
          <Title />
          <Products
            mutateCart = {this.mutateCart}
            products = {this.state.products}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
