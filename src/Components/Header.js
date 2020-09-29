import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Logo from '../images/logo.jpeg'
class Header extends Component
{
    render(){
        return <div className="Header">
            <Link to="/"><img className="logo" src={Logo}></img></Link>
            <div className="search">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" style={{backgroundColor:"lightGrey"}}>Search By</span>
                    </div>
                        <input type="text" className="form-control" placeholder="Episode or Character or Location" />
                    <div className="input-group-append">
                        <button className="btn" style={{backgroundColor:"lightGrey"}}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    }

}
export default Header;