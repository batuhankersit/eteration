import { RefObject, useEffect, useState } from "react";

const useOnScreen = (ref: RefObject<any>, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );

    if (observer && ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (observer && ref?.current) {
        try {
          observer.unobserve(ref.current);
        } catch (e) {}
      }
    };
  }, []);

  return isIntersecting;
};

export default useOnScreen;
