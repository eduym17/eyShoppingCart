import { Component } from "react";

const styles = {
  button: {
    backgroundColor: 'purple',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
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
