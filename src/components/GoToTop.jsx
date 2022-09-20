import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
// import styled from "styled-components";
import "./top.css";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 250;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <section>
      {isVisible && (
        <div className="top-btn" onClick={goToButton}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </section>
  );
};

// const Wrapper = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .top-btn {
//     font-size: 2.4rem;
//     width: 6rem;
//     height: 6rem;
//     color: #fff;
//     background-color: ${({ theme }) => theme.colors.btn};
//     box-shadow: ${({ theme }) => theme.colors.shadow};
//     border-radius: 50%;
//     position: fixed;
//     bottom: 5rem;
//     right: 5rem;
//     z-index: 999;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//     transition: 0.5s linear;

//     &--icon {
//       animation: gototop 1.9s linear infinite alternate-reverse;
//     }
//   }

//   @keyframes gototop {
//     0% {
//       transform: translateY(-0.3rem);
//     }
//     100% {
//       transform: translateY(0.6rem);
//     }
//   }
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .top-btn {
//       left: 40%;
//       right: 0;
//     }
//   }
// `;
export default GoToTop;
