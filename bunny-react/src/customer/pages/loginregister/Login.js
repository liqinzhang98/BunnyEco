import React from 'react'
import NavigationBar from '../../components/navigationBar/Navbar';
import Footer from '../../components/footer/Footer';
import './LoginSignup.css'

const Login = () => {
    return (
      <div className='loginsignup'>
        <NavigationBar/>
        <div className="loginsignup-container">
          <h1>Go to your account</h1>
          <div className="loginsignup-fields">
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
          </div>
          <button>Sign in</button>

        </div>
        <Footer />
      </div>
      
    )
  }

export default Login