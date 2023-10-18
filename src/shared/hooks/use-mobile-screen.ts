import { useLayoutEffect, useState } from "react";

export const useMobileScreen = () => {
  const [isMobile, setIsMobile] = useState<number>(0);

  useLayoutEffect(() => {
    if (window) {
      setIsMobile(window.innerWidth);
    }
  }, []);

  const isMobileDevice = isMobile < 1000;

  return isMobileDevice;
};
