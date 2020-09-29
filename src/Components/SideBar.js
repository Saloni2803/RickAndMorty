import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class SideBar extends Component{
    render(){
        return <div className="sideBar">
            <ul type="none">
                <Link to="/character"><li>Character</li></Link>
                <Link to="/episode"><li>Episodes</li></Link>
                <Link to="/location"><li>Locations</li></Link>

            </ul>
            </div>
    }
}
export default SideBar;