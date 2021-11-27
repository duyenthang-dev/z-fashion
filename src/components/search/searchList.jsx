import "./../product/tab-product/tabProduct";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./../../utility/css/utility.css";
import "./searchList.css";
import { useSelector } from "react-redux";
import ProductItem from "./../product/productItem";
const SearchList = () => {
    const searchItem = useSelector((state) => state.products.searchItem);
    const keyword = useSelector((state) => state.products.keyword);
    return (
        <section className="search-list mt-7">
            <Container>
                <Grid container className="mb-4">
                    <Grid item>
                        <div className="search-list__title">
                            <h3>
                                Kết quả tìm kiếm cho từ khoá: <span>{keyword}</span>
                            </h3>
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    {searchItem.map((item, idx) => {
                        return (
                            <Grid item lg={3} md={4} sm={6} key={idx + 1}>
                                <ProductItem
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    status={item.status}
                                    src={item.imgSrc}
                                    price={item.price}
                                    rate={item.rate}
                                    color={item.color}
                                    size={item.size}
                                    desc={item.desc}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </section>
    );
};
export default SearchList;
