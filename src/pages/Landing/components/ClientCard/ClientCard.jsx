import "./ClientCard.scss";
import React from "react";

export default function ({ img }) {
  return (
    <div className="client-details">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" strokeWidth="1.5">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.21255 12.75C9.12943 13.5242 8.9054 14.1421 8.5147 14.6891C7.99181 15.4211 7.11571 16.1036 5.66459 16.8292C5.29411 17.0144 5.14394 17.4649 5.32918 17.8354C5.51442 18.2059 5.96493 18.3561 6.33541 18.1708C7.88429 17.3964 9.00819 16.5789 9.7353 15.5609C10.4761 14.5238 10.75 13.3571 10.75 12V7.5C10.75 6.53351 9.96649 5.75 9 5.75H5C4.03351 5.75 3.25 6.53351 3.25 7.5V11C3.25 11.9665 4.03352 12.75 5 12.75H9.21255Z"
          fill="#000000"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.2125 12.75C19.1294 13.5242 18.9054 14.1421 18.5147 14.6891C17.9918 15.4211 17.1157 16.1036 15.6646 16.8292C15.2941 17.0144 15.1439 17.4649 15.3292 17.8354C15.5144 18.2059 15.9649 18.3561 16.3354 18.1708C17.8843 17.3964 19.0082 16.5789 19.7353 15.5609C20.4761 14.5238 20.75 13.3571 20.75 12V7.5C20.75 6.53352 19.9665 5.75 19 5.75H15C14.0335 5.75 13.25 6.53352 13.25 7.5V11C13.25 11.9665 14.0335 12.75 15 12.75H19.2125Z"
          fill="#000000"
        ></path>
      </svg>
      <p>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
      <div className="author-details">
        <img src={img} alt="" />
        <div>
          <p>Oberon Shaw, MCH</p>
          <small>
            Head of Talent Acquisition,<br></br> North America
          </small>
        </div>
      </div>
    </div>
  );
}
