import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
      color: 'white'
  };

  return (
    
      <nav>
          <h1>TheThrift <i class="fa fa-paper-plane-o" aria-hidden="true"></i></h1>
          <ul className='nav-links'>
              <Link style={navStyle} to='/The-Thrift'>
                <button>Home</button>
              </Link>
              <Link style={navStyle} to='/shop'>
                <button>Shop</button>
              </Link>
              <Link style={navStyle} to='/about'>
                <button>About</button>
              </Link>
              
          </ul>
      </nav>
  );
}

export default Nav;