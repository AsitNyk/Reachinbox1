import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
// import GoogleSignUp from './googleauthentication';
import '../css/home.css'

function Home() {
    return (
        <>
            <div className='container'>
                <div>
                    <div className='hero'>
                        <BiLogoGmail className='logo' />
                        <h1>REACHINBOX</h1>
                    </div>
                    <div>
                        <hr className='line' />
                    </div>
                </div>
                <div className='loginPage'>
                    <div>
                       <h3>Create a new account</h3>
                        
                    </div>
                    <div className='goooglesg'>
                        <button><FcGoogle className='gglogo' />Sign Up with Google</button>
                    </div>
                    <div className='createbtn'>
                        <button>Create an Account</button>
                    </div>
                    <div>
                        <h6>Already have an account?<a href="">Sign In</a></h6>
                    </div>
                </div>
                <div className='footer'>
                    <h6>2023 Reachinbox.All rights reserved</h6>
                </div>
            </div>
        </>
    )
}

export default Home