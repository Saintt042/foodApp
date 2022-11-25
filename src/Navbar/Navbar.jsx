import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from './NavbarStyle';
import logo from '../resources/loogos.PNG';
import { FaHome } from 'react-icons/fa';
import {  GiKnifeFork } from 'react-icons/gi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { HiOutlineLogout } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';

const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
          <img src={logo} alt="zubis" />
        <div className="icons">
         <Link to="/">
         <FaHome id='icon' />
         </Link>
          <GiKnifeFork id='icon' />
          <Link to="/cart">
          <MdOutlineShoppingCart id='icon' />
         </Link>
          
          <GoLocation id='icon' />
          <HiOutlineLogout id='icon' />
        </div>
      </div>
    </Container>
  )
}

export default Navbar