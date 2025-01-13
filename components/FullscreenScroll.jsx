'use client';

import React, { useState, useEffect } from 'react';

const FullscreenScroll = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheel = (e) => {
    if (isScrolling) return;

    const sensitivityThreshold = 50; // Ignore small scrolls
    const direction = e.deltaY > sensitivityThreshold ? 1 : e.deltaY < -sensitivityThreshold ? -1 : 0;

    if (direction !== 0) {
      const nextSection = currentSection + direction;

      if (nextSection >= 0 && nextSection < sections.length) {
        setIsScrolling(true);
        setCurrentSection(nextSection);
        setTimeout(() => setIsScrolling(false), 1000); // Match transition duration
      }
    }
  };

  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientY);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientY;
    const difference = touchStart - touchEnd;

    if (Math.abs(difference) > 50) {
      const direction = difference > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      if (nextSection >= 0 && nextSection < sections.length) {
        setIsScrolling(true);
        setCurrentSection(nextSection);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    }
    setTouchStart(null);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling]);

  return (
    <div className="relative">
      {/* Scrolling Sections */}
      <div className="h-screen w-full overflow-hidden relative">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`absolute w-full ${
              section.isFooter ? 'h-[30%]' : 'h-screen'
            } transition-transform duration-1000 ease-in-out`}
            style={{
              transform: `translateY(${(index - currentSection) * 100}%)`,
            }}
          >
            <div className="h-full flex items-center justify-center">
              {section.component}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isScrolling) {
                setIsScrolling(true);
                setCurrentSection(index);
                setTimeout(() => setIsScrolling(false), 1000);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index ? 'bg-black scale-125' : 'bg-black/50'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullscreenScroll;
