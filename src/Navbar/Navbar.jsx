import React from 'react'
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
          <FaHome id='icon' />
          <GiKnifeFork id='icon' />
          <MdOutlineShoppingCart id='icon' />
          <GoLocation id='icon' />
          <HiOutlineLogout id='icon' />
        </div>
      </div>
    </Container>
  )
}

export default Navbar