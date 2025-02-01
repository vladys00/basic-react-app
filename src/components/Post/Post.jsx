import { useState } from 'react';
import { likePost } from '../../services/like.service';

const Post = ({ imageUrl, caption, user, postId, isLiked, likesCount }) => {
  const [liked, setLiked] = useState(isLiked);
  const [likesAmount, setLikesAmount] = useState(likesCount);


  const submitLike = () => {
    likePost(postId)
      .then((res) => {
        if (res.message === 'Like added') {
          setLiked(true);
          setLikesAmount(likesAmount + 1);
        } else {
          setLiked(false);
          setLikesAmount(likesAmount - 1);
        }
      })
      .catch((error) => {
        console.log(error);
        // handle errors
      });
  };

  return (
    <div className="card mb-3">
      <img src={imageUrl} className="card-img-top" alt="Post" />
      <div className="card-body">
        <small>@{user.name}</small>
        <h5 className="card-title">{caption}</h5>
        <button className="btn btn-light" onClick={submitLike}>
          <i className={`bi ${liked ? 'bi-heart-fill' : 'bi-heart'}`}></i><small className="ms-1">{likesAmount}</small>
        </button>
      </div>
    </div>
  );
};

export default Post;
