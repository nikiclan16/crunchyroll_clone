import React from "react";
import styles from "../../styles/offer.module.css";
export const  CardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-play-card ${styles['icons-size-section-1']}`}
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="#fff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
      <path d="M8 6h.01" />
      <path d="M16 18h.01" />
      <path d="M12 16l-3 -4l3 -4l3 4z" />
    </svg>
  );
}
