import React from "react";
import "./MenuButton.scss";

class MenuButton extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    if (this.props.active) {
      this.setState({
        active: true,
      });
    }
  }

  toggle() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const classes = this.state.active ? "menu-button active" : "menu-button";

    return (
      <button className={classes} onClick={this.toggle.bind(this)}>
        <span className="bar"></span>
      </button>
    );
  }
}

export default MenuButton;
