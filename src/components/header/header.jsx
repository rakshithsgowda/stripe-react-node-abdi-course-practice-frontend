import { Link } from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon'

import './header.styles.scss'

const Header = () => {
  return (
    <nav className='nav-menu container'>
      <div className='logo'>
        <Link to='/'>NOMAD</Link>
      </div>
      <ul>
        <li to='/'>Home</li>
        <li to='shop'>Shop</li>
      </ul>
      <CartIcon />
    </nav>
  )
}
export default Header
