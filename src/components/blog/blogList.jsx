import BlogSingle from "./blogSingle";
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
    {
        id: 3,
        src: blogSingle.BLOG_3,
        title: "Nói gì cho tình yêu",
        desc: "Sau tất cả, tôi vẫn luôn chờ đợi một người có thể vì tôi mà sẵn lòng. Người mà tôi có thể yêu họ bằng tất cả tâm hồn tôi, mà không phải suy nghĩ điều gì...",
        date: "22/10/2021",
        author: "Nguyễn Thị B",
        cmtCounter: 30,
    },
];

const renderListBlog = list.map((item, index) => {
    return (
        <Grid item lg={4} md={6} key={item.id}>
            <BlogSingle
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
const BlogList = () => {
    return (
        <section className="blog-list mt-15">
            <Container>
                <Grid container className="mb-4">
                    <Grid item lg={4} md={4}>
                        <div className="blog-list__title">
                            <h3>Blog mới nhất</h3>
                        </div>
                    </Grid>

                    <Grid item lg={8} md={8} className="blog-list__link">
                        <a href="/">Xem tất cả bài viết</a>
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    {renderListBlog}
                </Grid>
            </Container>
        </section>
    );
};
export default BlogList;
