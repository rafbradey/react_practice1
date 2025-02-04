import {Link} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import './pages-css/home.css'
import gcats from '../assets/gcats.gif'
import gcashbanner from '../assets/gcashbanner.png'

export function Home() {
    return (
    <>
    <Navbar/>

        <div className="home-container">
            <img src={gcashbanner} alt="gcash banner" id="gcashbanner"/>

            <div className="home-content">
                <div className="hc-section" id="first-col">
                    <div className="hc-desc">
                    <h1>GCash</h1>
                    <p>Bawat Padala,
                        Diretso sa Gcash na!
                    </p>
                        <div className="button-alignment">
                        <button id="promo-btn"> <Link to={"/items"} id="promo-btn-link">View Promos</Link> </button>
                        </div>
                    </div>
                </div>
                <div className="hc-section"></div>
                <div className="hc-section"></div>
                <div className="hc-section"></div>
            </div>


        </div>

        <div className="gcats-container">
            <div className="about-container-header">
                <img src={gcats} alt="gcats" id="gcats"/></div>
            <div className="about-container-header">
                <h1>GCash</h1></div>

        </div>



    </>
    )
}


