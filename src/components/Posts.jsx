import { useState } from "react";
import postData from "./postData";

function Posts() {
  const [inputPost, setInputPost] = useState(postData);
  function handleLike(index) {
    const newPost = [...inputPost];
    newPost[index].likes = newPost[index].likes + 1;
    setInputPost(newPost);
  }
  function handleDislike(index) {
    const newPost = [...inputPost];
    if (newPost[index].likes > 0) {
      newPost[index].likes = newPost[index].likes - 1;
      setInputPost(newPost);
    }
  }
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postData.map((postData, index) => {
          return (
            <div className="post-item" key={index}>
              <div className="post-header">
                <h2>{postData.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: {postData.likes}</span>
                  <span className="post-likes"></span>
                </div>
              </div>
              <p className="post-content">{postData.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => {
                    handleLike(index);
                  }}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => {
                    handleDislike(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
