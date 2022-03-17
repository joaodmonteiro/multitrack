import { useState, useEffect } from 'react'

function getViewportWidth() {
  return window.width;
}

export default function getWindowSize() {
  const [windowSize, setWindowSize] = useState(getViewportWidth());

  useEffect(() => {
    function handleResize() {
      setWindowSize(getViewportWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
