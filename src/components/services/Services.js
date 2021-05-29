import React, { useEffect, useState } from "react";
import styles from './Services.module.css'
import { services } from "../../fakeData/fakeData";
import ServicesDetail from "../servicesDetail/ServicesDetail";
import "./Services.module.css";

const Services = () => {
  const [servicesInfo, setServicesInfo] = useState([]);
  useEffect(() => {
    setServicesInfo(services);
	}, []);
  return (
    <>
      <div
        className="row container justify-content-center m-0 align-item-center
			  text-center pb-5"
      >
        <div className="col-12 col-md-10 d-flex justify-content-center pt-5 pb-5">
          {" "}
          <h1 className={`w-75 ${styles.serviceHeader}`}>
            We're an agency tailored to all clients' needs that always delivers
          </h1>
        </div>
        {servicesInfo.map((srvInfo) => (
          <ServicesDetail servicesInfo={srvInfo} />
        ))}
      </div>
    </>
  );
};

export default Services;
