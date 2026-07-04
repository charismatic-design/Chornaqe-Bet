import React, { useState } from 'react';

const LikeButton: React.FC = () => {
  const [likes, setLikes] = useState(0);

  return (
    <button className="like-btn" onClick={() => setLikes(likes + 1)}>
      ❤️ Like {likes}
    </button>
  );
};

export default LikeButton;
