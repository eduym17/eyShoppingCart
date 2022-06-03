import { Component } from "react";

const styles = {
  button: {
    backgroundColor: '#6D28D9',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    padding: '6px 10px',
    borderRadius: '3px',
    cursor: 'pointer',
    margin: '20px 0',
  }
}

class Button extends Component {
  render() {
    return (
      <button style={styles.button}  {...this.props} />
    )
  }
}

export default Button;
