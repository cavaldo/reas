import { useEffect, useState } from "react";

export function useMobileView() {
  const [mobileView, setMobileView] = useState(true);

  const mobileBreakpoint = 700;

  const isMobileView = () => {
    
    console.log(window.innerWidth)
    if(window.innerWidth < mobileBreakpoint){
        return true;
    }
        
    return false;
  }

  useEffect(() => {
    const handleResize = () => {
      setMobileView(isMobileView());
    };

    window.addEventListener("resize", handleResize);
    setMobileView(isMobileView());

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return mobileView;
}
