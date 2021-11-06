import "./blogSingle.css";
import { FaUser, FaCommentDots, FaRegCalendarAlt } from "react-icons/fa";
import PropTypes from "prop-types";
const BlogSingle = (props) => {
    return (
        <div className="blog-single">
            <div className="blog-single__image">
                <img src={props.src} alt="" width="360" height="240" />
            </div>
            <div className="blog-single__content">
                <h3>
                    <a href="/">{props.title}</a>
                </h3>
                <p>{props.desc}</p>
                <div className="blog-single__meta">
                    <div className="blog-single__date">
                        <FaRegCalendarAlt
                            style={{ color: "#ff2f2f", marginRight: "0.5rem" }}
                        />
                        <span>{props.date}</span>
                    </div>
                    <div className="blog-single__author">
                        <FaUser
                            style={{ color: "#ff2f2f", marginRight: "0.5rem" }}
                        />
                        <span>{props.author}</span>
                    </div>
                    <div className="blog-single__comment">
                        <FaCommentDots
                            style={{ color: "#ff2f2f", marginRight: "0.5rem" }}
                        />
                        <span>{props.cmtCounter}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

BlogSingle.propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    cmtCounter: PropTypes.number,
};
export default BlogSingle;
