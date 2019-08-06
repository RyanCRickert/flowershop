import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { ShoppingCart, Person } from "@material-ui/icons"

import { updateToken } from "../redux/actions/token";
import { setUserName } from "../redux/actions/user";

const handleClick = props => {
  props.updateToken();
  props.setUserName();
}

export const NavBar = props => (
  <header className="navigation">
    <div className="navigation__logo">
      <h1>Flowershoppe</h1>
    </div>
    <div className="navigation__items">
      <div className="navigation__item">
        <Person />
        Login
      </div>
      <div className="navigation__item">
        <ShoppingCart />
        Cart
      </div>
    </div>
  </header>
)

const mapStateToProps = (state) => {
  return {
    token: state.token
  };
}

const mapDispatchToProps = (dispatch) => ({
  updateToken: () => dispatch(updateToken()),
  setUserName: () => dispatch(setUserName())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);