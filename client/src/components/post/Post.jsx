import "./post.scss";

const Post = ({ post }) => {


  return (
    <div className="post">
      <div className="container">
        <div className="content">
          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;