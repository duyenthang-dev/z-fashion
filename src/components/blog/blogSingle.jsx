import "./blogSingle.css";
import { blogSingle } from "./../../imageSource";
import { FaUser, FaCommentDots, FaRegCalendarAlt } from "react-icons/fa";
const BlogSingle = () => {
    return (
        <div className="blog-single">
            <div className="blog-single__image">
                <img src={blogSingle.BLOG_1} alt="" width="360" height="240" />
            </div>
            <div className="blog-single__content">
                <h3>
                    <a href="/">
                        5 kiểu tóc ngắn thời thượng đón chào mùa thu sang
                    </a>
                </h3>
                <p>
                    Tóc ngắn là sự lựa chọn tốt nhất cho những ai muốn thay đổi
                    hình ảnh và thêm chút “hương vị” cho phong cách của chính
                    mình.
                </p>
                <div className="blog-single__meta">
                    <div className="blog-single__date">
                        <FaRegCalendarAlt
                            style={{ color: "#ff2f2f", marginRight: "0.5rem" }}
                        />
                        <span>05/11/2021</span>
                    </div>
                    <div className="blog-single__author">
                        <FaUser
                            style={{ color: "#ff2f2f", marginRight: "0.5rem" }}
                        />
                        <span>Duyên Thắng</span>
                    </div>
                    <div className="blog-single__comment">
                        <FaCommentDots
                            style={{ color: "#ff2f2f", marginRight: "0.5rem" }}
                        />
                        <span>10</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSingle;
