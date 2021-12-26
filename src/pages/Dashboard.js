import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function Dashboard() {
    return (
        <div className="dashboard">
            <ul className="week">
                <li>Amount Made This Week</li>
                <li>Total Sales This Week</li>
            </ul> 
            
            <div className="row" id="amount">
                <div className="col-lg-4">
                    <p className="high">NGN 300,000</p>
                </div>
                <div className="col-lg-4">
                    <p className="medium">300</p>
                </div>
                <div className="col-lg-4">
                    <p className="low">10</p>
                </div>
            </div>
            
            <ol className="pro">
                <li>Sales This Week</li>
                <Link to="/product">
                    <button className="but">View All <FaIcons.FaGreaterThan className="great" /></button>
                </Link>
            </ol>

            <div className="row" id="first">
                <div className="col-lg-6" id="chocolate">
                    <img src="images/Rectangle6.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="choco">Chocolate Cake <b style={{color: 'grey'}}>x2</b></p>
                    <button className="date">7/22/2021</button>
                    <button className="am">NGN 4,000</button>
                </div>
                
                <div className="col-lg-6" id="late">
                    <img src="images/Rectangle62.png" alt="components" height="70px" width="70px" className="image" />
                    <p id="choco">Red Velvet <b style={{color: 'grey'}}>x2</b></p>
                    <button className="date">7/22/2021</button>
                    <button className="am">NGN 4,000</button>
                </div>
            </div>
            
            <div className="row" id="second">
                <div className="col-lg-6" id="chocolate">
                    <img src="images/Rectangle63.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="cho">Spiderman Cake <b style={{color: 'grey'}}>x2</b></p>
                    <button className="date">7/22/2021</button>
                    <button className="am">NGN 4,000</button>
                </div>
                
                <div className="col-lg-6" id="late">
                    <img src="images/Rectangle64.png" alt="components" height="70px" width="70px" className="image" />
                    <p id="cho">Coconut Cake <b style={{color: 'grey'}}>x2</b></p>
                    <button className="date">7/22/2021</button>
                    <button className="am">NGN 4,000</button>
                </div>
            </div>

            <ol className="pro">
                <li>New Customers</li>
                <Link to="/customer">
                    <button className="but">View All <FaIcons.FaGreaterThan className="great" /></button>
                </Link>
            </ol>

            <div className="row" id="all">
                <div className="col-lg-3" id="counter">
                    <img className="people" src="images/Rectangle8.png" alt="components" height="100px" width="100px" style={{borderRadius: 10}} />
                    <h5>Nkechi Eberechi</h5>
                    <h6 className="sms"><FaIcons.FaSms className="Fa" /> Send Text</h6>
                    <h6 className="email"><FaIcons.FaVoicemail className="Fa" /> Send Email</h6>
                    <p className="import">IMPORTANT DATES <FaIcons.FaDropbox className="drop" /></p>
                    <button className="edit">Edit Details</button>
                </div>
                <div className="col-lg-3" id="counter">
                    <img className="people" src="images/Rectangle81.png" alt="components" height="100px" width="100px" style={{borderRadius: 10}} />
                    <h5>Lola Adenuga</h5>
                    <h6 className="sms"><FaIcons.FaSms className="Fa" /> Send Text</h6>
                    <h6 className="email"><FaIcons.FaVoicemail className="Fa" /> Send Email</h6>
                    <p className="import">IMPORTANT DATES <FaIcons.FaDropbox className="drop" /></p>
                    <button className="edit">Edit Details</button>
                </div>
                <div className="col-lg-3" id="counter">
                    <img className="people" src="images/Rectangle65.png" alt="components" height="100px" width="100px" style={{borderRadius: 10}} />
                    <h5>Olamide Tumiwa</h5>
                    <h6 className="sms"><FaIcons.FaSms className="Fa" /> Send Text</h6>
                    <h6 className="email"><FaIcons.FaVoicemail className="Fa" /> Send Email</h6>
                    <p className="import">IMPORTANT DATES <FaIcons.FaDropbox className="drop" /></p>
                    <button className="edit">Edit Details</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
