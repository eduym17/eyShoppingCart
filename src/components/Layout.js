import { Component } from "react";

const styles = {
  layout: {
    backgroundColor: '#F4F4F5',
    color: '#71717A',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
  }
}

class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout;
