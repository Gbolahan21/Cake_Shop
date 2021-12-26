import React from 'react';
import * as FaIcons from 'react-icons/fa';

function Settings() {
    return (
        <div className="settings">
            <p className="available">Customize Settings</p>
            
            <div className="row" id="set_list">
                <div className="col-lg-6" id="chocolate">
                    <p className="bef">Number of days before notification</p>
                    <button id="days">3 Days</button>
                </div>
                
                <div className="col-lg-6" id="late">
                    <p className="syn">Sychronize data with mobile app</p>
                </div>
            </div>
            
            <div className="row" id="set_lists">
                <div className="col-lg-6" id="chocolate">
                    <p className="not">Notification Mediums</p>
                    <div className="check">
                        <input type="checkbox" id="red" value="red" />
                        <label for="red" className="lab">Push Notifiction</label> &nbsp;
                        <input type="checkbox" id="gold" value="gold" className="notify"/>
                        <label for="gold" className="lab">Text Message</label> &nbsp;
                        <input type="checkbox" id="blue" value="blue" className="notify"/>
                        <label for="blue" className="lab">Email</label>
                    </div>
                </div>
                
                <div className="col-lg-6" id="late">
                    <p className="syn">Notification Frequency</p>
                    <div className="radio">
                        <input type="radio" id="red" value="red" />
                        <label for="red" className="lab">Daily</label> &nbsp;
                        <input type="radio" id="gold" value="gold" className="notify"/>
                        <label for="gold" className="lab">Weekly</label> &nbsp;
                        <input type="radio" id="blue" value="blue" className="notify"/>
                        <label for="blue" className="lab">Monthly</label> &nbsp;
                        <input type="radio" id="blue" value="blue" className="notify"/>
                        <label for="blue" className="lab">Annually</label>
                    </div>
                </div>
            </div>

            <div className="row" id="set_lists">
                <div className="col-lg-6" id="chocolate">
                    <p className="not">Send Notification Of:</p>
                    <div className="check">
                        <input type="checkbox" id="red" value="red" />
                        <label for="red" className="lab">Customer's Important Date</label> &nbsp;
                        <input type="checkbox" id="gold" value="gold" className="notify"/>
                        <label for="gold" className="lab">Pending Orders</label>
                        <br />
                        <input type="checkbox" id="blue" value="blue" className="notify"/>
                        <label for="blue" className="lab">Pending Payments</label>
                    </div>
                </div>
            </div>
            <button id="save">Save Settings <FaIcons.FaGreaterThan className="gret" /></button>
        </div>
    )
}

export default Settings;
