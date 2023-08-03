import React, { useState, useEffect } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const data = [
    "https://www.koovs.com/cdn/shop/files/ball_banner.jpg?v=1689832780",
    "https://www.koovs.com/cdn/shop/files/kdenim_desktop_2.jpg?v=1689769750",
  ];

  // Array of image URLs specifically for mobile view
  const mobileData = [
    "https://www.koovs.com/cdn/shop/files/Orange-04_c3899619-2fe1-497e-a016-f8c48fe7d653.jpg?v=1687933285&width=823",
    "https://www.koovs.com/cdn/shop/files/k007d-01.jpg?v=1687327092&width=823"

    // Add more URLs for mobile slides as needed
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  // Function to handle automatic sliding
  const autoSlide = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  // Set interval to automatically slide every 5 seconds (you can adjust the interval as needed)
  useEffect(() => {
    const interval = setInterval(autoSlide, 9000); // 5000ms = 5 seconds
    // Clean up the interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  // Function to get the current data based on the screen size (mobile or desktop)
  const getCurrentData = () => {
    // Adjust the breakpoint according to your specific use case
    const breakpoint = 568; // Example: consider screens below 768px width as mobile

    // Check if the screen width is below the breakpoint and return mobileData
    if (windowWidth < breakpoint) {
      return mobileData;
    }

    // Return the default data for desktop view
    return data;
  };

  // Get the current data based on the screen size
  const currentData = getCurrentData();

  // Add event listener for window resize and trigger page reload on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      window.location.reload(); // Reload the page on window resize
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount to avoid memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="slider">
      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {currentData.map((imageUrl, index) => (
          <a key={index} href="/product">
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
              <span className="shop-now-text">Shop Now</span>
          </a>
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;
