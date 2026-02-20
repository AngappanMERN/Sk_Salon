import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import heroImage from "../../assets/hero_image.png";
import heroImg2 from "../../assets/hero_img2.png";
import heroImg3 from "../../assets/hero_img3.png";
import heroImg4 from "../../assets/hero_img4.png";
import heroBg from "../../assets/Hero_backgrount_img.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="min-h-[85vh] xl:min-h-screen h-auto xl:h-[calc(100vh-15px)] bg-[#f5f1ed] flex items-center overflow-hidden">
      <div className="grid xl:grid-cols-2 grid-cols-1 w-full h-full">

        {/* LEFT SIDE */}
        <div className="relative flex flex-col justify-center items-start text-left px-6 xl:px-20 py-16 md:py-32 xl:py-0 space-y-6 xl:space-y-12 overflow-hidden">
          {/* Background Image (Light/Faint) */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroBg}
              alt="Decorative Background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl">

            {/* Welcome */}
            <h2 className="text-[#c79a5b] text-5xl md:text-6xl welcome-text mb-4">
              Welcome
            </h2>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-semibold text-black leading-tight">
              Beauty Salon <br />
              Fashion for <br />
              Women
            </h1>

            {/* Contact Section */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 pt-8 sm:pt-12 justify-start items-start">

              {/* Call */}
              <div className="flex items-center gap-6">
                <div className="hero-icon-wrapper">
                  <div className="hero-icon-box">
                    <FaPhoneAlt className="text-xl" style={{ transform: 'scaleX(-1)' }} />
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-xl font-serif text-[#c79a5b]">Call Us</p>
                  <p className="text-lg font-medium text-black">
                    +91 9876543210
                  </p>
                </div>
              </div>

              {/* Mail */}
              <div className="flex items-center gap-6">
                <div className="hero-icon-wrapper">
                  <div className="hero-icon-box">
                    <FaEnvelope className="text-xl" />
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-xl font-serif text-[#c79a5b]">Mail Us</p>
                  <p className="text-lg font-medium text-black">
                    info@domain.com
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* RIGHT SIDE: Auto slider with right-side thumbnails */}
        <div className="relative h-[40vh] xl:h-full overflow-hidden">
          <div className="w-full h-full relative">
            <SliderController />
          </div>
        </div>

      </div>
    </section>
  );
}

function SliderController() {
  const images = [
    { src: heroImage, alt: "Beauty Salon 1" },
    { src: heroImg2, alt: "Beauty Salon 2" },
    { src: heroImg3, alt: "Beauty Salon 3" },
    { src: heroImg4, alt: "Beauty Salon 4" },
  ];

  // Clone first and last images for seamless infinite loop
  const displayImages = [images[images.length - 1], ...images, images[0]];
  const [active, setActive] = useState(1); // Start at index 1 because index 0 is the clone of the last image
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // 3 seconds auto slide
    const id = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(id);
  }, [isTransitioning]); // Re-bind interval when state changes to avoid overriding ongoing transitions

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActive((s) => s + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActive((s) => s - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (active === 0) {
      // Reached the clone of the last image, instantly jump to the actual last image
      setActive(images.length);
    } else if (active === displayImages.length - 1) {
      // Reached the clone of the first image, instantly jump to the actual first image
      setActive(1);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Images track for slide animation */}
      <div
        className={`w-full h-full flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${active * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {displayImages.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover shrink-0"
          />
        ))}
      </div>

      {/* Navigation Buttons (Bottom Right) */}
      <div className="absolute bottom-0 right-0 flex gap-[3px] z-20">
        <button
          onClick={prevSlide}
          className="bg-[#cb9e5e] text-[#1a1a1a] w-16 h-14 xl:w-[80px] xl:h-[65px] flex items-center justify-center hover:bg-[#b0854c] transition-colors"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 xl:w-8 xl:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#c29555] text-[#1a1a1a] w-16 h-14 xl:w-[80px] xl:h-[65px] flex items-center justify-center hover:bg-[#b0854c] transition-colors"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 xl:w-8 xl:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Hero;
