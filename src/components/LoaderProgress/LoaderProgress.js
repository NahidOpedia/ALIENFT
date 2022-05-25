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
  }, 300);

  return (
    <div className="progress1">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
};

function LoaderProgress() {
  return (
    <div className="loader">
      <Progress done="75" />
    </div>
  );
}

export default LoaderProgress;
