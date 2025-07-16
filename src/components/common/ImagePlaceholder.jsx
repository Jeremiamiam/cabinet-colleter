import React from 'react';

const ImagePlaceholder = ({ className }) => {
  return (
    <div className={`flex items-center justify-center bg-base-300 text-base-content/20 w-full h-full ${className}`}>
      <svg className="w-1/4 h-1/4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    </div>
  );
};

export default ImagePlaceholder; 