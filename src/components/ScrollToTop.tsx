import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  const scrollToTop = useCallback(() => {
    const scrollOptions = {
      top: 0,
      behavior: "instant" as ScrollBehavior,
    };

    requestAnimationFrame(() => {
      window.scrollTo(scrollOptions);
    });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(scrollToTop, 100);
    return () => clearTimeout(timeoutId);
  }, [pathname, scrollToTop]);

  return null;
};

export default ScrollToTop;
