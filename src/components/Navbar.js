import { Component } from "react";
import Logo from './Logo';

const styles = {
  navbar: {
    backgroundColor: '#171717',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 5px rgb(0, 0, 0, 0.2)',
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav style={styles.navbar}>
        <Logo />
        <p>Carro</p>
      </nav>
    )
  }
}

export default Navbar;
