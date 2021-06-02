import React from 'react';
import { useSelector } from 'react-redux';
import ApartmentInfo from '../apartmentInfo/ApartmentInfo';
import styles from "./Apartment.module.css";

const Apartment = () => {
	const apartmentInfo = useSelector((state) => {
		return state.apartments.apartmentList;
	})
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
          {apartmentInfo?.map((apInfo,index) => (
						<ApartmentInfo key={index } apInfo={apInfo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Apartment;