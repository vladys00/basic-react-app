import { useEffect, useState } from "react";
import { getSingleImage } from "../../services/post.service";
import { Link, useParams } from "react-router-dom";
function PostDetail() {
  const { id } = useParams();
  console.log(id);
  const [post, setPost] = useState(null);
  useEffect(() => {
      getSingleImage(id).then((res) => {
          setPost(res);
        });
    }, []);
    
    
  return (
    <div className=" d-flex justify-content-center align-items-center p-5">
      {post && (
        
        <div className="card" style={{width: "18rem"}}>
          <img src={post.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">created by: {post.user.name}</h5>
            <p className="card-text">{post.caption}</p>
            <p>Created at : { new Date(post.createdAt).toLocaleDateString("es-ES")}</p>
            <Link to="/gallery" className="btn btn-primary">
              Go to gallery
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostDetail;
