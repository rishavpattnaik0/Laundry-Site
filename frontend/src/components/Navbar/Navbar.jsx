import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { Menu, Space,Spin } from 'antd';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Navbar.scss";
import Login from "../Login/Login";
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import {ROUTES} from '../../routes/RouterConfig'
let a,b;
const Navbar = () => {
  
  const logout = (e) =>{
    a=false;
    navigate(e);
  }

   b=localStorage.getItem('name');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate=useNavigate();
   a=localStorage.getItem('login');

  return (
    <div>
      <Nav>
        <NavMenu>
          <NavLink className='hi' to={ROUTES.Services}  activeStyle>
            Services
          </NavLink>
          <NavLink to={ROUTES.About} activeStyle>
            About Us
          </NavLink>
          <NavLink to={ROUTES.Testimonials} activeStyle>
            Testimonials
          </NavLink>
          <NavLink to='' activeStyle>
            Contact Us
          </NavLink>
          {
            !a ? <NavLink  to='' visible={!a} onClick={() => {setIsModalVisible(true)}} activeStyle>
            Sign Up/Login
          </NavLink>
          :
          <div>
          <div class="dropdown">
  <button class="btn hiii btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <h4>👦</h4>{b}
  </button>
  <ul class="dropdown-menu">
    <li className='li'><a class="dropdown-item" href="#">Update Personal Details</a></li>
    <li className='li'><a class="dropdown-item" href="#">Update Password</a></li>
    <li className='li'><a class="dropdown-item" href="#">Logout</a></li>
  </ul>
</div>
          
          </div>
          }
        </NavMenu>
      </Nav>
      <Modal
          visible={isModalVisible && !a}
          onOk={() => {
            setIsModalVisible(false);
          }}
          onCancel={() => {
            setIsModalVisible(false);
          }}>
          <Login/>
        </Modal>
    </div>
  );
};
  
export default Navbar;