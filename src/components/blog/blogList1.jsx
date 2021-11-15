import BlogBlock from "./BlogBlock";
import "./blogList.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "./../../utility/css/utility.css";
import { blogSingle } from "./../../imageSource";



let list = [
    {
        id: 1,
        src: blogSingle.BLOG_1,
        title: "5 kiểu tóc ngắn thời trang chào thu sang",
        desc: "Tóc ngắn luôn dễ dàng biến tấu với nhiều volume khác nhau, bạn có thể thêm tóc mái, uốn cho tóc xoăn hoặc cắt layer… Trong bài viết dưới đây...",
        date: "05/11/2021",
        author: "Nguyễn Văn A",
        cmtCounter: 10,
    },
    {
        id: 2,
        src: blogSingle.BLOG_2,
        title: "Chúng ta sẽ thay đổi ra sao sau đại dịch",
        desc: "Sau hơn một năm chống chọi với đại dịch và những tuần giãn cách xã hội kéo dài, hầu hết chúng ta, dù muốn hay không, cũng sẽ phải đối mặt với...",
        date: "22/10/2021",
        author: "Nguyễn Thị B",
        cmtCounter: 26,
    },
];

const renderListBlog = list.map((item, index) => {
    return (
        <Grid item lg={4} key={item.id}>
            <BlogBlock
                id={item.id}
                src={item.src}
                title={item.title}
                desc={item.desc}
                date={item.date}
                author={item.author}
                cmtCounter={item.cmtCounter}
            />
        </Grid>
    );
});
const BlogList1 = () => {
    return (
            <Container>
                <Grid container >
                    <Grid item lg={8}>
                        <img src={blogSingle.BLOG_3}  />
                    </Grid>
                   {renderListBlog}
                   {renderListBlog}
                   {renderListBlog}
                    {renderListBlog}
                    <Grid item lg={8}>
                        <img src={blogSingle.BLOG_3} />
                    </Grid>
                 </Grid>
                
                
                <Grid container>
                    <button type="submit" className="btn"> Xem thêm blog mới</button>
                </Grid>
            </Container>
    );
};
export default BlogList1;
