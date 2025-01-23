import React from "react";

const Spinner = ({ size = "30", color = "blue-500" }) => {
  return (
    <div className={`flex min-h-screen justify-center items-center`}>
      <div
        className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 border-${color}`}
      ></div>
    </div>
  );
};

export default Spinner;
