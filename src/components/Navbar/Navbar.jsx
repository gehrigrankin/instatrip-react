import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.css'

const Navbar = (props) => {
    return (
        <div className='Navbar'>
            <nav>
                <div className="nav-wrapper indigo darken-3">
                    <Link to="/" className="brand-logo center">Insta<span className="blue-text text-lighten-1">Trip</span></Link>
                    <ul className="left hide-on-med-and-down">
                        <li id="search-li">
                            <form className="input-field">
                                <i className="white-text text-lighten-1 material-icons prefix">search</i>
                                <input id="icon_prefix" type="text" className="validate white-text"/>
                                <label htmlFor="icon_prefix">Search</label>
                            </form>
                            {/* <div class="input-field col s6 s12 white-text">
                                <i class="white-text text-lighten-1 material-icons prefix">search</i>
                                <input type="text" placeholder="search" id="autocomplete-input" class="autocomplete indigo darken-3 white-text" />
                            </div> */}

                        </li>
                    </ul>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/city">Cities</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
