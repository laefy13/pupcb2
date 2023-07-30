import "./confession.scss";

const Confession = ({ post }) => {


  return (
    <div className="post">
      <div className="container">
        <div className="content">
          <p>{post.confession}</p>
        </div>
      </div>
    </div>
  );
};

export default Confession;