import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import Popup from './productPopup';
import "./Popup.css";
import axios from "axios";

function Customer(props) {
    const [buttonPopup, setButtonPopup] = useState(false);

    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");

    const register = () => {
        axios.post("http://localhost:3001/api/customer/register", {
                customerName: customerName,
                customerEmail: customerEmail,
                customerPhoneNumber: customerPhoneNumber
                }).then((response) => {
                console.log(response);
            })
        }
        
    return (
        <div className="customer">
            <ul className="sort">
                <li className="csc">Cake Shop Customers</li> &nbsp;
                <li className="together">Sort By Date</li> &nbsp;
                <li className="together">New Customers</li>
            </ul> 
            <Link to="/customer">
                <button className="new" onClick={() => setButtonPopup(true)}>Create New Customer <FaIcons.FaGreaterThan className="great" /></button>
            </Link>

            <div className="row" id="cost">
                <div className="col-lg-3" id="count">
                    <img id="people" src="images/Rectangle65.png" alt="components" height="100px" width="100px" style={{borderRadius: 10}} />
                    <h5>Olamide Tumiwa</h5>
                    <h6 className="sms"><FaIcons.FaSms className="Fa" /> Send Text</h6>
                    <h6 className="email"><FaIcons.FaVoicemail className="Fa" /> Send Email</h6>
                    <p className="import">IMPORTANT DATES <FaIcons.FaDropbox className="drop" /></p>
                    <button className="edit">Edit Details</button>
                </div>
                <div className="col-lg-3" id="count">
                    <img id="people" src="images/Rectangle8.png" alt="components" height="100px" width="100px" style={{borderRadius: 10}} />
                    <h5>Nkechi Eberechi</h5>
                    <h6 className="sms"><FaIcons.FaSms className="Fa" /> Send Text</h6>
                    <h6 className="email"><FaIcons.FaVoicemail className="Fa" /> Send Email</h6>
                    <p className="import">IMPORTANT DATES <FaIcons.FaDropbox className="drop" /></p>
                    <button className="edit">Edit Details</button>
                </div>
                <div className="col-lg-3" id="count">
                    <img id="people" src="images/Rectangle81.png" alt="components" height="100px" width="100px" style={{borderRadius: 10}} />
                    <h5>Olamide Tumiwa</h5>
                    <h6 className="sms"><FaIcons.FaSms className="Fa" /> Send Text</h6>
                    <h6 className="email"><FaIcons.FaVoicemail className="Fa" /> Send Email</h6>
                    <p className="import">IMPORTANT DATES <FaIcons.FaDropbox className="drop" /></p>
                    <button className="edit">Edit Details</button>
                </div> 
            </div>
            
            <div className="row" id="cost">
                <div className="col-lg-3" id="count">
                    <img id="people" src="images/Rectangle65.png" alt="components" height="100px" width="100px" style={{borderRadius: 10}} />
                    <h5>Olamide Tumiwa</h5>
                    <h6 className="sms"><FaIcons.FaSms className="Fa" /> Send Text</h6>
                    <h6 className="email"><FaIcons.FaVoicemail className="Fa" /> Send Email</h6>
                    <p className="import">IMPORTANT DATES <FaIcons.FaDropbox className="drop" /></p>
                    <button className="edit">Edit Details</button>
                </div>
                <div className="col-lg-3" id="count">
                    <img id="people" src="images/Rectangle8.png" alt="components" height="100px" width="100px" style={{borderRadius: 10}} />
                    <h5>Nkechi Eberechi</h5>
                    <h6 className="sms"><FaIcons.FaSms className="Fa" /> Send Text</h6>
                    <h6 className="email"><FaIcons.FaVoicemail className="Fa" /> Send Email</h6>
                    <p className="import">IMPORTANT DATES <FaIcons.FaDropbox className="drop" /></p>
                    <button className="edit">Edit Details</button>
                </div>
                <div className="col-lg-3" id="count">
                    <img id="people" src="images/Rectangle81.png" alt="components" height="100px" width="100px" style={{borderRadius: 10}} />
                    <h5>Olamide Tumiwa</h5>
                    <h6 className="sms"><FaIcons.FaSms className="Fa" /> Send Text</h6>
                    <h6 className="email"><FaIcons.FaVoicemail className="Fa" /> Send Email</h6>
                    <p className="import">IMPORTANT DATES <FaIcons.FaDropbox className="drop" /></p>
                    <button className="edit">Edit Details</button>
                </div> 
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <form action="/" method="post">
                    <h3>Add New Customer</h3>
                    <br />
                    <p>Customer's Name</p>
                    <input type="text" className="pop"  onChange={(e) => {
                        setCustomerName(e.target.value)
                    }}/>
                    
                    
                    <p>Phone Number</p>
                    <input type="text" className="side"  onChange={(e) => {
                        setCustomerEmail(e.target.value)
                    }}/>
                    <div className="sideinput">
                        <p>Email Address</p>
                        <input type="text" className="side" onChange={(e) => {
                        setCustomerPhoneNumber(e.target.value)
                    }}/>
                    </div>
                    <br /><br />
                    
                    <h2>IMPORTANT DATE</h2>

                    <p>Event Name</p>
                    <input type="text" className="pop" />
                    
                    <p>Date</p>
                    <input type="date" className="side" />
                    <div className="sideinput">
                        <p>Notification Frequency</p>
                        <input type="date" className="note" />
                    </div>
                    <br /><br />

                    <p><b className="plus">+</b> &nbsp; Add Event</p>

                    <button className="close" onClick={() => props.setTrigger(false)}>Cancel</button>
                    <button id="createNew" onClick={register}>Create New customer <FaIcons.FaGreaterThan className="greater" /></button>
                </form>
            </Popup>
        </div>
    )
}

export default Customer;

