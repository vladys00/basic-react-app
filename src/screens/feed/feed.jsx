import { useEffect, useState } from "react";
import { getFeed } from "../../services/post.service";
import Post from "../../components/Post/Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [userLikes, setUserLikes] = useState([]);

  useEffect(() => {
    getFeed()
      .then((res) => {
        setPosts(res.posts);
        setUserLikes(res.likes);
      })
      .catch((error) => {
        console.log(error);
        // handle errors
      });
  }, []);


  return (
    <div className="container mt-5">
      <h1 className="text-app-primary text-center">Feed</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post._id} className="col-4">
            <Post
              isLiked={userLikes.find((like) => like.post === post._id)}
              imageUrl={post.imageUrl}
              caption={post.caption}
              user={post.user}
              postId={post._id}
              likesCount={post.likes}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
