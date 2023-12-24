import { useState } from "react";
import postInfo from "./post-info";

function Posts() {
  const [postItem, setPostItem] = useState(postInfo);

  const haddleLikeContent = (postIndex) => {
    const postData = [...postItem];
    postData[postIndex].likes = postData[postIndex].likes + 1;
    setPostItem(postData);
  };

  const haddleDislikeContent = (postIndex) => {
    const postData = [...postItem];
    if (postData[postIndex].likes > 0) {
      postData[postIndex].likes = postData[postIndex].likes - 1;
      setPostItem(postData);
    }
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {postInfo.map((post, index) => {
          return (
            <div key={index} class="post-item">
              <div class="post-header">
                <h2>{post.title}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Like: </span>
                  <span class="post-likes">{post.likes}</span>
                </div>
              </div>
              <p class="post-content">{post.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    haddleLikeContent(index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    haddleDislikeContent(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}

export default Posts;
