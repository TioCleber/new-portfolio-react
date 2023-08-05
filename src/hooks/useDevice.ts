import { useEffect, useState } from "react";

const useDevice = () => {
  const [device, setDevice] = useState(false);

  const handleDevice = () => {
    if (window.outerWidth < 1024) {
      setDevice(true);
    } else {
      setDevice(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleDevice);

    return () => {
      window.removeEventListener("resize", handleDevice);
    };
  }, []);

  if (window.outerWidth < 1024) {
    return { isMobile: true };
  }

  return { isMobile: device };
};

export default useDevice;
