import React, { useEffect, useState } from "react";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 60,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // El icono aparece cuando ha sobrepasado los 50px de altura y desapare cuando sobrepasa los 900
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
        if (window.pageYOffset < 1000) {
          setIsVisible(true);
        }
        else {
          setIsVisible(false)
        }
      }
      else {
        setIsVisible(false)
      }

    }

    window.addEventListener("scroll", toggleVisibility);

  }, []);

  return (
    <div className="container-arrow">
      {
        isVisible &&
        <button onClick={scrollToTop} id="btnarrowdown">
          <div className="arrow" ></div>
        </button>
      }

    </div>
  );
}
export default ScrollToTop