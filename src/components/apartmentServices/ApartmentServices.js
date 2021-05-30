import React from 'react';

const ApartmentServices = () => {
	// const { airCondition,internet,cableTv,balcony,garage,lift,standard,cityCenter} = service;
	return (
    <>
      <div className="row justify-content-center m-0">
        <div className=" col-12 col-md-3">
          <h6 className="">
            <input className="me-1" type="checkbox" checked />
            Air Condition
          </h6>
          <h6 className="">
            <input className="me-1" type="checkbox" checked />
            Internet
          </h6>
          <h6 className="">
            <input className="me-1" type="checkbox" checked />
            Cable Tv
          </h6>
        </div>
        <div className="col-12 col-md-3">
          <h6 className="">
            <input className="me-1" type="checkbox" checked />
            Balcony
          </h6>
          <h6 className="">
            <input className="me-1" type="checkbox" checked />
            Garage
          </h6>
          <h6 className="">
            <input className="me-1" type="checkbox" checked />
            lift
          </h6>
        </div>
        <div className=" col-12 col-md-3">
          <h6>
            <input className="me-1" type="checkbox" checked />
            Standard
          </h6>
          <h6>
            <input className="me-1" type="checkbox" checked />
            City Center
          </h6>
          <h6>
            <input className="me-1" type="checkbox" checked />
            Air Condition
          </h6>
        </div>
      </div>
    </>
  );
};

export default ApartmentServices;