import "./product-card.css";
import * as React from "react";
import img from "../../assets/images/product/product-1.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import { Card, CardMedia, IconButton } from "@mui/material";

export default function ProductItem() {
    return (
        <Card className="item-container">
            <IconButton
                size="small"
                aria-label="add to favorites"
                className="whishlist-icon"
            >
                <FavoriteBorderIcon fontSize="large" />
            </IconButton>

            <CardMedia
                component="img"
                width="270"
                image={img}
                alt="green iguana"
            />
            <div className="item__review">
                <StarIcon fontSize="large" sx={{ color: "#E3C01C" }} />
                <StarIcon fontSize="large" sx={{ color: "#E3C01C" }} />
                <StarIcon fontSize="large" sx={{ color: "#E3C01C" }} />
                <StarIcon fontSize="large" sx={{ color: "#E3C01C" }} />
                <StarHalfIcon fontSize="large" sx={{ color: "#E3C01C" }} />
                <span>(5 Review)</span>
            </div>
            <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                />
            </Stack>
            <p>Áo sơ mi cổ tròn </p>
            <h3 className="item__price">Giá: 300000 VNĐ</h3>
        </Card>
    );
}
