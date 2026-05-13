import React from 'react';

const PageBanner = ({ title, subtitle }) => {
  return (
    <div className="page-banner">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default PageBanner;
