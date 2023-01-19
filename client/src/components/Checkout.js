import React from 'react'

const Checkout =() =>{
    return(
        <div>
            <div className = 'py-2 bg-warning'>
                <div className = 'container'>
                    <h2>Checkout Cart</h2>
                </div>
            </div>

            <div className = 'py-4'>
                <div className = 'container'>
                    <div className ='row'></div>
                    <div className ='col-md-7'>
                        <div className='card'>
                            <div className = 'card-header'>
                                <h3>Checkout Information</h3>
                            </div>
                            <div className='card-body'>

                                <div className='row'>
                                    <div className ='col-md-6'>
                                        <label>First Name</label>
                                        <input type='text' name='firstname' className='form-control'></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className ='col-md-6'>
                                        <label>Last Name</label>
                                        <input type='text' name='lastname' className='form-control'></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className ='col-md-6'>
                                        <label>Street Address</label>
                                        <input type='text' name='address' className='form-control'></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className ='col-md-6'>
                                        <label>City</label>
                                        <input type='text' name='city' className='form-control'></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className ='col-md-6'>
                                        <label>State</label>
                                        <input type='text' name='state' className='form-control'></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className ='col-md-6'>
                                        <label>Zip Code</label>
                                        <input type='text' name='zipcode' className='form-control'></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className ='col-md-6'>
                                        <label>Email Address</label>
                                        <input type='text' name='email' className='form-control'></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className ='col-md-6'>
                                        <label>Phone Number</label>
                                        <input type='text' name='phone' className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className ='form-group text-end'>
                                        <button type='button' className='btn btn-primary'>Place Order</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;