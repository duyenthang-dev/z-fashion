import "./productModal.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
const ProductModal = () => {
    return (
        <div
            className="modal overlay hidden"
            role="dialog"
            aria-modal="true"
            tabindex="-1"
            style={{ display: "block" }}
        >
            <div className="modal-dialog" role="dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">X</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Grid container>
                            <Grid item lg={5} md={6} sm={12}>
                                <div className="product-large-img">

                                </div>
                                <div className="product-quickview">
                                    
                                </div>
                            </Grid>
                            <Grid item lg={7} md={6} sm={12}></Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
