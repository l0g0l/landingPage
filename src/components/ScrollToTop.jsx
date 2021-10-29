import React, { useEffect, useState } from "react";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 440 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 0 ) {
        setIsVisible(true);
      }
     else {
      setIsVisible(false)
    }
    console.log(isVisible)
   
   
  }

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //scroll-to-top classes: fixed, bottom:0, right:0
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