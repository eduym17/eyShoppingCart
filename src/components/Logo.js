import { Component } from "react";

const styles = {
  logo: {
    fontWeight: '700',
    fontSize: '30px',
  }
}

class Logo extends Component {
  render() {
    return (
      <div style={styles.logo}>
        ☄️ devStore
      </div>
    )
  }
}

export default Logo;
