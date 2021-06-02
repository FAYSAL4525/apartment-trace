// import React from 'react';
import { useRef } from "react";
import Flippy, { BackSide, FrontSide } from "react-flippy";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import areaIcon from "../../assets/icon/area-icon.png";
import bathIcon from "../../assets/icon/bathrooms-icon.png";
import locatinIcon from "../../assets/icon/location.png";
import bedIcon from "../../assets/icon/rooms-icon.png";
import { addToApartmentDetail } from "../../redux/actions/apartmentAction";
import styles from "./ApartmentInfo.module.css";
import './ApartmentInfo.css'

const ApartmentInfo = ({ apInfo }) => {
  const { id, name, img, area, location, room, bathrooms, details, price } =
    apInfo;
	const ref = useRef();
	const dispatch = useDispatch()
  return (
    <>
      <div className={`col-12 col-md-4 pb-4 ${styles.apartmentInfoContainer}`}>
        <div id={id}>
          <Flippy
            flipOnHover={true} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={ref}
            className={styles.flippyHover}
          >
            <div>
              <div className="border-0">
                <FrontSide className="border-0" animationDuration={1500}>
                  <div className={styles.flippyFontSide}>
                    <div>
                      {" "}
                      <img
                        className={`img-fluid w-100  ${styles.apartmentImg}`}
                        src={img}
                        alt=""
                      />
                    </div>
                    <div className={styles.apartmentCartHeader}>
                      <h4>{name}</h4>
                      <h6>
                        <img src={locatinIcon} alt="" />
                        {location}
                      </h6>
                      <p>{details}</p>
                    </div>
                    <div className="row gx-0 align-items-center p-0">
                      <div className={`col-3 ${styles.apartmentCartFooterBg1}`}>
                        <img src={areaIcon} alt="" /> {area}
                      </div>
                      <div className={`col-3 ${styles.apartmentCartFooterBg1}`}>
                        <img src={bedIcon} alt="" />
                        {room}
                      </div>
                      <div
                        className={`col-3 
										${styles.apartmentCartFooterBg1}`}
                      >
                        <img src={bathIcon} alt="" />
                        {bathrooms}
                      </div>
                      <div
                        className={`col-3  ${styles.apartmentCartFooterBg2}`}
                      >
                        $ {price}
                      </div>
                    </div>
                  </div>
                </FrontSide>
              </div>
              <BackSide animationDuration={1500}>
                <div className={styles.flippyBackSide}>
                  <Link to={`/apartment/${id}`}>
                    <button
                      onClick={() => dispatch(addToApartmentDetail(apInfo))}
                      className={`btn btn-primary ${styles.apartmentBtn}`}
                    >
                      Explore
                    </button>
                  </Link>
                </div>
              </BackSide>
            </div>
          </Flippy>
        </div>
      </div>
    </>
  );
};

export default ApartmentInfo;
