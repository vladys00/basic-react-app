import { useState } from 'react';
import { createPost } from '../../services/post.service';
import { useNavigate } from 'react-router-dom';

const PostCreate = () => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    caption: ''
  });

  const navigate  = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    /* mid engineering */

    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });

    /* junior engineering */

    // if (e.target.type === 'file') {
    //   setFormData({
    //     ...formData,
    //     [name]: e.target.files[0]
    //   });
    // } else {
    //   setFormData({
    //     ...formData,
    //     [name]: value
    //   });
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const uploadData = new FormData();

    uploadData.append('imageUrl', formData.imageUrl);
    uploadData.append('caption', formData.caption);

    createPost(uploadData)
      .then(() => {
        navigate('/feed')
      })
      .catch((error) => {
        console.log(error);
        // handle errors
      });
  };

  return (
    <div className="container mt-5">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Image URL</label>
          <input
            type="file"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="caption" className="form-label">Caption</label>
          <textarea
            className="form-control"
            id="caption"
            name="caption"
            rows="3"
            value={formData.caption}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
