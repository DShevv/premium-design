import { useEffect } from "react";

function useOutsideClick(ref, onClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target?.nodeName !== "BUTTON" &&
        event.target?.parentNode?.nodeName !== "BUTTON" &&
        event.target?.parentNode?.parentNode?.nodeName !== "BUTTON"
      ) {
        onClick();
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
}

export default useOutsideClick;
