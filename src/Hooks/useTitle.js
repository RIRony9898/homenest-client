import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - HomeNest`;
  }, [title]);
};

export default useTitle;
