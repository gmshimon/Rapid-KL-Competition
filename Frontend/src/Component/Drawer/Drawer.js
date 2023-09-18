import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
} from 'react-icons/fa'
import { MdFeedback } from 'react-icons/md'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Drawer.css'
const Drawer = ({ children }) => {
  // console.log(children)
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => setIsOpen(!isOpen)
  const menuItem = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <FaTh />
    },
    {
      path: '/about',
      name: 'About',
      icon: <FaUserAlt />
    },
    {
      path: '/analytics',
      name: 'Analytics',
      icon: <FaRegChartBar />
    },
    {
      path: '/comment',
      name: 'Comment',
      icon: <FaCommentAlt />
    },
    {
      path: '/product',
      name: 'Product',
      icon: <FaShoppingBag />
    },
    {
      path: '/feedback',
      name: 'Feedback',
      icon: <MdFeedback />
    }
  ]
  return (
    <div className='container1'>
      <div style={{ width: isOpen ? '200px' : '50px' }} className='sidebar1'>
        <div className='top_section1'>
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className='logo1'>
            MaintainIQ
          </h1>
          <div
            style={{ marginLeft: isOpen ? '40px' : '0px' }}
            className='bars1'
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link1'
            activeclassName='active1'
          >
            <div className='icon1'>{item.icon}</div>
            <div
              style={{ display: isOpen ? 'block' : 'none' }}
              className='link_text'
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Drawer
