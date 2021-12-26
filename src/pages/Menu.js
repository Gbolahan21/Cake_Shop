import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import * as BiIcons from 'react-icons/bi';

function Menu() {
    
    function handleClick() {
        console.log("Count");
    }

    function handleDelete() {
        console.log("Delete");
    }
    
    return (
        <div className="menu">
            <p className="available">Cake Menu</p>

            <div className="row" id="men_first">
                <div className="col-lg-4" id="men_chocolate">
                    <img src="images/Rectangle6.png" alt="components" height="100px" width="100px" className="men_image" />
                    <p className="men_choco">Chocolate Cake</p>
                    <p className="choco_note">Chocolate cake with creamy</p>
                    <p className="choco_notes">milk and sweet flour</p>
                    <p className="men_amount">NGN 4,000</p>

                    <div className="men_flavour">
                        <div className="flavour">
                            <p className="flavour_heading">Flavour</p>
                            <p className="flavour_coconut">Coconut Flavour</p>
                        </div>

                        <div className="category">
                            <p>Category</p>
                            <p className="category_wedding">Wedding Cake</p>
                        </div>
                    </div>

                    <div className="men_flavour">
                        <div className="flavour">
                            <p className="size">Size</p>
                            <p className="size_list">S</p>
                            <p className="size_list1">M</p>
                            <p className="size_list2">L</p>
                        </div>

                        <div className="category">
                            <p className="quantity">Qauntity</p>
                            <ol className="increment">
                                <button className="counter" onClick={handleDelete}>-</button>
                                <p className="number">01</p>
                                <button className="counters" onClick={handleClick}>+</button>
                            </ol>
                        </div>
                    </div>
                    <button className="add_to_billing">Add To Billing</button>
                </div>
                
                <div className="col-lg-6" id="bill">
                    <p className="bill">Billing</p>
                    <img src="images/Rectangle62.png" alt="components" height="75px" width="70px" className="bill_image" />
                    <p id="bill_cake">Red Velvet Cake</p>
                    <p className="times">x2</p>
                    <div className="bill_button">
                        <button className="bill_date">Note</button>
                        <button className="bill_am">NGN 4,000</button>
                    </div>
                    {/* <br /> */}
                    <img src="images/Rectangle6.png" alt="components" height="75px" width="70px" className="bill_image" />
                    <p id="bill_cake_choco">Chocolate Cake</p>
                    <p className="times">x2</p>
                    <div className="bill_button">
                        <button className="bill_date">Note</button>
                        <button className="bill_am">NGN 4,000</button>
                    </div>
                    {/* <br /> */}
                    <img src="images/Rectangle62.png" alt="components" height="75px" width="70px" className="bill_image" />
                    <p id="bill_cake">Red Velvet Cake</p>
                    <p className="times">x2</p>
                    <div className="bill_button">
                        <button className="bill_date">Note</button>
                        <button className="bill_am">NGN 4,000</button>
                    </div>

                    <ol>
                        <h4 className="sub">Subtotal</h4>
                        <p className="bill_amount">NGN 12,000</p>
                    </ol>
                    <p className="bill_dash">------------------------------------</p>
                    <ol className="bill_total">
                        <h4 className="sub">Total</h4>
                        <p className="bill_amount">NGN 12,000</p>
                    </ol>

                    <h4 className="bill_pay">Payment Method</h4>
                    <div className="pay">
                        <div className="cash">
                            <SiIcons.SiBitcoincash />
                            <p class="description">Cash</p>
                        </div> &nbsp;&nbsp;
                        <div className="credit">
                            <FiIcons.FiCreditCard />
                            <p class="description">Credit Card</p>
                        </div> &nbsp;&nbsp;
                        <div className="wallet">
                            <BiIcons.BiWallet />
                            <p class="description">E-Wallet</p>
                        </div>
                    </div>
                    <button className="print_billing">Print Bills</button>
                </div>
            </div>

            <div className="row" id="men_second">
                <div className="col-lg-4" id="men_chocolate">
                    <img src="images/Rectangle6.png" alt="components" height="100px" width="100px" className="men_image" />
                    <p className="men_choco">Chocolate Cake</p>
                    <p className="choco_note">Chocolate cake with creamy</p>
                    <p className="choco_notes">milk and sweet flour</p>
                    <p className="men_amount">NGN 4,000</p>

                    <div className="men_flavour">
                        <div className="flavour">
                            <p className="flavour_heading">Flavour</p>
                            <p className="flavour_coconut">Coconut Flavour</p>
                        </div>

                        <div className="category">
                            <p>Category</p>
                            <p className="category_wedding">Wedding Cake</p>
                        </div>
                    </div>

                    <div className="men_flavour">
                        <div className="flavour">
                            <p className="size">Size</p>
                            <p className="size_list">S</p>
                            <p className="size_list1">M</p>
                            <p className="size_list2">L</p>
                        </div>

                        <div className="category">
                            <p className="quantity">Qauntity</p>
                            <ol className="increment">
                                <button className="counter" onClick={handleDelete}>-</button>
                                <p className="number">01</p>
                                <button className="counters" onClick={handleClick}>+</button>
                            </ol>
                        </div>
                    </div>
                    <button className="add_to_billing">Add To Billing</button>
                </div>
            </div>
        </div>
    )
    
}

export default Menu;
