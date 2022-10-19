import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import coinlist from '../img/coinlist.svg'
import Login from "./Login";

const Header = () => {
    return (
        <div className="container">
            <div className="s-container">
                <div className='s-grid'>
                    <div className="navbar-logo">
                        <a href="/">
                            <img src={coinlist} className="coi" alt="fireSpot"/>
                        </a>
                    </div>

                        <div className='menu0'>
                            <div className='linkmenu'>
                                <div className="menu">
                                    <ul>
                                        <li><a className="u" href='/'>Home</a></li>
                                        <li><a className="u" target='_blank' href='https://coinlist.co/products'>Products</a></li>
                                        <li><a className="u" target='_blank' href='https://pro.coinlist.co/trader/FIL-USD'>View Exchange</a></li>
                                        <li><a className="u" target='_blank' href='https://blog.coinlist.co/'>Blog</a></li>
                                        <li><Link to='login' className="u" target='_blank' >Log in</Link></li>     
                                    </ul>
                                 </div>
                                    
                                
                                <div className="display">  
                                    <div className='get'>
                                        <a className='btn' >Get Started</a>
                                    </div>
                                </div>
    

                            </div>
                        </div>
                </div>
            </div>
            
      </div>
      
    )
}

export default Header;