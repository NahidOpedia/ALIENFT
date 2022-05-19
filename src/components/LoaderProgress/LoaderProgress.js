import React from "react";
import "./LoaderProgress.css";

const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
};

function LoaderProgress() {
  return (
    <div className="loader">
      <Progress done="70" />
    </div>
  );
}

export default LoaderProgress;
