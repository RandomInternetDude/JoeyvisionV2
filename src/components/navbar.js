import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';



export default class Navbar extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                            
                            
                            <Link className="navbar-brand" to="/">
                                <h1>Joeyvision</h1>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav align-items-center ml-auto">
                                                        <li className="nav-item">
                                                            <Link to="/products" className="nav-link">
                                                            <h2>home</h2>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/mission" className="nav-link">
                                                            <h2>about</h2>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/about" className="nav-link">
                                                            <h2>resume</h2>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/donate" className="nav-link">
                                                            <h2>contact</h2>
                                                            </Link>
                                                        </li>
                                                        

                                                        <li>
                                              
                                                        </li>
                                                    </ul> 
                                                </div>

                                              
                </nav>
            </div>
        )
    }
}




