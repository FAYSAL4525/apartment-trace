import React, { useEffect, useState } from 'react';
import { apartmentData } from "../../fakeData/fakeData";
import ApartmentInfo from '../apartmentInfo/ApartmentInfo';
import styles from "./Apartment.module.css";

const Apartment = () => {

		const [apartmentInfo, setApartmentInfo] = useState([]);
    useEffect(() => {
      setApartmentInfo(apartmentData);
		}, []);
	
    console.log(apartmentData);
	return (
    <>
      <div className={styles.apartmentContainer}>
        <div className="row justify-content-center p-2 gx-5 m-0 ">
          <div>
            {" "}
            <p>HIGHLY RECOMMENDED</p>
            <h1>FEATURED OFFERS</h1>
          </div>
          <hr />
          {apartmentInfo.map((apInfo) => (
            <ApartmentInfo apInfo={apInfo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Apartment;