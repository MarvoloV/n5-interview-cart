import React, { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import './Navbar.scss';
import { Cart } from '../../Cart/Cart';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src='assets/n5.svg' width="30px" alt='logo' />
        </Link>
        <div className="navbar-cart" onClick={toggleCartVisibility}>
          <IoCartOutline size={30} data-testid="cart-icon" />
        </div>
      </div>
      <div className={`cart-container ${isCartVisible ? 'visible' : ''}`}>
        <Cart onClose={toggleCartVisibility} />
      </div>
    </nav>
  );
};

