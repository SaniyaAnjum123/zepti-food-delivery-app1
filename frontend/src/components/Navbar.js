import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cart = [] }) => { // Default empty array to prevent errors
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand fs-1 fst-b" to="/">ZEPTI MARK</Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>

            {/* Search Bar */}
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </nav>

            {/* Cart Section */}
            <div className="d-flex align-items-center ms-3">
              <Link className="nav-link" to="/cart">
                🛒 Cart
                {totalItems > 0 && (
                  <span className="badge bg-warning text-dark ms-1">{totalItems}</span>
                )}
              </Link>
              <span className="ms-2 fw-bold">₹{totalPrice}</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
