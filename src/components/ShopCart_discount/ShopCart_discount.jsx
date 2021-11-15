import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./ShopCart_discount.css";

function Discount() {
     return (
        <div>
              <Container className="container pt-5">
                  <Grid container >
                      <Grid item className="discount" lg={4} md={4} sm={4} xs={4} >
                         <p>Discount Code</p>
                        <form action="#">
                            <input type="text" placeholder="enter code" />
                            <button type="submit" className="btn">
                                Apply
                            </button>
                        </form>
                      </Grid>
                      <Grid item lg={4} md={4} sm={4} xs={4}> </Grid>
                      <Grid item className="bill" lg={4} md={4} sm={4} xs={4} >
                               <div className="paper">
                               <div className="title"> cart total</div>
                               <div className="price"> 
                                   <p>subtotal  <span className="span1">$750.0</span></p>
                                   <p>total  <span className="span2">$750.0</span></p>
                               </div>
                               <div > 
                                   <button type="submit" className="btn">  
                                   <a className="link" href="#">proceed to check out</a> 
                                   </button>
                               </div>
                               </div>
                      </Grid>
                  </Grid>
              </Container>
        </div>
     );
};

export default Discount;