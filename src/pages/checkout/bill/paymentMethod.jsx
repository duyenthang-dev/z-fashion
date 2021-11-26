import * as React from 'react';
import Grid from '@mui/material/Grid';
import './paymentMethod.css';
import ImagePayment from './payment-image/payment-image';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

function ImageAvatars() {
        
        return ( 
            <div className="payment-frame">
                <h2 style={{marginBottom: 20}}>Phương thức thanh toán</h2>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <img src={ImagePayment['Momo']} alt="Momo" className="image-payment" />
                    </Grid>
                    <Grid item xs={10}>
                        <p>Momo</p>
                    </Grid>
                    <Grid item xs={1}>
                        <label>
                            <input type="radio" class="option-input radio" name="paymentMethod" id="momo" value="Momo" />
                        </label>
                    </Grid>
    
                    <Grid item xs={1}>
                        <img src={ImagePayment['MasterCard']} alt="Momo" className="image-payment" />
                    </Grid>
                    <Grid item xs={10}>
                        <p>Master Card</p>
                    </Grid>
                    <Grid item xs={1}>
                        <label>
                            <input type="radio" class="option-input radio" name="paymentMethod" id="mastercard" value="MasterCard" />
                        </label>
                    </Grid>
    
                    <Grid item xs={1}>
                        <img src={ImagePayment['Visa']} alt="Visa" className="image-payment" />
                    </Grid>
                    <Grid item xs={10}>
                        <p>Visa</p>
                    </Grid>
                    <Grid item xs={1}>
                        <label>
                            <input type="radio" class="option-input radio" name="paymentMethod" id="visa" value="Visa" />
                        </label>
                    </Grid>
    
                    <Grid item xs={1}>
                        <img src={ImagePayment['ViettelPay']} alt="ViettelPay" className="image-payment" />
                    </Grid>
                    <Grid item xs={10}>
                        <p>Viettle Pay</p>
                    </Grid>
                    <Grid item xs={1}>
                        <label>
                            <input type="radio" class="option-input radio" name="paymentMethod" id="viettleay" value="ViettelPay" />
                        </label>
                    </Grid>
                </Grid>
                
                <button variant="contained" style={{marginTop: 40}} onClick={() => {
                    const rbs = document.getElementsByName('paymentMethod');
                    let countChecked = false;
                    let checkedOption;
                    for(const rb of rbs){
                        if(rb.checked) {
                            countChecked = true;
                            checkedOption = rb.value;
                            break;
                        }
                    }
                    if(!countChecked) alert('Please check your payment option');
                    else {
                        if(checkedOption === "Momo") window.location.replace("https://momo.vn/");
                        else if(checkedOption === "MasterCard") window.location.replace("https://www.mastercard.us/en-us.html");
                        else if(checkedOption === "ViettelPay") window.location.replace("https://viettelpay.vn/");
                        else window.location.replace("https://www.visa.com.vn/en_VN")
                    }
                    
                }}>THANH TOÁN</button>

                
            </div>
        );
    
}

export default ImageAvatars;