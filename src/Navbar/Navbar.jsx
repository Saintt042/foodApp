import React from 'react'
import { Container } from './NavbarStyle';
import logo from '../resources/loogos.PNG';
import { AiFillHome, GiKnifeFork, MdOutlineShoppingCart,HiOutlineLogout } from 'react-icons/fa';

const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="zubis" />
        </div>
      </div>
    </Container>
  )
}

export default Navbar