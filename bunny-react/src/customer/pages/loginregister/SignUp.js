import React from 'react'
import NavigationBar from '../../components/navigationBar/Navbar';
import Footer from '../../components/footer/Footer';
import './LoginSignup.css'

const SignUp = () => {
    return (
      <div className='loginsignup'>
        <NavigationBar/>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
        <Footer />
      </div>
      
    )
  }

export default SignUp