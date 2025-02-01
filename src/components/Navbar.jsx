import { Link } from 'react-router-dom';
import './components-css/navbar.css'
function Navbar() {
    return (
        <>
            <nav>
                <div className="logo">Gcash</div>
                <div className="nav-links">
                    <Link to="/" className="navs">Home</Link>
                    <Link to="/items" className="navs">Items</Link>
                    <Link to="/cart" className="navs">Cart</Link>


                </div>
            </nav>
        </>
    )
}

export default Navbar
