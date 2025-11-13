import React from "react";
import { LOADING_TEXT } from "../../utils/constants";

const Loader = ({ text = LOADING_TEXT, size = "medium" }) => {
  const sizeClasses = {
    small: "w-6 h-6 border-2",
    medium: "w-12 h-12 border-4",
    large: "w-16 h-16 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div
        className={`${sizeClasses[size]} border-primary border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      ></div>
      {text && (
        <p className="mt-4 text-text-secondary text-sm font-medium">{text}</p>
      )}
    </div>
  );
};

export default Loader;
