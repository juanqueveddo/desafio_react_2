import React from 'react'

//Import Link and useLocation from react-router-dom
import { Link, useLocation } from 'react-router-dom'

//Import Css
import './navBar.css'

const CategoryItems = [
    {
        to: '/category/proteina',
        text: 'Proteina'
    },
    {
        to: '/category/creatina',
        text: 'Creatina'
    },
    {
        to: '/category/pre-work',
        text: 'Pre-Work'
    },
]

const NavBar = () => {
const {pathname} = useLocation()

  return (
    <>
        <div className='navbar__container'> 
            <div>
                <Link to="/" className='navbar__brand'>
                    <h1 className='brand'>JCSuplementos</h1>
                </Link>
            </div>
            <div className='navbar__category'>
                {CategoryItems.map((item) => (
                    <ul>
                        <Link key={item.to} to={item.to}>
                            <li className={pathname === item.to ? 'active' : ''}>{item.text}</li>
                        </Link>
                    </ul>
                ))}
            </div>
            <div className='navbar__cart'>
                <Link to="/cart">
                    <img className='navbar__cart__img' src="src/Assets/images/CartIcon.png" alt="cart" />
                </Link>
            </div>
        </div>
    </>
  )
}

export default NavBar