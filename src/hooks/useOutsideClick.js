import { useState, useEffect, useRef } from "react";

const useOutsideClick = (state) => {
  const [isOpen, setIsOpen] = useState(state);
  const Openref = useRef(null);

  const handleClickOutside = (e) => {
    if (Openref.current && !Openref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { Openref, isOpen, setIsOpen };
};
export default useOutsideClick;
