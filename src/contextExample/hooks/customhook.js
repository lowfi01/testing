import React, {useEffect, useState} from 'react';


// CUSTOM HOOKS
// - Setup state to track x and y position (useState)
// - Setup event to listen for mouse movement (document.listen)
// - Remove event listen if unmounted  (useEffect)

const useMousePosition = () => {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      })
    }
    console.log("useMousePoistion");
    document.addEventListener('mousemove', handleMouseMove); // mount move

    // unmount event
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return position;
}


export { useMousePosition as default }