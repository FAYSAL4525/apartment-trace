import React from 'react';

const ServicesDetail = ({ servicesInfo }) => {
  const { id, name, logo, details } = servicesInfo;
  return (
    <>
      <div id={id} className={`col-12 col-md-4 p-2 `}>
        <div>
          <img className="img-fluid h-25 w-25 pb-4 pt-3" src={logo} alt="" />
          <h2 className="fs-3">{name}</h2>
          <h5 className="fs-5 fw-light">{details}</h5>
        </div>
      </div>
    </>
  );
};

export default ServicesDetail;