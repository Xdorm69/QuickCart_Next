import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold">Loading product...</h2>
      </div>
    </div>
  );
};

export default Loading;