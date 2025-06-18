import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    setIsClient(true);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return { isMobile, isClient };
};
