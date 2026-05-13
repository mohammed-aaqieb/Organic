import React from 'react';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToTop} className="scroll-to-top">
      {/* Arrow icon */}
    </button>
  );
};

export default ScrollToTop;
