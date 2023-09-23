import { useEffect, useRef, useState } from "react";

export const useNearScreen = () => {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef();
  useEffect(() => {
    const controllerObserver = (entries) => {
      const [entry] = entries;
      setVisible(entry.isIntersecting);
    };
    const observer = new IntersectionObserver(controllerObserver, {
      rootMargin: "10px",
    });
    observer.observe(elementRef.current);
  });
  return { visible, elementRef };
};
