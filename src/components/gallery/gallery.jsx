import "./gallery.css";
import Grid from "@mui/material/Grid";
import { gallery } from "./../../imageSource";
import "./../../utility/css/utility.css";
const Gallery = () => {
    return (
        <div className="gallery mt-15">
            <Grid container maxWidth="xl">
                <Grid item lg={2} md={4} sm={4}>
                    <div className="gallry__item-1">
                        <img src={gallery.INS_1} alt="gallery" width="100%" />
                    </div>
                </Grid>
                <Grid item lg={2} md={4} sm={4}>
                    <div className="gallry__item-2">
                        <img src={gallery.INS_2} alt="gallery" width="100%" />
                    </div>
                </Grid>
                <Grid item lg={2} md={4} sm={4}>
                    <div className="gallry__item-3">
                        <img src={gallery.INS_3} alt="gallery" width="100%" />
                    </div>
                </Grid>
                <Grid item lg={2} md={4} sm={4}>
                    <div className="gallry__item-4">
                        <img src={gallery.INS_4} alt="gallery" width="100%" />
                    </div>
                </Grid>
                <Grid item lg={2} md={4} sm={4}>
                    <div className="gallry__item-5">
                        <img src={gallery.INS_5} alt="gallery" width="100%" />
                    </div>
                </Grid>
                <Grid item lg={2} md={4} sm={4}>
                    <div className="gallry__item-6">
                        <img src={gallery.INS_6} alt="gallery" width="100%" />
                    </div>
                </Grid>

            </Grid>
        </div>
    );
};
export default Gallery;
