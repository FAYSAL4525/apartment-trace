// import React from 'react';
import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { Link } from "react-router-dom";
import areaIcon from "../../assets/icon/area-icon.png";
import bedIcon from "../../assets/icon/rooms-icon.png";
import bathIcon from "../../assets/icon/bathrooms-icon.png";
import locatinIcon from "../../assets/icon/location.png";
// import Flippy, { FrontSide, BackSide } from "react-flippy";
import styles from "./ApartmentInfo.module.css";

const ApartmentInfo = ({ apInfo }) => {
  const { id, name, img, area, location, room, bathrooms, details, price } =
    apInfo;
  console.log(apInfo);
  const ref = useRef();
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
              <FrontSide
                className={styles.flippyFontSide}
                animationDuration={1500}
              >
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
                <div className="row gx-0 align-item-center">
                  <div className={`col-3  ${styles.apartmentCartFooterBg1}`}>
                    <img className="img-fluid " src={areaIcon} alt="" /> {area}
                  </div>
                  <div
                    className={`col-3  align-item-center ${styles.apartmentCartFooterBg1}`}
                  >
                    <img className="img-fluid " src={bedIcon} alt="" />
                    {room}
                  </div>
                  <div
                    className={`col-3 
										${styles.apartmentCartFooterBg1}`}
                  >
                    <img className="img-fluid" src={bathIcon} alt="" />
                    {bathrooms}
                  </div>
                  <div className={`col-3  ${styles.apartmentCartFooterBg2}`}>
                    $ {price}
                  </div>
                </div>
              </FrontSide>
              <BackSide
                className={styles.flippyBackSide}
                animationDuration={1500}
              >
                <button className={`btn btn-primary ${styles.apartmentBtn}`}>
                  <Link to={`/apartment/${id}`}> Explore</Link>
                </button>
              </BackSide>
            </div>
          </Flippy>
        </div>
      </div>
    </>
  );
};

export default ApartmentInfo;
