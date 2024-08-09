import React from 'react';
import NavigationBar from '../../components/navigationBar/Navbar';
import hand_icon from '../../components/Assets/hand_icon.png';
import arrow_icon from '../../components/Assets/arrow.png';
import hero_image from '../../components/Assets/hero_image.png';
import Footer from '../../components/footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <div className='hero'>
            <NavigationBar/>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
            <Footer/>
        </div>
    )
}

export default Home