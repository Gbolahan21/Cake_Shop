import React from 'react'

function OrderHistory() {
    return (
        <div className="orderhistory">
            <ul className="sort">
                <li className="csc">Cake Shop Customers</li> &nbsp;
                <li className="together">Sort By Date</li> &nbsp;
                <li className="together">Chocolate Cake</li>
            </ul> 
            
            <div className="row" id="first">
                <div className="col-lg-6" id="chocolate">
                    <img src="images/Rectangle6.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="choco">Chocolate Cake <b style={{color: 'grey'}}>x2</b></p>
                    <p className="steph">Stephen Kuforiji</p>
                    <button className="newDate">7/22/2021</button>
                    <button className="newAm">NGN 4,000</button>
                </div>
                
                <div className="col-lg-6" id="late">
                    <img src="images/Rectangle6.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="choco">Chocolate Cake <b style={{color: 'grey'}}>x2</b></p>
                    <p className="steph">Stephen Kuforiji</p>
                    <button className="newDate">7/22/2021</button>
                    <button className="newAm">NGN 4,000</button>
                </div>
            </div>
            
            <div className="row" id="second">
                <div className="col-lg-6" id="chocolate">
                    <img src="images/Rectangle6.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="choco">Chocolate Cake <b style={{color: 'grey'}}>x2</b></p>
                    <p className="steph">Stephen Kuforiji</p>
                    <button className="newDate">7/22/2021</button>
                    <button className="newAm">NGN 4,000</button>
                </div>
                
                <div className="col-lg-6" id="late">
                    <img src="images/Rectangle6.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="choco">Chocolate Cake <b style={{color: 'grey'}}>x2</b></p>
                    <p className="steph">Stephen Kuforiji</p>
                    <button className="newDate">7/22/2021</button>
                    <button className="newAm">NGN 4,000</button>
                </div>
            </div>

            <div className="row" id="second">
                <div className="col-lg-6" id="chocolate">
                    <img src="images/Rectangle6.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="choco">Chocolate Cake <b style={{color: 'grey'}}>x2</b></p>
                    <p className="steph">Stephen Kuforiji</p>
                    <button className="newDate">7/22/2021</button>
                    <button className="newAm">NGN 4,000</button>
                </div>
                
                <div className="col-lg-6" id="late">
                    <img src="images/Rectangle6.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="choco">Chocolate Cake <b style={{color: 'grey'}}>x2</b></p>
                    <p className="steph">Stephen Kuforiji</p>
                    <button className="newDate">7/22/2021</button>
                    <button className="newAm">NGN 4,000</button>
                </div>
            </div>
        </div>
    )
}

export default OrderHistory;
