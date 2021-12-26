import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import Popup from './productPopup';
import "./Popup.css";
import axios from "axios";

function Product(props) {
    const [buttonPopup, setButtonPopup] = useState(false);

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const register = () => {
        axios.post("http://localhost:3001/api/product/register", {
                productName: productName,
                productDescription: productDescription,
                productAmount: productPrice
                }).then((response) => {
                console.log(response);
            })
        }
    
    
    return (
        <div className="product">
            <p className="available">Available Cake Shop Products</p>
            <Link to="/product">
                <button className="new" onClick={() => setButtonPopup(true)}>Create New Product <FaIcons.FaGreaterThan className="great" /></button>
            </Link>

            <div className="row" id="list">
                <div className="col-lg-6" id="chocolate">
                    <img src="images/Rectangle6.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="choc">Chocolate Cake</p>
                    <button id="prod">Edit Product</button>
                </div>
                
                <div className="col-lg-6" id="late">
                    <img src="images/Rectangle62.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="choc">Red Velvet Cake</p>
                    <button id="prod">Edit Product</button>
                </div>
            </div>
            
            <div className="row" id="second">
                <div className="col-lg-6" id="chocolate">
                    <img src="images/Rectangle6.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="choc">Coconut Cake</p>
                    <button id="prod">Edit Product</button>
                </div>
                
                <div className="col-lg-6" id="late">
                    <img src="images/Rectangle62.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="choc">Red Velvet Cake</p>
                    <button id="prod">Edit Product</button>
                </div>
            </div>
            
            <div className="row" id="second">
                <div className="col-lg-6" id="chocolate">
                    <img src="images/Rectangle6.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="choc">Chocolate Cake</p>
                    <button id="prod">Edit Product</button>
                </div>
                
                <div className="col-lg-6" id="late">
                    <img src="images/Rectangle62.png" alt="components" height="70px" width="70px" className="image" />
                    <p className="choc">Red Velvet Cake</p>
                    <button id="prod">Edit Product</button>
                </div>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <form action="/product" method="post">
                    <h3>Add New Product</h3>
                    <br />
                    <p>Product Name</p>
                    <input type="text" className="pop"  onChange={(e) => {
                        setProductName(e.target.value)
                    }}/>
                    
                    <p>Product Description</p>
                    <input type="text" className="pops"  onChange={(e) => {
                        setProductDescription(e.target.value)
                    }}/>
                    
                    <p>Product Price</p>
                    <input type="text" className="side"  onChange={(e) => {
                        setProductPrice(e.target.value)
                    }}/>
                    <div className="sideinput">
                        <p>Other Details</p>
                        <input type="text" className="side"/>
                    </div>
                    
                    <p>Available Size</p>
                    <input type="checkbox" id="small" name="gender" value="small"/>
                    <label for="small" className="lab">Small</label>
                    <input type="checkbox" id="medium" name="gender" value="medium" className="rad"/>
                    <label for="medium" className="lab">Medium</label>
                    <input type="checkbox" id="large" name="gender" value="large" className="rad"/>
                    <label for="large" className="lab">Large</label>
                    
                    <p>Color</p>
                    <input type="checkbox" id="red" value="red" />
                    <label for="red">Red</label>
                    <input type="checkbox" id="gold" value="gold" className="rad"/>
                    <label for="gold">Gold</label>
                    <input type="checkbox" id="blue" value="blue" className="rad"/>
                    <label for="blue">Blue</label>
                    <input type="checkbox" id="pink" value="pink" className="rad"/>
                    <label for="pink">Pink</label>
                    <input type="checkbox" id="green" value="green" className="rad"/>
                    <label for="green">Green</label>
                    <input type="checkbox" id="brown" value="brown" className="rad"/>
                    <label for="brown">Brown</label>
                    
                    <p>Weight</p>
                    <input type="checkbox" id="2 pounds" value="2 pounds" />
                    <label for="2 pounds">2 Pounds</label>
                    <input type="checkbox" id="4 pounds" value="4 pounds" className="rad"/>
                    <label for="4 pounds">4 Pounds</label>
                    <input type="checkbox" id="6 pounds" value="6 pounds" className="rad"/>
                    <label for="6 pounds">6 Pounds</label>
                    <input type="checkbox" id="10 pounds" value="10 pounds" className="rad"/>
                    <label for="10 pounds">10 Pounds</label>

                    <button className="close-btn" onClick={() => props.setTrigger(false)}>Cancel</button>
                    <button className="create" onClick={register}>Create New Product <FaIcons.FaGreaterThan className="greater" /></button>
                </form>
            </Popup>
        </div>
    )
}

export default Product;
