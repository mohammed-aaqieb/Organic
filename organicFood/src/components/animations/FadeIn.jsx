import React from 'react';

const FadeIn = ({ children, delay }) => {
  return (
    <div className="fade-in" style={{ animationDelay: delay }}>
      {children}
    </div>
  );
};

export default FadeIn;
