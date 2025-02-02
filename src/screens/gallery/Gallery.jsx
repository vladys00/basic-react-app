import { useState, useEffect } from "react";
import { getFeed } from "../../services/post.service";
import { Link } from "react-router-dom";
function Gallery() {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    getFeed()
      .then((res) => {
        setPosts(res.posts);
        console.log("this posts", res.posts);
      })
      .catch((error) => {
        console.log(error);
        // handle errors
      });
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
      {posts && posts.map((post) => (
        <div className="col"   key={post._id}>
          <div className="card " style={{width:"100%", height:"340px", overflow:"hidden" }}>
            <img
              src={post.imageUrl}
              style={{ width:"100%", height:"80%",objectFit:"cover" }}
            
            />
            <div className="p-3">
                <Link to={`/posts/${post._id}`}>
            <button className=" btn btn-primary">Details</button>
                </Link>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
