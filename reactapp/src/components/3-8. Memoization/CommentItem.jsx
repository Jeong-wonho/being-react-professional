import React, { memo, Profiler, useState } from "react";
import { useMemo } from "react";
import "./CommentItem.css";

function CommentItem({ title, content, likes, onClick }) {
  const [clickCount, setclickCount] = useState(0);
  function onRenderCallback(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) {
    console.log(`actualDuration ${title}: ${actualDuration}`);
  }
  const handleClick = () => {
    onClick();
    setclickCount((prev) => prev + 1);
    alert(`${title} 눌림`);
  };

  const rate = useMemo(() => {
    console.log("rate check");
    return likes > 10 ? "Good" : "Bad";
  }, [likes]);

  return (
    <Profiler id="CommentItem" onRender={onRenderCallback}>
      <div className="CommentItem" onClick={handleClick}>
        <span>{title}</span>
        <span>{content}</span>
        <span>{likes}</span>
        <br />
        <span>{rate}</span>
        <br></br>
        <span>{clickCount}</span>
      </div>
    </Profiler>
  );
}

export default memo(CommentItem);
