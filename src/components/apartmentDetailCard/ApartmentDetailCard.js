import React from "react";
import styles from "./ApartmentDetailCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import ApartmentServices from "../apartmentServices/ApartmentServices";
import ContactForm from "../ContactForm/ContactForm";
import { useSelector } from "react-redux";

const ApartmentDetailCard = () => {
	const Info = useSelector(state => {
		return state.apartments.apartmentDetail[0];
})

  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center ${styles.apartmentDetailDiv}`}
        style={{
          backgroundImage: `url(${Info?.img})`,
        }}
      >
        <h1>{Info?.name}</h1>
      </div>

      <div className="d-flex align-items-center mt-5  pb-5 m-0">
        <div className="ms-4 me-3">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </div>
        <div className="pe-2">
          <h6>APARTMENT FOR SALE</h6>
          <h3>
            {Info?.name} , {Info?.location}
          </h3>
        </div>
      </div>
      <div className="row m-0 pb-5">
        <div className="col-12 col-md-6 mb-3">
          {" "}
          <p
            className="ms-2  me-2"
            style={{ color: "dimgray", textAlign: "justify" }}
          >
            {Info?.details2}
          </p>
        </div>
        <div className="col-12 col-md-6 ps-5 pt-2 pe-5 h-50">
          <div>
            <div className="text-white">
              <h1 className="bg-dark text-center m-0 pt-2 pb-2">
                ${Info?.price}
              </h1>
            </div>
            <div className="d-flex justify-content-between pe-5 ps-5 pt-2 pb-2 align-items-center bg-secondary text-white h-100 ">
              <h6>area</h6>
              <h6>{Info?.area}</h6>
            </div>
            <hr />
            <div className="d-flex justify-content-between pe-5 ps-5 pt-2 pb-2 align-items-center bg-secondary text-white">
              <h6>bedrooms</h6>
              <h6>{Info?.room}</h6>
            </div>
            <hr />
            <div className="d-flex justify-content-between pe-5 ps-5 pt-2 pb-2 align-items-center bg-secondary text-white">
              <h6>bathrooms</h6>
              <h6>{Info?.bathrooms}</h6>
            </div>
            <hr />
            <div className="d-flex justify-content-between pe-5 ps-5 pt-2 pb-2 align-items-center bg-secondary text-white">
              <h6>parking places</h6>
              <h6>{Info?.parkingPlaces}</h6>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-5 me-5 ms-5">
          <ApartmentServices />
          {/* {Info?.service.map((service?) => (
            <ApartmentServices service={service} />
          ))} */}
				</div>
				<div>
					<ContactForm/>
				</div>
      </div>
    </>
  );
};

export default ApartmentDetailCard;
