import React, { useState,useEffect } from "react";

const LikeButton: React.FC = () => {
  const [like, setlike] = useState(0);
  const [on ,setOn] = useState(true);
  useEffect(()=>{
      document.title =`点击了${like}次`
  })
  return (
    <div>
      <button
        onClick={() => {
            setlike(like+1);
        }}
      >
        {like}
      </button>
      <button
        onClick={() => {
            setOn(!on);
        }}
      >
        {on ? "ON" : "oFF"}
      </button>
    </div>
  );
};

export default LikeButton;
