import React from 'react';
import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import SearchBar from './SearchBar'; 
import Logo from './Logo';

function Header() {
    return (
  <header id="header" class="header fixed-top d-flex align-items-center">

    <Logo name="Logo" link="#" />

    <SearchBar />

  </header>
      );
}

export default Header;