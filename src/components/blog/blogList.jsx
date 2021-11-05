import BlogSingle from "./blogSingle";
import "./blogList.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import './../../utility/css/utility.css';
let listBlog = [];
for (let i = 0; i < 3; i++) {
    listBlog.push(
        <Grid item lg={4} md={6}>
            <BlogSingle />
        </Grid>
    );
}

const BlogList = () => {
    return (
        <section className="blog-list mt-10">
            <Container>
                <Grid container spacing={5}>{listBlog}</Grid>
            </Container>
        </section>
    );
};
export default BlogList;
