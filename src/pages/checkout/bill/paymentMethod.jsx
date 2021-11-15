import * as React from 'react';
import Grid from '@mui/material/Grid';
import './paymentMethod.css';
import ImagePayment from './payment-image/payment-image';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

class ImageAvatars extends React.Component {
    render() {
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
                            <input type="radio" class="option-input radio" name="paymentMethod" id="mastercard" value="Master Card" />
                        </label>
                    </Grid>
    
                    <Grid item xs={1}>
                        <img src={ImagePayment['Visa']} alt="Momo" className="image-payment" />
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
                        <img src={ImagePayment['ViettelPay']} alt="Momo" className="image-payment" />
                    </Grid>
                    <Grid item xs={10}>
                        <p>Viettle Pay</p>
                    </Grid>
                    <Grid item xs={1}>
                        <label>
                            <input type="radio" class="option-input radio" name="paymentMethod" id="viettleay" value="Viettel Pay" />
                        </label>
                    </Grid>
                </Grid>
                
                <Button variant="contained" style={{marginTop: 40}} onClick={() => {
                    const rbs = document.getElementsByName('paymentMethod');
                    let countChecked = false;
                    let checkedOption;
                    for(const rb of rbs){
                        if(rb.checked) {
                            countChecked = true;
                            checkedOption = rb.value;
                        }
                    }
                    if(!countChecked) alert('Please check your payment option');
                    else alert(`Direct to ${checkedOption}`);
                    
                }}>THANH TOÁN</Button>
            </div>
        );
    }
}

export default ImageAvatars;