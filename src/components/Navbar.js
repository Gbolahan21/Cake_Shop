import React from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';

function Navbar() {
    return (
        <>
            <div className="input">
                <input type="text" placeholder="Search Customer Or Menu" id="input"/>
                <div className="sidePic">
                    <img className="elp" src="images/Ellipse 1.png" alt="components" height="70px" width="70px" style={{borderRadius: 50}} /> 
                    <p className="hello">Hello, Chinedu <FaIcons.FaBell className="bell"/></p>
                    <Link to="/settings" className="link">
                        <p className="set"><IoIcons.IoIosSettings style={{marginTop: 6}} />Settings</p>
                    </Link>
            
                    <div className="name">
                        <img className="comp" src="images/Ellipse 1.png" alt="components" height="70px" width="70px" style={{borderRadius: 50}} />
                    
                        <p className="details">
                            Stephen Kuforiji <br />
                            <p className="day">Wedding Anniversary is in 3 days</p> <AiIcons.AiOutlineClose className="close" /> <br />
                            <p className="min">3 mins ago</p>
                        </p>
                    </div>
                </div>
                 
            </div>
            <div className="Navbar">
                <Link to="#" className="menu-bar">
                    <img src="images/image3.png" alt="components" />
                </Link>
                
            <nav className="nav-menu">
                <ul className="nav-menu-items">
                    {SidebarData.map((item, index) => {
                        return (
                            <p key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </p>
                        )
                    })}
                </ul>
            </nav>
            </div>
        </>
    )
}

export default Navbar;
