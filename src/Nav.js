import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Nav = () => {

  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/individualProduct">
          <li>Individual Product</li>
        </Link>
        <Link to="/viewCart">
          <li>View Cart</li>
        </Link>
        <Link to="/checkout">
          <li>Checkout</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;