import { Component } from "react";

const styles = {
  title: {
    marginBottom: '30px',
    color: '#404040',
    margin: '10px 15px',
  }
}

class Title extends Component {
  render() {
    return (
      <h2 style={styles.title}>Shop 🤖</h2>
    )
  }
}

export default Title;
